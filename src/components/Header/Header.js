import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import user_icon from "../Assets/Images/user-icon.png";
import "../Header/Header.css";

const Header = ({ bg_color_id }) => {
  const location = useLocation();
  const [nav] = useState([
    { title: "Home", path: "/home" },
    { title: "Webseries", path: "/webseries" },
    { title: "Movies", path: "/movies" },
    { title: "Categories", path: "/categories" },
  ]);

  return (
    <header
      className="header top-0 left-0 w-full z-50 inter-font fixed"
      id={bg_color_id}
    >
      <div className="px-[8px] sm:px-[40px] md:px-[80px]">
        <div className="row">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo order-1">
              <h1 className="text-white text-[28px] sm:text-[30px] leading-normal font-semibold inter-font">
                LOGO
              </h1>
            </div>

            {/* Navigation */}
            <nav className="navbar order-2">
              {/* Mobile Toggle Button */}
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <div className="nav-bar block md:hidden m-1 rounded md:p-2">
                  <HiMiniBars3 className="text-[#fff] text-[30px]" />
                </div>
              </button>

              {/* Mobile Sidebar */}
              <div
                className="offcanvas offcanvas-start bg-[#141414] w-[150px] block md:hidden"
                tabIndex="-1"
                id="offcanvasExample"
              >
                <Sidebar className="h-full">
                  <button
                    type="button"
                    className="btn-close absolute top-[-9px] right-[22px] text-reset m-[12px] border-[1px] border-[#fff]"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <RxCross2 className="text-[#fff] h-[38px] w-[38px] p-[8px]" />
                  </button>
                  <Menu className="h-screen absolute top-[70px]">
                    {nav.map((item, i) => {
                      const isActive = location.pathname.startsWith(item.path);
                      return (
                        <MenuItem key={i}>
                          <Link
                            to={item.path}
                            className={`hover:text-white hover:font-semibold duration-150 ${
                              isActive
                                ? "text-white font-semibold"
                                : "text-[#ffffff99]"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Sidebar>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block text-[#fff]/60">
                <ul className="flex gap-[22px] lg:gap-[50px]">
                  {nav.map((navitem, index) => {
                    const isActive = location.pathname.startsWith(navitem.path);
                    return (
                      <li
                        key={index}
                        className={`py-[19px] duration-300 ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-[#ffffff99] hover:text-white"
                        }`}
                      >
                        <Link to={navitem.path}>{navitem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>

            {/* Search & User */}
            <div className="user-search flex items-center order-3">
              <div className="search text-white text-[20px] mr-[12px]">
                <Link to="/search">
                  <IoSearch />
                </Link>
              </div>
              <Link to="/profile" className="user flex items-center ml-[4px]">
                <img src={user_icon} className="h-[20px]" alt="User" />
                <h3 className="text-[16px] ml-[4px] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
                  Johan Patel
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
