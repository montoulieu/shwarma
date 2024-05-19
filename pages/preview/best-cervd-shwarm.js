import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

function BestCervdShwarm() {
  return (
    <div className="max-w-md mx-auto flex flex-col content-center justify-center text-center px-3 py-4">
      <NextSeo
        title="Best Cerv'd Shwarm - Album Preview"
        description="Best Cerv'd Shwarm is a live album compilation drawing from 3 shows performed at Cervantes last year."
        openGraph={{
          type: "music.album",
          images: [
            {
              url: "https://www.shwarma.band/images/album/best-cervd-shwarm-md-compress.jpg",
            },
          ],
        }}
      />

      <header className="mb-4">
        <h1 className="text-brand font-bold text-3xl tracking-wider uppercase">
          Best Cerv&#39;d Shwarm
        </h1>
        <h2 className="text-brand text-xl">Album Preview</h2>
      </header>

      <Image
        src="/images/album/best-cervd-shwarm-md-compress.jpg"
        width="400"
        height="400"
        className="mx-auto block mb-8"
        alt="Best Cerv'd Shwarm album cover"
      />

      <div className="text-brand text-sm mb-6">
        <p>
          Best Cerv&#39;d Shwarm is a live album compilation drawing from 3
          shows performed at Cervantes last year. The album features tracks from
          their February 18th debut at a sold out Ballroom side supporting
          Lespecial, as well as a headliner show at the Otherside, and a dual
          venue show joining Tauk, Dopapod and Doom Flamingo.{" "}
        </p>
        <p>
          shwarma is preparing to play their second headliner show at the
          Otherside on Friday June 21st with support from their friends in Cloud
          Catcher and Kaepora. It&#39;s gonna be kick-ass, so come on out!
        </p>
      </div>

      <iframe
        className="w-full mx-auto block mb-8"
        width="100%"
        height="600"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1825280661%3Fsecret_token%3Ds-mlL0xWQrrSg&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false&show_artwork=false"
      />

      <Link href="/" className="font-heading text-2xl btn mx-auto inline">
        Back to the shwarmth
      </Link>
    </div>
  );
}

export default BestCervdShwarm;
