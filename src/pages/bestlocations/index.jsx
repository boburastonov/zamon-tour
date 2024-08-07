import React from "react";
import "./bestlocations.css";
import { FaExpand } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BestLocations = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3">
        <div className="md:w-[50%] w-[70%] md:ml-[25%] mx-auto px-3 m-0 md:mb-20 mb-10">
          <h2 className="m-0 leading-[36px] text-[30px] font-bold capitalize text-center text-[#2a2a2a]">
            {t("Best Locations")}
          </h2>
          <p className="text-[15px] leading-[30px] text-[#afafaf]"></p>
        </div>
        <div className="flex flex-nowrap h-[400px] justify-center mx-auto">
          <input
            type="radio"
            className="slider-input"
            name="slide"
            id="c1"
            defaultChecked
          />
          <label
            htmlFor="c1"
            className="card flex items-end bg-cover rounded-[30px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.8)] cursor-pointer m-0 mx-[10px] overflow-hidden w-[60px]"
          >
            <div className="flex flex-nowrap text-white">
              <div className="num flex items-center justify-center bg-white w-10 h-10 rounded-[50%] text-[#22b3c1] m-[15px] ">
                <FaExpand />
              </div>
              <div className="description flex flex-col justify-center text-white w-[520px] h-20 opacity-0 overflow-hidden transform translate-y-[30px] delay-[0.3s]">
                <h4 className="uppercase text-[20px] font-bold">
                  {t("Dubai")}
                </h4>{" "}
                <p className="text-[14px] font-medium">{t("Population")}: 2M</p>
              </div>
            </div>
          </label>
          <input type="radio" className="slider-input" name="slide" id="c2" />
          <label
            htmlFor="c2"
            className="card flex items-end bg-cover rounded-[30px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.8)] cursor-pointer m-0 mx-[10px] overflow-hidden w-[60px]"
          >
            <div className="flex flex-nowrap text-white">
              <div className="num flex items-center justify-center bg-white w-10 h-10 rounded-[50%] text-[#22b3c1] m-[15px] ">
                <FaExpand />
              </div>
              <div className="description flex flex-col justify-center text-white w-[520px] h-20 opacity-0 overflow-hidden transform translate-y-[30px] delay-[0.3s]">
                <h4 className="uppercase text-[20px] font-bold">{"Antalya"}</h4>
                <p className="text-[14px] font-medium">
                  {t("Population")}: 3.5M
                </p>
              </div>
            </div>
          </label>
          <input type="radio" className="slider-input" name="slide" id="c3" />
          <label
            htmlFor="c3"
            className="card flex items-end bg-cover rounded-[30px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.8)] cursor-pointer m-0 mx-[10px] overflow-hidden w-[60px]"
          >
            <div className="flex flex-nowrap text-white">
              <div className="num flex items-center justify-center bg-white w-10 h-10 rounded-[50%] text-[#22b3c1] m-[15px] ">
                <FaExpand />
              </div>
              <div className="description flex flex-col justify-center text-white w-[520px] h-20 opacity-0 overflow-hidden transform translate-y-[30px] delay-[0.3s]">
                <h4 className="uppercase text-[20px] font-bold">
                  {t("Istanbul")}
                </h4>
                <p className="text-[14px] font-medium">
                  {t("Population")}: 4.1M
                </p>
              </div>
            </div>
          </label>
          <input type="radio" className="slider-input" name="slide" id="c4" />
          <label
            htmlFor="c4"
            className="card flex items-end bg-cover rounded-[30px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.8)] cursor-pointer m-0 mx-[10px] overflow-hidden w-[60px]"
          >
            <div className="flex flex-nowrap text-white">
              <div className="num flex items-center justify-center bg-white w-10 h-10 rounded-[50%] text-[#22b3c1] m-[15px] ">
                <FaExpand />
              </div>
              <div className="description flex flex-col justify-center text-white w-[520px] h-20 opacity-0 overflow-hidden transform translate-y-[30px] delay-[0.3s]">
                <h4 className="uppercase text-[20px] font-bold">
                  {t("Sharm El-Sheikh")}
                </h4>
                <p className="text-[14px] font-medium">{t("Population")}: 4M</p>
              </div>
            </div>
          </label>
          <input type="radio" className="slider-input" name="slide" id="c5" />
          <label
            htmlFor="c5"
            className="card flex items-end bg-cover rounded-[30px] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.8)] cursor-pointer m-0 mx-[10px] overflow-hidden w-[60px]"
          >
            <div className="flex flex-nowrap text-white">
              <div className="num flex items-center justify-center bg-white w-10 h-10 rounded-[50%] text-[#22b3c1] m-[15px] ">
                <FaExpand />
              </div>
              <div className="description flex flex-col justify-center text-white w-[520px] h-20 opacity-0 overflow-hidden transform translate-y-[30px] delay-[0.3s]">
                <h4 className="uppercase text-[20px] font-bold">
                  {t("Paris")}
                </h4>
                <p className="text-[14px] font-medium">{t("Population")}: 3M</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default BestLocations;
