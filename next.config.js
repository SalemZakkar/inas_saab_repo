const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  // Choose output mode based on env variables
  output:
    process.env.BUILD_STANDALONE === "true"
      ? "standalone"
      : process.env.STATIC_EXPORT === "true"
      ? "export"
      : undefined,

  reactStrictMode: true,

  pageExtensions: ["ts", "tsx", "js"],

  eslint: {
    dirs: ["src"],
  },

  images: {
    domains: ["flagcdn.com"], // no https://
  },

  webpack: (config) => {
    // Handle SVGs with SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    // Polyfill Node.js modules that are not available in browser
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = nextConfig;