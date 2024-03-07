import React from "react";
import Image1 from "../../assets/images/Headphones/OnEarHeadphones/onear14.png";
import Image2 from "../../assets/images/TV/Xiaomi/xiaomi5.png";
import Image3 from "../../assets/images/Mobiles/OnePlus/oneplus10.png";
import Image4 from "../../assets/images/Camera/Nikon/nikon3.png";
// import Image4 from "../../assets/hero/Blog/Blog-Jim-Fahad-Digital-4.webp";
// import Image5 from "../../assets/hero/Blog/Blog-Jim-Fahad-Digital-5.webp";
// import Image1 from "../../assets/hero/sale.png";
// import Image2 from "../../assets/hero/shopping.png";
// import Image3 from "../../assets/hero/women.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 30% off on all Earphones",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/Headphones",
  },
  {
    id: 2,
    img: Image2,
    title: "40% off on all Tv",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/Tv",
  },
  {
    id: 3,
    img: Image3,
    title: "20% off on all Phones",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/Mobiles",
  },
  {
    id: 4,
    img: Image4,
    title: "40% off on all Cameras",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/Camera",
  },
];

const HomeHero = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center   dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px]  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]  "></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <NavLink to={data.link}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#00798C]"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm "
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      {/* <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      >
                        Order Now
                      </button> */}
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeHero;
