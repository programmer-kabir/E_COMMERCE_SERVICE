import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart, FiPhone } from "react-icons/fi";
import Content from "../../Components/Content/Content";
import useDatas from "../../Components/Hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTShirt } from "../Redux/TShirt/tShirtSlice";

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

  return (
    <Content>
      <section className="pt-12 ">
        {DetailsData.map((TShirt) => (
          <div key={TShirt._id} className="lg:flex justify-start gap-10">
            <div className="md:w-2/5	 text-start w-full overflow-hidden">
              <div className=" flex flex-col justify-center ">
                <div className="  md:w-full mx-auto">
                  <img
                    className="h-[400px] w-full mx-auto rounded-md"
                    src={TShirt.image[selectedImageIndex]}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center md:w-full gap-1 pt-2">
                  {TShirt.image.map((data, index) => (
                    <div className="w-full" key={index} onClick={() => setSelectedImageIndex(index)} >
                      <img className="w-[90px] h-[90px] border rounded-md p-1" src={data} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src="https://i.ibb.co/VqfXJyx/1.webp" alt="" />
            </div>
          </div>
        ))}
      </section>
    </Content>
  );
};

export default SingleShop;
