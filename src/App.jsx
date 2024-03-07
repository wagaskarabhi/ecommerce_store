import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/MainHeader";

import Headphones from "./pages/Headphones";
import Laptops from "./pages/Laptops";
import Mobiles from "./pages/Mobiles";
import Drones from "./pages/Drones";

import Cart from "./components/Cart";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import Contact from "./pages/Contact";

import Wishlist from "./components/Wishlist";
import ProductDes from "./components/ProductDes";

import TV from "./pages/TV";
import Camera from "./pages/Camera";
import Smartwatch from "./pages/Smartwatch";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />}></Route>

            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Mobiles" element={<Mobiles />} />
            <Route path="/Drones" element={<Drones />} />
            <Route path="/Tv" element={<TV />} />
            <Route path="/Camera" element={<Camera />} />
            <Route path="/Laptops" element={<Laptops />} />
            <Route path="/Headphones" element={<Headphones />} />
            <Route path="/Smartwatch" element={<Smartwatch />} />

            <Route path="/ProductDes/:productId" element={<ProductDes />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
