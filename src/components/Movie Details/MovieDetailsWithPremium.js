import React from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import { MainSliderMovies } from "../MoviesList/MoviesList";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = parseInt(id);
  const movie = MainSliderMovies.find((m) => m.id === movieId);
  const HandleBackArrow = () => {
    navigate(`/home`);
  };

  if (!movie) {
    return (
      <div className="bg-[#0f0f0f] text-white w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
          <p className="text-white/60 mb-6">
            The movie with ID {id} doesn't exist.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 mx-auto"
          >
            <BiArrowBack /> Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const isPremium = [2, 4, 5].includes(movie.id);

  return (
    <div className="bg-[#0f0f0f] text-white w-full inter-font">
      {/* Banner */}
      <div className="relative h-[736px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${movie.MovieDetailsBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t"></div>
        </div>

        <button
          onClick={HandleBackArrow}
          className="absolute top-6 left-6 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <BiArrowBack size={24} className="text-white" />
        </button>

        <div className="relative z-10 h-full w-full flex items-center">
          <div className="px-[26px] sm:px-[40px] md:px-[80px]">
            <div className="max-w-[700px]">
              <h1 className="text-white font-bold mb-6 leading-none">
                <img src={movie.title} alt={movie.name} className="w-[50%]" />
              </h1>

              <div className="flex items-center gap-[8px] md:gap-[14px] mb-6 text-white/60 text-[14px]">
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">{movie.year}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">{movie.duration}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">{movie.genre}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">3 Languages</span>
              </div>

              <p className="text-white/60 text-[16px] font-normal leading-relaxed mb-6 ">
                {movie.img_description}
              </p>

              {/* Watch Now Button */}
              <div className="flex justify-start items-center gap-4 mb-4">
                <button
                  onClick={() =>
                    isPremium
                      ? navigate("/premium-page") // ✅ Redirects to premium plans
                      : navigate(`/watch-now-movies/${movie.id}`)
                  }
                  className="group watch-play-btn text-white px-[50px] py-[10px] rounded font-normal text-base transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <FaPlay
                    size={18}
                    className="group-hover:scale-110 transition-transform fill-white"
                  />
                  Watch Now
                </button>

                <button className="bg-[#000]/20 cursor-pointer rounded-[3px] py-[7px] md:py-[10px] px-[9px] md:px-[10px] text-[20px] text-white border-[1px] border-[#fff]/30 hover:border-white/80 transition-colors">
                  <FiPlus />
                </button>
              </div>

              {isPremium && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group text-white py-3 rounded font-semibold text-base transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                    <FaCrown
                      size={22}
                      className="transition-transform text-yellow-600"
                    />
                    Subscribe for $19/year
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f] to-transparent" />
        </div>
      </div>

      {/* Details Section */}
      <div className="px-8 lg:px-20 py-10 inter-font">
        <div className="text-sm text-white/60 mb-4">
          <Breadcrumb />
        </div>

        <h2 className="text-2xl font-medium mb-4">{movie.name}</h2>

        <div className="flex flex-wrap gap-4 text-sm mb-6 items-center">
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 py-1 rounded">
            {movie.year}
          </span>
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 py-1 rounded">
            U/A 13+
          </span>
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 py-1 rounded">
            {movie.duration}
          </span>
        </div>

        <div className="mb-6 text-white/60 leading-relaxed space-y-[10px]">
          <div className="flex flex-wrap">
            <p className="mr-[8px] font-normal">Genres:</p>
            <p className=" text-white font-normal">
              {movie.genre}, Suspense, Action
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className=" mr-[8px] font-normal">Languages:</p>
            <p className=" text-white font-normal">Hindi, English, Tamil</p>
          </div>
          <div className="flex flex-wrap">
            <p className=" mr-[8px] font-normal">Content Description:</p>
            <p className=" text-white font-normal">
              Violence, foul language, alcohol use, sexual content, substance
              use, tobacco depictions
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className=" mr-[8px] font-normal">Director:</p>
            <p className=" text-white font-normal">Milap Zaveri</p>
          </div>
          <div className="flex flex-wrap">
            <p className=" mr-[8px] font-normal">Release Year:</p>
            <p className=" text-white font-normal">{movie.year}</p>
          </div>
          <p className="text-[14px] flex flex-col leading-relaxed">
            {movie.description}
            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">
              Show more
            </span>
          </p>
        </div>

        {movie.cast && movie.cast.length > 0 && (
          <div className="bg-black/50 p-[40px] border-[1px] border-white/20 rounded-[6px] backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-white">Starring</h3>

            <div className="grid gap-6 lg:grid-cols-9 [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))]">
              {movie.cast.map((actor, index) => (
                <div key={index} className="text-center group">
                  <div className="relative overflow-hidden rounded-full mb-3">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-[100px] h-[100px] object-cover rounded-full mx-auto border-2 border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">
                    {actor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
