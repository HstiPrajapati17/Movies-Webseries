import { Routes, Route } from "react-router-dom";
import "./components/Login page/login-page.css";
import "./components/Home page/Home page components/homepage.css";
import "./components/Header/Header.css";
import "./components/Web series Details/Webseries.css";
import "./components/MyAccount Components/MyAccount.css";

import Signin_page from "./components/Login page/Signin_page";
import ForgetPass from "./components/Login page/ForgetPass";
import Password_Change from "./components/Login page/Password_Change";
import Creat_Account from "./components/Login page/Creat_Account";
import OTP_verification from "./components/Login page/OTP_verification";
import Homepage from "./components/Home page/Homepage";
import Search from "./components/Search/Search";

import CategoriesLayout from "./components/Categories/CategoriesLayout";
import AllCategory from "./components/Categories/AllCategory";
import CategoryDetail from "./components/Categories/CategoryDetails";

import MovieDetails from "./components/Movie Details/MovieDetails";
import MovieDetailsPremium from "./components/Movie Details/MovieDetailsWithPremium";
import Watch_now_Movies from "./components/Movie Details/Watch_now_Movies";

import Main_WebSeries_page from "./components/Web series Details/Main_WebSeries_page";
import WatchNowWebSeriesPage from "./components/Web series Details/WatchNowWebSeriesPage";
import WebSeriesDetails from "./components/Web series Details/Web_series_Details";

import AboutUsPage from "./components/About Us/AboutUs";
import Subscribe_Now from "./components/Subscribe Now/Subscribe_Now";
import TermsAndConditions from "./components/Term and Conditions/TermsAndConditions";
import PrivacyPolicy from "./components/Privacy Policy/PrivacyPolicy";
import CookiePolicy from "./components/Cookie Policy/CookiePolicy";
import MyProfile from "./components/My Profile/MyProfile";

import PricingPage from "./components/Premium/Premium";
import PaymentPage from "./components/Premium/Payment";
import MyWatchlist from "./components/MyAccount Components/MyWatchlist";
import MySubscription from "./components/MyAccount Components/MySubscription";
import LoggedDevice from "./components/MyAccount Components/LoggedDevice";
import DeleteAccount from "./components/MyAccount Components/DeleteAccount";
import EditProfile from "./components/My Profile/EditProfile";
import FaqSection from "./components/Faq Page/FaqSection";
import ContactUs from "./components/Contact Us/ContactUs";
import WebSeries from "./components/Web Series Page/WebSeries";
import Movie from "./components/Movie Page/Movie";

function App() {
  return (
    <Routes>
      {/* Login and Authentication */}
      <Route path="/" element={<Signin_page />} />
      <Route path="/forget-ac" element={<ForgetPass />} />
      <Route path="/pass-change" element={<Password_Change />} />
      <Route path="/create-ac" element={<Creat_Account />} />
      <Route path="/otp-verification" element={<OTP_verification />} />

      {/* Home & Search */}
      <Route path="/home" element={<Homepage />} />
      <Route path="/webseries" element={<WebSeries />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/search" element={<Search />} />

      {/* Movies */}
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/premium-movies/:id" element={<MovieDetailsPremium />} />
      <Route path="/watch-now-movies/:id" element={<Watch_now_Movies />} />

      {/* Web Series */}
      <Route path="/webseries/:id" element={<WebSeriesDetails />} />
      <Route
        path="/webseries/:id/episode"
        element={<WatchNowWebSeriesPage />}
      />
      <Route path="/series/:id" element={<Main_WebSeries_page />} />
      <Route path="/webseries/details" element={<WebSeriesDetails />} />

      {/* Categories */}
      {/* <Route path="/categories/*" element={<CategoriesLayout />} /> */}
      <Route path="/categories" element={<CategoriesLayout />}>
        <Route index element={<AllCategory />} />
        <Route path=":categoryName" element={<CategoryDetail />} />
      </Route>

      {/* Static Pages */}
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/subscribe-now" element={<Subscribe_Now />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/CookiePolicy" element={<CookiePolicy />} />

      {/* Profile */}
      <Route path="/profile" element={<MyProfile />}>
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="watchlist" element={<MyWatchlist />} />
        <Route path="subscription" element={<MySubscription />} />
        <Route path="device" element={<LoggedDevice />} />
        <Route path="delete" element={<DeleteAccount />} />
      </Route>

      {/* Premium Plans & Payment */}
      <Route path="/premium-page" element={<PricingPage />} />
      <Route path="/payment" element={<PaymentPage />} />

      {/* Fallback (404 or Signin) */}
      <Route path="*" element={<Signin_page />} />

      <Route path="/faq" element={<FaqSection />} />
      <Route path="/Contact-us" element={<ContactUs />} />

    </Routes>
  );
}

export default App;
