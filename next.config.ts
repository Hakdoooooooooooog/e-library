import type { NextConfig } from "next";

// import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);

export default nextConfig;
