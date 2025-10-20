/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'blog-admin.n8ndevelopers.com',
      'images.unsplash.com',
      'secure.gravatar.com'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blogs/sitemap.xml',
        destination: 'https://blog-admin.n8ndevelopers.com/sitemap.xml',
      },
    ];
  },
}

export default nextConfig
