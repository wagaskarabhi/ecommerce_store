"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import logo from "../assets/logo.png";

const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Mobiles",
    link: "/Mobiles",
  },
  {
    id: 3,
    name: "Laptops",
    link: "/Laptops",
  },
  {
    id: 4,
    name: "Headphones",
    link: "/Headphones",
  },
  {
    id: 5,
    name: "TV",
    link: "/TV",
  },
  {
    id: 6,
    name: "Camera",
    link: "/Camera",
  },
  {
    id: 7,
    name: "Drones",
    link: "/Drones",
  },
  {
    id: 8,
    name: "Smartwatch",
    link: "/Smartwatch",
  },

  { id: 9, name: "Contact", link: "/Contact" },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartQuantity = useSelector((state) => state.cart.quantity);
  const wishlistItems = useSelector((state) => state.cart.wishlist);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 ">
          <span>
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
            </NavLink>
          </span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  // exact={item.link === "/"}
                  className="text-[17px] font-semibold  text-[#FF7F11] hover:text-gray-900"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <NavLink
            to="/cart"
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center group ml-2 mr-2"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Cart
            </span>

            {cartQuantity > 0 && <span>{cartQuantity}</span>}

            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <NavLink
            to="/wishlist"
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center group ml-2 mr-2"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Wishlist
            </span>
            <MdFavorite />
            {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
          </NavLink>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <NavLink to="/">
                        <img
                          src={logo}
                          alt="logo"
                          className="w-[80px] h-[80px]"
                        />
                      </NavLink>
                    </span>
                  </div>
                  <div className="-mr-2">
                    <div className="flex">
                      <NavLink
                        to="/cart"
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center ml-2 mr-2 group"
                      >
                        <span className="group-hover:block hidden transition-all duration-200">
                          Cart
                        </span>

                        {cartQuantity > 0 && <span>{cartQuantity}</span>}

                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                      </NavLink>

                      <NavLink
                        to="/wishlist"
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center ml-2 mr-2 group"
                      >
                        <span className="group-hover:block hidden transition-all duration-200">
                          Wishlist
                        </span>
                        <MdFavorite />
                        {wishlistItems.length > 0 && (
                          <span>{wishlistItems.length}</span>
                        )}
                      </NavLink>
                    </div>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        to={item.link}
                        exact={item.link === "/"}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
