import Head from 'next/head';
import MainHeader from '@components/MainHeader';
import PhotoBio from '@components/PhotoBio';
import SocialLinks from '@components/SocialLinks';
import LatestLivestream from '@components/LatestLivestream';
import MusicReleases from '@components/MusicReleases';
import GalleryPhotos from '@components/GalleryPhotos';
import { NextSeo } from 'next-seo';
import bandMembersJson from '../json/bandMembers';

export default function Home({ bandMembers, headingFirst, headingSecond }) {
  return (
    <div className="h-full">
      <NextSeo
        title="shwarma - Denver Psych Rock Band"
        description="shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado."
        openGraph={{
          url: 'https://www.shwarma.band',
          title: 'shwarma - Denver Psych Rock Band',
          description: 'shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.',
          images: [
            {
              url: '/images/shred-shwarma-sm.jpg',
              alt: 'shwarma live',
            },
          ],
        }}
        twitter={{
          handle: '@shwarmaband',
          site: '@shwarmaband',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <title>shwarma - denver psych rock band</title>
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>

      <main className="container mx-auto">
        <MainHeader />
        <PhotoBio
          headingFirst={headingFirst}
          headingSecond={headingSecond}
          bandMembers={bandMembers}
        />
        <SocialLinks />
        <MusicReleases />
        <LatestLivestream />
        <GalleryPhotos />
        <footer className="flex flex-col items-center text-yellow-100 pb-5">
          <a
            href="mailto:shwarmaband@gmail.com"
            className="mx-auto mb-6 border border-yellow-200 yellow-hover hover:bg-yellow-200 hover:bg-opacity-10 p-2 rounded-lg"
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

export async function getStaticProps({ params }) {
  return {
    props: {
      headingFirst: 'shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.',
      headingSecond: 'Born out of a desire to play whatever style we feel like trying, and always with an appreciation for the greats that have inspired us.',
      ...bandMembersJson,
    },
  };
}
