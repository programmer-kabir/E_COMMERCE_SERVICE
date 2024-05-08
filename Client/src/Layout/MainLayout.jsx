import React from "react";
import Navbar from "../Pages/Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Components/Loader/Loader";

const MainLayout = () => {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="pt-16">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
