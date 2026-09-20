import { Redis } from "@upstash/redis";

// MOCKED in-memory store for environments without Upstash credentials
const memoryStore = new Map<string, any>();

class MockRedis {
  async get<T = any>(key: string): Promise<T | null> {
    const val = memoryStore.get(key);
    return (val !== undefined ? val : null) as T | null;
  }

  async mget<TData extends unknown[] = any[]>(...args: string[] | [string[]]): Promise<TData> {
    const keys = (Array.isArray(args[0]) ? args[0] : args) as string[];
    return keys.map((key) => {
      const val = memoryStore.get(key);
      return val !== undefined ? val : null;
    }) as unknown as TData;
  }

  async set(
    key: string,
    value: any,
    options?: { nx?: boolean; ex?: number }
  ): Promise<string | boolean | null> {
    if (options?.nx && memoryStore.has(key)) {
      return null;
    }
    memoryStore.set(key, value);
    return "OK";
  }

  async del(key: string): Promise<number> {
    return memoryStore.delete(key) ? 1 : 0;
  }

  async incr(key: string): Promise<number> {
    const current = (memoryStore.get(key) || 0) as number;
    const next = current + 1;
    memoryStore.set(key, next);
    return next;
  }
}

export interface AppRedisClient {
  get: <T = any>(key: string) => Promise<T | null>;
  mget: <TData extends unknown[]>(...args: string[] | [string[]]) => Promise<TData>;
  set: (
    key: string,
    value: any,
    options?: { nx?: boolean; ex?: number }
  ) => Promise<any>;
  del: (key: string) => Promise<number>;
  incr: (key: string) => Promise<number>;
}

export function getRedisClient(): AppRedisClient {
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    try {
      return Redis.fromEnv() as unknown as AppRedisClient;
    } catch {
      return new MockRedis();
    }
  }
  return new MockRedis();
}

