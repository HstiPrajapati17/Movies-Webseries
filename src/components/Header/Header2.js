import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import user_icon from "../Assets/Images/user-icon.png";
import "../Header/Header.css";

const Header2 = ({ bg_color_id }) => {
  const location = useLocation();
  const [nav] = useState([
    { title: "Home", path: "/home" },
    { title: "Webseries", path: "/webseries" },
    { title: "Movies", path: "/movies" },
    { title: "Categories", path: "/categories" },
  ]);

  return (
    <header className="header top-0 left-0 w-full z-50 inter-font  bg-[#141414]">
      <div className="px-[28px] sm:px-[40px] md:px-[80px] py-[8px] sm:py-[14px] md:py-[18px]">
        <div className="row">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo order-1">
              <h1 className="text-white text-[28px] sm:text-[30px] leading-normal font-semibold inter-font">
                LOGO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
