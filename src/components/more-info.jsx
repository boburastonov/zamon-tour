import React from "react";
import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../pages/slider/slider.css";

const MoreInfo = ({ population, territory, price }) => {
  const { t } = useTranslation();
  return (
    <div className="more-pr w-[80%] left-[10%] bottom-[130px] bg-white lg:rounded-[61px] lg:py-[30px] lg:px-[60px] lg:mt-[70px] mx-auto rounded-[40px] md:py-4 md:px-2 md:mt-10">
      <div className="more-cont flex mx-auto">
        <div className="cons-pr md:flex">
          <div className="info-wrapper flex items-center lg:px-3 md:px-1 text-left">
            <div className="icon-wrapper lg:w-[60px] lg:h-[60px] flex items-center justify-center lg:mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] md:w-[50px] md:h-[50px] md:mr-3">
              <RiUser3Fill className="lg:text-[24px] md:text-[20px]" />
            </div>
            <div>
              <p className="text-[15px] font-normal text-[#AFAFAF">
                {t("Population")}:
              </p>
              <h4 className="lg:text-[20px] text-[#22b3c1] lg:font-bold md:text-[18px] md:font-semibold leading-[28px] whitespace-nowrap">
                {population} M
              </h4>
            </div>
          </div>
          <div className="info-wrapper flex items-center lg:px-3 md:px-1 text-left">
            <div className="icon-wrapper lg:w-[60px] lg:h-[60px] flex items-center justify-center lg:mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] md:w-[50px] md:h-[50px] md:mr-3">
              <FaGlobe className="lg:text-[24px] md:text-[20px]" />
            </div>
            <div>
              <p className="text-[15px] font-normal text-[#AFAFAF">
                {t("Territory")}:
              </p>
              <h4 className="lg:text-[20px] text-[#22b3c1] lg:font-bold md:text-[18px] md:font-semibold leading-[28px] whitespace-nowrap">
                {territory} KM2
              </h4>
            </div>
          </div>
          <div className="info-wrapper flex items-center lg:px-3 md:px-1 text-left">
            <div className="icon-wrapper lg:w-[60px] lg:h-[60px] flex items-center justify-center lg:mr-5 text-[#22b3c1] leading-[58px] border border-solid border-[#22b3c1] rounded-[50%] md:w-[50px] md:h-[50px] md:mr-3">
              <GoHomeFill className="lg:text-[24px] md:text-[20px]" />
            </div>
            <div>
              <p className="text-[15px] font-normal text-[#AFAFAF">
                AVG {t("Price")}:
              </p>
              <h4 className="lg:text-[20px] text-[#22b3c1] lg:font-bold md:text-[18px] md:font-semibold leading-[28px] whitespace-nowrap">
                ${price}
              </h4>
            </div>
          </div>
        </div>
        <div className="btn-pr ml-auto">
          <a
            href="#contact"
            className="more-btn text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 lg:px-[30px] lg:rounded-[25px] md:px-5 md:rounded-[23px] font-medium capitalize tracking-[0.5px] transition-all 0.3s inline-block hover:opacity-90"
          >
            {t("Explore More")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
