import React from "react";
import Header from "../Header/Header";
import Slider from "../Home page/Home page components/Slider";
import img1 from "../Assets/Images/the family man.jpg";
import img2 from "../Assets/Images/MoneyHeistPart4.png";
import img3 from "../Assets/Images/all-of-us-are-dead.jpg";
import img4 from "../Assets/Images/panchayat.webp";
import img5 from "../Assets/Images/criminal justice.jpg";
import img6 from "../Assets/Images/the royals.jpg";
import img7 from "../Assets/Images/rana naidu.jpg";
import img8 from "../Assets/Images/Delhi crime.jpg";

import Pimg1 from "../Assets/Images/MoneyHeistPart4.png";
import Pimg2 from "../Assets/Images/StrangerThings3.png";
import Pimg3 from "../Assets/Images/grayMan.png";
import Pimg4 from "../Assets/Images/Lucifer.png";
import Pimg5 from "../Assets/Images/MoneyHeistPart3.png";
import Pimg6 from "../Assets/Images/Mai.png";
import Pimg7 from "../Assets/Images/Duranga.png";
import Pimg8 from "../Assets/Images/StrangerThings3.png";

import WebSeriesMainSlider from "./Web series components/WebSeriesMainSlider";
import Group_slider from "../Home page/Home page components/Group_slider";
import FeaturedMovieSlider from "../Home page/Home page components/FeaturedMovieSlider";
import MainSlider2 from "../Home page/Home page components/MainSlider2";
import Top10MoviesSlider from "../Home page/Home page components/Top10Movie_slider";
import Footer from "../Footer/Footer";

const WebSeries = () => {
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
        <WebSeriesMainSlider />
        <Slider title_name={"Trending now"} movies={trendingWebseries} />
        <Slider title_name={"Popular Series"} movies={popularSeries} />
        <Group_slider title_name={"General"} />
        <FeaturedMovieSlider title_name={"Top Series This Week"} />
        <MainSlider2 />
        <Top10MoviesSlider title={"Top 10 Series in India Today"} />
        <Slider
          title_name={"Series You Cannot Miss"}
          movies={CannotMissMovie}
        />
		<Footer />
      </div>
    </>
  );
};

export default WebSeries;
