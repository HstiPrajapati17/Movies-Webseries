import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCrown, FaPlay, FaPlus } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

import bg1 from "../../Assets/Images/MoneyHeist.png";
import bg1title from "../../Assets/Images/MoneyHeistTitle.png";
import bg2 from "../../Assets/Images/Kantara.png";
import bg2title from "../../Assets/Images/KantaraTitle.png";
import bg3 from "../../Assets/Images/Pushpa2.png";
import bg3title2 from "../../Assets/Images/Pushpa2Title2.png";
import bg4 from "../../Assets/Images/blade Runner.png";
import bg4title from "../../Assets/Images/BladeRunnerTitle.png";
import bg5 from "../../Assets/Images/Adipurush.png";
import bg5title from "../../Assets/Images/AdipurushTitle.png";
import bg6 from "../../Assets/Images/tomorrowWar.png";
import bg6title from "../../Assets/Images/tomorrowWarTitle.png";
import { BiChevronLeft, BiChevronRight, BiVolumeMute } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

const movies = [
  {
    id: 1,
    title: bg1title,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg1,
  },
  {
    id: 2,
    title: bg2title,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg2,
  },
  {
    id: 3,
    title: bg3title2,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg3,
  },
  {
    id: 4,
    title: bg4title,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg4,
  },
  {
    id: 5,
    title: bg5title,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg5,
  },
  {
    id: 6,
    title: bg6title,
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: bg6,
  },
];

const FeaturedMovieSlider = ({ title_name }) => {
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6.1,
    slidesToScroll: 1,

    beforeChange: (_, next) => setFirstVisibleIndex(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.06,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container featured-movie relative inter-font">
      <div className="bg-[#0F0F0F] py-[26px] md:py-[60px] w-full">
        <div className="pl-[26px] sm:pl-[40px] md:pl-[80px]">
          {/* Header */}
          <div className="mb-[18px] sm:mb-6">
            <h2 className="text-white text-[18px] md:text-2xl font-medium inter-font">
              {title_name}
            </h2>
          </div>
          <Slider {...settings}>
            {movies.map((movie, index) => {
              const isFirstVisible = index === firstVisibleIndex;

              return (
                <div key={movie.id}>
                  <div
                    className={`relative cursor-pointer transition-all duration-500 overflow-hidden rounded-md mx-[18px] ${
                      isFirstVisible ? "w-full" : "w-full"
                    } h-[320px]`}
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className={`h-full duration-500 ml-[18px]  ${
                        isFirstVisible ? "w-full" : "w-full"
                      } h-full`}
                    />
                    {isFirstVisible && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent text-white p-[10px] md:p-4 flex flex-col justify-end">
                          <h3 className="text-lg font-bold mb-1 ml-[12px]">
                            <img
                              src={movie.title}
                              className="bg-cover h-auto w-[172px]"
                            />
                          </h3>
                          {movie.episodes && (
                            <p className="text-[15px] font-light text-white/60 flex gap-[10px] items-center ml-[12px] mb-[14px]">
                              {movie.episodes}{" "}
                              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                              {movie.genre}{" "}
                              <span className="bg-transparent rounded-[3px] py-1 px-2 text-xs text-white border-[1px] border-[#fff]/60">
                                {movie.rating}
                              </span>
                            </p>
                          )}
                          <div className="flex justify-start items-center">
                            <button className="text-white watch-play-btn text-[16px] md:text-[18px] w-[140px] md:w-[200px] px-[12px] py-[10px] py rounded flex justify-center items-center gap-2 ml-[12px]">
                              <FaPlay size={12} /> Watch Now
                            </button>
                            <span className="bg-transparent cursor-pointer rounded-[3px] ml-[14px] py-[9px] md:py-[11px] px-[9px] md:px-[11px] text-[20px] text-white border-[1px] border-[#fff]/50">
                              <FiPlus />
                            </span>
                          </div>
                          {movie.price && (
                            <h4 className="md:text-[16px] text-[14px] text-white flex items-center font-light gap-2 mt-[12px] ml-[12px]">
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 576 512"
                                fill="url(#grad1)"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <defs>
                                  <linearGradient
                                    id="grad1"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                  >
                                    <stop offset="0%" stop-color="#facc15" />
                                    <stop offset="100%" stop-color="#ef4444" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40
                                  c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4
                                  -48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40
                                  -40-40S0 113.9 0 136s17.5 40 39.9 40c.2 0 .5 0 .7 0L86.4
                                  427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63
                                  -52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9
                                  -40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9
                                  12.7-39.5 7.5-48.6-10.7L309 106z"
                                />
                              </svg>
                              Subscribe for {movie.price}
                            </h4>
                          )}
                        </div>
                        <div className="absolute top-0 right-0 m-[12px]">
                          <BiVolumeMute className="bg-[#0000004d] text-white/50 border-[1px] border-[#fff]/50 rounded-full md:h-[48px] h-[38px] w-[38px] md:w-[48px] text-[10px] p-[10px]" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute prev-arrow left-[72%] sm:left-[79%] md:left-[82%] lg:left-[86%] xl:left-[90%] top-[-8%] transform -translate-y-1/2 z-20 cursor-pointer group"
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
      <BiChevronLeft
        size={24}
        className="text-white group-hover:scale-110 transition-transform"
      />
    </div>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute next-arrow right-6 top-[-8%] transform -translate-y-1/2 z-20 cursor-pointer group"
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
      <BiChevronRight
        size={24}
        className="text-white group-hover:scale-110 transition-transform"
      />
    </div>
  </div>
);

export default FeaturedMovieSlider;
