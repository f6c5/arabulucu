"use client";

import Carousel from "@/components/Carousel";
import React from "react";
import FlatCard from "@/components/FlatCard";
import { useSelector } from "react-redux";

const page = () => {
  const { flatCardItems } = useSelector((store) => store.flatCardItems);
  const { carouselItems } = useSelector((store) => store.carouselItems);
  return (
    <div>
      <Carousel items={carouselItems} />

      <div className="d-flex jc-center">
        <div className="col-10">
          {flatCardItems.map((item) => (
            <FlatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
