import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#22b3c1] text-center py-[25px]">
      <div className="max-w-7xl px-3 mx-auto">
        <p className="text-white text-[15px] leading-[30px]">
          {t("Copyright")} © 2024{" "}
          <a href="#" className="font-medium transition-all duration-[0.3s]">
            {" "}
            Zamon Business Tour.
          </a>{" "}
          {t("All rights reserved")}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
