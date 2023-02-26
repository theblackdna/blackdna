import { ArticleJsonLd, NextSeo } from 'next-seo';

import type { Blog } from 'contentlayer/generated';
import { baseUrl } from '~/lib/constants/baseUrl';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

type BlogPostMetaProps = {
  postData: Blog;
};

const BlogPostMeta = ({ postData }: BlogPostMetaProps) => {
  const ogImage = sznmOgImage({
    heading: postData.title,
    text: 'Blog Post | https://dnachavez.com',
  });
  const pageUrl = `${baseUrl}/blog/${postData.id}`;

  return (
    <>
      <NextSeo
        title={postData.title}
        canonical={pageUrl}
        openGraph={{
          title: `${postData.title} | dnachavez`,
          url: pageUrl,
          images: [
            {
              url: ogImage,
              alt: `${postData.title} og-image`,
            },
          ],
        }}
      />

      <ArticleJsonLd
        type="Blog"
        url={`${baseUrl}/blog/${postData.id}`}
        title={`${postData.title} | dnachavez`}
        images={[]}
        datePublished={new Date(postData.date).toISOString()}
        dateModified={new Date(postData.date).toISOString()}
        authorName="Dan Chavez"
        description={`A blog post by Dan Chavez explaining about ${postData.title}`}
      />
    </>
  );
};

export default BlogPostMeta;
