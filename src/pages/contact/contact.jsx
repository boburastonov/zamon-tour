import React from "react";
import { FaPhoneAlt, FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Contactcard from "./contactcard";
import { useTranslation } from "react-i18next";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="mt-[-99px]">
      <div className="contact-container max-w-7xl mx-auto px-3 md:flex md:items-center md:justify-between flex-wrap">
        <Contactcard
          icon={<FaPhoneAlt />}
          heading={t("Make a Phone Call")}
          linkUrl={"tel:+998992999996"}
          linkText={"+998 99 299 99 96"}
        />
        <Contactcard
          icon={<FaEnvelope />}
          heading={t("Contact Us via Email")}
          linkUrl={"mailto:zamonbiznestour@mail.ru"}
          linkText={"zamonbiznestour@mail.ru"}
        />
        <Contactcard
          icon={<FaMapMarker />}
          heading={t("Visit Our Offices")}
          linkUrl={"#"}
          linkText={t("15/25, Chilanzar - 9, Tashkent city")}
        />
      </div>
    </div>
  );
};

export default Contact;
