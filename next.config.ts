import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist", // Output build artifacts to 'dist' folder

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

