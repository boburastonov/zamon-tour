import React from "react";
import { useTranslation } from "react-i18next";
import { FaTags, FaUsers } from "react-icons/fa";
import { FaClock, FaCheck } from "react-icons/fa6";

const SupportCard = ({ imgSource, cityName }) => {
  const { t } = useTranslation();

  return (
    <div className="offer-card relative md:w-[400px] h-[470px] md:px-10 lg:ml-[-30px]">
      <img
        className="card-img rounded-tl-[23px] rounded-bl-[23px] overflow-hidden block md:w-[250px] h-44"
        src={imgSource}
      />
      <div className="absolute w-[300px] top-12 md:right-0 right-[-25px] bg-white rounded-[23px] shadow-[0px_0px_15px_rgba(0,0,0,0.15)] p-[30px]">
        <h4 className="text-[20px] inline-block m-0 text-[#2a2a2a] font-bold">
          {cityName} <br />{" "}
          <span className="text-[15px] text-[#afafaf] font-normal flex items-center">
            <FaUsers className="mr-1" /> 234 {t("Check Ins")}
          </span>
        </h4>
        <ul className="border-t border-solid border-[#eee] mt-[25px] pt-[25px] p-0 m-0 list-none">
          <li className="text-[#2a2a2a] font-semibold text-[14px] mb-[10px]">
            {t("Benefits of our Visa Support service")}:
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px]">
            <FaTags className="mr-1" />
            {t("Best Prices")}
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px]">
            <FaClock className="mr-1" />
            {t("Short Processing Time")}
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px]">
            <FaCheck className="mr-1" />
            {t("Trustworthy Assistance")}
          </li>
        </ul>
        <div className="mt-[30px]">
          <a
            href="#contact"
            className="text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition transition-all duration-[0.3s] hover:opacity-85 relative overflow-hidden"
          >
            {t("Make a Reservation")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
