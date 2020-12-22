import Head from 'next/head';
import MainHeader from '@components/MainHeader';
import PhotoBio from '@components/PhotoBio';
import SocialLinks from '@components/SocialLinks';
import LatestLivestream from '@components/LatestLivestream';
import MusicReleases from '@components/MusicReleases';
import GalleryPhotos from '@components/GalleryPhotos';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div className="h-full">
      <NextSeo
        title="shwarma - denver psych rock"
        description="shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado."
        openGraph={{
          url: 'https://www.shwarma.band',
          title: 'shwarma - denver psych rock',
          description: 'Open Graph Description',
          images: [
            {
              url: '/images/shred-shwarma-sm.jpg',
              alt: 'shwarma live',
            },
          ],
        }}
        twitter={{
          handle: '@shwarmadelica',
          site: '@shwarmadelica',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <title>shwarma</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="container mx-auto">
        <MainHeader />
        <PhotoBio />
        <SocialLinks />
        <MusicReleases />
        <LatestLivestream />
        <GalleryPhotos />
        <footer className="flex flex-col items-center text-fuchsia-100 pb-5">
          <a
            href="mailto:shwarmaband@gmail.com"
            className="mx-auto mb-2 border border-pink-200 pink-hover hover:bg-pink-200 hover:bg-opacity-10 p-2 rounded-lg"
          >
            Contact
          </a>
          <small>
            shwarma (2017 -
            {' '}
            {new Date().getFullYear()}
            )
          </small>
        </footer>
      </main>
    </div>
  );
}
