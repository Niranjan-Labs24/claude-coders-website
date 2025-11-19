/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: [
      'mintcream-goldfish-996398.hostingersite.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mintcream-goldfish-996398.hostingersite.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig;
