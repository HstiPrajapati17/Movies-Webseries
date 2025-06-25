import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoIosSearch } from "react-icons/io";
import { FaCrown } from "react-icons/fa";

import Morbius from "../Assets/Images/Morbius.png";
import kkbkkj from "../Assets/Images/Kisika bhai Kisiki Jaan.png";
import spmb from "../Assets/Images/SurajPe MangalBhari.png";
import pathan from "../Assets/Images/pathan.png";
import ant_man from "../Assets/Images/Ant-man.png";
import diesel from "../Assets/Images/Diesel.png";
import mh4 from "../Assets/Images/MoneyHeistPart4.png";
import st3 from "../Assets/Images/StrangerThings3.png";
import grayman from "../Assets/Images/grayMan.png";
import lucifer from "../Assets/Images/Lucifer.png";
import mh3 from "../Assets/Images/MoneyHeistPart3.png";
import mai from "../Assets/Images/Mai.png";
import bladeRunner from "../Assets/Images/blade Runner.png";
import blackPanther from "../Assets/Images/black panther.png";
import vasanthaMullai from "../Assets/Images/vasantha mullai.png";
import DandD from "../Assets/Images/dungeons & dragons.png";
import sicario from "../Assets/Images/sicario.png";
import master from "../Assets/Images/master.png";
import no_result from "../Assets/Images/no reasult found.png";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const crownImages = [pathan, ant_man, st3, grayman, lucifer, DandD, sicario];
  const trendingMovies = [
    { id: 1, name: "Morbis", image: Morbius },
    { id: 2, name: "Kisi ka Bhai kisi ki Jaan", image: kkbkkj },
    { id: 3, name: "Suraj pe AMngal Bhaari", image: spmb },
    { id: 4, name: "Pathan", image: pathan },
    { id: 5, name: "Ant-man", image: ant_man },
    { id: 6, name: "diesel", image: diesel },
    { id: 7, name: "Money Heist season4", image: mh4 },
    { id: 8, name: "Stranger Things3", image: st3 },
    { id: 9, name: "Gray Man", image: grayman },
    { id: 10, name: "Lucifer", image: lucifer },
    { id: 11, name: "Money Heist season3", image: mh3 },
    { id: 12, name: "Mai", image: mai },
    { id: 13, name: "Blade Runner", image: bladeRunner },
    { id: 14, name: "Black Panther", image: blackPanther },
    { id: 15, name: "Vasantha Mullai", image: vasanthaMullai },
    { id: 16, name: "Dungeons and Dragons", image: DandD },
    { id: 17, name: "Sicario", image: sicario },
    { id: 18, name: "Master", image: master },
    { id: 19, name: "Morbius", image: Morbius },
    { id: 20, name: "Kisi ka Bhai kisi ki Jaan", image: kkbkkj },
    { id: 21, name: "Suraj pe AMngal Bhaari", image: spmb },
    { id: 22, name: "Pathan", image: pathan },
  ];

  const filteredMovies = trendingMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page bg-[#141414] min-h-screen">
      <Header bg_color_id={"bg_color"} />

      <div className="bg-[#0f0f0f] pt-[140px] pb-[80px] px-6 md:px-[80px] text-white inter-font">
        {/* Search Bar */}
        <div className="search-bar mb-8">
          <form className="w-full relative">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[20px]" />
            <input
              type="search"
              placeholder="Search here..."
              className="w-full pl-10 py-2 bg-[#1a1a1a] rounded text-white placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        {/* Trending Now Section */}
        <div className="trending-content pt-[40px]">
          {filteredMovies.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-white text-[18px] md:text-2xl font-medium">
                  Trending now
                </h2>
              </div>
              <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {filteredMovies.map((movie) => (
                  <div key={movie.id} className="relative group">
                    <div className="overflow-hidden rounded-lg bg-gray-900 aspect-[2/3]">
                      <img
                        src={movie.image}
                        alt={movie.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {crownImages.includes(movie.image) && (
                      <div className="absolute top-2 left-2 z-10">
                        <FaCrown
                          size={20}
                          className="text-yellow-500 drop-shadow"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-result w-full">
              <div className="flex flex-col justify-center items-center w-full text-center">
                <img src={no_result} className="mb-[12px]" />
                <p className="text-white/60 text-[16px] mb-[8px]">
                  No results found for "
                  <span className="text-white font-medium">{searchTerm}</span>"
                </p>
                <p className="text-white/60 text-[16px] font-light sm:w-[60%] md:w-[46%] lg:w-[36%] xl:w-[26%]">
                  Sorry! We couldn’t find that try looking for something else
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
