import React from "react";
import Img1 from "../../assets/images/Mobiles/OnePlus/oneplus4.png";
import Img2 from "../../assets/images/Smartwatches/smartwatch12.webp";
import Img3 from "../../assets/images/Headphones/AirBuds/earbuds4.webp";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 69,
    img: Img1,
    title: "OnePlus 10Pro",
    description:
      "Immerse yourself in the stunning Fluid AMOLED display of the OnePlus 7 Pro, powered by the Snapdragon 855 chipset and equipped with a versatile triple-camera setup.",
  },
  {
    id: 47,
    img: Img2,
    title: "Slim and Sleek Smartwatch",
    description: "A slim and sleek smartwatch with advanced features.",
  },
  {
    id: 4,
    img: Img3,
    title: "True Wireless Earbuds",
    description:
      "Compact and lightweight true wireless earbuds for everyday use.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container  ">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-[#FF1B1C]">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#00798C]">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold text-[#FF1B1C]">
                  {data.title}
                </h1>
                <p className=" group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <Link to={`/ProductDes/${data.id}`}>
                  <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
