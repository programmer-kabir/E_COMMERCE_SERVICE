import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart, FiPhone } from "react-icons/fi";
import Content from "../../Components/Content/Content";
import useDatas from "../../Components/Hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTShirt } from "../Redux/TShirt/tShirtSlice";
import SizeInch from "../../Components/Design/SizeInch";
import Tabs from "../../Components/Design/Tabs";

const SingleShop = () => {
  const { isLoading, TShirts, error } = useSelector((state) => state.TShirts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTShirt());
  }, []);
  // console.log(TShirts);
  const { id } = useParams();

  const DetailsData = TShirts.filter((TShirt) => TShirt._id === id);
  console.log(DetailsData);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelect = (size) => {
    setActiveSize(size);
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <Content>
      <section className="pt-7 ">
        {DetailsData.map((TShirt) => (
          <section key={TShirt._id} >
            <div className="lg:flex  justify-start gap-3">
            <div className="md:w-2/5 px-5 text-start w-full overflow-hidden">
              <div className=" flex flex-col justify-center ">
                <div className="  md:w-full px-5 mx-auto">
                  <img
                    className="h-[420px]  w-full mx-auto rounded-md transition-transform duration-300 transform hover:scale-125"
                    src={TShirt.image[selectedImageIndex]}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center md:w-full gap-1 pt-2">
                  {TShirt.image.map((data, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        className={`w-[90px] h-[90px] border rounded-md p-1 ${
                          selectedImageIndex === index ? "border-gray-700" : ""
                        }`}
                        src={data}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl font-semibold">{TShirt.title}</h2>
              <div className="pt-5">
                <SizeInch />
                <h2 className="text-3xl pt-3 text-gray-700 font-semibold">
                      Tk {TShirt?.price}
                    </h2>
                <div className="pt-2 ">
                  <h2 className="text-base font-semibold">Size</h2>
                  <div className="flex items-center text-xl  gap-6 pt-2">
                    {TShirt.Size.map((size, index) => (
                      <div
                        onClick={() => handleSizeSelect(size)}
                        key={index}
                        className={`border p-2 shadow-sm rounded-md hover:bg-[#080921] hover:text-white w-[64px] h-[50px] text-center flex items-center justify-center ${
                          size === activeSize
                            ? "bg-[#F62977] hover:bg-[#F62977] text-white"
                            : ""
                        }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3  w-full pt-5 pb-8">
                        {/* Quantity input */}
                        <div className="flex items-center gap-1 border border-gray-500 rounded w-[130px]">
                          <input
                            type="text"
                            id="Quantity"
                            value={quantity}
                            className="h-10 outline-none w-10 pl-5 border-gray-200 text-center"
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={handleDecrement}
                            className="w-7 h-7 mr-2 ml-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition hover:opacity-75"
                          >
                            &minus;
                          </button>
                          <button
                            type="button"
                            onClick={handleIncrement}
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition hover:opacity-75"
                          >
                            +
                          </button>
                        </div>
                        {/* Add to cart button */}
                        <button
                          onClick={() => handleAddToCart(DetailsShoes._id)}
                          className="uppercase flex items-center gap-2  primaryButton rounded-sm font-semibold justify-center w-[35%]"
                          
                        >
                          <MdOutlineShoppingBag size={24} color="white" />
                          ADD to cart
                        </button>
                        {/* Heart icon */}
                        <button onClick={()=>handleAddToFavorite(DetailsShoes._id)}>
                        <FiHeart size={27} />
                        </button>
                      </div>
                      <div className="py-4 flex primaryColor items-center gap-3 border-y ">
                        <FiPhone size={33} />{" "}
                        <p className="font-semibold text-xl">
                          Call For Order : 09613-800800
                        </p>
                      </div>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="w-full">
                  <Tabs TShirt={TShirt} />
                </div>
            </div>
          </section>
        ))}
      </section>
    </Content>
  );
};

export default SingleShop;