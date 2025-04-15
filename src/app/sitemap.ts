import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.shelleybphotography.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://www.shelleybphotography.com/interior-design',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/real-estate',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/short-term-rental',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/family-portrait',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/engagement-sessions',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/senior-portraits',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    // {
    //   url: "https://www.shelleybphotography.com/micro-wedding",
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 0.9,
    // },
    {
      url: 'https://www.shelleybphotography.com/wall-art',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/website-design-service',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/press',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'https://www.shelleybphotography.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    }
  ]
}
