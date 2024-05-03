import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";
import { GoArrowRight } from "react-icons/go";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Content from "../../Content/Content";

const Banner = () => {
  return (
    <div className="mt-16">
      <Content>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white w-full mb-7 lg:flex items-center">
              <div className="lg:w-[50%] space-y-5">
                <p className="border-l-2 pl-3 text-[#525258] font-normal border-[#F62977]">
                  Best Ear <br /> Headphones
                </p>
                <h2 className="lg:text-7xl text-4xl font-bold pb-7">
                  Find Best <br /> Matley Sound.
                </h2>
                <button className="border border-[#080921] px-8 py-3 flex items-center gap-1 font-medium transition duration-300 ease-in-out hover:text-white hover:bg-[#080921]">
                  <p>Shop Now</p>
                  <GoArrowRight size={20} />
                </button>
              </div>

              <div className="md:hidden pt-5 flex justify-end">
                <img
                  className="bannerMobileImg"
                  src="https://i.ibb.co/6mKWtD3/slider-1.png"
                />
              </div>
              <div className="hidden md:flex">
                <img
                  className="bannerImg"
                  src="https://i.ibb.co/6mKWtD3/slider-1.png"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white w-full lg:flex items-center">
              <div className="lg:w-[50%] space-y-5">
                <p className="border-l-2 pl-3 text-[#525258] font-normal border-[#F62977]">
                  Best Ear <br /> Headphones
                </p>
                <h2 className="lg:text-7xl text-4xl font-bold pb-7">
                  Find your <br /> Beats Studio.
                </h2>
                <button className="border border-[#080921] px-8 py-3 flex items-center gap-1 font-medium transition duration-300 ease-in-out hover:text-white hover:bg-[#080921]">
                  <p>Shop Now</p>
                  <GoArrowRight size={20} />
                </button>
              </div>

              <div className="md:hidden pt-5 flex justify-end">
                <img
                  className="bannerMobileImg"
                  src="https://i.ibb.co/wKnz9mt/slider-2.png"
                />
              </div>
              <div className="hidden md:flex">
                <img
                  className="bannerImg"
                  src="https://i.ibb.co/wKnz9mt/slider-2.png"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white w-full lg:flex items-center">
              <div className="lg:w-[50%] space-y-5">
                <p className="border-l-2 pl-3 text-[#525258] font-normal border-[#F62977]">
                  Best Ear <br /> Fill Your Heart
                </p>
                <h2 className="lg:text-7xl text-4xl font-bold pb-7">
                  Music To <br /> Beats Studio.
                </h2>
                <button className="border border-[#080921] px-8 py-3 flex items-center gap-1 font-medium transition duration-300 ease-in-out hover:text-white hover:bg-[#080921]">
                  <p>Shop Now</p>
                  <GoArrowRight size={20} />
                </button>
              </div>

              <div className="md:hidden pt-5 flex justify-end">
                <img
                  className="bannerMobileImg"
                  src="https://i.ibb.co/9HSDk0M/slider-3.png"
                />
              </div>
              <div className="hidden md:flex">
                <img
                  className="bannerImg"
                  src="https://i.ibb.co/9HSDk0M/slider-3.png"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Content>
    </div>
  );
};

export default Banner;
