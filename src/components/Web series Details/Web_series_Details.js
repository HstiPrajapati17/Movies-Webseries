import React, { useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { BiArrowBack, BiChevronDown, BiChevronUp } from "react-icons/bi";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import { MainSliderMovies } from "../MoviesList/MoviesList";
import { motion, AnimatePresence } from "framer-motion";

const WebSeriesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openSeason, setOpenSeason] = useState(1);

  // Convert id to number since useParams returns string
  const seriesId = parseInt(id);
  const series = MainSliderMovies.find((m) => m.id === seriesId);

  console.log(series);

  const toggleSeason = (index) => {
    setOpenSeason(openSeason === index ? null : index);
  };

  // Function to handle episode click and navigate to watch page
  const handleEpisodeClick = (seasonIndex, episodeIndex) => {
    // Navigate to watch page with season and episode parameters
    navigate(
      `/webseries/${id}/episode?season=${seasonIndex + 1}&episode=${
        episodeIndex + 1
      }`
    );
  };

  if (!series) {
    return (
      <div className="bg-[#0f0f0f] text-white w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Web Series not found</h1>
          <p className="text-white/60 mb-6">
            The web series with ID {id} doesn't exist.
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

  return (
    <div className="bg-[#0f0f0f] text-white w-full inter-font">
      {/* Banner */}
      <div className="relative h-[736px] w-full">
        {/* Background Image with overlays */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${
              series.MovieDetailsBg || series.background
            })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t"></div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-6 left-[8px] sm:left-[28px] md:left-[60px] z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <BiArrowBack size={24} className="text-white" />
        </button>

        {/* Main Content */}
        <div className="relative z-10 h-full w-full flex items-center">
          <div className="px-[26px] sm:px-[40px] md:px-[80px]">
            <div className="max-w-2xl">
              {/* Title */}
              <h1 className="text-white font-bold mb-6 leading-none">
                <img src={series.title} alt={series.name} className="w-[50%]" />
              </h1>
              {/* Series Info */}
              <div className="flex items-center gap-[8px] md:gap-[14px] mb-6 text-white/60 text-[14px]">
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">{series.newSeason}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">{series.genre}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                <span className="font-normal">3 Languages</span>
              </div>
              {/* Description */}
              <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-2xl">
                {series.img_description}
              </p>
              {/* Buttons */}
              <div className="flex justify-start items-center">
                <button
                  onClick={() => handleEpisodeClick(0, 0)} // Navigate to first episode of first season
                  className="group watch-play-btn text-white px-[28px] md:px-11 py-[9px] md:py-3 rounded font-semibold text-[14px] sm:text-[16px] transition-all duration-300 flex items-center gap-[8px] sm:gap-3 shadow-lg hover:shadow-xl"
                >
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
              {/* Premium subscription for specific series */}
              {[2, 4, 5].includes(series.id) && (
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

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f] to-transparent" />
        </div>
      </div>

      {/* Details Section */}
      <div className="px-[18px] sm:px-[32px] lg:px-20 py-[18px] lg:py-10 inter-font">
        <div className="text-sm text-white/60 mb-4">
          <Breadcrumb />
        </div>

        <h2 className="text-2xl font-medium mb-4">{series.name}</h2>

        <div className="flex flex-wrap gap-4 text-sm mb-6 items-center">
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 font-normal py-1 rounded">
            U/A 13+
          </span>
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 font-normal py-1 rounded">
            {series.newSeason}
          </span>
          <span className="border-[1px] bg-black border-white/40 text-white/60 px-3 font-normal py-1 rounded">
            Hindi
          </span>
        </div>

        <div className="mb-6 text-white/60 leading-relaxed space-y-3">
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-[8px] font-normal">Genres:</p>
            <p className="text-white">{series.genre}, Suspense, Thriller</p>
          </div>
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-[8px] font-normal">Languages:</p>
            <p className="text-white">{series.languages}</p>
          </div>
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-[8px] font-normal">Content Description:</p>
            <p className="text-white">
              Violence, foul language, alcohol use, sexual content, substance
              use, tobacco depictions
            </p>
          </div>
          <div className="flex flex-wrap text-[14px]">
            <p className="mr-[8px] font-normal">Director:</p>
            <p className="text-white">Prakash Jha</p>
          </div>
          <p className="text-[10px] sm:text-[14px] leading-relaxed flex flex-col">
            {series.description}
            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">
              Show more
            </span>
          </p>
        </div>

        {/* Episodes Section */}
        <div className="bg-black/50 pt-[18px] px-[18px] sm:pt-[32px] sm:px-[32px] md:pt-[40px] md:px-[40px] border-[1px] border-white/20 rounded-[6px] backdrop-blur-sm mb-8">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Seasons and Episodes
          </h3>

          {series.seasons.map((season, i) => (
            <div
              key={i}
              className="border-[1px] border-white/20 rounded mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleSeason(i)}
                className="w-full px-[8px] md:px-6 py-[12px] sm:py-4 flex justify-between items-center text-white text-left"
              >
                <span className="font-medium text-[14px] sm:text-[20px]">
                  {season.season}
                  <span className="text-[12px] sm:text-[16px] ml-2 text-white/60 font-medium">
                    {season.episodes.length} Episodes
                  </span>
                </span>
                {openSeason === i ? (
                  <BiChevronUp size={24} />
                ) : (
                  <BiChevronDown size={24} />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openSeason === i && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-[18px] md:px-6 pb-6"
                  >
                    <div className="space-y-4 pt-2">
                      {season.episodes.map((ep, epIndex) => (
                        <div
                          key={epIndex}
                          onClick={() => handleEpisodeClick(i, epIndex)} // Add click handler here
                          className="flex items-center gap-[8px] sm:gap-4 border-white/10 border-b-[1px] md:border-0 py-[16px] md:p-4 bg-black/30 hover:bg-black/50 transition-colors cursor-pointer group"
                        >
                          <div className="relative w-[40%] sm:w-auto">
                            <div className="rounded-[2px] overflow-hidden flex items-center justify-center">
                              <img
                                src={ep.thumbnail}
                                alt={ep.title}
                                className="w-full h-full object-cover"
                              />
                              <FaPlay className="absolute text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-[6px] sm:mb-[12px] text-[12px] sm:text-[16px]">
                              S{i + 1} E{epIndex + 1} : {ep.title}
                            </h4>
                            <p className="text-white/60 font-light text-[8px] sm:text-sm">
                              On his way from a friend's house, young Will sees
                              something terrifying . Nearby, a sinister secret
                              lurks in the depths of a government lab.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Cast Section */}
        {series.cast && series.cast.length > 0 && (
          <div className="bg-black/50 p-[24px] sm:p-[40px] border-[1px] border-white/20 rounded-[6px] backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-white">Starring</h3>

            <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
              {series.cast.map((actor, index) => (
                <div key={index} className="text-center group">
                  <div className="relative overflow-hidden rounded-full mb-3">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] object-cover rounded-full mx-auto border-2 border-white/10 group-hover:border-white/30 transition-all duration-300 "
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

export default WebSeriesDetails;
