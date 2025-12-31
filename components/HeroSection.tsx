"use client";

import Image from "next/image";
import LogoShwarma from "@/components/SVG/LogoShwarma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faBandcamp,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  {
    icon: faSpotify,
    label: "Spotify",
    href: "https://open.spotify.com/artist/5WHhSHtZd60meLMNDxRbYV",
    color: "#1DB954",
  },
  {
    icon: faApple,
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/shwarma/1390163595",
    color: "#FA57C1",
  },
  {
    icon: faBandcamp,
    label: "Bandcamp",
    href: "https://shwarma.bandcamp.com/",
    color: "#1DA0C3",
  },
  {
    icon: faYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC69vsi_MuqB8VCka-wj8Mcg/",
    color: "#FF0000",
  },
  {
    icon: faInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/shwarmaband/",
    color: "#E4405F",
  },
];

export default function HeroSection() {
  const scrollToMusic = () => {
    const element = document.querySelector("#music");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shwarma-live-crowd-1.jpg"
          alt="shwarma live performance"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        {/* Psychedelic color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-green-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Logo */}
        <div className="animate-fade-in-up mb-8">
          <LogoShwarma className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-2xl" />
        </div>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Denver&apos;s Kebab-Rock Monstrosity
        </p>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Experimental psychedelic &amp; progressive rock band crafting eclectic musical experiences since 2017
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <button onClick={scrollToMusic} className="btn-glow text-lg">
            Listen Now
          </button>
          <a
            href="mailto:shwarmaband@gmail.com"
            className="btn-ghost text-lg"
          >
            Book Us
          </a>
        </div>

        {/* Quick Social Links */}
        <div
          className="flex justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="social-icon group"
              title={link.label}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="w-5 h-5 transition-colors group-hover:text-current"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={scrollToMusic}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
