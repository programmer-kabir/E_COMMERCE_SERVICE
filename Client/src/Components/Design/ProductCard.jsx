import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaChessKing, FaCodeCompare, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { WishListDataContext } from "../Context/WishlistData";
const ProductCard = ({ TShirt }) => {
const {setFavoriteTShirtCount} = useContext(WishListDataContext)
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Check if the current product is in favorites when component mounts
    const storedIdsString = localStorage.getItem("favoriteTShirt");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    setIsFavorite(storedIds.includes(TShirt._id));
  }, [TShirt._id]);

  const [storedIds, setId] = useState("");
  const handleAddToFavorite = (id) => {
    const storedIdsString = localStorage.getItem("favoriteTShirt");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    setId(storedIds);

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
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHoveredEye, setIsHoveredEye] = useState(false);
  const [isHoveredCompare, setIsHoveredCompare] = useState(false);

  return (
    <div>
      <div className="product-card">
        <div className="relative overflow-hidden">
          <div className="group relative block">
            <Link to={`../product-details/${TShirt._id}`}>
              <div className="w-[261px] h-[305px]">
                {/* Fixed height for the image container */}
                <img
                  src={TShirt.image[0]}
                  alt=""
                  className="w-full h-[305px] object-cover transition group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="absolute bottom-0 w-full">
              <div className="duration-500 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Link to="/checkout">
                  <button className="primaryButton w-full">Add to Cart</button>
                </Link>
              </div>
            </div>

            {/* Additional content */}
            <div className="right-2 cursor-pointer absolute top-10">
              <div className="translate-x-8 duration-500  space-y-3 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                <a
                
                  data-tooltip-id="favorite"
                  data-tooltip-content="Add To Wishlist"
                  data-tooltip-place="top"
                >
                  <Tooltip id="favorite" />

                  <div
                   onClick={()=>handleAddToFavorite(TShirt._id)}
                    className={` hover:bg-[#F62977] p-2 ${
                      isFavorite ? "bg-[#F62977] text-white" : "bg-white"
                    }`}
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={() => setIsHoveredHeart(true)}
                    onMouseLeave={() => setIsHoveredHeart(false)}
                  >
                    <FaRegHeart
                      size={20}
                      color={isHoveredHeart ? "white" : ""}
                    />
                  </div>
                </a>

                <div
                  className="bg-white hover:bg-[#F62977] p-2 shadow-lg"
                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={() => setIsHoveredEye(true)}
                  onMouseLeave={() => setIsHoveredEye(false)}
                >
                  <FaRegEye size={20} color={isHoveredEye ? "white" : "#000"} />
                </div>
                <div
                  className="bg-white rotate-90 hover:bg-[#F62977] p-2 shadow-lg"
                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={() => setIsHoveredCompare(true)}
                  onMouseLeave={() => setIsHoveredCompare(false)}
                >
                  <FaCodeCompare
                    size={20}
                    color={isHoveredCompare ? "white" : "#000 "}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
