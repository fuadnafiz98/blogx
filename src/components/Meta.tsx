import { Router, withRouter } from "next/router";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keywords: string;
  router: Router;
  image: string;
  date: string;
  children: any;
}

const Meta = ({ children, date, image, router, keywords, title = "Next.js Starter", description }: Props) => {
  const domain = "https://fuadnafiz98-nextjs-starter.vercel.app";
  const url = router?.asPath ? router.asPath : undefined;
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <meta name="msapplication-TileColor" content="#fef2f2" />
        <meta name="theme-color" content="#fef2f2" />
        <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
        <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />

        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={date} property="article:published_time" />
          </>
        )}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@fuadnafiz98" name="twitter:site" />
        <meta content="@fuadnafiz98" name="twitter:creator" />
      </Head>
      {children}
    </>
  );
};

export default withRouter(Meta);
