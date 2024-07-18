import React from "react";
import Transportcard from "./transportcard";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-3 mb-[80px] text-left w-[520px]">
          <h2 className="m-0 mb-5 leading-[36px] text-[30px] font-bold capitalize text-[#2a2a2a]">
            {t('Explore Destination With Ease')}
          </h2>
          <p className="text-[16px] leading-[30px] text-[#afafaf]">
            {t('Find the best deals on railway and airplane tickets in each city, carefully selected for you')}.
          </p>
        </div>
        <Transportcard
          img={"https://zamontour.uz/assets/images/afr.jpg"}
          heading={t("Cheap Railway Tickets With Us")}
          littleText={t("Whole world")}
          mainText={t("Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network.")}
        />
        <Transportcard
          img={"https://zamontour.uz/assets/images/airplane.jpg"}
          heading={t("Discover Exciting Air Travel Deals")}
          littleText={t("Global Destinations")}
          mainText={t("Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network.")}
        />
      </div>
    </div>
  );
};

export default Explore;
