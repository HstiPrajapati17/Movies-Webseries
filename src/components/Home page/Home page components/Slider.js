import React from "react";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const CustomPrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <div className="bg-black/60 hover:bg-black/80 p-2 rounded-full">
//       <BiChevronLeft className="text-white text-2xl" />
//     </div>
//   </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <div className="bg-black/60 hover:bg-black/80 p-2 rounded-full">
//       <BiChevronRight className="text-white text-2xl" />
//     </div>
//   </div>
// );

const MovieSlider = ({ title_name, movies }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.3,
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
    <div className="px-6 md:px-16 py-10 bg-[#0f0f0f] cursor-pointer">
      <h2 className="text-xl md:text-2xl text-white font-semibold mb-6">
        {title_name}
      </h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="px-2 inline-block">
            <img
              src={movie.image}
              alt=""
              className="rounded-xl h-[314px] w-[228px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
