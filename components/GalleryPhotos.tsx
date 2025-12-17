"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import photos from "@/data/photos";

interface Photo {
  path: string;
  label: string;
}

function PhotoSlider() {
  const settings = {
    dots: false,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    lazyLoad: "ondemand" as const,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 -mx-3">
      <h2 className="heading font-heading px-3">Photo Gallery</h2>
      <div className="slider">
        <Slider {...settings}>
          {(photos as Photo[]).map((photo) => (
            <div
              className="slide px-3 focus-visible:outline-none"
              key={photo.label}
            >
              <Image
                src={photo.path}
                className="rounded-lg w-full"
                alt={photo.label}
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PhotoSlider;
