import '../styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
// import { DefaultSeo } from 'next-seo';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>shwarma - denver kebab rock band</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <DefaultSeo
        title="shwarma - Denver Kebab Rock Band"
        description="shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado."
        openGraph={{
          url: "https://www.shwarma.band",
          title: "shwarma - Denver Kebab Rock Band",
          description:
            "shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.",
          images: [
            {
              url: "/images/shwarma-band-collage.jpg",
              alt: "shwarma live",
            },
          ],
        }}
        twitter={{
          handle: "@shwarmaband",
          site: "@shwarmaband",
          cardType: "summary_large_image",
        }}
      /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
