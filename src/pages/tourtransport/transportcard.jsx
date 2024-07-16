import React from "react";

const Transportcard = ({ img, heading, littleText, mainText }) => {
  return (
    <div className="flex relative w-[1076px] px-3 pb-[30px] mb-[30px] border-b border-solid border-[#eee]">
      <div className="w-[367px] pr-3">
        <img className="w-full rounded-[23px]" src={img} />
      </div>
      <div className="w-[700px] pl-3">
        <h4 className="text-[20px] m-0 mb-[5px] text-[#2a2a2a] font-bold">
          {heading}
        </h4>
        <span className="text-[15px] text-[#afafaf] block">{littleText}</span>
        <div className="absolute right-[0] top-0">
          <a
            href="#contact"
            className="text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-80"
          >
            Explore More
          </a>
        </div>
        <p className=" m-0 my-[18px] text-[15px] leading-[30px] text-[#afafaf]">
          {mainText}
        </p>
      </div>
    </div>
  );
};

export default Transportcard;
