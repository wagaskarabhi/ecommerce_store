import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import { NavBar } from "./NavBar";
import { Search } from "lucide-react";

const MainHeader = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

export default MainHeader;
