import pages from '../data/seo.json';

export const siteUrl = 'https://www.matheusdemeis.com';
export function pageMetadata(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const page = pages[path as keyof typeof pages];
  return { ...(page ?? { title: 'Page not found | Matheus Demeis', description: 'This page could not be found. Explore the portfolio of Matheus Demeis.', image: pages['/'].image, imageAlt: pages['/'].imageAlt }), canonical: page ? siteUrl + path : null, robots: page ? 'index,follow' : 'noindex,follow' };
}

export function updateMetadata(pathname: string) {
  const page = pageMetadata(pathname);
  document.title = page.title;
  const tags = { description: page.description, robots: page.robots, 'og:title': page.title, 'og:description': page.description, 'og:image': siteUrl + page.image, 'og:image:alt': page.imageAlt, 'og:url': page.canonical ?? siteUrl + pathname, 'twitter:title': page.title, 'twitter:description': page.description, 'twitter:image': siteUrl + page.image, 'twitter:image:alt': page.imageAlt };
  for (const [name, content] of Object.entries(tags)) {
    const attr = name.startsWith('og:') ? 'property' : 'name';
    const element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`) ?? document.createElement('meta');
    element.setAttribute(attr, name);
    element.content = content;
    if (!element.parentNode) document.head.append(element);
  }
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (page.canonical) {
    const link = canonical ?? document.createElement('link');
    link.rel = 'canonical'; link.href = page.canonical;
    if (!link.parentNode) document.head.append(link);
  } else canonical?.remove();
}
