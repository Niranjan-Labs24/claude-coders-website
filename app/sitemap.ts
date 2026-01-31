import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.n8ndevelopers.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs?page=2`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/join-developer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blogs/mastering-enterprise-governance-a-deep-dive-into-n8ns-new-security-controls`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/why-tech-teams-prefer-to-hire-n8n-developers-over-zapier-or-make-specialists`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/inside-sandeeps-most-impactful-automations`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/n8n-for-technical-teams-vs-no-code-tools-when-should-you-pick-n8n`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/why-you-must-hire-n8n-developers-to-automate-data-workflows`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/how-to-self-host-n8n-with-docker-the-complete-2026-guide`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/comforts-five-go-to-workflows-for-smarter-operations`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/best-platforms-to-hire-n8n-developers-online`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blogs/the-ultimate-guide-to-hiring-n8n-developers-for-your-business`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.64,
    },

    {
      url: `${baseUrl}/blogs/meet-the-automation-girl-how-fortune-ibor-turns-everyday-chaos-into-smart-n8n-systems`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/top-5-workflows-built-by-afolabi-sunday`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/how-to-hire-right-n8n-developers`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/what-to-look-for-when-you-hire-n8n-developers`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/how-to-hire-n8n-developers-for-scalable-automation-solutions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/top-10-reasons-to-hire-expert-n8n-developers-2025`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
    {
      url: `${baseUrl}/blogs/how-to-hire-right-n8n-developer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.51,
    },
  ]
}
