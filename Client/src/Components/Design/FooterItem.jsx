import React from "react";
import { Link } from "react-router-dom";

const FooterItem = ({ name, items }) => {
  return (
    <div className="">
      <p className="text-xl font-medium">{name}</p>
      <div className="mt-7  text-sm space-y-2">
        
        {items.map((item, index) => (
          <p key={index} className="primaryColor text-base">
            <Link>{item} </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
