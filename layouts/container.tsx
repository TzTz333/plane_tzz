//封装页面的公共结构和元数据（如标题、描述、图标等）
//这个组件利用了 Next.js 的 Head 组件来控制文档头部（<head>）内的内容，
//并通过 props 接收自定义的元数据和页面内容。


import React from "react";
// next
import Head from "next/head";
import { useRouter } from "next/router";
// constants
// SEO 相关的常量
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_USER_NAME,
  SITE_KEYWORDS,
  SITE_TITLE,
} from "constants/seo-variables";

//标题、描述、图片和 URL
type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

//各种属性
type Props = {
  meta?: Meta;
  children: React.ReactNode;
  noPadding?: boolean;
  bg?: "primary" | "secondary";
  noHeader?: boolean;
  breadcrumbs?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
};

//
const Container = ({ meta, children }: Props) => {
  const router = useRouter();
  //使用从 meta prop 或默认值设置页面元数据
  const image = meta?.image || "/site-image.png";
  const title = meta?.title || SITE_TITLE;
  const url = meta?.url || `${SITE_URL}${router.asPath}`;
  const description = meta?.description || SITE_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
        <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest.json" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        {image && (
          <meta
            property="og:image"
            content={image.startsWith("https://") ? image : `${SITE_URL}${image}`}
          />
        )}
      </Head>
      {children}
    </>
  );
};

export default Container;
