import Carousel from "@/components/Carousel";
import React from "react";

const carouselItems = [
  { id: 0, title: "item", image: "/images/1.png" },
  { id: 1, title: "item", image: "/images/2.png" },
  { id: 2, title: "item", image: "/images/3.png" },
  { id: 3, title: "item", image: "/images/4.png" },
  { id: 4, title: "item", image: "/images/5.png" },
  { id: 5, title: "item", image: "/images/6.png" },
  { id: 6, title: "item", image: "/images/7.png" },
  { id: 7, title: "item", image: "/images/8.png" },
  { id: 8, title: "item", image: "/images/9.png" },
  { id: 9, title: "item", image: "/images/10.png" },
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
