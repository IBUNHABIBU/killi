import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'src/styles')],
    prependData: `@import "variables";`, // Global Sass vars
  },
};

export default nextConfig;
