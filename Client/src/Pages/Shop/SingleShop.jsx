import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart, FiPhone } from "react-icons/fi";
import Content from "../../Components/Content/Content";
import useDatas from "../../Components/Hooks/useData";

const SingleShop = () => {
  const [selectedImage, setSelectedImage] = useState("image");
  const { id } = useParams();
  const [datas] = useDatas();
  const handleImageChange = (imageProperty) => {
    setSelectedImage(imageProperty);
  };
  const DetailsData = datas.filter((data) => data._id === id);
  console.log(DetailsData);
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <Content>
      <section className="pt-12 ">
        {DetailsData.map((Data) => (
          <div key={Data._id}>
            <span>{Data.title}</span>
            {Data.productDescription.map((d) => (
              <div>{d.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}</div>
            ))}
          </div>
        ))}
      </section>
    </Content>
  );
};

export default SingleShop;
