import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nike.com",
        port: "",
        // pathname: "/a/images/**",
      },
    ],
  },
};

export default nextConfig;
