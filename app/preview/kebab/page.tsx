import Link from "next/link";
import { Button } from "@/components/ui/button";

function Kebab() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-heading font-black heading text-5xl">Kebab</h1>
      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="kebab-bandcamp-preview"
        src="https://bandcamp.com/EmbeddedPlayer/album=3667111821/size=large/bgcol=181a1b/linkcol=056cc4/transparent=true/tracklist=true/tracks=3761387873,1233339987,2005690326,2039400135,3444074936,3555189002,3320950993,2839155940,3585083184,1227262305/esig=f141222ffef72830b9116a13ffb95173/"
        className="mx-auto my-5"
        seamless
      >
        <a href="https://music.shwarma.band/album/kebab">Kebab by shwarma</a>
      </iframe>
      <Button asChild className="font-heading text-xl mx-auto inline-flex" variant="outline" size="lg">
        <Link href="/">Back to the shwarmth</Link>
      </Button>
    </div>
  );
}

export default Kebab;
