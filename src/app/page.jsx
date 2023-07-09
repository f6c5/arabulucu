import Carousel from "@/components/Carousel";
import React from "react";

const carouselItems = [
  { id: 0, title: "item", image: "https://picsum.photos/900/380" },
  { id: 1, title: "item", image: "https://picsum.photos/900/380" },
  { id: 2, title: "item", image: "https://picsum.photos/900/380" },
  { id: 3, title: "item", image: "https://picsum.photos/900/380" },
  { id: 4, title: "item", image: "https://picsum.photos/900/380" },
];

const page = () => {
  return (
    <div>
      <Carousel items={carouselItems} />
      <p>Ana Sayfa</p>
    </div>
  );
};

export default page;
