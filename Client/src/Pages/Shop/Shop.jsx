import React, { useState } from "react";
import Content from "../../Components/Content/Content";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const data = [
  {
    title: "New Football",
  },
  {
    title: "English Premier League Jersey",
  },
  {
    title: "La Liga Club Jersey",
  },
  {
    title: "FIFA World Cup Jersey",
  },
  {
    title: "MLS club",
  },
  {
    title: "Saudi Pro League",
  },
  {
    title: "IPL",
  },
  {
    title: "BPL",
  },
  {
    title: "ICC",
  },
];

const Shop = () => {
  return (
    <Content>
      <section className="mt-10">
        {data.map((d) => (
          <div>
            <p>{d.title}</p>
          </div>
        ))}
      </section>
    </Content>
  );
};

export default Shop;
