/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: [
      'localhost',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/myblog/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig