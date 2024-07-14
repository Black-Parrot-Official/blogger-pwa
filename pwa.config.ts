import type { Config } from './types';

export default {
  version: '1.1.2',
  id: '/',
  name: 'TechPUB',
  shortName: 'TechPUB',
  description: 'Welcome to Tech Pub, your premier destination for all things tech! Whether you are a gadget enthusiast, a gaming aficionado, or someone who loves staying updated with the latest technology trends, we have something for you. ',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Trending',
      shortName: 'Trending',
      description: 'Discover whats buzzing! Check out the hottest topics and articles trending now.',
      url: '/search/label/Trending?utm_source=homescreen',
    },
    {
      name: 'Games',
      shortName: 'Games',
      description: 'Get the latest news on free games and updates!',
      url: '/search/label/Games?utm_source=homescreen',
    },
    {
      name: 'Reviews',
      shortName: 'Reviews',
      description: 'Unbiased reviews of the latest tech gadgets and games!',
      url: '/search/label/Reviews?utm_source=homescreen',
    },
    {
      name: 'Free URL Shortener',
      shortName: 'URL Shortener',
      description: 'Shorten URLs for free. Easy, fast, and reliable.',
      url: '/p/free-url-shortener.html?utm_source=homescreen',
    },
    {
      name: 'QR Generator',
      shortName: 'QR Generator',
      description: 'Generate free QR codes instantly. Customize and download for any purpose.',
      url: '/p/free-qr-code-generator.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: 'fb5648b3-ac56-4549-8fc2-15f035b9fdc7',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.parrotocommunity.eu.org/',
} satisfies Config;
