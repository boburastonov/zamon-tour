import React from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:py-[75px] md:py-14 py-8 bg-[url('https://zamontour.uz/assets/images/cta-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl px-3 mx-auto flex items-center justify-between lg:flex-row flex-col">
        <div className="lg:w-[68%] lg:pr-3 text-white lg:text-left text-center">
          <h2 className="lg:text-[40px] mb-[10px] uppercase font-bold md:text-[36px] text-[30px]">
            {t("Are You Looking To Travel?")}
          </h2>
          <h4 className="md:text-[20px] text-[17px] font-semibold tracking-[0.5px] m-0">
            {t("Make A Reservation By Clicking The Button")}
          </h4>
        </div>
        <div className="pl-3 md:mt-[30px] mt-[15px]">
          <a
            href="#contact"
            className="text-white border border-solid border-white text-[14px] py-3 px-[30px] rounded-[25px] bg-[#22b3c1] font-medium tracking-[0.5px] transition-all duration-[0.3s] inline-block hover:text-[#22b3c1] hover:bg-white hover:border-white"
          >
            {t("Book Yours Now")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
