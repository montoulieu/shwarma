import Link from "next/link";

function LoveworthyLiveEP() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-bubblegum font-black text-yellow-400 text-5xl">
        Kebab
      </h1>
      {/* <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="kebab-bandcamp-preview"
        src="https://bandcamp.com/EmbeddedPlayer/album=3667111821/size=large/bgcol=181a1b/linkcol=056cc4/transparent=true/tracklist=true/tracks=3761387873,1233339987,2005690326,2039400135,3444074936,3555189002,3320950993,2839155940,3585083184,1227262305/esig=f141222ffef72830b9116a13ffb95173/"
        className="mx-auto my-5"
        seamless
      >
        <a href="https://music.shwarma.band/album/kebab">Kebab by shwarma</a>
      </iframe> */}
      <iframe className="mx-auto my-5" style={{ border: 0, width: 400, height: 671 }} src="https://bandcamp.com/EmbeddedPlayer/album=3667111821/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=false/transparent=true/" seamless><a href="https://music.shwarma.band/album/kebab">Kebab by shwarma</a></iframe>
      <Link href="/">
        <a className="font-bubblegum text-2xl btn mx-auto inline">
          Back to the shwarmth
        </a>
      </Link>
    </div>
  );
}

export default LoveworthyLiveEP;
