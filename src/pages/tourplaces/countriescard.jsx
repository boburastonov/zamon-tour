import React from "react";
import { GoHomeFill } from "react-icons/go";
import { RiUser3Fill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "./countries.css";
import { useTranslation } from "react-i18next";

const CountriesCard = ({
  img,
  heading,
  littleText,
  mainText,
  peopleCount,
  area,
  price,
}) => {
  const { t } = useTranslation();
  return (
    <div className="lg:flex lg:relative lg:w-[80%] px-3 pb-[30px] mb-[30px] border-b border-solid border-[#eee]">
      <div className="lg:w-[367px] lg:pr-3 md:w-[70%] md:mb-5 md:mx-auto">
        <img className="w-full rounded-[23px]" src={img} />
      </div>
      <div className="lg:w-[700px] lg:pl-3 md:relative md:w-[73%] md:mx-auto">
        <h4 className="text-[20px] m-0 mb-[5px] text-[#2a2a2a] font-bold">
          {heading}
        </h4>
        <span className="text-[15px] text-[#afafaf] block">{littleText}</span>
        <div className="absolute right-2 top-0">
          <a
            href="#contact"
            className="text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-80"
          >
            {t("Explore More")}
          </a>
        </div>
        <p className=" m-0 my-[18px] text-[15px] leading-[30px] text-[#afafaf]">
          {mainText}
        </p>
        <ul className="flex items-center justify-between p-0 m-0 py-[15px] list-none border-b border-t border-solid border-[#eee]">
          <li className="flex text-[#afafaf] text-[14px]">
            <RiUser3Fill className="mr-[5px] text-[16px]" /> {peopleCount} Mill {' '}
            {t("People")}
          </li>
          <li className="flex w-[32%] text-[#afafaf] text-[14px]">
            <FaGlobe className="mr-[5px] text-[16px]" /> {area} km2
          </li>
          <li className="flex w-[32%] text-[#afafaf] text-[14px]">
            <GoHomeFill className="mr-[5px] text-[16px]" /> ${price}
          </li>
        </ul>
        <div className="mt-5">
          <a
            href="#contact"
            className="new-dr flex items-center text-[#22b3c1]"
          >
            {t("New Directions")}?{" "}
            <FaArrowRightLong className="right-ic ml-[5px] transition-all duration-[0.3s]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
