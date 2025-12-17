"use client";

import { useEffect, useState } from "react";
import genreSongs from "@/data/genreSongs.json";
import { Button } from "@/components/ui/button";

export default function GenrePicker() {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [lastSong, setLastSong] = useState<number | null>(null);

  function selectRandomSong() {
    let selection;
    do {
      selection = Math.floor(Math.random() * genreSongs.length);
    } while (selection === currentSong && genreSongs.length > 1);

    if (currentSong !== null) {
      setLastSong(currentSong);
    }

    setCurrentSong(selection);
  }

  function selectLastSong() {
    if (lastSong !== null) {
      setCurrentSong(lastSong);
    }
  }

  useEffect(() => {
    selectRandomSong();
  }, []);

  return (
    <div className="h-screen flex flex-col text-white p-3">
      <h1 className="heading font-heading text-center py-3">
        shwarma <br />
        Pick a Genre
      </h1>
      {currentSong !== null && (
        <>
          <h2 className="text-blue-200 text-3xl font-black text-center py-5">
            {genreSongs[currentSong].genre}?
          </h2>
          <h2 className="text-blue-100 text-2xl font-light text-center py-5">
            Try{" "}
            <span className="font-bold">{genreSongs[currentSong].title}</span>
          </h2>
          <iframe
            className="w-full md:w-1/2 mx-auto block my-auto"
            src={`https://bandcamp.com/EmbeddedPlayer/album=${genreSongs[currentSong].album}/size=small/bgcol=212324/linkcol=098af8/track=${genreSongs[currentSong].track}/transparent=true/`}
            title="bandcamp player"
            loading="lazy"
            height="42px"
          />
        </>
      )}
      <div className="mt-auto w-full">
        <div className="grid grid-cols-2 gap-2 w-full md:p-7">
          <Button
            className="p-3 bg-blue-600 rounded-lg uppercase text-lg font-bold h-auto"
            onClick={selectLastSong}
            disabled={currentSong === lastSong || lastSong === null}
            type="button"
          >
            Last Song
          </Button>
          <Button
            className="p-3 bg-blue-600 rounded-lg uppercase text-lg font-bold h-auto"
            onClick={selectRandomSong}
            type="button"
          >
            Next Song
          </Button>
        </div>
      </div>
    </div>
  );
}
