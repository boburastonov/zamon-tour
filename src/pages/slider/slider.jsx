import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import MoreInfo from "../../components/more-info";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[100vw] lg:h-[91vh] mx-auto flex flex-col items-center lg:flex-row lg:justify-between bg-[url('https://zamontour.uz/assets/images/istanbul.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="w-full lg:h-[380px] py-[30px] lg:pt-0 relative">
              <h2 className="text-white font-medium text-[20px] mb-5">
                {t('Take a Glimpse Into The Beautiful City Of')}:
              </h2>
              <h1 className="mb-[30px] text-white font-bold text-[50px]">
                {t('Istanbul')}
              </h1>
              <div>
                <a
                  href="#contact"
                  className="text-white text-[14px] font-medium capitalize inline-block tracking-[0.5px] bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] rounded-[25px]"
                >
                  {t('Go There')}
                </a>
              </div>
              <MoreInfo
                population="44.48"
                territory="275.400"
                price="946.000"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100vw] lg:h-[91vh] mx-auto flex flex-col items-center lg:flex-row lg:justify-between bg-[url('https://zamontour.uz/assets/images/antalya2.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="w-full lg:h-[380px] py-[30px] lg:pt-0 relative">
              <h2 className="text-white font-medium text-[20px] mb-5">
                {t('Take a Glimpse Into The Beautiful City Of')}:
              </h2>
              <h1 className="mb-[30px] text-white font-bold text-[50px]">
                {t('Antalya')}
              </h1>
              <div>
                <a
                  href="#contact"
                  className="text-white text-[14px] font-medium capitalize inline-block tracking-[0.5px] bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] rounded-[25px]"
                >
                  {t('Go There')}
                </a>
              </div>
              <MoreInfo
                population="8.66"
                territory="41.290"
                price="1.100.200"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100vw] lg:h-[91vh] mx-auto flex flex-col items-center lg:flex-row lg:justify-between bg-[url('https://zamontour.uz/assets/images/dubai2.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="w-full lg:h-[380px] py-[30px] lg:pt-0 relative">
              <h2 className="text-white font-medium text-[20px] mb-5">
                {t('Take a Glimpse Into The Beautiful City Of')}:
              </h2>
              <h1 className="mb-[30px] text-white font-bold text-[50px]">
                {t('Dubai')}
              </h1>
              <div>
                <a
                  href="#contact"
                  className="text-white text-[14px] font-medium capitalize inline-block tracking-[0.5px] bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] rounded-[25px]"
                >
                  {t('Go There')}
                </a>
              </div>
              <MoreInfo
                population="67.41"
                territory="551.500"
                price="425.600"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100vw] lg:h-[91vh] mx-auto flex flex-col items-center lg:flex-row lg:justify-between bg-[url('https://zamontour.uz/assets/images/sharm.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="w-full lg:h-[380px] py-[30px] lg:pt-0 relative">
              <h2 className="text-white font-medium text-[20px] mb-5">
                {t('Take a Glimpse Into The Beautiful City Of')}:
              </h2>
              <h1 className="mb-[30px] text-white font-bold text-[50px]">
                {t('Sharm El-Sheikh')}
              </h1>
              <div>
                <a
                  href="#contact"
                  className="text-white text-[14px] font-medium capitalize inline-block tracking-[0.5px] bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] rounded-[25px]"
                >
                  {t('Go There')}
                </a>
              </div>
              <MoreInfo
                population="69.86"
                territory="513.120"
                price="165.450"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
