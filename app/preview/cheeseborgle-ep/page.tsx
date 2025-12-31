import Link from "next/link";
import { Button } from "@/components/ui/button";

function CheeseborgleEP() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-heading font-black heading text-5xl">
        Cheeseborgle EP
      </h1>

      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        src="https://bandcamp.com/EmbeddedPlayer/album=703452784/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=4125043702,2207719537,1769592042,3256241529/esig=d39747f08f572d8d01cbf555b1f9a5a1/"
        seamless
        className="mx-auto my-5"
        title="cheeseborgle-bandcamp"
      ></iframe>

      <Button asChild className="font-heading text-xl mx-auto inline-flex" variant="outline" size="lg">
        <Link href="/">Back to the shwarmth</Link>
      </Button>
    </div>
  );
}

export default CheeseborgleEP;
