/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog-admin.n8ndevelopers.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.n8ndevelopers.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blogs/sitemap.xml',
        destination: 'https://blog.n8ndevelopers.com/sitemap.xml',
      },
    ];
  },
}

export default nextConfig
