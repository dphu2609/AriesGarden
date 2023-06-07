import React, { useEffect, useState } from 'react';
import homePic1 from '../assets/home-picture-1-cropped.jpg';
import homePic2 from '../assets/home-picture-2-cropped.jpg';
import homePic3 from '../assets/home-picture-3-cropped.jpg';
import '../App.css';

const HomeCarousel = () => {
  const carouselImageLinks = [homePic1, homePic2, homePic3];
  const carouselLabel = ['Gifts for your loved ones', 'A souf of the deserts', 'Shop now'];
  const transitionDuration = 1000; // 1 second

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((index) => (index >= 2 ? 0 : index + 1));
    }, 3000); // 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      {carouselImageLinks.map((imageLink, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === carouselIndex ? 'active' : ''
          }`}
        >
          <img
            src={imageLink}
            alt="Home Carousel"
            className="img-fluid carousel-image"
          />
          <h1 className={`carousel-label ${
            index === carouselIndex ? 'active' : ''
          } label-${index + 1}`}>
            {carouselLabel[index]}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;
