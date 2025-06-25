import React from "react";
import MovieDetails from "./MovieDetailsWithPremium";
import Slider from "../Home page/Home page components/Slider";
import Pimg1 from "../Assets/Images/MoneyHeistPart4.png";
import Pimg2 from "../Assets/Images/StrangerThings3.png";
import Pimg3 from "../Assets/Images/grayMan.png";
import Pimg4 from "../Assets/Images/Lucifer.png";
import Pimg5 from "../Assets/Images/MoneyHeistPart3.png";
import Pimg6 from "../Assets/Images/Mai.png";
import Pimg7 from "../Assets/Images/Duranga.png";
import Pimg8 from "../Assets/Images/StrangerThings3.png";
import img9 from "../Assets/Images/JattMovie.png";
import img1 from "../Assets/Images/Morbius.png";
import img2 from "../Assets/Images/Kisika bhai Kisiki Jaan.png";
import img3 from "../Assets/Images/SurajPe MangalBhari.png";
import img5 from "../Assets/Images/Ant-man.png";
import img7 from "../Assets/Images/Ant-man.png";
import img8 from "../Assets/Images/Kisika bhai Kisiki Jaan.png";
import wa1 from "../Assets/Images/Pushpa2.png"
import wa2 from "../Assets/Images/Morbius.png"
import wa3 from "../Assets/Images/Kantara.png"
import wa4 from "../Assets/Images/blade Runner.png"
import wa5 from "../Assets/Images/Adipurush.png"
import wa6 from "../Assets/Images/tomorrowWar.png"
import wa7 from "../Assets/Images/masaan.png"
import wa8 from "../Assets/Images/Morbius.png"
import Footer from "../Footer/Footer";


const MovieDetailsPage = () => {
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
  const WatchAgain = [
    { id: 1, image: wa1 },
    { id: 2, image: wa2 },
    { id: 3, image: wa3 },
    { id: 4, image: wa4 },
    { id: 5, image: wa5 },
    { id: 6, image: wa6 },
    { id: 7, image: wa7 },
    { id: 8, image: wa8 },
  ];
  return (
    <>
      <div className="movie-details">
        <MovieDetails />
        <Slider title_name={"Recommended"} movies={popularSeries} />
        <Slider title_name={"Popular Movies"} movies={CannotMissMovie} />
        <Slider title_name={"Watch Again"} movies={WatchAgain} />
		<Footer />
      </div>
    </>
  );
};

export default MovieDetailsPage;
