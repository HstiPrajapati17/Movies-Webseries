import React from "react";
import poster1 from "../../Assets/Images/poster1.png";
import poster1title from "../../Assets/Images/poster1title.png";
import poster2 from "../../Assets/Images/poster2.png";
import poster2title from "../../Assets/Images/poster2title.png";
import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Poster = () => {
  const posterDetails = [
    {
      id: 1,
      title: poster1title,
      year: "2024",
      season: "Season 3",
      genre: "Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
      background: poster1,
    },
    {
      id: 2,
      title: poster2title,
      year: "2024",
      season: "2h 31 min",
      genre: "Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
      background: poster2,
    },
  ];
  return (
    <div className="poster-movie">
      <div className="bg-[#0F0F0F] py-[20px] md:py-[60px] w-full">
        <div className="mx-[26px] sm:mx-[40px] md:mx-[80px]">
          <div className="row">
            {posterDetails.map((poster) => (
              <div className="col-lg-6 col-12">
                <div className="poster rounded-[4px] relative mb-[12px]">
                  <img src={poster.background} className="rounded-[3px] " />
                  <div className="poster-content absolute bottom-0 left-0 px-[12px] sm:px-[16px] py-[18px] sm:py-[32px] ">
                    <div className="w-[34%] sm:w-[50%] xl:h-full xl:w-full">
                      <img src={poster.title} />
                    </div>
                    <div className="flex items-center gap-[8px] md:gap-[12px] mb-[0px] lg:mb-[8px] text-white/80 text-sm lg:text-base sm:pl-[12px]">
                      <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                      <span className="font-medium">{poster.year}</span>
                      <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                      <span className="font-medium">{poster.season}</span>
                      <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                      <span className="font-medium">{poster.genre}</span>
                    </div>
                    <p className="text-white text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[14px] sm:leading-[20px] lg:leading-[21px] sm:pl-[12px] mb-[8px] sm:mb-[12px] w-[88%]">
                      {poster.description}
                    </p>
                    {/* Buttons */}
                    <div className="flex justify-start items-center sm:pl-[12px]">
                      <button className="group watch-play-btn text-white px-[12px] md:px-11 py-[9px] md:py-3 rounded font-semibold text-[14px] sm:text-[16px] transition-all duration-300 flex items-center gap-[8px] sm:gap-3 shadow-lg hover:shadow-xl">
                        <FaPlay
                          size={18}
                          className="group-hover:scale-110 transition-transform fill-white"
                        />
                        Watch Now
                      </button>
                      <span className="bg-black/20 cursor-pointer rounded-[3px] ml-[14px] py-[9px] md:py-[14px] px-[9px] md:px-[14px] text-[20px] text-white border-[1px] border-[#fff]/50">
                        <FiPlus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;