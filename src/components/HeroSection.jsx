import React from "react";
import singleItem from "../assets/single-item.jpg";
export default function HeroSection() {
  const prodDetails = [
    {
      id: 1,
      name: "Single Item",
      price: 29.99,
      description: "This is a single item product.",
      image: singleItem,
    },
  ];
  return (
    <div className="container mx-auto py-8 flex justify-between items-center">
      <div className="w-1/2">
        <img src={singleItem} alt="Single Item" />
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}
