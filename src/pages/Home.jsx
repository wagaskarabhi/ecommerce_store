import React from "react";

import Aos from "aos";

import HomeHero from "../components/Hero/HomeHero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import HeaderBottom from "../components/HeaderBottom";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <HeaderBottom />

      <div className=" dark:bg-gray-900 dark:text-white duration-200">
        {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
        <HomeHero />
        <Products />
        <TopProducts />
        <Banner />

        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
