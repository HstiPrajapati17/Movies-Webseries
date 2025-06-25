import React from "react";
import { Link } from "react-router-dom";

import action from "../Assets/Images/action_category.png";
import adventure from "../Assets/Images/adventure_category.png";
import romance from "../Assets/Images/romance_category.png";
import horror from "../Assets/Images/horror_category.png";
import drama from "../Assets/Images/drama_category.png";
import mythology from "../Assets/Images/mythology_category.png";
import crime from "../Assets/Images/crime_category.png";
import biopic from "../Assets/Images/biopic_category.png";
import thriller from "../Assets/Images/thriller_category.png";
import anime from "../Assets/Images/anime_category.png";
import historical from "../Assets/Images/historical_category.png";
import mystery from "../Assets/Images/mystery_category.png";
import documentary from "../Assets/Images/documentary_category.png";
import devotional from "../Assets/Images/devotional_category.png";
import comedy from "../Assets/Images/comedy_cateory.png";
import science from "../Assets/Images/science_category.png";
import kids from "../Assets/Images/kids_category.png";

const categories = [
  { title: "Action", image: action, path: "action" },
  { title: "Adventure", image: adventure, path: "adventure" },
  { title: "Romance", image: romance, path: "romance" },
  { title: "Horror", image: horror, path: "horror" },
  { title: "Drama", image: drama, path: "drama" },
  { title: "Mythology", image: mythology, path: "mythology" },
  { title: "Crime", image: crime, path: "crime" },
  { title: "Biopic", image: biopic, path: "biopic" },
  { title: "Thriller", image: thriller, path: "thriller" },
  { title: "Anime", image: anime, path: "anime" },
  { title: "Historical", image: historical, path: "historical" },
  { title: "Mystery", image: mystery, path: "mystery" },
  { title: "Documentary", image: documentary, path: "documentary" },
  {
    title: "Devotional & Spiritual",
    image: devotional,
    path: "devotional-and-spiritual",
  },
  { title: "Comedy", image: comedy, path: "comedy" },
  { title: "Science Fiction", image: science, path: "science-fiction" },
  { title: "Kids", image: kids, path: "kids" },
];

const AllCategory = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen py-[80px] px-6 md:px-[80px] inter-font">
      <h1 className="text-[30px] text-white mb-4 font-semibold">Categories</h1>
      <p className="text-white/60 text-[16px] mb-[48px]">
        Explore categories to discover movies and series tailored to your taste.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link to={`/categories/${cat.path}`} key={index}>
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10" />
              <h3 className="absolute top-4 left-4 text-white text-[18px] font-semibold z-20 w-[70%] inter-font">
                {cat.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] z-20"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
