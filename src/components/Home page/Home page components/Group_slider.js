// Parent Component: GenreSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import action1 from "../../Assets/Images/welcome-to-the-punch.png";
import action2 from "../../Assets/Images/BlackPanther.png";
import action3 from "../../Assets/Images/theBatman.png";
import action4 from "../../Assets/Images/expendables2.png";

import adventure1 from "../../Assets/Images/archer.png";
import adventure2 from "../../Assets/Images/jungleCruise.png";
import adventure3 from "../../Assets/Images/JackOfGiantSlayer.png";
import adventure4 from "../../Assets/Images/adventure4.png";

import comedy1 from "../../Assets/Images/comedy1.png";
import comedy2 from "../../Assets/Images/comedy2.png";
import comedy3 from "../../Assets/Images/comedy3.png";
import comedy4 from "../../Assets/Images/comedy4.png";

import Drama1 from "../../Assets/Images/drama1.png";
import Drama2 from "../../Assets/Images/drama2.png";
import Drama3 from "../../Assets/Images/drama3.png";
import Drama4 from "../../Assets/Images/drama4.png";

import horror1 from "../../Assets/Images/us.png";
import horror2 from "../../Assets/Images/scream.png";
import horror3 from "../../Assets/Images/the flesheater.png";
import horror4 from "../../Assets/Images/the human centipede.png";

import anime1 from "../../Assets/Images/anime1.png";
import anime2 from "../../Assets/Images/anime2.png";
import anime3 from "../../Assets/Images/anime3.png";
import anime4 from "../../Assets/Images/anime4.png";

import doc1 from "../../Assets/Images/documentary1.png";
import doc2 from "../../Assets/Images/documentary2.png";
import doc3 from "../../Assets/Images/documentary3.png";
import doc4 from "../../Assets/Images/documentary4.png";
import Group_sliderCard from "./Group_sliderCard";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const genres = [
  {
    id: 1,
    title: "Action",
    images: [action1, action2, action3, action4],
    path: "action",
  },
  {
    id: 2,
    title: "Adventure",
    images: [adventure1, adventure2, adventure3, adventure4],
    path: "adventure",
  },
  {
    id: 3,
    title: "Comedy",
    images: [comedy1, comedy2, comedy3, comedy4],
    path: "comedy",
  },
  {
    id: 4,
    title: "Drama",
    images: [Drama1, Drama2, Drama3, Drama4],
    path: "drama",
  },
  {
    id: 5,
    title: "Horror",
    images: [horror1, horror2, horror3, horror4],
    path: "horror",
  },
  {
    id: 6,
    title: "Anime",
    images: [anime1, anime2, anime3, anime4],
    path: "anime",
  },
  {
    id: 6,
    title: "Documentary",
    images: [doc1, doc2, doc3, doc4],
    path: "documentary",
  },
];

const Group_slider = ({ title_name }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="bg-[#0F0F0F] py-[26px] sm:py-[40px] md:py-[60px] w-full">
        <div className="pl-[26px] sm:pl-[40px] md:pl-[80px]">
          {/* Header */}
          <div className="mb-[18px] sm:mb-6">
            <h2 className="text-white text-[18px] md:text-2xl font-medium inter-font">
              {title_name}
            </h2>
          </div>
          <Slider {...settings}>
            {genres.map((genre) => (
              <Group_sliderCard
                key={genre.id}
                title={genre.title}
                images={genre.images}
                path={`/categories/${genre.path}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Group_slider;
