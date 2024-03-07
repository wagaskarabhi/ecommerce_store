import React from "react";
import { NavLink } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import Logo from "../assets/logo.png";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const wishlistItems = useSelector((state) => state.cart.wishlist);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="w-10" />
              Online Store
            </NavLink>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <NavLink
              to="/cart"
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Cart
              </span>

              {cartQuantity > 0 && <span>{cartQuantity}</span>}

              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </NavLink>
            <NavLink
              to="/wishlist"
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Wishlist
              </span>
              <MdFavorite />
              {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
            </NavLink>
            {/* Darkmode Switch */}
            {/* <div>
              <DarkMode />
            </div> */}
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <div className="sm:flex hidden items-center gap-4">
          <div className="inline-block px-4 hover:text-primary duration-200">
            <NavLink to="/">Home</NavLink>
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/Mobiles">Mobiles</NavLink>
          <NavLink to="/Headphones">Headphones</NavLink>
          <NavLink to="/Laptops">Laptops</NavLink>
          <NavLink to="/Shoes">Shoes</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
