import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import { Categories } from "../../Components/Home/Categroy/Categories";
import PopularProducts from "../../Components/Home/PopularProducts/PopularProducts";
import AllStore from "../../Components/Home/AllStore/AllStore";
import BannerCompany from "../../Components/Home/BannerComapny/BannerCompany";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <Categories />
     <PopularProducts />
     <AllStore />
     <BannerCompany />
    </div>
  );
};

export default Home;
