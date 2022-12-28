import { useEffect } from "react";

const LatestVideos = () => {
  // useEffect(() => {
  //   const deferredVideo = document.getElementsByTagName("iframe")[0];
  //   setTimeout(() => {
  //     deferredVideo.setAttribute("src", deferredVideo.getAttribute("data-src"));
  //   }, 1250);
  // }, []);

  return (
    <div className="py-10 px-3 md:px-0">
      <h2 className="heading font-heading mb-5">Latest Videos</h2>
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          src="https://www.youtube.com/embed/KEzPwDNWh7s"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest Livestream"
          className="w-full video-16-9"
        />
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.youtube.com/embed/ghu2yj4-7I4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Latest Livestream"
            className="w-full video-16-9"
          />
        </div>
      </div>
    </div>
  );
}

export default LatestVideos;
