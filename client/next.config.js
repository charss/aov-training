/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL_API: process.env.LOCAL_API
  }
}

module.exports = nextConfig
