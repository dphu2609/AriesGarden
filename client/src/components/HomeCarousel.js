import React, {useEffect ,useState} from 'react';
import homePic1 from '../assets/home-picture-1-cropped.jpg';
import homePic2 from '../assets/home-picture-2-cropped.jpg';
import homePic3 from '../assets/home-picture-3-cropped.jpg';
import '../App.css'

const HomeCarousel = () => {

    const carouselImageLinks = [homePic1, homePic2, homePic3];

    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCarouselIndex(index => (index >= 2 ? 0 : index + 1));
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, []
    );

    return (
        <div className="carousel-container">
          {carouselImageLinks.map((imageLink, index) => (
            <img
              key={index}
              src={imageLink}
              alt="Home Carousel"
              className={`img-fluid carousel-image ${
                index === carouselIndex ? 'active' : ''
              }`}
            />
          ))}
        </div>
    );
}

export default HomeCarousel;