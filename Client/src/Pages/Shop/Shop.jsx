import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../../Components/Content/Content";
import useCategories from "../../Components/Hooks/useCategories";
import useDatas from "../../Components/Hooks/useData";
import ProductCard from "../../Components/Design/ProductCard";

const Shop = () => {;
  const [selectedTShirt, setSelectedTShirt] = useState("footballClub");
  const [selectedName, setSelectedName] = useState(null);
console.log(selectedName);
  const [categories] = useCategories();
  const [datas] = useDatas();
  // Football Club List
  const footballClubs = categories.filter(
    (item) => item.category === "footballClub"
  );
// Football Country List
  const footballCountry = categories.filter(
    (item) => item.category === "footballCountry"
  );
// Category 
  const handleCategoryChange = (category) => {
    setSelectedTShirt(category);
  };
  // Name
  const handleNameCollect = (title) => {
    setSelectedName(title);
  };
  // Filter data
  const filterData = datas.filter(data => !selectedName || data.category === selectedName);
  console.log(filterData);
  return (
    <Content>
      <section className="mt-10 bg-white">
        <div className="flex gap-10 mt-12">
          <div className="w-1/4 ">
            {/*Category  */}

            <div>
              <div className="pt-2">
                <div>
                  <p
                    onClick={() => handleCategoryChange("footballClub")}
                    className={
                      selectedTShirt === "footballClub"
                        ? "font-bold cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    football Club
                  </p>
                  {selectedTShirt === "footballClub" && (
                    <div className="flex flex-col gap-2 pl-5 py-2">
                      {footballClubs.map((category, index) => (
                        <div
                          className="cursor-pointer"
                          key={index}
                          onClick={() => handleNameCollect(category.title)}
                        >
                          <Link
                            to={`/shop?category=${category.title.replace(
                              / /g,
                              "-"
                            )}`}
                          >
                            {category.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <p
                    onClick={() => handleCategoryChange("footballCountry")}
                    className={
                      selectedTShirt === "footballCountry"
                        ? "font-bold cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    footballCountry
                  </p>
                  {selectedTShirt === "footballCountry" && (
                    <div className="flex flex-col gap-2 pl-5 py-2">
                      {footballCountry.map((category, index) => (
                        <div
                          className="cursor-pointer"
                          key={index}
                          onClick={() => handleNameCollect(category.title)}
                        >
                          <Link
                            to={`/shop?category=${category.title.replace(
                              / /g,
                              "-"
                            )}`}
                          >
                            {category.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* {selectedTShirt === "footballCountry" && (
                    <div className="flex flex-col gap-2 pl-5 py-2">
                      {footballCountry.map((category, index) => (
                        <div className="cursor-pointer " key={index}                           onClick={() => handleNameCollect(category.title)}
                        >
                          {category.title}
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>

        <div className="grid grid-cols-3 gap-4">
          {filterData.map((TShirt) => (
                  <ProductCard key={TShirt._id} TShirt={TShirt} />
                ))}
        </div>
        </div>
      </section>
    </Content>
  );
};

export default Shop;
