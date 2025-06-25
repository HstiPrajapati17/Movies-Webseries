import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [activeBtn, setActiveBtn] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f0f0f] pt-[78px] sm:pt-[80px] md:pt-[160px] pb-[26px] sm:pb-[40px] md:pb-[80px] px-[26px] sm:px-[40px] md:px-[80px] text-white inter-font">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[30px] font-semibold capitalize">
          {categoryName.replace("&", " & ")}
        </h1>
      </div>
      <p className="text-white/60 text-[16px] mb-[48px] inter-font">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>

      {/* Button Group */}
      <div className="btn-group flex mb-6">
        {["All", "Movies", "Web series"].map((label) => (
          <button
            key={label}
            onClick={() => setActiveBtn(label)}
            className={`mr-[12px] h-[40px] w-[132px] px-[14px] py-2 rounded flex justify-center items-center text-white 
              ${
                activeBtn === label
                  ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"
                  : "bg-[#2b2b2b] hover:border hover:border-[#fff]/40"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
      {activeBtn === "All" && (
        <div>
          <h2 className="text-xl mb-2">All Content</h2>
        </div>
      )}
      {activeBtn === "Movies" && (
        <div>
          <h2 className="text-xl mb-2">Movies</h2>
        </div>
      )}
      {activeBtn === "Web series" && (
        <div>
          <h2 className="text-xl mb-2">Web Series</h2>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
