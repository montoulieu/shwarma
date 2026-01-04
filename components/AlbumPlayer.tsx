"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { track } from "@vercel/analytics/react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  Loader2,
  Music
} from "lucide-react";

interface Track {
  id: number;
  title: string;
  url: string;
  duration?: number;
}

interface AlbumPlayerProps {
  tracks: Track[];
  albumTitle: string;
  albumArt?: string;
}

export default function AlbumPlayer({ tracks, albumTitle, albumArt }: AlbumPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isLoading, setIsLoading] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');

  const currentTrack = tracks[currentTrackIndex];

  // Format time as MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Play/Pause toggle
  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Play specific track
  const playTrack = useCallback((index: number) => {
    const trackToPlay = tracks[index];
    track('Song Clicked', {
      song: trackToPlay.title,
      album: albumTitle
    });
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  }, [tracks, albumTitle]);

  // Next track
  const nextTrack = useCallback(() => {
    track('Next Button Clicked', {
      song: tracks[currentTrackIndex].title,
      album: albumTitle,
      timestamp: currentTime
    });

    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    }
    setIsPlaying(true);
  }, [isShuffle, tracks, albumTitle, currentTrackIndex, currentTime]);

  // Previous track
  const prevTrack = useCallback(() => {
    // If more than 3 seconds in, restart current track
    if (currentTime > 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      return;
    }

    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    }
    setIsPlaying(true);
  }, [currentTime, isShuffle, tracks.length]);

  // Handle track end
  const handleTrackEnd = useCallback(() => {
    track('Song Finished', {
      song: currentTrack.title,
      album: albumTitle
    });

    if (repeatMode === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else if (repeatMode === 'all' || currentTrackIndex < tracks.length - 1) {
      nextTrack();
    } else {
      setIsPlaying(false);
    }
  }, [repeatMode, currentTrackIndex, tracks.length, nextTrack, currentTrack, albumTitle]);

  // Seek in progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Toggle repeat mode
  const toggleRepeat = () => {
    const modes: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  // Audio element event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => handleTrackEnd();

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [handleTrackEnd]);

  // Auto-play when track changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex, isPlaying]);

  // Set initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={currentTrack?.url} preload="metadata" />

      {/* Single Shortcuts */}
      {/* Single Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {['Space Harpies', 'Try Again', 'Primordial Brine'].map((title) => {
          const trackIndex = tracks.findIndex(t => t.title === title);
          if (trackIndex === -1) return null;

          const isTrackPlaying = isPlaying && currentTrackIndex === trackIndex;

          return (
            <button
              key={title}
              onClick={() => {
                if (isTrackPlaying) {
                  togglePlayPause();
                } else {
                  playTrack(trackIndex);
                }
              }}
              className="glass-card p-4 hover:bg-white/10 transition-colors text-left group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-lime-500/20 flex items-center justify-center shrink-0 group-hover:bg-lime-500 group-hover:text-black transition-all">
                {isTrackPlaying ? (
                  <Pause className="w-5 h-5 fill-current text-lime-400 group-hover:text-black transition-colors" />
                ) : (
                  <Play className="w-5 h-5 fill-current text-lime-400 group-hover:text-black transition-colors translate-x-0.5" />
                )}
              </div>
              <div>
                <div className="text-xs text-lime-400 font-bold uppercase tracking-wider mb-0.5">
                  Play Single
                </div>
                <div className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">
                  {title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Player Card */}
      <div className="glass-card p-6 md:p-8 relative">
        {/* Volume (Top Right - Desktop Only) */}
        <div className="hidden md:flex absolute top-8 right-8 items-center gap-2 group/volume">
          <Volume2 className="w-4 h-4 text-white/50 group-hover/volume:text-lime-400 transition-colors" />
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[volume]}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>
        {/* Now Playing Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Album Art */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-white/5 shrink-0 relative">
            {albumArt ? (
              <Image src={albumArt} alt={albumTitle} fill className="object-cover" sizes="96px" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-lime-500/20 to-green-500/20">
                <Music className="w-10 h-10 text-lime-400" />
              </div>
            )}
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="flex items-end gap-0.5 h-4">
                  <span className="w-1 bg-lime-400 animate-pulse" style={{ height: '60%', animationDelay: '0ms' }} />
                  <span className="w-1 bg-lime-400 animate-pulse" style={{ height: '100%', animationDelay: '150ms' }} />
                  <span className="w-1 bg-lime-400 animate-pulse" style={{ height: '40%', animationDelay: '300ms' }} />
                  <span className="w-1 bg-lime-400 animate-pulse" style={{ height: '80%', animationDelay: '450ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-lime-400 uppercase tracking-wider font-bold mb-1">Now Playing</p>
            <h3 className="text-lg md:text-xl font-bold truncate text-white">{currentTrack?.title}</h3>
            <p className="text-sm text-white/60 truncate">{albumTitle}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div
            ref={progressRef}
            className="h-2 bg-white/10 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-linear-to-r from-lime-500 to-lime-400 rounded-full relative transition-all"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-lime-500/50" />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/50">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2 md:gap-4 pb-4 sm:pb-0">

          {/* Shuffle */}
          <button
            onClick={() => setIsShuffle(!isShuffle)}
            className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${isShuffle ? 'bg-lime-500/20 text-lime-400' : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            title="Shuffle"
          >
            <Shuffle className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Previous */}
          <button
            onClick={prevTrack}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <SkipBack className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            disabled={isLoading}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-lime-500 hover:bg-lime-400 text-black flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-lime-500/30 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-7 h-7 md:w-8 md:h-8 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-7 h-7 md:w-8 md:h-8 fill-current" />
            ) : (
              <Play className="w-7 h-7 md:w-8 md:h-8 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Next */}
          <button
            onClick={nextTrack}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <SkipForward className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </button>

          {/* Repeat */}
          <button
            onClick={toggleRepeat}
            className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all relative ${repeatMode !== 'off' ? 'bg-lime-500/20 text-lime-400' : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            title={`Repeat: ${repeatMode}`}
          >
            <Repeat className="w-4 h-4 md:w-5 md:h-5" />
            {repeatMode === 'one' && (
              <span className="absolute text-[10px] font-bold">1</span>
            )}
          </button>
        </div>

        {/* KebabTunes Label */}
        <div className="absolute bottom-2 right-4 pointer-events-none">
          <span className="text-[10px] sm:text-xs text-neutral-600 tracking-[0.2em] italic">
            Powered by KebabTunes
          </span>
        </div>
      </div>

      {/* Track List */}
      <div className="mt-6 glass-card overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h3 className="font-bold text-lg">Tracklist</h3>
        </div>
        <div>
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => playTrack(index)}
              className={`w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors text-left group ${currentTrackIndex === index ? 'bg-lime-500/10' : ''
                }`}
            >
              {/* Track Number / Playing Indicator */}
              <div className="w-8 text-center shrink-0">
                {currentTrackIndex === index && isPlaying ? (
                  <div className="flex items-end justify-center gap-0.5 h-4 mx-auto">
                    <span className="w-0.5 bg-lime-400 animate-pulse" style={{ height: '60%', animationDelay: '0ms' }} />
                    <span className="w-0.5 bg-lime-400 animate-pulse" style={{ height: '100%', animationDelay: '150ms' }} />
                    <span className="w-0.5 bg-lime-400 animate-pulse" style={{ height: '40%', animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <span className={`text-sm ${currentTrackIndex === index ? 'text-lime-400 font-bold' : 'text-white/40 group-hover:text-white/60'}`}>
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Track Title */}
              <span className={`flex-1 truncate ${currentTrackIndex === index ? 'text-lime-400 font-semibold' : 'text-white/80 group-hover:text-white'
                }`}>
                {track.title}
              </span>

              {/* Play icon on hover */}
              <Play
                className={`w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity fill-current ${currentTrackIndex === index ? 'text-lime-400' : 'text-white/60'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div >
  );
}
