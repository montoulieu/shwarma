import { useEffect } from "react";

const LatestVideos = () => {
  // useEffect(() => {
  //   const deferredVideo = document.getElementsByTagName("iframe")[0];
  //   setTimeout(() => {
  //     deferredVideo.setAttribute("src", deferredVideo.getAttribute("data-src"));
  //   }, 1250);
  // }, []);

  return (
    <div className="py-10">
      <h2 className="heading font-heading mb-5">Latest Videos</h2>
      <div className="w-full grid sm:grid-cols-2 gap-6">
        <div>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.youtube.com/embed/-7ey4fr07Hs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Live at Cervantes Otherside"
            className="w-full video-16-9"
          />
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.youtube.com/embed/Pp3chsjZXzI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Lesdoit (Live)"
            className="w-full video-16-9"
          />
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.youtube.com/embed/DruNTsjxrtI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Space Harpies (Live)"
            className="w-full video-16-9"
          />
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.youtube.com/embed/F3d6sgUmTlg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Save Me From Safety (Live)"
            className="w-full video-16-9"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
