import React from "react";
import Content from "../../Content/Content";

const NewsLetter = () => {
  return (
    <section className="mt-10">
      <div
        className="relative bg-cover bg-center h-[250px] "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/10hmSMz/abstract-dark-background-with-simple-red-lines-element-132724-836.jpg')",
        }}
      >
        <div class="absolute inset-0  flex items-center justify-center w-full">
          <Content>
            <div class=" bg-white w-full flex items-center justify-between px-20 rounded-md py-10">
              <h2 class="text-4xl font-bold">
                Subscribe for <br />
                Latest Trends & Offers
              </h2>

              <div className="w-[50%] flex border border-black px-1 py-3  items-center">
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  name=""
                  className="w-full mx-5 outline-none  text-base  text-black"
                  id=""
                />
                <button className="primaryButton w-48">Subscribe</button>
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
