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
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  async redirects() {
    return [
      { source: "/alumni", destination: "/", permanent: true },
      { source: "/courses", destination: "/programs", permanent: true },
      // Merged into other posts.
      { source: "/blog/building-better-student-experience", destination: "/blog", permanent: true },
      { source: "/blog/future-of-digital-university-platforms", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
