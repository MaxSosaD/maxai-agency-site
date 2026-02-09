import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    // Keep CI/Vercel builds unblocked; we can re-enable once ESLint config is finalized.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
