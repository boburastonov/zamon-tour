import React from "react";
import { useTranslation } from "react-i18next";

const Transportcard = ({ img, heading, littleText, mainText }) => {
  const { t } = useTranslation();

  return (
    <div className="transport-card lg:flex lg:relative lg:w-[80%] px-3 md:pb-[30px] md:mb-[30px] border-b border-solid border-[#eee]">
      <div className="lg:w-[367px] lg:pr-3 md:w-[70%] md:mb-5 md:mx-auto">
        <img className="w-full rounded-[23px]" src={img} />
      </div>
      <div className="transport-content lg:w-[700px] lg:pl-3 relative md:w-[73%] md:mx-auto">
        <h4 className="text-[20px] m-0 mb-[5px] text-[#2a2a2a] font-bold">
          {heading}
        </h4>
        <span className="text-[15px] text-[#afafaf] block">{littleText}</span>
        <div className="absolute right-2 md:top-0 top-[25px] z-20">
          <a
            href="#contact"
            className="md:text-[14px] text-[12px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] md:py-3 md:px-[30px] py-2 px-4 inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-80"
          >
            {t('Explore More')}
          </a>
        </div>
        <p className="transport-text m-0 md:my-[18px] text-[15px] leading-[30px] text-[#afafaf]">
          {mainText}
        </p>
      </div>
    </div>
  );
};

export default Transportcard;
