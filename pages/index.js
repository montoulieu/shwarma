import Head from 'next/head';
import MainHeader from '@components/MainHeader';
import PhotoBio from '@components/PhotoBio';
import SocialLinks from '@components/SocialLinks';
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
        <SocialLinks />
        <PhotoBio />
        <MusicReleases />
        <GalleryPhotos />
      </main>
    </div>
  );
}
