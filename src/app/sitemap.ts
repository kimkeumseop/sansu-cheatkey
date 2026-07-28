import { MetadataRoute } from 'next';
import { getAllMountains } from '@/lib/sansu/recommender';
import { SITE_URL } from '@/lib/sansu/site';
import { ARTICLES } from '@/lib/sansu/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mountains = await getAllMountains();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = (
    [
      { path: '/sansu', changeFrequency: 'daily', priority: 1 },
      { path: '/sansu/form', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/sansu/articles', changeFrequency: 'weekly', priority: 0.8 },
      { path: '/sansu/about', changeFrequency: 'yearly', priority: 0.5 },
      { path: '/sansu/contact', changeFrequency: 'yearly', priority: 0.3 },
      { path: '/sansu/privacy', changeFrequency: 'yearly', priority: 0.3 },
      { path: '/sansu/terms', changeFrequency: 'yearly', priority: 0.3 },
    ] as const
  ).map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/sansu/articles/${a.slug}`,
    lastModified: new Date(a.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const mountainPages: MetadataRoute.Sitemap = mountains.map((m) => ({
    url: `${SITE_URL}/sansu/mountain/${m.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...mountainPages];
}
