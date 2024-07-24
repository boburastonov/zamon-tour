import React, { useRef } from "react";
import Tourcard from "./tourcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import "./tours.css";

const Tours = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <div className="tours bg-white md:py-[70px] border-b border-solid border-[#eee]">
      <div className="max-w-7xl mx-auto">
        <div className="tours-pr flex flex-col items-center md:mb-[80px] w-[50%] md:mx-auto">
          <h2 className="tours-heading mt-0 mb-5 leading-9 lg:text-[30px] text-[26px] text-center font-bold capitalize text-[#2a2a2a]">
            {t("Best Weekly Offers In Each Day")}
          </h2>
          <p className="text-[15px] leading-[30px] text-[#afafaf] text-center">
            {t(
              "Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences."
            )}
          </p>
        </div>
        <div className="flex flex-col md:px-3">
          <Slider
            {...settings}
            slide
            ref={(slider) => {
              sliderRef = slider;
            }}
            className="md:ml-[-40px]"
          >
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-04.jpg"}
              cityName={t("Istanbul")}
              userCount={234}
              price={"$420"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/offers-02.jpg"}
              cityName={t("Dubai")}
              userCount={300}
              price={"$700"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-01.jpg"}
              cityName={t("Antalya")}
              userCount={500}
              price={"$999"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/offers-01.jpg"}
              cityName={t("Sharm El-Sheikh")}
              userCount={200}
              price={"$800"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/usa1.jpg"}
              cityName={t("USA")}
              userCount={400}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-02.jpg"}
              cityName={t("England")}
              userCount={234}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/cand.jpg"}
              cityName={t("Canada")}
              userCount={345}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/europe2.jpg"}
              cityName={t("European Union")}
              userCount={345}
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

export default Tours;
