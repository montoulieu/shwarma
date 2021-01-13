function LoveworthyPreview() {
  return (
    <div className="h-screen flex flex-col text-white p-3">
      <iframe
        style={{ border: 0, width: 400, height: 671 }}
        title="loveworthy-live-ep-bandcamp-preview"
        src="https://bandcamp.com/EmbeddedPlayer/album=1218904325/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=1427899762,3471284504,3521488986/esig=1bba86edb3e183a905219e3ef2db0cdd/"
        seamless
      >
        <a href="https://music.shwarma.band/album/loveworthy-live-ep">Loveworthy Live EP by shwarma</a>
      </iframe>
    </div>
  );
}

export default LoveworthyPreview;
