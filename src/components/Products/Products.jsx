import React from "react";
import Img1 from "../../assets/images/Mobiles/Iphone/Iphone2.png";
import Img2 from "../../assets/images/Laptops/Asus/asus2.png";
import Img3 from "../../assets/images/Headphones/OnEarHeadphones/onear10.webp";
import Img4 from "../../assets/images/Smartwatches/smartwatch2.png";
import Img5 from "../../assets/images/TV/Samsung/samsung4.png";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 62,
    img: Img1,
    title: "iphone15 Pro",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
    link: "/ProductDes",
  },
  {
    id: 97,
    img: Img2,
    title: "Asus Zenbook 15",
    rating: 4.5,
    color: "Gray",
    aosDelay: "200",
  },
  {
    id: 25,
    img: Img3,
    title: "Boat 535",
    rating: 4.7,
    color: "Sky Blue",
    aosDelay: "400",
  },
  {
    id: 37,
    img: Img4,
    title: "Smartwatch Model B",
    rating: 4.4,
    color: "Silver Black",
    aosDelay: "600",
  },
  {
    id: 139,
    img: Img5,
    title: "Samsung Neo56",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12  ">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#FF1B1C] ">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#00798C]">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5  shadow-md place-items-center"
              >
                <Link to={`/ProductDes/${data.id}`}>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[220px] object-cover rounded-md"
                    //   className="object-cover
                    //  w-full
                    //  h-full"
                  />
                </Link>
                <div>
                  <h3 className="font-semibold text-[#FF1B1C] ">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          {/* <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
