import React from "react";
import Header from "../Header/Header";
import Main_slider from "../Home page/Home page components/Main_slider";
import Slider from "../Home page/Home page components/Slider";
import Group_slider from "../Home page/Home page components/Group_slider";
import FeaturedMovieSlider from "../Home page/Home page components/FeaturedMovieSlider";
import MainSlider2 from "../Home page/Home page components/MainSlider2";
import Top10MoviesSlider from "../Home page/Home page components/Top10Movie_slider";
import Footer from "../Footer/Footer";

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

const Movie = () => {
  const trendingWebseries = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
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
    { id: 4, image: img6 },
    { id: 5, image: img5 },
    { id: 6, image: Pimg4 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
  ];
  return (
    <>
      <div className="webseries-page bg-[#0f0f0f]">
        <Header bg_color_id={"home_bg_color"} />
        <Main_slider />
        <Slider title_name={"Trending now"} movies={trendingWebseries} />
        <Slider title_name={"Popular Movies"} movies={popularSeries} />
        <Group_slider title_name={"General"} />
        <FeaturedMovieSlider title_name={"Top Movies This Week"} />
        <MainSlider2 />
        <Top10MoviesSlider title={"Top 10 Movies in India Today"} />
        <Slider
          title_name={"Movies You Cannot Miss"}
          movies={CannotMissMovie}
        />
        <Footer />
      </div>
    </>
  );
};

export default Movie;
