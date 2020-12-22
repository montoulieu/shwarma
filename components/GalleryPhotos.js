import React, { useState } from 'react'
import Slider from 'react-slick'

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
    }
  ]
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const divStyle = {
    minHeight: '460px',
  }

  return (
    <div className="photo-gallery py-5">
      <h2 className="heading font-bubblegum mb-3">Photo Gallery</h2>
      <div className="slider">
        <Slider {...settings}>
          {photos.map((photo) =>
            <div className="slide p-3">
              <div
                // onClick={() => setIndexAndOpen(index)}
                className='h-60 gallery-photo bg-center bg-cover rounded-lg'
                style={{ backgroundImage: `url('${photo.path}')` }}
                alt={photo.label}
                key={photo.label}
              >
              </div>
            </div>
          )}
        </Slider>
      </div>
      <div
        style={divStyle}
        className="grid md:grid-cols-3 md:grid-rows-2 gap-6 mb-10"
      >
        {/* {photos
          .slice(0, 3)
          .map((photo, index) =>
            <div
              // onClick={() => setIndexAndOpen(index)}
              className={'gallery-photo border border-primary bg-center bg-cover relative md:row-start-1 md:row-end-3'}
              style={{ backgroundImage: `url('${photo.path}')` }}
              alt={photo.label}
              key={photo.label}
            >
              <div className="uppercase label-full-size transition-opacity duration-200 opacity-0 bg-primary absolute bottom-0 right-0 p-3">
                full size +
              </div>
            </div>
          )} */}
      </div>
    </div>
  )
}

export default PhotoSlider