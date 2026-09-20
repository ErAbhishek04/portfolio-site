import { NextRequest, NextResponse } from "next/server";
import { getRedisClient } from "@/util/redis";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const redis = getRedisClient();

  const contentType = req.headers.get("Content-Type");
  if (!contentType || !contentType.includes("application/json")) {
    return new NextResponse("must be json", { status: 400 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new NextResponse("invalid json", { status: 400 });
  }

  const slug = body?.slug;
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  const ip = req.ip ?? req.headers.get("x-forwarded-for");
  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // deduplicate the ip for each slug
    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      return new NextResponse(null, { status: 202 });
    }
  }

  await redis.incr(["pageviews", "projects", slug].join(":"));
  return new NextResponse(null, { status: 202 });
}
