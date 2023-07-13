"use client";

import React, { useEffect, useRef } from "react";

const FlatCard = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardTop = cardRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight) {
        cardRef.current.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flat-card float my-6" ref={cardRef}>
      <img className="flat-card-img" src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title border-bottom-2 pb-2 mb-2">{item.title}</h5>
        <p className="card-text text-truncate-7">{item.description}</p>
      </div>
    </div>
  );
};

export default FlatCard;
