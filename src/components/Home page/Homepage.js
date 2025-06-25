import React from "react";
import Header from "../Header/Header";
import Main_slider from "./Home page components/Main_slider";

import img1 from "../Assets/Images/Morbius.png";
import img2 from "../Assets/Images/Kisika bhai Kisiki Jaan.png";
import img3 from "../Assets/Images/SurajPe MangalBhari.png";
import img4 from "../Assets/Images/pathan.png";
import img5 from "../Assets/Images/Ant-man.png";
import img6 from "../Assets/Images/Diesel.png";
import img7 from "../Assets/Images/Ant-man.png";
import img8 from "../Assets/Images/Kisika bhai Kisiki Jaan.png";

import Pimg1 from "../Assets/Images/MoneyHeistPart4.png";
import Pimg2 from "../Assets/Images/StrangerThings3.png";
import Pimg3 from "../Assets/Images/grayMan.png";
import Pimg4 from "../Assets/Images/Lucifer.png";
import Pimg5 from "../Assets/Images/MoneyHeistPart3.png";
import Pimg6 from "../Assets/Images/Mai.png";
import Pimg7 from "../Assets/Images/Duranga.png";
import Pimg8 from "../Assets/Images/StrangerThings3.png";

import img9 from "../Assets/Images/JattMovie.png";

import tr1 from "../Assets/Images/blade Runner.png";
import tr2 from "../Assets/Images/black panther.png";
import tr3 from "../Assets/Images/vasantha mullai.png";
import tr4 from "../Assets/Images/dungeons & dragons.png";
import tr5 from "../Assets/Images/sicario.png";
import tr6 from "../Assets/Images/master.png";
import tr7 from "../Assets/Images/goat.png";
import drama1 from "../Assets/Images/bazooka.png";
import drama2 from "../Assets/Images/devdas.png";
import drama3 from "../Assets/Images/padmaavat.png";
import drama4 from "../Assets/Images/boyapatirapo.png";
import drama5 from "../Assets/Images/marco.png";
import drama6 from "../Assets/Images/kalki.png";
import drama7 from "../Assets/Images/king.png";
import drama8 from "../Assets/Images/devdas.png";

import action1 from "../Assets/Images/the Fault in Our Stars.png";
import action2 from "../Assets/Images/sniper2.png";
import action3 from "../Assets/Images/sniper.png";
import action4 from "../Assets/Images/raid2.png";
import action5 from "../Assets/Images/joker.png";
import action6 from "../Assets/Images/sikandar.png";
import action7 from "../Assets/Images/deadpool wolverine.png";
import action8 from "../Assets/Images/sniper2.png";

import Slider from "./Home page components/Slider";
import Group_slider from "./Home page components/Group_slider";
import FeaturedMovieSlider from "./Home page components/FeaturedMovieSlider";
import MainSlider2 from "./Home page components/MainSlider2";
import Top10MoviesSlider from "./Home page components/Top10Movie_slider";
import Poster from "./Home page components/Poster";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const trendingMovies = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: Pimg2 },
    { id: 9, image: Pimg3 },
    { id: 10, image: Pimg4 },
    { id: 11, image: Pimg5 },
    { id: 12, image: Pimg6 },
    { id: 13, image: tr1 },
    { id: 14, image: tr2 },
    { id: 15, image: tr3 },
    { id: 16, image: tr4 },
    { id: 17, image: tr5 },
    { id: 18, image: tr6 },
    { id: 19, image: img1 },
    { id: 20, image: img2 },
    { id: 21, image: img3 },
    { id: 22, image: img4 },
  ];
  const popularSeries = [
    { id: 1, image: Pimg1 },
    { id: 2, image: Pimg2 },
    { id: 3, image: Pimg3 },
    { id: 4, image: Pimg4 },
    { id: 5, image: Pimg5 },
    { id: 6, image: Pimg6 },
    { id: 7, image: Pimg7 },
    { id: 8, image: Pimg8 },
  ];
  const CannotMissMovie = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img9 },
    { id: 5, image: img5 },
    { id: 6, image: Pimg4 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
  ];
  const topRatedMovies = [
    { id: 1, image: tr1 },
    { id: 2, image: tr2 },
    { id: 3, image: tr3 },
    { id: 4, image: tr4 },
    { id: 5, image: tr5 },
    { id: 6, image: tr6 },
    { id: 7, image: tr7 },
    { id: 8, image: tr2 },
  ];
  const DramaPopular = [
    { id: 1, image: drama1 },
    { id: 2, image: drama2 },
    { id: 3, image: drama3 },
    { id: 4, image: drama4 },
    { id: 5, image: drama5 },
    { id: 6, image: drama6 },
    { id: 7, image: drama7 },
    { id: 8, image: drama8 },
  ];
  const ActionPopular = [
    { id: 1, image: action1 },
    { id: 2, image: action2 },
    { id: 3, image: action3 },
    { id: 4, image: action4 },
    { id: 5, image: action5 },
    { id: 6, image: action6 },
    { id: 7, image: action7 },
    { id: 8, image: action8 },
  ];
  return (
    <>
      <div className="homepage bg-[#0f0f0f]">
        <Header bg_color_id={"home_bg_color"} />
        <Main_slider />
        <Slider title_name={"Trending now"} movies={trendingMovies} />
        <Slider title_name={"Popular Series"} movies={popularSeries} />
        <Group_slider title_name={"General"} />
        <FeaturedMovieSlider title_name={"Top Movies This Week"} />
        <MainSlider2 />
        <Top10MoviesSlider title={"Top 10 Movies in India Today"} />
        <Slider
          title_name={"Movies You Cannot Miss"}
          movies={CannotMissMovie}
        />
        <Slider title_name={"Top rated"} movies={topRatedMovies} />
        <Poster />
        <Slider title_name={"Popular in Drama"} movies={DramaPopular} />
        <Slider title_name={"Popular in Action"} movies={ActionPopular} />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
