import React, { useRef, useState } from 'react';
import Content from "../../Content/Content";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './store.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const stores = [
    {
      imgUrl: "https://i.ibb.co/1TZ6yJH/Amazon.jpg",
      name: "Amazon",
    },
    {
      imgUrl: "https://i.ibb.co/wLMqGLZ/Flipkart.jpg",
      name: "Flipkart",
    },
    {
      imgUrl: "https://i.ibb.co/pR4nZPZ/Alibaba.jpg",
      name: "Alibaba",
    },
    {
      imgUrl: "https://i.ibb.co/hRSyBHZ/Daraz.jpg",
      name: "Daraz",
    },
    {
      imgUrl: "https://i.ibb.co/McQdRwj/Zomata.jpg",
      name: "Zomata",
    },
    {
      imgUrl: "https://i.ibb.co/b3wpNSB/Fedex.jpg",
      name: "Fedex",
    }
    
  ];
const AllStore = () => {
  return (
    <section>
      <Content>
        {/* Title */}
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold border-s-4 border-[#F62977] pl-3">
            Popular Products
          </h2>
          <Link>
            <button className="secondaryButton">View All Store</button>
          </Link>
        </div>
        {/* div */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        breakpoints={{
            1024: {
              slidesPerView: 4
             
            },
          }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        
         {stores.map((store, index) => (
            <SwiperSlide key={index}>
              <div>
                <img className="categoryImg w-full" src={store.imgUrl} alt="" />
                <p className="text-center pt-5 font-medium primaryColor">{store.name}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
        </div>
      </Content>
    </section>
  );
};

export default AllStore;
