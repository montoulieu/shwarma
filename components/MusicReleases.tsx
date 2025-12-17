"use client";

import Image from "next/image";
import releases from "@/data/releases";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function MusicReleases() {
  // Feature the latest release
  const [latestRelease, ...otherReleases] = releases;

  return (
    <section id="music" className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Discography</span>
          <h2 className="heading heading-gradient mb-4">Our Music</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            3 albums, 2 EPs, and counting. Stream everywhere or grab it on Bandcamp.
          </p>
        </div>

        {/* Featured Latest Release */}
        <div className="mb-20">
          <div className="glass-card p-6 md:p-10 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Album Art */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="album-card group">
                    <Image
                      src={latestRelease.image}
                      height={500}
                      width={500}
                      className="w-full rounded-lg shadow-2xl"
                      alt={`${latestRelease.name} album cover`}
                    />
                    <div className="album-card-overlay rounded-lg">
                      <span className="btn-glow">Play Album</span>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-fit border-none bg-transparent p-0 shadow-none">
                  <DialogTitle className="sr-only">
                    {latestRelease.name} by shwarma
                  </DialogTitle>
                  <iframe
                    className="mx-auto block rounded-xl"
                    src={`https://bandcamp.com/EmbeddedPlayer/album=${latestRelease.embedID}/size=large/bgcol=0a0a0a/linkcol=2dd4bf/transparent=true/`}
                    seamless
                    width="350px"
                    height="780px"
                    title={`${latestRelease.name} bandcamp player`}
                  />
                </DialogContent>
              </Dialog>

              {/* Album Info */}
              <div className="text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Latest Release
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-2">{latestRelease.name}</h3>
                <p className="text-xl text-white/60 mb-6">{latestRelease.year}</p>

                {/* Stream Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {latestRelease.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-full transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Releases Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Full Discography</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {otherReleases.map((release, index) => (
              <div
                key={release.name}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="album-card w-full">
                      <Image
                        src={release.image}
                        height={300}
                        width={300}
                        className="w-full rounded-lg shadow-lg"
                        alt={`${release.name} album cover`}
                        loading="lazy"
                      />
                      <div className="album-card-overlay rounded-lg">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-fit border-none bg-transparent p-0 shadow-none">
                    <DialogTitle className="sr-only">
                      {release.name} by shwarma
                    </DialogTitle>
                    <iframe
                      className="mx-auto block rounded-xl"
                      src={`https://bandcamp.com/EmbeddedPlayer/album=${release.embedID}/size=large/bgcol=0a0a0a/linkcol=2dd4bf/transparent=true/`}
                      seamless
                      width="350px"
                      height="780px"
                      title={`${release.name} bandcamp player`}
                    />
                  </DialogContent>
                </Dialog>

                <div className="mt-3 text-center">
                  <h4 className="font-bold text-sm truncate group-hover:text-teal-400 transition-colors">
                    {release.name}
                  </h4>
                  <p className="text-xs text-white/50">{release.year}</p>
                </div>

                {/* Mini streaming links */}
                <div className="flex justify-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {release.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/40 hover:text-teal-400 transition-colors"
                      title={link.name}
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
