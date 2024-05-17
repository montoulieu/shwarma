import Link from "next/link";

function BestCervdShwarm() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-heading font-black heading text-5xl">
        Best Cerv&#39;d Shwarm
      </h1>
      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="best-cervd-shwarm-bandcamp-preview"
        // src="https://bandcamp.com/EmbeddedPlayer/album=3667111821/size=large/bgcol=181a1b/linkcol=056cc4/transparent=true/tracklist=true/tracks=3761387873,1233339987,2005690326,2039400135,3444074936,3555189002,3320950993,2839155940,3585083184,1227262305/esig=f141222ffef72830b9116a13ffb95173/"
        src="https://bandcamp.com/EmbeddedPlayer/album=255999805/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=2522972468,3599368569,1963363111,1016601004,3128043940,1129636441,2064965087,4168599141,1890657596,2176739429,381528454,936660551,3331139437,1823131244/esig=7c6b6571b6441c489f07de9a895f4a7d/"
        className="mx-auto my-5"
        seamless
      >
        <a href="https://music.shwarma.band/album/best-cervd-shwarm">
          Best Cerv&#39;d Shwarm by shwarma
        </a>
      </iframe>
      <Link href="/" className="font-heading text-2xl btn mx-auto inline">
        Back to the shwarmth
      </Link>
    </div>
  );
}

export default BestCervdShwarm;
