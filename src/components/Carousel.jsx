"use client";

import React, { useEffect, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(items[0]);

  const handleNext = () => {
    if (currentSlide.id < items.length - 1) {
      setCurrentSlide(items[currentSlide.id + 1]);
    } else {
      setCurrentSlide(items[0]);
    }
  };

  const handlePrev = () => {
    if (currentSlide.id > 0) {
      setCurrentSlide(items[currentSlide.id - 1]);
    } else {
      setCurrentSlide(items[items.length - 1]);
    }
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item) => (
          <div
            key={item.id}
            className={`carousel-item ${
              currentSlide.id > item.id
                ? "prev"
                : currentSlide.id === item.id
                ? "active"
                : "next"
            }`}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {items.map((item) => (
          <div
            key={item.id}
            className={`carousel-indicators-item ${
              item.id === currentSlide.id && "active"
            }`}
            onClick={() => setCurrentSlide(items[item.id])}
          />
        ))}
      </div>
      <div className="carousel-icon left" onClick={handlePrev}>
        <CiCircleChevLeft />
      </div>
      <div className="carousel-icon right" onClick={handleNext}>
        <CiCircleChevRight />
      </div>
    </div>
  );
};

export default Carousel;
