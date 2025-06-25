import React, { useState, useRef } from "react";
import bg1 from "../../Assets/Images/MoneyHeistPart4.png";
import bg2 from "../../Assets/Images/StrangerThings3.png";
import bg3 from "../../Assets/Images/Yaathisai.png";
import bg4 from "../../Assets/Images/masaan.png";
import bg5 from "../../Assets/Images/blade Runner.png";
import bg6 from "../../Assets/Images/pathan.png";
import bg7 from "../../Assets/Images/master.png";
import bg8 from "../../Assets/Images/Kisika bhai Kisiki Jaan.png";
import bg9 from "../../Assets/Images/JattMovie.png";
import bg10 from "../../Assets/Images/goat.png";
import Slider from "react-slick";
import { FaCrown } from "react-icons/fa";

const Top10MoviesSlider = ({ title }) => {
  const crownImages = [
    require("../../Assets/Images/StrangerThings3.png"),
    require("../../Assets/Images/Yaathisai.png"),
    require("../../Assets/Images/masaan.png"),
    require("../../Assets/Images/pathan.png"),
  ];
  const movies = [
    {
      id: 1,
      rank: 1,
      poster: bg1,
    },
    {
      id: 2,
      rank: 2,
      poster: bg2,
    },
    {
      id: 3,
      rank: 3,
      poster: bg3,
    },
    {
      id: 4,
      rank: 4,
      poster: bg4,
    },
    {
      id: 5,
      rank: 5,
      poster: bg5,
    },
    {
      id: 6,
      rank: 6,
      poster: bg6,
    },
    {
      id: 7,
      rank: 7,
      poster: bg7,
    },
    {
      id: 8,
      rank: 8,
      poster: bg8,
    },
    {
      id: 9,
      rank: 9,
      poster: bg9,
    },
    {
      id: 10,
      rank: 10,
      poster: bg10,
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.6,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Header */}

      <div className="slider-container">
        <div className="bg-[#0F0F0F] py-[20px] md:py-[60px] w-full">
          <div className="pl-[26px] sm:pl-[40px] md:pl-[80px]">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-white text-[18px] md:text-2xl font-medium inter-font">
                {title}
              </h2>
            </div>
            <div className="relative">
              <Slider {...settings}>
                {movies.map((movie) => (
                  <div key={movies.id} className="flex-shrink-0 px-[30px]">
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[2/3]">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-full h-full object-cover z-[5] transition-transform duration-300 group-hover:scale-105 rounded-lg"
                        />
                      </div>
                      {/* Rank Number */}
                      <div className="absolute bottom-[26px] left-1/5 transform -translate-x-1/2 translate-y-1/4 z-10">
                        <div
                          className="text-8xl font-black text-transparent"
                          style={{
                            background:
                              "linear-gradient(to bottom, #ffffff, #e0e0e0, #bcbcbc, #888888, #dcdcdc)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow:
                              "0 2px 4px #00000014",
                          }}
                        >
                          {movie.rank}
                        </div>
                      </div>
                      {/* Premium crown icon */}
                      <div className="premium-crown absolute top-0  pt-[8px] pl-[8px] z-[20]">
                        {crownImages.includes(movie.poster) && (
                          <FaCrown size={23} className="text-yellow-600" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Slider */}
      {/* <div className="relative overflow-visible">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="flex-shrink-0 px-2 relative"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="relative group cursor-pointer"> */}
      {/* Movie Poster */}
      {/* <div className="relative rounded-lg  ml-8">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    /> */}

      {/* Rank Number */}
      {/* <div className="absolute bottom-0 left-1/5 transform -translate-x-1/2 translate-y-1/4 z-10">
                      <div
                        className="text-8xl font-black drop-shadow-2xl"
                        style={{
                          background:
                            "linear-gradient( 180deg, #f5f5f5 0%, #cccccc 25%,  #999999 50%,  #cccccc 75%,  #f5f5f5 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {movie.rank}
                      </div>
                    </div> */}

      {/* Crown Icon for Top 3 */}
      {/* {movie.rank <= 3 && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-yellow-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 2a1 1 0 000 2v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 100-2H5zM4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div> */}
    </>
  );
};

export default Top10MoviesSlider;
