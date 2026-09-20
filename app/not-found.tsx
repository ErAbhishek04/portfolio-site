"use client";

import Link from "next/link";
import { Navigation } from "./components/nav";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-black">
      <Navigation />
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl font-display">
        404
      </h1>
      <p className="mt-4 text-base text-zinc-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
