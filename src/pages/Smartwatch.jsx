// Headphones.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../features/cartSlice";
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Smartwatch = () => {
  const items = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const productData = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();
  const [filterCompany, setFilterCompany] = useState("all");

  const handleCompanyFilter = (company) => {
    setFilterCompany(company);
  };

  // Filter Smartwatch based on the selected category
  const filteredSmartwatchData =
    filterCompany === "all"
      ? productData.filter((product) => product.type === "Smartwatch")
      : productData.filter(
          (product) =>
            filterCompany === "all" || product.company === filterCompany
        );

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to the cart!`);
  };
  const handleToggleWishlist = (product) => {
    const isWishlistItem = wishlistItems.some(
      (item) => item.id === product.id && item.title === product.title
    );

    if (isWishlistItem) {
      dispatch(removeFromWishlist(product));
      toast.warning(`${product.title} removed from the wishlist.`);
    } else {
      dispatch(addToWishlist(product));
      toast.info(`${product.title} added to the wishlist.`);
    }
  };
  const isItemInWishlist = (product) => {
    return wishlistItems.some(
      (item) => item.id === product.id && item.title === product.title
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-4 flex w-50 h-20  ">
        <button
          className={`mr-2 ${
            filterCompany === "all"
              ? "bg-blue-500 w-[150px]  h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
              : "w-[120px] bg-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          }`}
          onClick={() => handleCompanyFilter("all")}
        >
          All Smartwatch
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {filteredSmartwatchData.map((product) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5 bg-[#F0F0F0] shadow-md"
            key={product.id}
          >
            <Link
              to={`/ProductDes/${product.id}`}
              className="relative flex h-100 overflow-hidden rounded-xl group"
            >
              <img
                className="w-full h-full object-cover"
                src={product.img}
                alt="product image"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 text-white rounded-xl">
                View Product
              </div>
            </Link>

            <div className="mt-4 px-5 pb-5 flex flex-col items-center justify-between">
              <Link
                to={`/ProductDes/${product.id}`}
                className="text-xl tracking-tight text-[#00798C]"
              >
                {product.title}
              </Link>
              <div className="mt-2 mb-5 flex items-center justify-center">
                <p>
                  <span className="text-3xl font-bold text-[#F71735]">
                    ₹{product.price}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                <FaCartShopping className="mr-2" />
                Add to cart
              </button>
              <button
                onClick={() => handleToggleWishlist(product)}
                className={`mt-2 flex items-center justify-center rounded-md px-3 py-1.5 text-center text-sm font-medium ${
                  isItemInWishlist(product)
                    ? "bg-red-500 text-white"
                    : "bg-[#FFC75F]"
                }`}
              >
                <MdFavorite className="mr-2" />
                {isItemInWishlist(product)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Smartwatch;
