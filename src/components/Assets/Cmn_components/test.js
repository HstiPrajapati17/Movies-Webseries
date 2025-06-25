// FeaturedMovieSlider.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

const movies = [
  {
    id: 1,
    title: "Money Heist",
    episodes: "24 Episodes",
    genre: "Drama",
    rating: "UA 13+",
    quality: "62 x 22",
    price: "$19/year",
    image: "/images/moneyheist.jpg",
  },
  {
    id: 2,
    title: "Kantara",
    image: "/images/kantara.jpg",
  },
  {
    id: 3,
    title: "Pushpa",
    image: "/images/pushpa.jpg",
  },
  {
    id: 4,
    title: "Blade Runner",
    image: "/images/bladerunner.jpg",
  },
  {
    id: 5,
    title: "Adipurush",
    image: "/images/adipurush.jpg",
  },
];

const MovieSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className="bg-[#0F0F0F] py-8 px-4 md:px-16">
      <h2 className="text-white text-2xl font-semibold mb-6">Top Movies This Week</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`relative transition-all duration-500 rounded-md overflow-hidden ${
              index === activeIndex ? "w-[380px] h-[320px]" : "w-[200px] h-[300px]"
            }`}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-md"
            />
            {index === activeIndex && (
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent text-white p-4 flex flex-col justify-end">
                <h3 className="text-lg font-bold mb-1">
                  <span className="text-white/80">{movie.title.split(" ")[0]} </span>
                  <span className="text-red-500">{movie.title.split(" ")[1]}</span>
                </h3>
                {movie.episodes && (
                  <p className="text-xs text-white/60 mb-2">
                    {movie.episodes} - {movie.genre}
                  </p>
                )}
                {movie.rating && (
                  <div className="flex gap-2 items-center mb-2">
                    <span className="bg-white text-black text-xs px-1 py-0.5 rounded">
                      {movie.rating}
                    </span>
                    <span className="text-sm font-semibold">{movie.quality}</span>
                    <button className="bg-black/40 rounded p-1">
                      <BsPlus className="text-white" />
                    </button>
                  </div>
                )}
                <div className="flex gap-3">
                  <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded flex items-center gap-2">
                    <FaPlay size={12} /> Watch Now
                  </button>
                  {movie.price && (
                    <button className="text-sm flex items-center gap-2">
                      <span className="text-yellow-400">★</span> Subscribe for {movie.price}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
