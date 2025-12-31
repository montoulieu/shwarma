import Link from "next/link";
import { Button } from "@/components/ui/button";

function LoveworthyLiveEP() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-heading font-black text-blue-400 text-5xl">
        Loveworthy Live EP Preview
      </h1>
      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="loveworthy-live-ep-bandcamp-preview"
        src="https://bandcamp.com/EmbeddedPlayer/album=1218904325/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=1427899762,3471284504,3521488986,2069037788,4158792750/esig=1f6a9b614a2f69c12676028e3de50cea/"
        className="mx-auto my-5"
        seamless
      >
        <a href="https://music.shwarma.band/album/loveworthy-live-ep">
          Loveworthy Live EP by shwarma
        </a>
      </iframe>
      <Button asChild className="font-heading text-xl mx-auto inline-flex" variant="outline" size="lg">
        <Link href="/">Back to the shwarmth</Link>
      </Button>
    </div>
  );
}

export default LoveworthyLiveEP;
