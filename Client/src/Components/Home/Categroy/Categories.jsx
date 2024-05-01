import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./categories.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import Content from "../../Content/Content";

// https://i.ibb.co/pdY4zzF/abc.jpg
// https://i.ibb.co/3pk7V1V/Computers-Monitor-Laptop.jpg
// https://i.ibb.co/rf9hLFZ/Spinning-Reel-Kettle.jpg
// https://i.ibb.co/StYcRp5/Exercise-Bike-Shaver-Clean.jpg
// https://i.ibb.co/30qmfT0/Wireless-Watches.jpg
// https://i.ibb.co/1QzSdVq/Ipad-Phone-Tablets.jpg
// https://i.ibb.co/yBbL02v/Planer-Virtual.jpg
// https://i.ibb.co/4stT8gq/Camera-Bluetooth-Headset.jpg
// https://i.ibb.co/Wx89q33/Camera.jpg
const categories = [
  {
    imgUrl: "https://i.ibb.co/pdY4zzF/abc.jpg",
    name: "abc",
  },
  {
    imgUrl: "https://i.ibb.co/3pk7V1V/Computers-Monitor-Laptop.jpg",
    name: "Computers Monitor Laptop",
  },
  {
    imgUrl: "https://i.ibb.co/rf9hLFZ/Spinning-Reel-Kettle.jpg",
    name: "Spinning Reel Kettle",
  },
  {
    imgUrl: "https://i.ibb.co/StYcRp5/Exercise-Bike-Shaver-Clean.jpg",
    name: "Exercise Bike-Shaver Clean",
  },
  {
    imgUrl: "https://i.ibb.co/30qmfT0/Wireless-Watches.jpg",
    name: "Wireless Watches",
  },
  {
    imgUrl: "https://i.ibb.co/1QzSdVq/Ipad-Phone-Tablets.jpg",
    name: "Ipad Phone Tablets",
  },
  {
    imgUrl: "https://i.ibb.co/yBbL02v/Planer-Virtual.jpg",
    name: "Planer Virtual",
  },
  {
    imgUrl: "https://i.ibb.co/4stT8gq/Camera-Bluetooth-Headset.jpg",
    name: "Camera Bluetooth Headset",
  },
  {
    imgUrl: "https://i.ibb.co/Wx89q33/Camera.jpg",
    name: "Camera",
  },
];
export const Categories = () => {
  return (
    <Content>
      <div className="w-full object-cover">
        {" "}
        <Swiper
          slidesPerView={1}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper "
          breakpoints={{
            1024: {
              slidesPerView: 4
             
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div>
                <img className="categoryImg w-full" src={category.imgUrl} alt="" />
                <p className="text-center pb-5 font-medium primaryColor pt-2">{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Content>
  );
};
