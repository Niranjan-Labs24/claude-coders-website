import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.n8ndevelopers.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: baseUrl + '/pricing',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/blogs',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/join-developer',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },

    {
      url: baseUrl + '/blogs/what-to-look-for-when-you-hire-n8n-developers',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: baseUrl + '/blogs/how-to-hire-n8n-developers-for-scalable-automation-solutions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: baseUrl + '/blogs/top-10-reasons-to-hire-expert-n8n-developers-2025',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: baseUrl + '/blogs/how-to-hire-right-n8n-developer',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: baseUrl + '/blogs/top-5-workflows-built-by-afolabi-sunday',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
  ]
}
