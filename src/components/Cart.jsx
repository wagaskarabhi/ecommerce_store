import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/cartSlice";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const quantity = useSelector((state) => state.cart.quantity);

  const handleRemove = (id, title) => {
    dispatch(removeFromCart({ id, title }));
  };

  const handleIncrease = (id, title) => {
    dispatch(increaseQuantity({ id, title }));
  };

  const handleDecrease = (id, title) => {
    dispatch(decreaseQuantity({ id, title }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-[#00798C]">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-[#00798C]">Your cart is empty.</p>
        ) : (
          <div>
            <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
              {items.map((item) => (
                <li
                  key={item.id}
                  className=" px-5 pb-5 flex flex-col items-center justify-between rounded-[14px]  bg-gray-200"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    // className="w-full h-40 m-2  rounded-[14px] border-solid border-2 border-sky-500"
                    className="object-cover w-full h-full "
                  />
                  <div>
                    <div className=" bg-gray-200 w-full h-6 m-2 flex items-center justify-center font-bold gap-2">
                      <p className=" text-[#00798C]">{item.title}</p>
                      <div>
                        <p className=" text-[#F71735]">₹{item.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 gap-4 font-bold italic">
                    <button
                      onClick={() => handleDecrease(item.id, item.title)}
                      className="flex justify-center items-center gap-2 w-10 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                    >
                      <FaMinus />
                    </button>
                    <button
                      onClick={() => handleIncrease(item.id, item.title)}
                      className="flex justify-center items-center gap-2 w-10 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                    >
                      <FaPlus />
                    </button>
                    <div className="text-[#291528]">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 gap-1 font-bold">
                    <button
                      onClick={() => handleRemove(item.id, item.title)}
                      className="flex justify-center items-center gap-2 w-16 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] ml-2"
                    >
                      <FaTrash />
                    </button>
                    <span className="italic text-[#291528]">
                      Subtotal:₹{item.quantity * item.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="bg-gray-200 border-none p-4 text-base w-52 rounded-lg text-lightcoral shadow-md cursor-pointer">
                <div className="text-purple-800 border-2 border-purple-800 rounded-10 p-2.5 pl-5 pr-5 bg-transparent max-w-[190px]">
                  <h1 className="text-xl font-bold">Total: ₹{total}</h1>
                  <p>Total Items: {quantity}</p>
                </div>
                <div className="mt-2">
                  <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group">
                    Checkout
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                      Buy Now
                    </span>
                  </button>
                  <button
                    onClick={handleClearCart}
                    className="flex justify-center items-center gap-2 w-40 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mt-2"
                  >
                    <MdOutlineClear />
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
