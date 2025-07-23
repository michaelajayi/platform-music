import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // optimizeCss: true,
    turbo: {
      rules: {
        '*.mp4': {
          loaders: ['file-loader'],
        }
      }
    }
  }
};

export default nextConfig;