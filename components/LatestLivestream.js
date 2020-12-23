import { useEffect } from 'react';

function LatestLivestream() {
  useEffect(() => {
    const deferredVideo = document.getElementsByTagName('iframe')[0];
    setTimeout(() => {
      deferredVideo.setAttribute('src', deferredVideo.getAttribute('data-src'));
    }, 2000);
  }, []);
  return (
    <div className="py-10 px-3 md:px-0">
      <h2 className="heading font-bubblegum mb-5">Latest Livestream</h2>
      <div className="md:flex items-center">
        <iframe
          width="560"
          height="315"
          data-src="https://www.youtube.com/embed/Ajtn2VI3Fug"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest Livestream"
          className="w-full md:w-1/2 h-52 md:h-96 mb-5 md:mb-0"
        />
        <div className="md:w-1/2 md:pl-10 text-xl text-fuchsia-100">
          <p className="mb-3">
            The album release livestream for shwarma's second album,
            {' '}
            <a
              href="https://shwarma.bandcamp.com/album/emilys-aparments"
              target="_blank"
              rel="noreferrer"
            >
              Emily's Aparments
            </a>
            .
          </p>
          <p className="mb-3">Filled with choice cuts from the album as well as many mysterious happenings like Jackson finding out he has a son, bassmaster Kevin getting abducted by aliens while taking a piss, and Steve's ticking time bomb drumset thats set to blow when the beat stops.</p>
          <p>Filmed live at Turbo Snail during the summer of 2020</p>
        </div>
      </div>
    </div>
  );
}

export default LatestLivestream;
