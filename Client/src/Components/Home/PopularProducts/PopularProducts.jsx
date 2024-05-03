import React, { useState } from "react";
import Content from "../../Content/Content";
import ProductCard from "../../Design/ProductCard";

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState("topRated");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <section>
      <Content>
        {/* Title */}
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold border-s-4 border-[#F62977] pl-3">
            Popular Products
          </h2>

          <div className="">
            <div className="flex gap-4">
              <p
                className={`shrink-0 px-2  text-sm font-medium ${
                  activeTab === "topRated"
                    ? "secondaryColor border-b-2 border-[#F62977] hover:text-[#F62977]"
                    : "primaryColor hover:text-[#F62977]"
                }`}
                onClick={() => handleTabClick("topRated")}
              >
                Top Rated
              </p>

              <p
                className={`shrink-0 px-2  text-sm font-medium ${
                  activeTab === "bestSelling"
                    ? "secondaryColor  border-b-2 border-[#F62977] hover:text-[#F62977]"
                    : "primaryColor hover:text-[#F62977]"
                }`}
                onClick={() => handleTabClick("bestSelling")}
              >
                Best Selling
              </p>

              <p
                className={`shrink-0 px-2 text-sm font-medium ${
                  activeTab === "latestProduct"
                    ? "secondaryColor border-b-2  border-[#F62977]  hover:text-[#F62977]"
                    : "primaryColor hover:text-[#F62977]"
                }`}
                onClick={() => handleTabClick("latestProduct")}
              >
                Latest Product
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </Content>
    </section>
  );
};

export default PopularProducts;
