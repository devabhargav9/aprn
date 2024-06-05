import React, { useEffect, useState } from 'react';
import './styles.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const totalItems = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);


  const updateCarousel = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + itemsPerView) % totalItems;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - itemsPerView + totalItems) % totalItems;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* <button onClick={prevSlide}>Previous</button> */}
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.rating} alt="stars" className='stars'/>
            <div className='titleText'>{item.title}</div>
            <div className='descText'>{item.desc}</div>
            <div className='reviewer'>{item.name}</div>
          </div>
        ))}
      </div>
      {/* <button onClick={nextSlide}>Next</button> */}
      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / itemsPerView) ? 'active' : ''}`}
            onClick={() => updateCarousel(index * itemsPerView)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
