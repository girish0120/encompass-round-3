import React from "react";
import singleItem from "../assets/single-item.jpg";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../assets/cart-page-header-img.jpg";
//import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const [quantity, setQuantity] = React.useState(1);

const increaseQty = () => setQuantity((prev) => prev + 1);
const decreaseQty = () => {
  if (quantity > 1) setQuantity((prev) => prev - 1);
};

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
              {/* <p className="text-sm">
                Rating: {prodDetails.rating}
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />/ 5
              </p> */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const fullStars = Math.floor(prodDetails.rating);
                  const isHalf = prodDetails.rating - fullStars >= 0.5;
                  if (i < fullStars) {
                    return (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-yellow-400"
                      />
                    );
                  } else if (i === fullStars && isHalf) {
                    return (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStarHalfAlt}
                        className="text-yellow-400"
                      />
                    );
                  } else {
                    return (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-gray-300"
                      />
                    );
                  }
                })}
              </div>

              <p className="text-sm max-w-lg">{prodDetails.description}</p>
            </div>
            {/* Quantity Selector */}
<div className="flex items-center gap-4 mt-4">
  <span className="text-sm font-medium">Quantity:</span>
  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
    <button
      onClick={decreaseQty}
      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
    >
      <FontAwesomeIcon icon={faMinus} className="text-green-700" />
    </button>
    <span className="px-4 py-1 text-gray-700">{quantity}</span>
    <button
      onClick={increaseQty}
      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
    >
      <FontAwesomeIcon icon={faPlus} className="text-green-700" />
    </button>
  </div>
</div>

{/* Add to Cart Button */}
<div className="mt-4">
  <button className="rounded-full border-2 border-yellow-300 text-[#81C408] py-2 px-4 flex items-center gap-2">
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
