/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['cdn.sanity.io', 'source.unsplash.com'],
  },
}

module.exports = nextConfig
