import Image from "next/image";
import Link from "next/link";

function BestCervdShwarm() {
  return (
    <div className="flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-heading font-black heading text-5xl">
        Best Cerv&#39;d Shwarm
      </h1>
      <Image
        src="https://f4.bcbits.com/img/a0604781870_10.jpg"
        width="400"
        height="400"
        className="mx-auto block mb-8"
      />
      <iframe
        className="max-w-md w-full mx-auto block mb-8"
        width="100%"
        height="600"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1824337704%3Fsecret_token%3Ds-smgPCnWsZdy&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false&show_artwork=false"
      ></iframe>
      <Link href="/" className="font-heading text-2xl btn mx-auto inline">
        Back to the shwarmth
      </Link>
    </div>
  );
}

export default BestCervdShwarm;
