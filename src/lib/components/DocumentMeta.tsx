import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '~/lib/constants/umami';

const APP_NAME = 'dnachavez.com';

const DocumentMeta = () => {
  return (
    <>
      <link rel="icon" href="/logo.jpg" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS feed for dnachavez's blog posts"
        href="https://dnachavez.com/rss.xml"
      />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#444444" />

      <link rel="manifest" href="/manifest.json" />

      {/* umami self-hosted analytics */}
      <script
        async
        defer
        data-website-id={UMAMI_WEBSITE_ID}
        src={UMAMI_SRC}
        data-domains="dnachavez.com"
      />
    </>
  );
};

export default DocumentMeta;
