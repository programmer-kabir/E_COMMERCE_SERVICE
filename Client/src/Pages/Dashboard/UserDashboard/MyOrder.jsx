import React, { useEffect, useState } from "react";
import PriceInfo from "../../../Components/Design/PriceInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTShirt } from "../../Redux/TShirt/tShirtSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { isLoading, TShirts, error } = useSelector((state) => state.TShirts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTShirt());
  }, [dispatch]);
  const [activeTab, setActiveTab] = useState("Completed");
  const tabs = ["Completed", "Incomplete"];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const FavoriteDataRaw = localStorage.getItem("cartTShirt");
  const FavoriteData = FavoriteDataRaw ? JSON.parse(FavoriteDataRaw) : [];
  const cartTShirts = TShirts.filter((shirt) =>
    FavoriteData.includes(shirt._id)
  );
  const subtotal = cartTShirts.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  // console.log(subtotal);

  return (
    <div className="pt-7 px-5">
      <div className="flex border-b px-5  border-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer  px-4 py-2 border-b ${
              activeTab === tab
                ? "border-black font-bold"
                : "border-transparent"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {activeTab === "Completed" && (
        <section className="overflow-y-auto pb-[250px]">
          {cartTShirts?.length === 0 ? (
            <div className="mt-32  pb-7 flex px-10 items-center flex-col justify-center ">
              <img
                className="p-2"
                src="https://i.ibb.co/8XZwct2/empty-cart.png"
                alt=""
              />
              <p className="py-5 font-medium ">Your Cart is empty</p>
              <button className="primaryButton w-[140px]">Go To Shop</button>
            </div>
          ) : (
            <div className="mt-32  pb-7 flex px-10 items-center flex-col justify-center ">
              <img
                className="p-2"
                src="https://i.ibb.co/8XZwct2/empty-cart.png"
                alt=""
              />
              <p className="py-5 font-medium ">Your Cart is empty</p>
              <button className="primaryButton w-[140px]">Go To Shop</button>
            </div>
          )}
        </section>
      )}
      {activeTab === "Incomplete" && (
        <section>
          <div className="mx-auto  px-6 pb-28">
            <div className="mt-1">
              {cartTShirts?.length === 0 ? (
                <div className="mt-32  pb-7 flex px-10 items-center flex-col justify-center ">
                  <img
                    className="p-2"
                    src="https://i.ibb.co/8XZwct2/empty-cart.png"
                    alt=""
                  />
                  <p className="py-5 font-medium ">Your Cart is empty</p>
                  <button className="primaryButton w-[140px]">
                    Go To Shop
                  </button>
                </div>
              ) : (
                <section>
                  <h3 className="text-xl  font-semibold primaryColor">
                    View Your Cart ({cartTShirts.length})
                  </h3>
                  {cartTShirts.map((tShirt) => (
                    <div key={tShirt._id}>
                      <div className="flex flex-col space-y-4 ">
                        <ul className="flex flex-col ">
                          <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                              <div className="border-gray-500 border rounded p-1 ">
                                <img
                                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                  src={tShirt?.image[0]}
                                  alt="Polaroid camera"
                                />
                              </div>
                              <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                  <div className="space-y-1">
                                    <h3 className="text-lg font-semibold  sm:pr-8">
                                      {tShirt?.title}
                                    </h3>
                                    <p className="text-sm f">
                                      SKU:{" "}
                                      <span className="font-medium">
                                        {tShirt?.SKU}
                                      </span>
                                    </p>
                                    <p className="text-sm">
                                      Club Name:{" "}
                                      <span className="font-medium">
                                        {tShirt?.category}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-lg font-semibold">
                                      TK {tShirt?.price}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                  <button
                                    onClick={() => handleDelete(tShirt._id)}
                                    type="button"
                                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                                  >
                                    <RiDeleteBin6Line className="w-4 h-4 fill-current" />
                                    <span>Remove</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                  <PriceInfo subtotal={subtotal} length={cartTShirts.length} />
                  <div className="flex justify-end pt-7">
                    <Link to='../checkout'>
                    <button className="secondaryButton rounded-md font-medium w-[250px] py-3">
                      Proceed to checkout
                    </button></Link>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyOrder;
