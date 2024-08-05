import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const nonPoolingUrl = process.env.POSTGRES_URL.replace(":6543", ":5432");

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { 
    url: "postgresql://postgres.lrumehoiqpwikdznkcjn:RgZb8BnZSMp4PpFO@aws-0-us-east-1.pooler.supabase.com:5432/postgres" 
  },
} satisfies Config;


