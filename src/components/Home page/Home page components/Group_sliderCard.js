// Child Component: GenreCard.jsx
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Group_sliderCard = ({ title, images,path }) => {
  return (
    <Link to={path}>
      <div className="bg-[#000] border-[1px] group-slider-card border-[#fff]/20 p-[6px] sm:p-[12px] rounded-md mr-[16px] cursor-pointer hover:border-[#fff]/60 shadow-[0_0_15px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-2 gap-2 mb-3 relative transition-transform duration-300 group-hover:scale-105">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={title}
              className="h-[80px] w-[85px] object-cover rounded-sm"
            />
          ))}
          {/* Inner shadow overlay from bottom to top */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#141414] to-transparent pointer-events-none rounded" />
        </div>
        <div className="flex inter-font items-center md:py-[8px] justify-between text-white text-[12px] md:text-[16px] px-1">
          {title}
          <IoMdArrowForward size={24} />
        </div>
      </div>
    </Link>
  );
};

export default Group_sliderCard;
