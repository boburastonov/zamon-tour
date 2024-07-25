import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
import { t } from "i18next";

const Tourcard = ({ imgSource, cityName, userCount, price }) => {
  return (
    <div
      className="tour-card relative md:w-[400px] h-[470px] md:px-10 md:ml-[-30px]"
      id="tours"
    >
      <img
        className="card-img rounded-tl-[23px] rounded-bl-[23px] overflow-hidden block md:w-[250px] h-96"
        src={imgSource}
      />
      <div className="absolute lg:w-[300px] top-12 md:right-0 right-[-5px] bg-white rounded-[23px] shadow-[0px_0px_15px_rgba(0,0,0,0.15)] p-[30px] ">
        <h4 className="text-[20px] inline-block m-0 text-[#2a2a2a] font-bold">
          {cityName} <br />{" "}
          <span className="text-[15px] text-[#afafaf] font-normal flex items-center">
            <FaUsers className="mr-1" />
            {userCount} {t("Check Ins")}
          </span>
        </h4>
        <h6 className="inline-block float-right text-[20px] text-[#22b3c1] font-bold">
          {price} <br />{" "}
          <span className="text-[15px] text-[#afafaf] font-normal">
            /{t("person")}
          </span>
        </h6>
        <ul className="border-t border-solid border-[#eee] mt-[25px] pt-[25px] p-0 m-0 list-none">
          <li className="text-[#2a2a2a] font-semibold text-[14px] mb-[10px]">
            {t("Deal Includes")}:
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px] capitalize">
            <FaCar className="mr-1" />
            {t("5 Days Trip")} &gt; {t("Hotel Included")}
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px]">
            <IoIosAirplane className="mr-1" />
            {t("Airplane Bill Included")}
          </li>
          <li className="flex items-center text-[#afafaf] text-[14px] mb-[10px]">
            <FaBuilding className="mr-1" />
            {t("Daily Places Visit")}
          </li>
        </ul>
        <div className="mt-[30px]">
          <a
            href="#contact"
            className="text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-85 relative overflow-hidden"
          >
            {t("Make a Reservation")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tourcard;
