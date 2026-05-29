import { MetadataRoute } from 'next';
import { getAllMountains } from '@/lib/sansu/recommender';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mountains = await getAllMountains();
  
  const mountainUrls = mountains.map((m) => ({
    url: `https://sansu-cheatkey.vercel.app/sansu/mountain/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://sansu-cheatkey.vercel.app/sansu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://sansu-cheatkey.vercel.app/sansu/form',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...mountainUrls,
  ];
}
