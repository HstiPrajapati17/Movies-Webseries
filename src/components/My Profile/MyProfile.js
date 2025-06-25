import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MyWatchlist from "../MyAccount Components/MyWatchlist";
import MySubscription from "../MyAccount Components/MySubscription";
import LoggedDevice from "../MyAccount Components/LoggedDevice";
import DeleteAccount from "../MyAccount Components/DeleteAccount";
import EditProfile from "./EditProfile";
import UserImg from "../Assets/Images/user img.png";

import { IoIosCamera, IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { TfiAngleRight } from "react-icons/tfi";

import UseMediaQuery from "./UseMediaQuery";
import { Sidebar1, Sidebar2 } from "./Sidebar";

// Profile Section
const ProfileSection = ({ onEditProfile }) => (
  <>
    <div className="space-y-6 inter-font">
      <div className="flex flex-col relative sm:flex-row justify-between items-start sm:items-center bg-[#141414] border-[2px] border-[#fff]/20 rounded p-[20px] sm:p-[30px] gap-4">
        <div className="flex items-center flex-wrap gap-4">
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
            <img
              src={UserImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <IoIosCamera className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 bg-black text-white p-1 rounded-full cursor-pointer" />
          </div>
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-semibold text-white mb-[12px]">
              Johan Patel
            </h2>
            <div className="flex items-center text-sm text-white/60 mb-[8px]">
              <IoIosMail size={20} className="mr-2" />
              example123@gmail.com
            </div>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <IoCall size={18} className="mr-2" />
              +91 12345 67890
            </div>
          </div>
        </div>
        <button onClick={onEditProfile}>
          <div className="sm:block hidden">
            <TfiAngleRight size={26} />
          </div>
          <div className="sm:hidden block absolute top-[45%] right-[30px]">
            <TfiAngleRight size={26} />
          </div>
        </button>
      </div>

      {/* 👇 This is the subscription plan card */}
      <div>
        <h3 className="text-[18px] sm:text-[20px] text-white font-semibold mb-4">
          Current Plan
        </h3>
        {["Active", "Expired"].map((status, index) => (
          <div
            key={index}
            className="bg-[#141414] border-[2px] border-white/20 rounded-lg py-[20px] px-[20px] sm:px-[36px] mb-4"
          >
            <div className="flex justify-between items-start sm:items-center mb-[12px] gap-2">
              <h4 className="text-white text-[18px] sm:text-[20px] font-medium">
                Basic Plan
              </h4>
              <span
                className={`px-2 py-1 text-xs rounded-[2px] font-medium ${
                  status === "Active" ? "text-green-700" : "text-red-700"
                } bg-white`}
              >
                {status}
              </span>
            </div>
            <p className="text-sm text-white/60 font-light mb-2">
              Enjoy a library of movies and shows, including recent titles.
            </p>
            <p className="text-sm text-white/60 font-light mb-2">
              21 Sep, 2020 (06:35 pm) to 21 Oct, 2020 (06:35 pm)
            </p>
            <div className="text-white text-[18px] sm:text-[20px] font-medium mt-4">
              $9.99{" "}
              <span className="text-[14px] text-white/60 font-normal">
                /month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const MyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = UseMediaQuery("(min-width: 768px)");

  const pathToId = {
    "/profile": "my-profile",
    "/profile/edit-profile": "edit-profile",
    "/profile/watchlist": "watchlist",
    "/profile/subscription": "subscription",
    "/profile/device": "device",
    "/profile/password": "password",
    "/profile/delete": "delete",
    "/profile/logout": "logout",
  };

  const activeItem = pathToId[location.pathname] || "my-profile";

  const getActiveLabel = () => {
    if (activeItem === "edit-profile") return "Edit Profile";
    return (
      {
        "my-profile": "My Profile",
        watchlist: "My Watchlist",
        subscription: "My Subscription",
        device: "Logged Device",
        password: "Change Password",
        delete: "Delete Account",
        logout: "Logout",
      }[activeItem] || ""
    );
  };

  return (
    <div className="bg-[#0f0f0f] text-white inter-font min-h-screen">
      <Header bg_color_id="bg_color" />
      <div className="flex flex-col md:flex-row px-[26px] sm:px-[40px] md:px-[80px] pt-[100px] pb-[26px] sm:pb-[40px] md:pb-[80px]">
        <div className="sidebar">
          {isDesktop ? (
            <Sidebar1 activeItem={activeItem} />
          ) : (
            <Sidebar2 activeItem={activeItem} />
          )}
        </div>
        <main className="flex-1 overflow-auto">
          <div className="h-12 flex items-center px-2 sm:px-4 text-base sm:text-lg text-white/40 mb-4">
            <Link to="/home" className="hover:text-white">
              Home
            </Link>
            {activeItem === "edit-profile" && (
              <>
                <span className="mx-2">
                  <TfiAngleRight className="text-white/50" />
                </span>
                <span
                  onClick={() => navigate("/profile")}
                  className="hover:text-white cursor-pointer"
                >
                  My Profile
                </span>
              </>
            )}
            <span className="mx-2">
              <TfiAngleRight className="text-white/50" />
            </span>
            <span className="text-white">{getActiveLabel()}</span>
          </div>

          {/* ✅ Routes must be relative (no leading slashes) */}
          <Routes>
            <Route
              path=""
              element={
                <ProfileSection
                  onEditProfile={() => navigate("edit-profile")}
                />
              }
            />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="watchlist" element={<MyWatchlist />} />
            <Route path="subscription" element={<MySubscription />} />
            <Route path="device" element={<LoggedDevice />} />
            <Route path="delete" element={<DeleteAccount />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
