import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#22b3c1] text-center py-[25px]">
      <div className="max-w-7xl px-3 mx-auto">
        <p className="text-white text-[15px] leading-[30px]">
          Copyright © 2024{" "}
          <a href="#" className="font-medium transition-all duration-[0.3s]">
            {" "}
            Zamon Business Tour.
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
