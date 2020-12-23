import React, { useState } from 'react';
import Slider from 'react-slick';

function PhotoSlider() {
  const photos = [
    {
      label: 'Dalton',
      path: '/images/slider/dalton.jpg',
    },
    {
      label: 'Jackson',
      path: '/images/slider/jackson.jpg',
    },
    {
      label: 'Pieter',
      path: '/images/slider/pieter.jpg',
    },
    {
      label: 'Steve',
      path: '/images/slider/steve.jpg',
    },
    {
      label: 'Steve Tongue',
      path: '/images/slider/stevedoinwhathedoes.jpg',
    },
    {
      label: 'Rage Squared',
      path: '/images/slider/ragesquared.jpg',
    },
  ];
  const settings = {
    dots: false,
    speed: 100,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    className: 'hover-gradient',
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

  const divStyle = {
    minHeight: '460px',
  };

  return (
    <div className="photo-gallery py-5 px-3 md:px-0">
      <h2 className="heading font-bubblegum mb-3">Photo Gallery</h2>
      <div className="slider">
        <Slider {...settings}>
          {photos.map((photo) => (
            <div
              className="slide p-3"
              key={photo.label}
            >
              <img
                src={photo.path}
                className="rounded-3xl w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PhotoSlider;
