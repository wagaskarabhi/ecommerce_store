import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import productData from "../db/productData";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = productData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full   relative">
      <div className="max-w-container mx-auto2 ">
        <div className="flex justify-center">
          {" "}
          {/* Centering container */}
          <div className="relative lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center justify-between px-6 rounded-xl gap-4">
            {" "}
            {/* Added 'gap-4' for spacing */}
            <input
              className="flex-1 h-full outline-none placeholder:text-[#FF1B1C] font-bold text-xl placeholder:text-[14px] mr-2" // Added 'mr-2' for spacing
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white  top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(`/ProductDes/${item.id}`, {
                          state: {
                            item: item,
                          },
                        }) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item.id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg text-[#00798C]">
                          {item.title}
                        </p>
                        <p className="text-xs">{item.description}</p>
                        <p className="text-sm">
                          {" "}
                          <span className="text-primeColor font-semibold text-[#F71735]">
                            ₹{item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
