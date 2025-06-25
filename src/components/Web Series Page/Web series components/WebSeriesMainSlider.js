import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCrown, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MainWebseriesList } from "../../MoviesList/WebseriesList";

const WebSeriesMainSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <div className="custom-dot"></div>,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const handleMovieClick = (item, event) => {
    event.stopPropagation();

    // Navigate based on content type
    if (item.type === "Movie") {
      navigate(`/movies/${item.id}`);
    } else if (item.type === "Web series") {
      navigate(`/webseries/${item.id}`);
    } else {
      // Fallback - default to movies if type is not specified
      navigate(`/movies/${item.id}`);
    }
  };

  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      <style jsx>{`
        .custom-dots {
          bottom: 40px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 0px !important;
        }

        .custom-dots li {
          width: 16px !important;
          height: 16px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .custom-dots li div {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .custom-dots li.slick-active div {
          background-color: white;
          border-radius: 9999px;
          width: 10px;
          height: 10px;
          background-clip: content-box;
          padding: 2px;
          border: 1px solid white; /* Outer ring */
          box-sizing: content-box;
        }

        .custom-dots li button {
          padding: 0 !important;
        }

        .custom-dots li button:before {
          display: none !important;
        }
      `}</style>

      <Slider {...settings}>
        {MainWebseriesList.map((movie) => (
          <div key={movie.id} className="relative h-[750px] group">
            {/* Background Image Slide */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${movie.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <FaPlay size={48} className="text-white" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full w-full flex items-center pointer-events-none">
              <div className="px-[40px] md:px-[80px]">
                <div className="max-w-2xl pointer-events-auto">
                  <img src={movie.title} alt={movie.name} className="mb-6" />
                  <div className="text-white/80 mb-6 flex gap-[8px]">
                    <span>{movie.year}</span> • <span>{movie.duration}</span> •
                    <span>{movie.genre}</span>
                  </div>
                  <p className="text-white/90 mb-6 max-w-xl">
                    {movie.img_description}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMovieClick(movie, e);
                      }}
                      className="watch-play-btn text-white px-[46px] py-[10px] rounded font-semibold text-base flex items-center gap-3 transition-all duration-300 z-20 relative"
                    >
                      <FaPlay size={18} />
                      Watch Now
                    </button>
                  </div>
                  <div className="premium-task mt-[12px]">
                    {[2, 4, 5].includes(movie.id) && (
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="text-white flex items-center gap-2 hover:text-yellow-400 transition-colors z-20 relative"
                      >
                        <FaCrown className="text-yellow-600" />
                        Subscribe for $19/year
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-t from-[#000000] via-black to-transparent" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer group"
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
    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer group"
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

export default WebSeriesMainSlider;
