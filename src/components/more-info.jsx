import React from "react";
import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";

const MoreInfo = ({population, territory, price}) => {
  return (
    <div className="w-[80%] left-[10%] bottom-[130px] bg-white rounded-[61px] py-[30px] px-[60px] mt-[70px] mx-auto">
      <div className="flex items-center">
        <div className="flex items-center px-3 text-left">
          <div className="w-[60px] h-[60px] flex items-center mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] justify-center">
            <RiUser3Fill className="text-[24px]" />
          </div>
          <div>
            <p className="text-[#AFAFAF">Population:</p>
            <h4 className="text-[20px] text-[#22b3c1] font-bold leading-[28px]">
              {population} M
            </h4>
          </div>
        </div>
        <div className="flex items-center px-3 text-left">
          <div className="w-[60px] h-[60px] flex items-center mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] justify-center">
            <FaGlobe className="text-[24px]" />
          </div>
          <div>
            <p className="text-[#AFAFAF">Territory:</p>
            <h4 className="text-[20px] text-[#22b3c1] font-bold leading-[28px]">
              {territory} KM2
            </h4>
          </div>
        </div>
        <div className="flex items-center px-3 text-left">
          <div className="w-[60px] h-[60px] flex items-center mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] justify-center">
            <GoHomeFill className="text-[24px]" />
          </div>
          <div>
            <p className="text-[#AFAFAF">AVG Price:</p>
            <h4 className="text-[20px] text-[#22b3c1] font-bold leading-[28px]">
              ${price}
            </h4>
          </div>
        </div>
        <div className="mt-2 ml-auto">
          <a
            href="#contact"
            className="text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all 0.3s inline-block"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
