import { useEffect, useState } from "react";
import genreSongs from "../data/genreSongs";

export default function GenrePicker() {
  const [currentSong, setCurrentSong] = useState(null);
  const [lastSong, setLastSong] = useState(null);

  function selectRandomSong() {
    if (currentSong) {
      setLastSong(currentSong);
    }
    const selection = Math.floor(Math.random() * Math.floor(genreSongs.length));
    if (currentSong === selection) {
      selectRandomSong();
    } else {
      setCurrentSong(selection);
    }
  }

  function selectLastSong() {
    if (lastSong && currentSong !== lastSong) {
      setCurrentSong(lastSong);
    }
  }

  function setViewHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setViewHeight();
    selectRandomSong();
    window.addEventListener("resize", () => {
      setViewHeight();
    });
  }, []);

  return (
    <div className="h-screen flex flex-col text-white p-3">
      <h1 className="heading font-heading text-center py-3">
        shwarma <br />
        Pick a Genre
      </h1>
      {currentSong !== null && (
        <h2 className="text-blue-200 text-3xl font-black text-center py-10">
          {genreSongs[currentSong].genre}?
        </h2>
      )}
      {currentSong !== null && (
        <h2 className="text-blue-100 text-2xl font-light text-center py-10">
          Try <span className="font-bold">{genreSongs[currentSong].title}</span>
        </h2>
      )}
      {currentSong !== null && (
        <iframe
          className="w-full md:w-1/2 mx-auto block my-auto"
          src={`https://bandcamp.com/EmbeddedPlayer/album=${genreSongs[currentSong].album}/size=small/bgcol=212324/linkcol=098af8/track=${genreSongs[currentSong].track}/transparent=true/`}
          seamless
          title="bandcamp player"
          loading="lazy"
          height="42"
        />
      )}
      <div className="mt-auto w-full">
        <div className="grid grid-cols-2 gap-2 w-full md:p-7">
          <button
            className="p-3 border-1 bg-blue-600 rounded-lg uppercase text-lg font-bold"
            onClick={() => selectLastSong()}
            disabled={currentSong === lastSong}
            type="button"
          >
            Last Song
          </button>
          <button
            className="p-3 border-1 bg-blue-600 rounded-lg uppercase text-lg font-bold"
            onClick={() => selectRandomSong()}
            type="button"
          >
            Next Song
          </button>
        </div>
      </div>
    </div>
  );
}
