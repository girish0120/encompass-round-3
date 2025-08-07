import React from "react";
import singleItem from "../assets/single-item.jpg";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../assets/cart-page-header-img.jpg";

export default function HeroSection() {
  const prodDetails = {
    id: 1,
    name: "Broccoli",
    category: "Vegetables",
    price: 29.99,
    rating: 4.5,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: singleItem,
  };
  return (
    <>
      <div
        className="flex justify-center items-center py-12 flex-col"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <span className="text-3xl font-bold text-white">Shop Details</span>
        <span className="text-md text-white">/pages/services</span>
      </div>
      <div className="container mx-auto py-8 flex justify-between items-stretch flex-col">
        <div className="flex">
          <div className="w-1/2">
            <img src={singleItem} alt="Single Item" />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-start">
            <div>
              <p className="text-2xl font-bold">{prodDetails.name}</p>
              <p className="text-lg">Price: ${prodDetails.price}</p>
              <p className="text-md">Category: {prodDetails.category}</p>
              <p className="text-sm">Rating: {prodDetails.rating} / 5</p>
              <p className="text-sm max-w-lg">{prodDetails.description}</p>
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
          <div className="border-b-2 border-grey-300 mb-2">
            <span className="border-b-2 border-b-yellow-300  max-w-lg">
              Description
            </span>
          </div>
          <div className="mb-4">{prodDetails.description}</div>
          <ProductDetails />
        </div>
      </div>
    </>
  );
}

const ProductDetails = () => {
  const details = [
    { label: "Weight", value: "1 kg" },
    { label: "Country of Origin", value: "Agro Farm" },
    { label: "Quality", value: "Organic" },
    { label: "Check", value: "Healthy" },
    { label: "Min Weight", value: "25 Kg" },
  ];

  return (
    <div className="max-w-md bg-white border shadow">
      {details.map((detail, idx) => (
        <div
          key={detail.label}
          className={`flex justify-between px-6 py-3 ${
            idx % 2 === 0 ? "bg-gray-50" : "bg-white"
          } border-b last:border-b-0`}
        >
          <span className="font-medium text-gray-600">{detail.label}</span>
          <span className="text-gray-800">{detail.value}</span>
        </div>
      ))}
    </div>
  );
};
