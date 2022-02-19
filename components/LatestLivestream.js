import { useEffect } from "react";

function LatestLivestream() {
  useEffect(() => {
    const deferredVideo = document.getElementsByTagName("iframe")[0];
    setTimeout(() => {
      deferredVideo.setAttribute("src", deferredVideo.getAttribute("data-src"));
    }, 1250);
  }, []);
  return (
    <div className="py-10 px-3 md:px-0">
      <h2 className="heading font-bubblegum mb-5">Latest Livestream</h2>
      <div className="md:flex items-center">
        <iframe
          width="560"
          height="315"
          loading="lazy"
          data-src="https://www.youtube.com/embed/qxzOTcbdgy8?t=722"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest Livestream"
          className="w-full md:w-1/2 h-52 md:h-96 mb-5 md:mb-0 bg-blue-900 bg-opacity-20"
        />
        <div className="md:w-1/2 md:pl-10 text-xl text-blue-50">
          <p className="mb-3">
            The album release livestream for shwarma&apos;s second EP,{" "}
            <a
              href="https://shwarma.bandcamp.com/album/loveworthy-live-ep"
              target="_blank"
              rel="noreferrer"
            >
              Loveworthy Live EP
            </a>
            .
          </p>
          <p className="mb-3">
            The original live recorded performance for Loveworthy Live EP filmed
            at the soundstages of LSI Lighting Services in Denver, CO.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestLivestream;
