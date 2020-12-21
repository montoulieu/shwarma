import Head from 'next/head';
import HomeNav from '@components/HomeNav';
import SocialLinks from '@components/SocialLinks';

export default function Home() {
  return (
    <div className=" h-full">
      <Head>
        <title>shwarma</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="h-screen flex items-center justify-center">
        {/* <HomeNav /> */}
        <SocialLinks />
      </main>
    </div>
  );
}
