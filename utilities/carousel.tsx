'use client'
import { useState } from 'react';

interface CarouselProps {
  images: any;
  itemsToShow: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, itemsToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getTranslateValue = () => {
    const itemWidth = 100 / itemsToShow;
    return `-${currentIndex * itemWidth}%`;
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${getTranslateValue()})` }}
        >
          {images?.map((image:any, index:any) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full relative`}
            >
              <img src={image.sourcePeople} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        Previous
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        Next
      </button>
    </div>
  );
};

export default Carousel;