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
    <div className="">
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
        <SwiperSlide className="pt-2">
          <div className="bg-center bg-cover h-[550px]  bannerImage1">
            <Content>
              <div className="mx-auto  md:flex text-white gap-5 items-center ">
                <div className="space-y-3 w-[100%]">
                  <p className="border-l-2 pl-3  text-[#f0f0f0] font-semibold  border-[#F62977]">
                    Premium Quality
                  </p>
                  <h2 className="md:text-[52px] leading-tight  text-3xl font-semibold">
                    Our Team Jersey <br className="py-5" />
                    Our Passion Our Pride
                  </h2>
                  <p className=" text-base pb-5 text-[#f1f1f1] font-medium">
                    Where threads weave tales of triumph, In colors,
                    <br />
                    we find our unity. Jersey, the emblem of our shared journey.
                  </p>
                  <button
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    }}
                    className="secondaryButton px-12 py-3"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="">
                  <img src="https://i.ibb.co/k3qKYb4/football.png" alt="" />
                </div>
              </div>
            </Content>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-2">
          <div className="bg-center  bg-cover h-[550px]  bannerImage2">
            <Content>
              <div className="mx-auto text-white  md:flex gap-5 items-center ">
                <div className="space-y-3 w-[100%]">
                  <p className="border-l-2 pl-3 text-[#f0f0f0] font-semibold border-[#F62977]">
                    Premium Quality
                  </p>
                  <h2 className="md:text-[52px] text-white leading-tight  text-3xl font-semibold">
                    Unfolding Pride <br className="py-5" />
                    Unity Victory in Jersey
                  </h2>
                  <p className="text-[#f1f1f1] font-medium text-base pb-5">
                    Crafted with Passion, Worn with Pride, Each Thread Tells
                    <br />
                    Our Journey's Stride. In Unity's Embrace, Victory Resides.
                  </p>
                  <button
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    }}
                    className="secondaryButton px-12 py-3"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="">
                  <img src="https://i.ibb.co/180MgY5/cricket.png" alt="" />
                </div>
              </div>
            </Content>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-2">
  <div className="bg-center bg-cover h-[550px] bannerImage3 relative">
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}} className="bg-[#080921] space-y-3 px-28 py-10 rounded">
      <p className="border-l-2 pl-3 text-[#f0f0f0] font-semibold border-[#F62977]">
                    Premium Quality
                  </p>
        <h2 className="text-white leading-tight text-[50px] font-bold ">Style Speaks<br /> Wear Your Story Proud.</h2>
        <p className="text-white font-medium ">Threads of passion, stitched with dreams,<br/>
          Every fabric, a tale it seems.
          In every wear, our spirit gleams.</p>
      </div>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
