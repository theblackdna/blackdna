import type { DefaultSeoProps } from 'next-seo';

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: 'Dan Chavez - Full Stack Developer',
  titleTemplate: '%s | dnachavez',
  defaultTitle: 'dnachavez | Dan Chavez - Full Stack Developer',
  description: "Dan Chavez's Dev Site | dnachavez",
  canonical: 'https://dnachavez.com',
  openGraph: {
    url: 'https://dnachavez.com',
    title: 'dnachavez | Digital Crafter',
    description: "Dan Chavez's Dev Site",
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=dnachavez&text=https://dnachavez.com',
        alt: 'dnachavez.com og-image',
      },
    ],
    site_name: 'dnachavez',
  },
  twitter: {
    handle: '@dnachavez',
    cardType: 'summary_large_image',
  },
};
