import React from "react";
import { FaPhoneAlt, FaMapMarker } from "react-icons/fa";
import { FaEnvelope, FaMap } from "react-icons/fa6";
import Contactcard from "./contactcard";

const Contact = () => {
  return (
    <div id="contact" className="mt-[-99px]">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
        <Contactcard
          icon={<FaPhoneAlt />}
          heading={"Make a Phone Call"}
          linkUrl={"tel:+998992999996"}
          linkText={"+998 99 299 99 96"}
        />
        <Contactcard
          icon={<FaEnvelope />}
          heading={"Contact Us via Email"}
          linkUrl={"mailto:zamonbiznestour@mail.ru"}
          linkText={"zamonbiznestour@mail.ru"}
        />
        <Contactcard
          icon={<FaMapMarker />}
          heading={"Visit Our Offices"}
          linkUrl={"#"}
          linkText={"15/25, Chilanzar - 9, Tashkent city"}
        />
      </div>
    </div>
  );
};

export default Contact;
