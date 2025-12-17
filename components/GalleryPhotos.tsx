"use client";

import { useState } from "react";
import Image from "next/image";
import photos from "@/data/photos";

interface Photo {
  path: string;
  label: string;
}

export default function GalleryPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex] as Photo);
  };

  const prevPhoto = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex] as Photo);
  };

  return (
    <section id="gallery" className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Gallery</span>
          <h2 className="heading heading-gradient mb-4">Live Shots</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Moments captured from the stage and beyond
          </p>
        </div>

        {/* Photo Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(photos as Photo[]).map((photo, index) => (
            <button
              key={photo.label}
              onClick={() => openLightbox(photo, index)}
              className={`group relative overflow-hidden rounded-xl ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <div className={`relative ${index % 5 === 0 ? "aspect-square" : "aspect-square"}`}>
                <Image
                  src={photo.path}
                  alt={photo.label}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium">{photo.label}</p>
                </div>
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.path}
              alt={selectedPhoto.label}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-lg font-medium">{selectedPhoto.label}</p>
            <p className="text-sm text-white/50">
              {currentIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
