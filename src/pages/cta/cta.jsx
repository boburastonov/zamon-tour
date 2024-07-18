import React from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="py-[75px] bg-[url('https://zamontour.uz/assets/images/cta-bg.jpg')] bg-no-repeat bg-cover bg-center py-[75px]">
      <div className="max-w-7xl px-3 mx-auto flex items-center justify-between">
        <div className="w-[66%] pr-3 text-white">
          <h2 className="text-[40px] mb-[10px] uppercase font-bold">
            {t('Are You Looking To Travel')}
          </h2>
          <h4 className="text-[20px] font-semibold tracking-[0.5px] m-0">
            {t('Make A Reservation By Clicking The Button')}
          </h4>
        </div>
        <div className="pl-3">
          <a
            href="#contact"
            className="text-white border border-solid border-white text-[14px] py-3 px-[30px] rounded-[25px] bg-[#22b3c1] font-medium tracking-[0.5px] transition-all duration-[0.3s] inline-block hover:text-[#22b3c1] hover:bg-white hover:border-white"
          >
            {t('Book Yours Now')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
