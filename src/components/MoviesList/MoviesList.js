import bg1 from "../Assets/Images/main-slider-img1.png";
import bg1title from "../Assets/Images/slider-img1-title.png";
import bg2 from "../Assets/Images/main-slider-img2.png";
import OdelaDetailsBg from "../Assets/Images/OdelaDetailsBg.png";
import bg2title from "../Assets/Images/slider-img2-title.png";
import bg3 from "../Assets/Images/main-slider-img3.png";
import AshramDetailsBg from "../Assets/Images/ashramDetailsBg.png";
import bg3title from "../Assets/Images/slider-img3-title.png";
import bg4 from "../Assets/Images/main-slider-img4.png";
import bg4title from "../Assets/Images/slider-img4-title.png";
import bg5 from "../Assets/Images/main-slider-img5.png";
import bg5title from "../Assets/Images/slider-img5-title.png";
// satyameva jayte cast
import Divya_khosla_kumar from "../Assets/Images/divya khosla kumar.png";
import John_abraham from "../Assets/Images/john abraham.png";
import Nora_fatehi from "../Assets/Images/nora fatehi.png";
import Anup_soni from "../Assets/Images/anup soni.png";
import Palak_singh from "../Assets/Images/palak singh.png";
import Harsh_chhaya from "../Assets/Images/harsh chhaya.png";
import Bhagyashree from "../Assets/Images/bhagyashree Limaye.png";
import Dayahshankar_Pandey from "../Assets/Images/daya shankar pandey.png";
import Shaad_randhawa from "../Assets/Images/shaad randhawa.png";
import Gautami_Kapoor from "../Assets/Images/gautami kapoor.png";
// odela cast
import tamanna from "../Assets/Images/tamanna bhatia.png";
import vasistha from "../Assets/Images/vasistha simha.png";
import hebah from "../Assets/Images/hebah patel.png";
import murali from "../Assets/Images/murali sharma.png";
import srikanth from "../Assets/Images/srikanth iyengar.png";
import naga_mahesh from "../Assets/Images/naga mahesh.png";
import pooja_reddy from "../Assets/Images/pooja reddy.png";
// ashram web series
import E1 from "../Assets/Images/ashramS2E1.png";
import E2 from "../Assets/Images/ashramS2E2.png";
import E3 from "../Assets/Images/ashramS2E3.png";
import E4 from "../Assets/Images/ashramS2E4.png";
import E5 from "../Assets/Images/ashramS2E5.png";
// import video1 from "../Assets/videos/ashram S1E3.mp4";

// Ashram cast details
import bobby_Deol from "../Assets/Images/boby deol.png";
import aditi_pohankar from "../Assets/Images/Aaditi pohankar.png";
import chandan_roy from "../Assets/Images/chandan roy.png";
import darshan_kumar from "../Assets/Images/Darshan Kumar.png";
import tridha_chaudhry from "../Assets/Images/trisha chaudhari.png";
import sachin_shroff from "../Assets/Images/sachin shroff.png";
import vikram_kochhar from "../Assets/Images/vikram kochhar.png";
import khan_jhangir from "../Assets/Images/khan jahangir khan.png";
import anurita_jha from "../Assets/Images/anurita jha.png";
import kanupriya_gupta from "../Assets/Images/kanupriya gupta.png";
import anil_rastogi from "../Assets/Images/anil rastogi.png";
import rajeev_siddhartha from "../Assets/Images/rajeev siddhartha.png";
import tanmay_ranjan from "../Assets/Images/tanmay ranjan.png";
import Preeti_sood from "../Assets/Images/preeti sood.png";
import parineeta_seth from "../Assets/Images/parineeta seth.png";

// movie links
import video1 from "../Assets/videos/Sample_v1.mp4";
import video2 from "../Assets/videos/sample_v2.mp4";
import video3 from "../Assets/videos/sample_v3.mp4";
import video4 from "../Assets/videos/sample_v4.mp4";

export const MainSliderMovies = [
  {
    id: 1,
    title: bg1title,
    name: "The Gorge",
    type: "Movie",
    year: "2024",
    duration: "2h 31 min",
    genre: "Drama",
    languages: "Hindi, English, Tamil",
    slider_description: "",
    img_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: bg1,
    MovieDetailsBg: bg1,
    MovieLink: video1,
    cast: [
      { name: "Actor 1", image: John_abraham },
      { name: "Actor 2", image: Nora_fatehi },
      { name: "Actor 3", image: Anup_soni },
    ],
  },
  {
    id: 2,
    title: bg2title,
    name: "Odela 2",
    type: "Movie",
    year: "2024",
    duration: "2h 31 min",
    genre: "Drama",
    languages: "Hindi, English, Tamil",
    img_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: bg2,
    MovieDetailsBg: OdelaDetailsBg,
    MovieLink: video2,
    cast: [
      { name: "Tamannaah Bhatia", image: tamanna },
      { name: "Vasishta N Simha", image: vasistha },
      { name: "Hebah Patel", image: hebah },
      { name: "Murali Sharma", image: murali },
      { name: "Srikanth Iyengar", image: srikanth },
      { name: "Naga Mahesh", image: naga_mahesh },
      { name: "Pooja Reddy", image: pooja_reddy },
    ],
  },
  {
    id: 3,
    title: bg3title,
    name: "Ek Badnaam Aashram",
    type: "Web series",
    newSeason: "Season 03",
    year: "2024",
    duration: "2h 31 min",
    genre: "Drama",
    languages: "Hindi, English, Tamil",
    img_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: bg3,
    MovieDetailsBg: AshramDetailsBg,
    cast: [
      { name: "bobby Deol", image: bobby_Deol },
      { name: "Aditi Pohankar", image: aditi_pohankar },
      { name: "Chandan Roy Sanyal", image: chandan_roy },
      { name: "Darshan Kumar", image: darshan_kumar },
      { name: "Tridha chaudhary", image: tridha_chaudhry },
      { name: "Sachin Shroff", image: sachin_shroff },
      { name: "Vikram Kochhar", image: vikram_kochhar },
      { name: "Khan Jhangir Khan", image: khan_jhangir },
      { name: "Anurita Jha", image: anurita_jha },
      { name: "Kanupriya Gupta", image: kanupriya_gupta },
      { name: "Anil Rastogi", image: anil_rastogi },
      { name: "Rajeev Siddhartha", image: rajeev_siddhartha },
      { name: "Tanmay Ranjan", image: tanmay_ranjan },
      { name: "Preeti Sood", image: Preeti_sood },
      { name: "Parineeta Seth", image: parineeta_seth },
    ],
    seasons: [
      {
        season: "Season 01",
        episodes: [
          {
            title: "Pran Pratishtha",
            thumbnail: E5,
          },
          {
            title: "Grih Pravesh",
            thumbnail: E3,
          },
          {
            title: "Duh Swapna",
            thumbnail: E1,
          },
          {
            title: "Sewa Daar",
            thumbnail: E2,
          },
          {
            title: "Amrit Sudha",
            thumbnail: E4,
          },
          {
            title: "vish Haran",
            thumbnail: E2,
          },
          {
            title: "Gati Rodh",
            thumbnail: E1,
          },
          {
            title: "Shuddhi Karan",
            thumbnail: E5,
          },
          {
            title: "Maha Prasad",
            thumbnail: E3,
          },
        ],
      },
      {
        season: "Season 02",
        episodes: [
          {
            title: "The Vanishing of Will Byers",
            thumbnail: E1,
          },
          {
            title: "The Vanishing of Will Byers",
            thumbnail: E2,
          },
          {
            title: "The Vanishing of Will Byers",
            thumbnail: E3,
          },
          {
            title: "The Vanishing of Will Byers",
            thumbnail: E4,
          },
          {
            title: "The Vanishing of Will Byers",
            thumbnail: E5,
          },
        ],
      },
      {
        season: "Season 03",
        episodes: [
          {
            title: "Pran Pratishtha",
            thumbnail: E4,
          },
          {
            title: "Grih Pravesh",
            thumbnail: E5,
          },
          {
            title: "Duh Swapna",
            thumbnail: E2,
          },
          {
            title: "Sewa Daar",
            thumbnail: E3,
          },
          {
            title: "Amrit Sudha",
            thumbnail: E4,
          },
          {
            title: "vish Haran",
            thumbnail: E1,
          },
          {
            title: "Gati Rodh",
            thumbnail: E5,
          },
          {
            title: "Shuddhi Karan",
            thumbnail: E2,
          },
          {
            title: "Maha Prasad",
            thumbnail: E3,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: bg4title,
    name: "Pyaar Paisa Profit",
    type: "Web series",
    year: "2024",
    duration: "2h 31 min",
    languages: "Hindi, English, Tamil",
    genre: "Drama",
    img_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: bg4,
    MovieLink: video3,
    cast: [
      { name: "Actor 1", image: Shaad_randhawa },
      { name: "Actor 2", image: Gautami_Kapoor },
      { name: "Actor 3", image: John_abraham },
    ],
  },
  {
    id: 5,
    title: bg5title,
    name: "Satyameva Jayate 2",
    type: "Movie",
    year: "2024",
    duration: "2h 31 min",
    languages: "Hindi, English, Tamil",
    genre: "Drama",
    img_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
    description:
      " This compelling drama explores themes of justice, corruption, and redemption through the lens of modern society. The film combines intense action sequences with deep character development, creating a cinematic experience that resonates with audiences across different demographics. With stunning cinematography and a powerful soundtrack, this movie delivers both entertainment and meaningful social commentary.",
    thumbnail: bg5,
    MovieDetailsBg: bg5,
    MovieLink: video4,
    cast: [
      { name: "Divya Khosla Kumar", image: Divya_khosla_kumar },
      { name: "John Abraham", image: John_abraham },
      { name: "Nora Fatehi", image: Nora_fatehi },
      { name: "Anup Soni", image: Anup_soni },
      { name: "Palak Singh", image: Palak_singh },
      { name: "Harsh Chhaya", image: Harsh_chhaya },
      { name: "Bhagyashree Limaye", image: Bhagyashree },
      { name: "Dayashankar Pandey", image: Dayahshankar_Pandey },
      { name: "Shaad Randhawa", image: Shaad_randhawa },
      { name: "Gautami Kapoor", image: Gautami_Kapoor },
    ],
  },
];
