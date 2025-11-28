/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: [
      'blog-admin.n8ndevelopers.com',
      'blog.n8ndevelopers.com',
      'images.unsplash.com',
      'secure.gravatar.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.n8ndevelopers.com',
        pathname: '/wp-content/uploads/**',
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
