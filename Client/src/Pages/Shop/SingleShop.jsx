import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import Content from "../../Components/Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchTShirt } from "../Redux/TShirt/tShirtSlice";
import Tabs from "../../Components/Design/Tabs";
import DeliveryOption from "../../Components/Design/DeliveryOption";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { WishListDataContext } from "../../Components/Context/WishlistData";
import { AddToCartContext } from "../../Components/Context/AddToCart";
import useAuth from "../../Components/Hooks/useAuth";

const SingleShop = () => {
  const {user} = useAuth()
  // console.log(user.email);
  const { favoriteTShirtCount, setFavoriteTShirtCount } =
    useContext(WishListDataContext);
  const { cartTShirtCount, setCartTShirtCount } = useContext(AddToCartContext);
  const { id } = useParams();
  const { isLoading, TShirts, error } = useSelector((state) => state.TShirts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTShirt());
  }, []);

  const DetailsData = TShirts.filter((TShirt) => TShirt._id === id);
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
  // WishList
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Check if the current product is in favorites when component mounts
    const storedIdsString = localStorage.getItem("favoriteTShirt");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    setIsFavorite(storedIds.includes(id));
  }, [id]);

  const handleAddToFavorite = (id) => {
    const storedIdsString = localStorage.getItem("favoriteTShirt");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    if (!storedIds.includes(id)) {
      storedIds.push(id);
      localStorage.setItem("favoriteTShirt", JSON.stringify(storedIds));
      setIsFavorite(true);
      setFavoriteTShirtCount((pre) => pre + 1);
      toast.success("Item is added");
    } else {
      toast.error("Item is already a favorite");
    }
  };
  // Cart
  const [isCartTShirt, setIsCartTShirt] = useState(false);
  useEffect(() => {
    // Check if the current product is in favorites when component mounts
    const storedIdsString = localStorage.getItem("cartTShirt");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    setIsCartTShirt(storedIds.includes(id));
  }, [id]);

 
  // const handleAddToCart = (id) => {
  //   // const Quantity = quantity;

  //   const storedQuantity = localStorage.getItem(`quantity_${id}`);
  //   const Quantity = storedQuantity ? parseInt(storedQuantity) : quantity;
  //     const storedIdsString = localStorage.getItem("cartTShirt");
  //   const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
  //   if (!storedIds.includes(id)) {
  //     storedIds.push(id);
  //     localStorage.setItem("cartTShirt", JSON.stringify(storedIds));
  //     setIsCartTShirt(true);
  //     setCartTShirtCount((pre) => pre + 1);
  //     toast.success("Item is added");
  //   } else {
  //     toast.error("Item is already a favorite");
  //   }
    
  // };
  const handleAddToCart = (TShirt) => {
    const { _id, title,price } = TShirt;
  
    const storedItemsString = localStorage.getItem("cartTShirt");
    const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];
  
    // Check if the item with the given ID is already in the cart
    const existingItemIndex = storedItems.findIndex((item) => item.id === id);
  
    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      storedItems[existingItemIndex].quantity += quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      storedItems.push({ _id, title,price, quantity });
    }
  
    // Save the updated cart items back to localStorage
    localStorage.setItem("cartTShirt", JSON.stringify(storedItems));
  
    setIsCartTShirt(true);
    setCartTShirtCount((prevCount) => prevCount + quantity);
    toast.success("Item is added");
  };
  
  
  
  return (
    <Content>
      <section className="pt-7 flex gap-7">
        <div className="w-3/4  ">
          {DetailsData.map((TShirt) => (
            <section key={TShirt._id}>
              <div className="lg:flex  justify-start gap-3">
                <div className="md:w-[60%] px-5 text-start w-full overflow-hidden">
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
                              selectedImageIndex === index
                                ? "border-gray-700"
                                : ""
                            }`}
                            src={data}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-3/5">
                  <h2 className="text-3xl  text-gray-700 font-semibold">
                    Tk {TShirt?.price}
                  </h2>
                  <div className="space-y-3 pt-3">
                    <h2 className="text-3xl font-semibold">{TShirt.title}</h2>

                    <h2 className="text-base font-semibold">Size</h2>
                    <div className="flex items-center text-xl  gap-6">
                      {TShirt.Size.map((size, index) => (
                        <div
                          onClick={() => handleSizeSelect(size)}
                          key={index}
                          className={`border p-2 shadow-sm rounded-md hover:bg-[#080921] hover:text-white w-[54px] h-[40px] text-center flex items-center justify-center ${
                            size === activeSize
                              ? "bg-[#F62977] hover:bg-[#F62977] text-white"
                              : ""
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                    {/* ad */}
                    <p className="text-justify primaryColor">
                      Elevate your game with the Real Madrid 2024 Half Sleeve
                      Jersey, boasting unparalleled quality and style. Featuring
                      meticulous logo embroidery, this jersey showcases the
                      club's emblem with pride. Crafted from premium mesh
                      fabric, it ensures optimal breathability and comfort on
                      and off the field. Experience the perfect blend of
                      performance and heritage in every stitch.
                    </p>
                    <div className="flex border-b items-center gap-3  w-full pt-7 pb-8">
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
                        onClick={() => handleAddToCart(TShirt)}

                        className={`w-[200px] uppercase rounded-sm font-semibold h-[42px] flex items-center gap-2  justify-center transition duration-300
                          ${isCartTShirt
                            ? "border   bg-[#F62977] text-white "
                            : "primaryButton border"}
                        `}
                      >
                        <MdOutlineShoppingBag size={24} color="white" />
                        ADD to cart
                      </button>
                      {/* Heart icon */}
                      <div className=" ">
                        <a
                          data-tooltip-id="favorite"
                          data-tooltip-content="Add To Wishlist"
                          data-tooltip-place="top"
                        >
                          <Tooltip id="favorite" />

                          <button
                            onClick={() => handleAddToFavorite(TShirt._id)}
                            className={
                              isFavorite
                                ? "border h-[42px] w-[50px] flex items-center justify-center bg-[#F62977] text-white transition duration-300"
                                : "border border-gray-400 h-[42px] w-[40px] flex items-center justify-center text-black transition duration-300 hover:bg-[#F62977] hover:text-white hover:border-none"
                            }
                          >
                            <FiHeart size={25} />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Tabs TShirt={TShirt} />
              </div>
            </section>
          ))}
        </div>
        <div className="w-1/4">
          <DeliveryOption />
        </div>
      </section>
    </Content>
  );
};

export default SingleShop;
