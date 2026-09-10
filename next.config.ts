import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep dev output separate so `next build` can't clobber a running dev server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
