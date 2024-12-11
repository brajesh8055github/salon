import React, { useState, useEffect } from 'react';

// Images for the slider
import image1 from '../Images/pexels-brunocortes1969-29655626.jpg';
import image2 from '../Images/pexels-samarth-1193942.jpg';
import image3 from '../Images/pexels-tu-nguy-n-709154-1545590.jpg';
import image4 from '../Images/pexels-vika-glitter-392079-29663167.jpg';
const Slider = () => {
  const slides = [
    {
      image: image1,
      text: "Services for hair, makeup, nails and fashion",
    },
    {
      image: image2,
      text: "Pamper yourself with our premium services",
    },
    {
      image: image3,
      text: "Stay ahead with the latest fashion trends",
    },
    {
      image: image4,
      text: "Exclusive deals just for you",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Asin Salon®</h1>
            <p className="text-lg md:text-2xl mt-4">{slide.text}</p>
            <button className="mt-4 md:hidden bg-black text-white px-4 py-2 ">Special Offers</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
