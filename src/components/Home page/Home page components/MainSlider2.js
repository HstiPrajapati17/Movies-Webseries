import React from "react";
import Slider from "react-slick";
// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import bg1 from "../../Assets/Images/main_slider2bg1.png";
import bg1title from "../../Assets/Images/main_slider2bg1title.png";
import bg2 from "../../Assets/Images/main_slider2bg2.png";
import bg2title from "../../Assets/Images/main_slider2bg2title.png";
import bg3 from "../../Assets/Images/main_slider2bg3.png";
import bg3title from "../../Assets/Images/main_slider2bg3title.png";
import { FaCrown, FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const MainSlider2 = () => {
  const movies = [
    {
      id: 1,
      title: bg1title,
      year: "2024",
      duration: "2h 31 min",
      genre: "Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      background: bg1,
    },
    {
      id: 2,
      title: bg2title,
      year: "2024",
      duration: "2h 31 min",
      genre: "Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      background: bg2,
    },
    {
      id: 3,
      title: bg3title,
      year: "2024",
      duration: "2h 31 min",
      genre: "Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      background: bg3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
    customPaging: () => (
      <div className="w-2 h-2 bg-white/40 rounded-full hover:bg-white/80 transition-all duration-300"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative h-[612px] overflow-hidden mx-[26px] sm:mx-[40px] md:mx-[80px]">
      <style jsx>{`
        .custom-dots {
          bottom: 40px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
        }
        .custom-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
        }
        .custom-dots li button {
          width: 8px !important;
          height: 8px !important;
          padding: 0 !important;
        }
        .custom-dots li button:before {
          display: none !important;
        }
        .custom-dots li.slick-active div {
          background-color: rgba(255, 255, 255, 1) !important;
        }
        .slick-slider {
          height: 100%;
        }
        .slick-list {
          height: 100%;
        }
        .slick-track {
          height: 100%;
        }
      `}</style>

      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="absolute top-0 left-0 h-[612px]">
            {/* Background Image with overlays */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${movie.background})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full w-fu flex items-center">
              <div className="px-[26px] sm:px-[40px] md:px-[80px]">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1 className="text-white font-bold mb-6 leading-none">
                    <img src={movie.title} alt="Movie Title" />
                  </h1>

                  {/* Movie Info */}
                  <div className="flex items-center gap-[8px] md:gap-4 mb-6 text-white/80 text-sm lg:text-base">
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="font-medium">{movie.year}</span>
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="font-medium">{movie.duration}</span>
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="font-medium">{movie.genre}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-xl">
                    {movie.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-start items-center">
                    <button className="group watch-play-btn text-white px-[12px] md:px-11 py-[9px] md:py-3 rounded font-semibold text-[14px] sm:text-[16px] transition-all duration-300 flex items-center gap-[8px] sm:gap-3 shadow-lg hover:shadow-xl">
                      <FaPlay
                        size={18}
                        className="group-hover:scale-110 transition-transform fill-white"
                      />
                      Watch Now
                    </button>
                    <span className="bg-transparent cursor-pointer rounded-[3px] ml-[14px] py-[9px] md:py-[14px] px-[9px] md:px-[14px] text-[20px] text-white border-[1px] border-[#fff]/50">
                      <FiPlus />
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {[2, 4, 5].includes(movie.id) && (
                      <button className="group text-white py-3 rounded font-semibold text-base transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl sm:mt-[16px]">
                        <FaCrown
                          size={22}
                          className="transition-transform text-yellow-600"
                        />
                        Subscribe for $19/year
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider2;
