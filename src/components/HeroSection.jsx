import React from "react";
import singleItem from "../assets/single-item.jpg";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  const prodDetails = [
    {
      id: 1,
      name: "Broccoli",
      category: "Vegetables",
      price: 29.99,
      rating: 4.5,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: singleItem,
    },
  ];
  return (
    <div className="container mx-auto py-8 flex justify-between items-stretch flex-col">
      <div className="flex">
        <div className="w-1/2">
          <img src={singleItem} alt="Single Item" />
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start">
          <div>
            <h1>{prodDetails[0].name}</h1>
            <p>Price: ${prodDetails[0].price}</p>
            <h2>Category: {prodDetails[0].category}</h2>
            <p>Rating: {prodDetails[0].rating} / 5</p>
            <p>{prodDetails[0].description}</p>
          </div>
          <div className="mt-4">
            <button className="rounded-full border-2 border-yellow-300 text-[#81C408] py-2 px-4">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-[#81C408] text-lg"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-grey-300">
          <span className="border-b-2 border-b-yellow-300">Description</span>
        </div>
        <div>{prodDetails[0].description}</div>
      </div>
    </div>
  );
}
