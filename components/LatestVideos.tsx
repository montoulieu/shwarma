"use client";

import { useState } from "react";

const videos = [
  {
    id: "-7ey4fr07Hs",
    title: "Live at Cervantes Otherside",
    featured: true,
  },
  {
    id: "Pp3chsjZXzI",
    title: "Lesdoit (Live)",
    featured: false,
  },
  {
    id: "DruNTsjxrtI",
    title: "Space Harpies (Live)",
    featured: false,
  },
  {
    id: "F3d6sgUmTlg",
    title: "Save Me From Safety (Live)",
    featured: false,
  },
];

export default function LatestVideos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const otherVideos = videos.filter((v) => v.id !== activeVideo.id);

  return (
    <section id="videos" className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Watch</span>
          <h2 className="heading heading-gradient mb-4">Live Videos</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience the shwarmth from the comfort of your screen
          </p>
        </div>

        {/* Featured Video */}
        <div className="video-container mb-8 max-w-5xl mx-auto">
          <div className="video-16-9">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={activeVideo.title}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Video Title */}
        <h3 className="text-xl font-bold text-center mb-10">{activeVideo.title}</h3>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {otherVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-teal-500 transition-all duration-300"
            >
              {/* YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                <p className="text-xs font-medium truncate">{video.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/channel/UC69vsi_MuqB8VCka-wj8Mcg"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
