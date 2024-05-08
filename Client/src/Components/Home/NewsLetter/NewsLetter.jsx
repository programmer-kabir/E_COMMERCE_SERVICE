import React from "react";
import Content from "../../Content/Content";

const NewsLetter = () => {
  return (
    <section className="mt-10">
      <div
        className="relative bg-cover bg-center md:h-[250px] h-[350px] "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/10hmSMz/abstract-dark-background-with-simple-red-lines-element-132724-836.jpg')",
        }}
      >
        <div className="absolute inset-0  flex items-center justify-center w-full">
          <Content>
            <div className=" bg-white w-full md:flex px-5 items-center justify-between md:px-20 rounded-md py-10">
              <h2 className="md:text-4xl text-2xl font-bold">
                Subscribe for <br />
                Latest Trends & Offers
              </h2>

              <div className="md:w-[50%] space-y-2 md:flex md:border border-black px-1 py-3  md:items-center">
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  name=""
                  className="w-full px-5 py-3 border md:border-none border-black outline-none  text-base  text-black"
                  id=""
                />
                <button className="primaryButton md:w-48 w-36">Subscribe</button>
              </div>
              
            </div>
          </Content>
        </div>
      </div>
      {/* https://i.ibb.co/10hmSMz/abstract-dark-background-with-simple-red-lines-element-132724-836.jpg */}
    </section>
  );
};

export default NewsLetter;
