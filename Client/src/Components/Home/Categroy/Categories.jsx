import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./categories.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import Content from "../../Content/Content";
3;

// https://i.ibb.co/pdY4zzF/abc.jpg
// https://i.ibb.co/3pk7V1V/Computers-Monitor-Laptop.jpg
// https://i.ibb.co/rf9hLFZ/Spinning-Reel-Kettle.jpg
// https://i.ibb.co/StYcRp5/Exercise-Bike-Shaver-Clean.jpg
// https://i.ibb.co/30qmfT0/Wireless-Watches.jpg
// https://i.ibb.co/1QzSdVq/Ipad-Phone-Tablets.jpg
// https://i.ibb.co/yBbL02v/Planer-Virtual.jpg
// https://i.ibb.co/4stT8gq/Camera-Bluetooth-Headset.jpg
// https://i.ibb.co/Wx89q33/Camera.jpg

export const Categories = () => {
  return (
    <Content>
      <div className="w-full object-cover">
        {" "}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper pb-7"
        >
          <SwiperSlide>
            <div>
              <img
                className="categoryImg"
                src="https://i.ibb.co/pdY4zzF/abc.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
            className="categoryImg"
              src="https://i.ibb.co/3pk7V1V/Computers-Monitor-Laptop.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
            className="categoryImg"
              src="https://i.ibb.co/rf9hLFZ/Spinning-Reel-Kettle.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
            className="categoryImg"
              src="https://i.ibb.co/StYcRp5/Exercise-Bike-Shaver-Clean.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="categoryImg" src="https://i.ibb.co/30qmfT0/Wireless-Watches.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="categoryImg" src="https://i.ibb.co/1QzSdVq/Ipad-Phone-Tablets.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="categoryImg" src="https://i.ibb.co/yBbL02v/Planer-Virtual.jpg" alt="" />
          </SwiperSlide>
          
          <SwiperSlide>
            {" "}
            <img className="categoryImg" src="https://i.ibb.co/4stT8gq/Camera-Bluetooth-Headset.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="categoryImg" src="https://i.ibb.co/Wx89q33/Camera.jpg" alt="" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </Content>
  );
};
