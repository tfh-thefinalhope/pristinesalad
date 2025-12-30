import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ REQUIRED for frontend-only hosting

  images: {
    unoptimized: true, // ✅ REQUIRED for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "saladocafe.com",
      },
    ],
  },
};

export default nextConfig;

