import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'src/styles')],
  },
};

export default nextConfig;
