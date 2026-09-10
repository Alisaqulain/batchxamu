import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/alumni", destination: "/", permanent: true },
      { source: "/courses", destination: "/programs", permanent: true },
    ];
  },
};

export default nextConfig;
