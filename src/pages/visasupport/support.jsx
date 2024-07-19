import React, { useRef } from "react";
import SupportCard from "./offercard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const VisaSupport = () => {
  const { t } = useTranslation();
  let sliderRef = useRef(null);
  const handleNext = () => {
    sliderRef.slickNext();
  };
  const handlePrev = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  return (
    <div className="bg-white py-[70px] border-b border-solid border-[#eee]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-[80px] w-[50%] mx-auto">
          <h2 className="mt-0 mb-5 leading-9 text-[30px] font-bold capitalize text-[#2a2a2a]">
            {t('Visa Support')}
          </h2>
          <p className="text-[15px] leading-[30px] text-[#afafaf] text-center">
          {t('Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey.')}.
          </p>
        </div>
        <div className="flex flex-col">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
            className="lg:flex lg:items-center lg:justify-between"
          >
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/japan.jpg"}
              cityName={t("Japan")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/saudi.jpg"}
              cityName={t("Saudi Arabia")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/oman.jpg"}
              cityName={t("Oman")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/china.jpg"}
              cityName={t("China")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/hongkong.jpg"}
              cityName={t("Hong Kong")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/europe.jpeg"}
              cityName={t("European(Schengen)")}
            />
            <SupportCard
              imgSource={"https://zamontour.uz/assets/images/india.jpg"}
              cityName={t("India")}
            />
          </Slider>
          <div className="flex mx-auto items-center">
            <button
              className="btn-prev bg-transparent text-[#22b3c1] w-[46px] text-lg font-bold h-[46px] text-center border border-solid border-[#22b3c1] inline-block leading-[44px] rounded-[50%] transition-all duration-[.3s] mr-[5px] hover:text-white hover:bg-[#22b3c1] after:content-[\f061]"
              onClick={handlePrev}
            >
              <span>🡸</span>
            </button>
            <button
              className="btn-next bg-transparent text-[#22b3c1] text-lg font-bold w-[46px] h-[46px] text-center border border-solid border-[#22b3c1] inline-block leading-[44px] rounded-[50%] transition-all duration-[.3s] ml-[5px] hover:text-white hover:bg-[#22b3c1]"
              onClick={handleNext}
            >
              <span>🡺</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSupport;
