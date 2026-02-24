import type { MetadataRoute } from 'next'
import { contentfulService } from '@/lib/contentful'

const baseUrl = 'https://www.n8ndevelopers.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all published blog posts from Contentful
  const { posts } = await contentfulService.getAllPosts(1, 100)

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join-developer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]

  // Dynamic blog post pages — auto-generated from Contentful
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.fields.slug}`,
    lastModified: new Date(post.fields.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
