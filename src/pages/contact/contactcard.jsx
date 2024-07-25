import React from "react";

const Contactcard = ({ icon, heading, linkUrl, linkText }) => {
  return (
    <div className="contact-card lg:w-[32%] md:w-[49%] md:mb-3 bg-white rounded-[23px] shadow-lg text-center p-[30px]">
      <div className="bg-[#f0f0f0] flex items-center justify-center mx-auto w-[60px] h-[60px]  text-center leading-[60px] rounded-[50px] text-[#22b3c1] text-[20px] mb-5">
        {icon}
      </div>
      <h4 className="text-[20px] font-bold mb-[10px] text-[#2a2a2a]">
        {heading}
      </h4>
      <a href={linkUrl} className="text-[15px] text-[#22b3c1]">
        {linkText}
      </a>
    </div>
  );
};

export default Contactcard;
