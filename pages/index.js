import Head from 'next/head';
import MainHeader from '@components/MainHeader';
import PhotoBio from '@components/PhotoBio';
import SocialLinks from '@components/SocialLinks';
import LatestLivestream from '@components/LatestLivestream';
import MusicReleases from '@components/MusicReleases';
import GalleryPhotos from '@components/GalleryPhotos';

export default function Home() {
  return (
    <div className="h-full">
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
