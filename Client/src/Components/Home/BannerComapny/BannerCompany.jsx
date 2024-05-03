import React from "react";
import Marquee from "react-fast-marquee";
import Content from "../../Content/Content";

const BannerCompany = () => {
  const partnerCompaniesTwo = [
    {
      logoUrl: "https://i.ibb.co/kMFH108/brand-7-1.png",
    },
    {
      logoUrl: "https://i.ibb.co/QkcGXtC/brand-3.png",
    },
    {
      logoUrl: "https://i.ibb.co/SVYt18W/brand-2.png",
    },
    {
      logoUrl: "https://i.ibb.co/Brn8C8M/brand-4.png",
    },
    {
      logoUrl: "https://i.ibb.co/VCcj4Pm/brand-8.png",
    },
    {
      logoUrl: "https://i.ibb.co/kMFH108/brand-7-1.png",
    },
    {
      logoUrl: "https://i.ibb.co/sKpN4Ys/brand-6.png",
    },
    {
      logoUrl: "https://i.ibb.co/nsgcz6C/brand-5.png",
    },
  ];

  return (
    <div className="bg-white pt-16 text-center text-gray-800">
      <Content>
      <div className="md:flex mt-4">
        <Marquee speed={70} gradient={true} pauseOnHover={true}>
          {partnerCompaniesTwo.map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 h-[160px] mx-2 border-[.5px] border-gray-300 w-[260px] rounded-lg hover:bg-gray-100 flex items-center justify-center hover:text-cyan-500 transition duration-300 ease-in-out"
            >
              <img
                src={company.logoUrl}
                alt={company.name}
                className=" mx-auto mb-4"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="md:flex mt-4">
        <Marquee
          speed={70}
          gradient={true}
          pauseOnHover={true}
          direction="right"
        >
          {partnerCompaniesTwo.map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 h-[160px] mx-2 border-[.5px] border-gray-300 w-[260px] rounded-lg hover:bg-gray-100 flex items-center justify-center hover:text-cyan-500 transition duration-300 ease-in-out"
            >
              <img
                src={company.logoUrl}
                alt={company.name}
                className="mx-auto mb-4"
              />
            </div>
          ))}
        </Marquee>
      </div>
      </Content>
    </div>
  );
};

export default BannerCompany;
