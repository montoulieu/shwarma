import { useEffect, useState } from 'react';
import genreSongs from '../json/genreSongs';

export default function genrePicker() {
  const [currentSong, setCurrentSong] = useState(null);
  const [lastSong, setLastSong] = useState(null);

  useEffect(() => {
    selectRandomSong();
  }, []);

  function selectRandomSong() {
    console.log(genreSongs.length);
    if (currentSong) {
      setLastSong(currentSong);
    }
    const selection = Math.floor(Math.random() * Math.floor(genreSongs.length));
    console.log(selection);
    setCurrentSong(selection);
  }

  function selectLastSong() {
    if (lastSong) {
      setCurrentSong(lastSong);
    }
  }

  return (
    <div className="h-screen flex flex-col text-white ">
      <h1 className="heading font-bubblegum text-center py-3">
        shwarma
        {' '}
        <br />
        Genre Predictor
      </h1>
      {currentSong !== null
        && <h2 className="text-fuchsia-200 text-4xl font-black text-center py-20">{genreSongs[currentSong].genre}</h2>}
      {currentSong !== null
        && <h2 className="text-fuchsia-100 text-4xl font-light text-center py-20">{genreSongs[currentSong].title}</h2>}
      <div className="mt-auto w-full">
        {currentSong !== null
          && (
          <iframe
            className="w-full"
            src={`https://bandcamp.com/EmbeddedPlayer/album=${genreSongs[currentSong].album}/size=small/bgcol=212324/linkcol=098af8/track=${genreSongs[currentSong].track}/transparent=true/`}
            seamless
            title="bandcamp player"
            height="50px"
          />
          )}
        <div className="grid grid-cols-2 gap-2 w-full p-2">
          <button
            className="p-3 border-1 bg-purple-600 rounded-lg"
            onClick={() => selectLastSong()}
          >
            Last
          </button>
          <button
            className="p-3 border-1 bg-purple-600 rounded-lg"
            onClick={() => selectRandomSong()}
          >
            Next
          </button>
        </div>

      </div>

    </div>
  );
}
