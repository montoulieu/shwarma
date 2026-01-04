import Link from "next/link";
import Image from "next/image";
import AlbumPlayer from "@/components/AlbumPlayer";
import LogoShwarma from "@/components/SVG/LogoShwarma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Beyond - shwarma",
  description: "Preview shwarma's upcoming album 'From Beyond' - 11 tracks of experimental psychedelic rock.",
  openGraph: {
    title: "From Beyond - shwarma",
    description: "Preview shwarma's upcoming album 'From Beyond' - 11 tracks of experimental psychedelic rock.",
  },
};

const CDN_BASE = "https://cdn.shwarma.band/albums/from-beyond";

const tracks = [
  { id: 1, title: "Above and Beyond", url: `${CDN_BASE}/01 Shwarma Master Above and Beyond.mp3` },
  { id: 2, title: "Primordial Brine", url: `${CDN_BASE}/02 Shwarma Master Primordial Brine.mp3` },
  { id: 3, title: "Transmission I: Alien Biome", url: `${CDN_BASE}/03 Shwarma Master Transmission I_ Alien Biome.mp3` },
  { id: 4, title: "Try Again", url: `${CDN_BASE}/04 Shwarma Master Try Again.mp3` },
  { id: 5, title: "Deuterium Fusion", url: `${CDN_BASE}/05 Shwarma Master Deuterium Fusion.mp3` },
  { id: 6, title: "Transmission II: Migration", url: `${CDN_BASE}/06 Shwarma Master Transmission II_ Migration.mp3` },
  { id: 7, title: "Mastermind", url: `${CDN_BASE}/07 Shwarma Master Mastermind.mp3` },
  { id: 8, title: "Collider", url: `${CDN_BASE}/08 Shwarma Master Collider.mp3` },
  { id: 9, title: "Braise", url: `${CDN_BASE}/09 Shwarma Master Braise.mp3` },
  { id: 10, title: "Transmission III: Static Smack", url: `${CDN_BASE}/10 Shwarma Master Transmission III_ Static Smack.mp3` },
  { id: 11, title: "Space Harpies", url: `${CDN_BASE}/11 Shwarma Master Space Harpies.mp3` },
];

export default function FromBeyond() {
  return (
    <div className="grain-overlay min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Background Image - add your image here */}
        {/* <Image
          src="/images/album/from-beyond/background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-lime-500/5 via-transparent to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <LogoShwarma className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-lime-400 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Album Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-lime-500/20 text-lime-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Coming March 2nd
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 heading-gradient">
              From Beyond
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-2">
              The fourth studio album from shwarma
            </p>
            <p className="text-sm text-white/40">
              11 tracks • Preview the full album below
            </p>
          </div>

          {/* Album Art + Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Album Art */}
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
              <Image
                src="/images/album/from-beyond/cover.jpg"
                alt="From Beyond album cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Album Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-white">A Journey From Beyond</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Embark on an interstellar voyage through sound with shwarma&apos;s most ambitious work yet.
                  &quot;From Beyond&quot; weaves together cosmic themes, alien transmissions, and the raw
                  energy that defines Denver&apos;s kebab-rock pioneers.
                </p>
                <p>
                  From the soaring opener &quot;Above and Beyond&quot; to the sprawling finale &quot;Space
                  Harpies,&quot; this 11-track odyssey pushes the boundaries of psychedelic progressive rock.
                </p>
              </div>

              {/* Pre-save links placeholder */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/40 mb-3">Pre-save coming soon on:</p>
                <div className="flex gap-3">
                  <span className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-white/50">Spotify</span>
                  <span className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-white/50">Apple Music</span>
                  <span className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-white/50">Bandcamp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Player */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <AlbumPlayer
              tracks={tracks}
              albumTitle="From Beyond"
              albumArt="/images/album/from-beyond/cover.jpg"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} shwarma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
