/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Next does not mis-detect it from a parent lockfile.
  turbopack: {
    root: __dirname
  }
};

module.exports = nextConfig;
