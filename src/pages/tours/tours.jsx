import React, { useRef } from "react";
import Tourcard from "./tourcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tours = () => {
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
        <div className="flex flex-col items-center mb-[80px]">
          <h2 className="mt-0 mb-5 leading-9 text-[30px] font-bold capitalize text-[#2a2a2a]">
            Best Weekly Offers In Each Day
          </h2>
          <p className="text-[15px] leading-[30px] text-[#afafaf] text-center">
            Discover the best weekly offers in each city, curated just for you.
            Immerse yourself in <br /> a world of savings and indulge in
            unparalleled experiences.
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
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-04.jpg"}
              cityName={"Istanbul"}
              userCount={234}
              price={"$420"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/offers-02.jpg"}
              cityName={"Dubai"}
              userCount={300}
              price={"$700"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-01.jpg"}
              cityName={"Antalya"}
              userCount={500}
              price={"$999"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/offers-01.jpg"}
              cityName={"Sharm El-Sheikh"}
              userCount={200}
              price={"$800"}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/usa1.jpg"}
              cityName={"USA"}
              userCount={400}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/deals-02.jpg"}
              cityName={"England"}
              userCount={234}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/cand.jpg"}
              cityName={"Canada"}
              userCount={345}
            />
            <Tourcard
              imgSource={"https://zamontour.uz/assets/images/europe2.jpg"}
              cityName={"European Union"}
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
