import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
};