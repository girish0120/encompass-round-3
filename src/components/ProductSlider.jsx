// import React from "react";

// function ProductSlider() {
//   return <div></div>;
// }

// export default ProductSlider;
// src/components/ProductSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import vegImg2 from "../assets/vegetable-item-2.jpg";
import vegImg3 from "../assets/vegetable-item-3.png";
import vegImg4 from "../assets/vegetable-item-4.jpg";
import vegImg5 from "../assets/vegetable-item-5.jpg";
import vegImg6 from "../assets/vegetable-item-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { Navigation, Pagination } from "swiper/modules";

const products = [
  {
    id: 1,
    name: "Parsely",
    image: vegImg6,
    price: "$49",
  },
  {
    id: 2,
    name: "Potatoes",
    image: vegImg5,
    price: "$59",
  },
  {
    id: 3,
    name: "Product C",
    image: vegImg4,
    price: "$99",
  },
  {
    id: 4,
    name: "Product D",
    image: vegImg3,
    price: "$39",
  },
  {
    id: 5,
    name: "Product E",
    image: vegImg2,
    price: "$79",
  },
];

const ProductSlider = () => {
  return (
    <div className="container mx-auto w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className=" bg-white rounded-lg border-2 shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[350px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button class="border border-green-500 text-green-500 px-4 py-2 rounded cursor-poiner mt-4">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-green-500 mr-2"
                />
                Add to cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
