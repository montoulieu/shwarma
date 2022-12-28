import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import photos from '@data/photos';

function PhotoSlider() {

  const settings = {
    dots: false,
    speed: 1000,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    lazyLoad: true,
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
      <h2 className="heading font-heading mb-3">Photo Gallery</h2>
      <div className="slider">
        <Slider {...settings}>
          {photos.map((photo) => (
            <div
              className="slide p-3"
              key={photo.label}
            >
              <Image
                src={photo.path}
                className="rounded-xl w-full"
                alt={photo.label}
                loading="lazy"
                width="512"
                height="512"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PhotoSlider;
