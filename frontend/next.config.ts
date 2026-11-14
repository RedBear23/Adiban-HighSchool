
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.101"],

  images: {
    dangerouslyAllowLocalIP: true,

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
