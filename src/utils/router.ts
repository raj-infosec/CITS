import { PageView } from '../types';

const pagePaths: Record<PageView, string> = {
  home: '/',
  solutions: '/solutions',
  'solution-detail': '/solutions/cybersecurity',
  products: '/products',
  services: '/services',
  industries: '/industries',
  about: '/about',
  partners: '/partners',
  'case-studies': '/case-studies',
  insights: '/insights',
  careers: '/careers',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
};

export function pathForView(view: PageView, slug?: string): string {
  if (view === 'solution-detail') return `/solutions/${slug || 'cybersecurity'}`;
  return pagePaths[view] || '/';
}

export function routeFromPath(pathname: string): { view: PageView; slug?: string } {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { view: 'home' };
  if (path === '/solutions') return { view: 'solutions' };
  if (path.startsWith('/solutions/')) {
    const slug = decodeURIComponent(path.split('/')[2] || 'cybersecurity');
    return { view: 'solution-detail', slug };
  }

  const routes: Record<string, PageView> = {
    '/products': 'products',
    '/services': 'services',
    '/industries': 'industries',
    '/about': 'about',
    '/partners': 'partners',
    '/case-studies': 'case-studies',
    '/insights': 'insights',
    '/careers': 'careers',
    '/contact': 'contact',
    '/privacy': 'privacy',
    '/terms': 'terms',
  };

  return { view: routes[path] || 'home' };
}

export function navigateTo(path: string, replace = false) {
  if (window.location.pathname === path && !window.location.search) return;
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
