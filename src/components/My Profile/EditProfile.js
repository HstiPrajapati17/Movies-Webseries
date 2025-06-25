import React, { useState } from "react";
import UserImg from "../Assets/Images/user img.png";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [gender, setGender] = useState("male");
  return (
    <div className="edit-profile">
      <div className="border-[2px] border-white/20 p-[24px] sm:p-[40px] rounded flex flex-col gap-10">
        {/* Profile Image Section */}
        <div className="relative h-[80px] w-[80px] sm:w-[120px] sm:h-[120px]">
          <img
            src={UserImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-black p-2 rounded-full cursor-pointer">
            <FaCamera className="text-white/60" />
          </div>
        </div>

        {/* Form Section */}
        <div className="user-details w-full sm:w-[80%] md:w-full xl:w-[80%]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Johan"
                className="bg-[#1f1f1f] text-white border-[1px] border-transparent hover:border-white/20 rounded-[2px] px-4 py-2 focus:outline-none focus:border-white/20"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Patel"
                className="bg-[#1f1f1f] text-white border-[1px] border-transparent hover:border-white/20 rounded-[2px] px-4 py-2 focus:outline-none focus:border-white/20"
              />
            </div>

            {/* Mobile No. */}
            <div className="flex flex-col relative">
              <label htmlFor="mobile" className="text-white text-sm mb-2">
                Mobile No.
              </label>
              <div className="relative">
                <select className="absolute top-1/2 left-[2px] h-[80%] -translate-y-1/2 z-10 bg-[#1f1f1f] text-white border-r border-white/20 rounded-l-[2px] px-3 focus:outline-none">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="65656 56565"
                  className="bg-[#1f1f1f] text-white border-[1px] border-transparent hover:border-white/20 rounded-[2px] pl-[100px] pr-4 py-2 w-full focus:border-white/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johanpatel123@gmail.com"
                className="bg-[#1f1f1f] text-white border-[1px] border-transparent hover:border-white/20 rounded-[2px] px-4 py-2 focus:outline-none focus:border-white/20"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col xl:col-span-2">
              <label className="text-white text-sm mb-2">Gender</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-white text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2 text-white text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  Female
                </label>
                <label className="flex items-center gap-2 text-white text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={() => setGender("other")}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="watch-play-btn flex justify-center text-white  sm:w-[39%] px-[46px] py-[10px] rounded-[2px] font-semibold text-base gap-3 transition-all duration-300 z-20 relative">
          Update
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
