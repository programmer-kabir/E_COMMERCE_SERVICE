import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import { Categories } from "../../Components/Home/Categroy/Categories";
import PopularProducts from "../../Components/Home/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <Categories />
     <PopularProducts />
    </div>
  );
};

export default Home;
