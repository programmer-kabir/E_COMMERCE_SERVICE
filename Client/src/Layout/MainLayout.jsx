import React from "react";
import Navbar from "../Pages/Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-52">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
