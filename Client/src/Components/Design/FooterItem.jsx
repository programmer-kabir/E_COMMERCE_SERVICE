import React from "react";
import { Link } from "react-router-dom";

const FooterItem = ({ name, items }) => {
  return (
    <div className="text-center sm:text-left">
      <p className="text-xl font-medium text-[#03041c]">{name}</p>
      <div className="mt-7  text-sm space-y-2">
        
        {items.map((item, index) => (
          <p className="text-[#525258] text-base">
            <Link>{item} </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
