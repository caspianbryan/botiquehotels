'use client'

import React, { useState } from "react";

const Courasel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile Carousel */}
      <div
        className="flex transition-transform duration-500 sm:block md:hidden"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full h-64 md:h-64 flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
              <p className="text-xl md:text-2xl">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-6 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
              <p className="text-2xl md:text-xl">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button for mobile */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:hidden"
        >
          &#10094;
        </button>
      )}

      {/* Next Button for mobile */}
      {currentIndex < data.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:hidden"
        >
          &#10095;
        </button>
      )}

      {/* Pagination for larger screens */}
      <div className="hidden md:flex justify-center mt-4">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === idx ? "bg-black" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Courasel;
