import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CategoriesLayout = () => {
  return (
    <div className="categories-page bg-[#141414] min-h-screen flex flex-col">
      <Header bg_color_id={"bg_color"} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesLayout;
