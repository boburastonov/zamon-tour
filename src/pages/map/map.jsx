import React from "react";

const AreaMap = () => {
  return (
    <div className="mt-[70px]">
      <div className="max-w-7xl mx-auto px-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11983.182925001685!2d69.2758336!3d41.335055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5261aef9ef%3A0x82a0cb91e48981c0!2z0JHQvtC00LDQvNC30LDRgA!5e0!3m2!1sru!2s!4v1721193931821!5m2!1sru!2s"
          className="w-full h-[450px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AreaMap;
