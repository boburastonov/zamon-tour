import React from "react";
import { useTranslation } from "react-i18next";

const Reservation = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('https://zamontour.uz/assets/images/heading-bg-02.jpg')] bg-no-repeat bg-center bg-cover pt-[260px] pb-[190px] text-center">
      <div className="max-w-7xl mx-auto px-3 relative">
        <h4 className="text-5 font-medium text-white text-[15px] mb-[15px] pb-[25px] relative after:absolute after:w-[100px] h-[2px] after:bg-[rgba(250, 250, 250, 0.3] after:content-[''] after:left-[50%] after:bottom-0 after:transform after:translate-y-[-50px]">
          {t("Book Preferred Deal Here")}
        </h4>
        <div className="absolute w-[100px] h-[2px] bg-[#fafafa4c] left-[50%] transform translate-x-[-50%]" />
        <h2 className="text-[50px] font-bold text-white mb-[30px]">
          {t("Make Your Reservation")}
        </h2>
        <div>
          <a
            href="#contact"
            className="text-[14px] text-[#22b3c1] border border-solid border-white bg-white py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:bg-[#22b3c1] hover:text-white hover:border-[#22b3c1]"
          >
            {t("Discover More")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
