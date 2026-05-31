import { MetadataRoute } from 'next';
import { getAllMountains } from '@/lib/sansu/recommender';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mountains = await getAllMountains();
  
  const mountainUrls = mountains.map((m) => ({
    url: `https://gaeunsan.vercel.app/sansu/mountain/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://gaeunsan.vercel.app/sansu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://gaeunsan.vercel.app/sansu/form',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gaeunsan.vercel.app/sansu/articles',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://gaeunsan.vercel.app/sansu/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://gaeunsan.vercel.app/sansu/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    ...mountainUrls,
  ];
}
