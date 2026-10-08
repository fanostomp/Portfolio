import type { MetadataRoute } from 'next';
import { featuredProjects } from '@/data/portfolio';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://fanostomp.com', priority: 1 }, ...featuredProjects.map(({ slug }) => ({ url: `https://fanostomp.com/work/${slug}`, priority: 0.8 }))];
}
