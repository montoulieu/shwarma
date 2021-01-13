function LoveworthyPreview() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-white p-3">
      <h1 className="font-bubblegum font-black text-purple-200 text-5xl mb-3">Loveworthy Live EP Preview</h1>
      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="loveworthy-live-ep-bandcamp-preview"
        src="https://bandcamp.com/EmbeddedPlayer/album=1218904325/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=1427899762,3471284504,3521488986/esig=1bba86edb3e183a905219e3ef2db0cdd/"
        className="mx-auto"
        seamless
      >
        <a href="https://music.shwarma.band/album/loveworthy-live-ep">Loveworthy Live EP by shwarma</a>
      </iframe>
    </div>
  );
}

export default LoveworthyPreview;
