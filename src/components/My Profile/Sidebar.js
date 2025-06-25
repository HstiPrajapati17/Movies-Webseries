import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import Usericon from "../Assets/Images/user-icon.png";
import Watchlisticon from "../Assets/Images/watchlist.png";
import Subscriptionicon from "../Assets/Images/subscription.png";
import LoggedDeviceicon from "../Assets/Images/logged device.png";
import ChangePasswordicon from "../Assets/Images/change password.png";
import DeleteAccounticon from "../Assets/Images/delete account.png";
import LogOuticon from "../Assets/Images/logout.png";
import { AiOutlineClose } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Sidebar items
const sidebarItems = [
  { id: "my-profile", label: "My Profile", icon: Usericon, path: "" },
  {
    id: "watchlist",
    label: "My Watchlist",
    icon: Watchlisticon,
    path: "watchlist",
  },
  {
    id: "subscription",
    label: "My Subscription",
    icon: Subscriptionicon,
    path: "subscription",
  },
  {
    id: "device",
    label: "Logged Device",
    icon: LoggedDeviceicon,
    path: "device",
  },
  {
    id: "password",
    label: "Change Password",
    icon: ChangePasswordicon,
    path: "password",
  },
  {
    id: "delete",
    label: "Delete Account",
    icon: DeleteAccounticon,
    path: "delete",
  },
  { id: "logout", label: "Logout", icon: LogOuticon, path: "logout" },
];

// Sidebar for large screens
export const Sidebar1 = ({ activeItem }) => {
  const navigate = useNavigate();

  const handleSidebarClick = (id, path) => {
    if (id === "logout") {
      setShowLogoutModal(true);
    } else if (id === "password") {
      setShowChangePass(true);
    } else {
      navigate(`/profile/${path}`);
    }
  };
  //   LogOut code :
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const confirmLogout = () => {
    localStorage.clear();
    setShowLogoutModal(false);
    navigate("/login");
  };
  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  //   Change Password code :
  const [showChangePass, setShowChangePass] = useState(false);
  const confirmPassChange = () => {
    localStorage.clear();
    setShowChangePass(false);
    navigate("/password");
  };
  const CancelPassChange = () => {
    setShowChangePass(false);
  };

  return (
    <>
      <aside className="w-full md:w-[280px] bg-[#141414] border-[2px] border-[#fff]/20 rounded-[8px] overflow-hidden mb-6 md:mb-0 md:mr-8">
        {sidebarItems.map(({ id, label, icon, path }) => (
          <div
            key={id}
            onClick={() => {
              handleSidebarClick(id, path);
            }}
            className={`cursor-pointer w-full flex items-center px-5 py-3 text-left text-sm transition-all duration-200 hover:bg-white/10 ${
              activeItem === id ||
              (id === "my-profile" && activeItem === "edit-profile")
                ? "bg-[#fff]/10 text-white border-b-[2px] border-white/60"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <div className="border-[2px] border-white/25 p-[8px] rounded mr-[12px] bg-black">
              <img src={icon} alt={label} className="w-5 h-5 object-contain" />
            </div>
            {label}
          </div>
        ))}
      </aside>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#141414] p-6 text-white w-[400px]">
            <div className="flex justify-between items-center border-b-[1px] border-white/10 pb-[12px]">
              <h1 className="text-lg font-semibold">Log out</h1>
              <button
                onClick={cancelLogout}
                className="text-white hover:text-red-500 transition duration-200"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>

            {/* Centered Text Message */}
            <h2 className="text-sm text-white/60 font-normal my-6 text-center">
              Are you sure you want to logout?
            </h2>

            <div className="flex justify-between mt-[32px]">
              <button
                onClick={cancelLogout}
                className="bg-white/10 hover:bg-white/20 text-[14px] text-white px-[46px] py-2 rounded-[2px] "
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="watch-play-btn text-white text-[14px] px-[32px] py-2 rounded-[2px]"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password form */}
      {showChangePass && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#141414] p-6 text-white w-[400px]">
            <div className="flex justify-between items-center border-b-[1px] border-white/10 pb-[12px] mb-[12px]">
              <h1 className="text-lg font-semibold ">Change Password</h1>
              <button
                onClick={CancelPassChange}
                className="text-white hover:text-red-500 transition duration-200"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>

            {/* Centered Text Message */}
            <form className="change-pass-form flex flex-col gap-4 p-[12px]">
              {/* Current Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">Old Password</label>
                <input
                  type="password"
                  placeholder="Old password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEye className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>

              {/* New Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="New password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] hover:border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEye className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>

              {/* Confirm New Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] hover:border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEyeSlash className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>
            </form>

            <div className="flex justify-between mt-[32px]">
              <button
                onClick={CancelPassChange}
                className="bg-white/10 text-[14px] hover:bg-white/20 text-white px-[46px] py-2 rounded-[2px] "
              >
                Cancel
              </button>
              <button
                onClick={confirmPassChange}
                className="watch-play-btn text-[14px] text-white px-[32px] py-2 rounded-[2px]"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Sidebar for mobile
export const Sidebar2 = ({ activeItem }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const handleSidebarClick = (id, path) => {
    if (id === "logout") {
      setShowLogoutModal(true);
    } else if (id === "password") {
      setShowChangePass(true);
    } else {
      navigate(`/profile/${path}`);
    }
  };

  // log Out code:
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const confirmLogout = () => {
    localStorage.clear();
    setShowLogoutModal(false);
    navigate("/login");
  };
  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  //   Change Password code :
  const [showChangePass, setShowChangePass] = useState(false);
  const confirmPassChange = () => {
    localStorage.clear();
    setShowChangePass(false);
    navigate("/password");
  };
  const CancelPassChange = () => {
    setShowChangePass(false);
  };
  return (
    <>
      <aside className="relative md:w-[280px] w-full mb-6 md:mb-0 md:mr-8">
        <div className="relative bg-[#141414] border-[2px] border-[#fff]/20 rounded-[8px] overflow-hidden">
          <div
            ref={scrollRef}
            className="flex sm:flex-col flex-row overflow-x-auto sm:overflow-visible scroll-smooth scrollbar-hide"
          >
            {sidebarItems.map(({ id, label, icon, path }) => (
              <button
                key={id}
                onClick={() => handleSidebarClick(id, path)}
                className={`flex items-center px-[16px] sm:px-5 py-[8px] sm:py-3 text-left text-sm transition-all duration-200 flex-shrink-0 ${
                  activeItem === id ||
                  (id === "my-profile" && activeItem === "edit-profile")
                    ? "bg-[#fff]/10 text-white border-b-[2px] border-white/60"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div className="border-[2px] border-white/25 p-[6px] sm:p-[8px] rounded mr-[8px] sm:mr-[12px] bg-black">
                  <img
                    src={icon}
                    alt={label}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                </div>
                {label}
              </button>
            ))}
          </div>
        </div>
      </aside>

		{/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] rounded-[2px] p-[16px] sm:p-[24px] w-[90%] max-w-[400px] text-white shadow-lg">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h2 className="text-lg font-semibold">Log out</h2>
              <button
                onClick={cancelLogout}
                className="text-white hover:text-red-500 transition duration-200"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>

            <p className="text-sm text-white/70 text-center my-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-between gap-4 mt-4">
              <button
                onClick={cancelLogout}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-[2px]"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="w-full watch-play-btn text-white py-2 rounded-[2px]"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

	  {/* Change Password form */}
      {showChangePass && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#141414] p-6 text-white w-[400px]">
            <div className="flex justify-between items-center border-b-[1px] border-white/10 pb-[12px] mb-[12px]">
              <h1 className="text-lg font-semibold ">Change Password</h1>
              <button
                onClick={CancelPassChange}
                className="text-white hover:text-red-500 transition duration-200"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>

            {/* Centered Text Message */}
            <form className="change-pass-form flex flex-col gap-4 sm:p-[12px]">
              {/* Current Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">Old Password</label>
                <input
                  type="password"
                  placeholder="Old password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEye className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>

              {/* New Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="New password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] hover:border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEye className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>

              {/* Confirm New Password */}
              <div className="flex flex-col relative">
                <label className="text-white/80 text-sm mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] hover:border-white/20 focus:outline-none focus:border-white/40"
                />
                <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                  <button className="btn btn-default reveal" type="button">
                    <FaEyeSlash className="text-[#a5a5a5]" />
                  </button>
                </span>
              </div>
            </form>

            <div className="flex justify-between mt-[32px] p-[">
              <button
                onClick={CancelPassChange}
                className="bg-white/10 text-[14px] hover:bg-white/20 text-white px-[24px] sm:px-[46px] py-2 rounded-[2px] "
              >
                Cancel
              </button>
              <button
                onClick={confirmPassChange}
                className="watch-play-btn text-[14px] text-white px-[18px] sm:px-[32px] py-2 rounded-[2px]"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
