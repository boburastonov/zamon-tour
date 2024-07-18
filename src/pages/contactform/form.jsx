import React from "react";
import "./form.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-[70px]">
      <div className="max-w-7xl mx-auto px-3">
        <form
          name="rf"
          method="post"
          id="reservation-form"
          className="py-[60px] px-[120px] bg-[#f9f9f9] rounded-br-[23px] rounded-bl-[23px]"
        >
          <div className="px-3">
            <h4 className="text-[30px] text-center m-0 mb-[50px] text-[#2a2a2a] font-bold leading-[1.2]">
              {t('Make Your')}{" "}
              <em className="text-[#22b3c1] not-italic">{t('Reservation')}</em> {t('Through This')} <em className="text-[#22b3c1] not-italic">{t('Form')}</em>
            </h4>
          </div>
          <div className="flex">
            <div className="px-3 w-[50%]">
              <label
                htmlFor="Name"
                className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
              >
                {t('Your Name')}
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder={t("Ex. John Smithee")}
                required
                className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-0 px-5 cursor-pointer mb-[30px]"
              />
            </div>
            <div className="px-3 w-[50%]">
              <label
                htmlFor="Number"
                className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
              >
                {t('Your Phone Number')}
              </label>
              <input
                type="text"
                id="number"
                name="Number"
                placeholder="Ex. +99899 999 99 99"
                required
                className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-0 px-5 cursor-pointer mb-[30px]"
              />
            </div>
          </div>
          <div className="flex">
            <div className="px-3 w-[50%]">
              <label
                htmlFor="chooseGuests"
                className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
              >
                {t('Number Of Guests')}
              </label>
              <select
                id="chooseGuests"
                aria-label="Default select example"
                name="guests"
                className="guests w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-1 px-5 cursor-pointer mb-[30px] block text-[1rem] font-normal leading-[1.5] text-[#212529] bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e')] bg-no-repeat"
              >
                <option
                  className="block font-normal min-h-[1.2em] whitespace-nowrap"
                  selected
                >
                  ex. 3 {t('or')} 4 {t('or')} 5
                </option>
                <option
                  className="block font-normal min-h-[1.2em] whitespace-nowrap"
                  type="checkbox"
                  name="option1"
                  value={1}
                >
                  1
                </option>
                <option
                  className="block font-normal min-h-[1.2em] whitespace-nowrap"
                  value="2"
                >
                  2
                </option>
                <option
                  className="block font-normal min-h-[1.2em] whitespace-nowrap"
                  value="3"
                >
                  3
                </option>
                <option
                  className="block font-normal min-h-[1.2em] whitespace-nowrap"
                  value="4"
                >
                  4+
                </option>
              </select>
            </div>
            <div className="px-3 w-[50%]">
              <label
                htmlFor="Number"
                className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
              >
                {t('Check In Date')}
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-0 px-5 cursor-pointer mb-[30px]"
              />
            </div>
          </div>
          <div className="px-3 w-full">
            <label
              htmlFor="chooseDestination"
              className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
            >
              {t('Choose Your Destination')}
            </label>
            <select
              id="chooseCategory"
              aria-label="Default select example"
              name="Destination"
              className="guests w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-0 px-5 cursor-pointer mb-[30px] block text-[1rem] font-normal leading-[1.5] text-[#212529] bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e')] bg-no-repeat"
            >
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                selected
              >
                {t('Antalya')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Istanbul"}
              >
                {t('Istanbul')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Dubai"}
              >
                {t('Dubai')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Sharm El-Sheikh"}
              >
                {t('Sharm El-Sheikh')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Kuala Lumpur"}
              >
                {t('Kuala Lumpur')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Canada"}
              >
                {t('Canada')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"England"}
              >
                {t('England')}
              </option>
            </select>
          </div>
          <div className="px-3 w-full">
            <label
              htmlFor="Name"
              className="text-[15px] text-[#afafaf] mb-2 inline-block cursor-default"
            >
              {t('Choose Your Visa Support')}
            </label>
            <select
              id="visa"
              aria-label="Default select example"
              name="Destination"
              className="guests w-full h-[46px] bg-transparent rounded-[23px] border border-solid border-[#e0e0e0] p-0 px-5 cursor-pointer mb-[30px] block text-[1rem] font-normal leading-[1.5] text-[#212529] bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e')] bg-no-repeat"
            >
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                selected
              >
                {t('Country')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"USA"}
              >
                {t('USA')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Europe"}
              >
                {t('Europe')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"England"}
              >
                {t('England')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Japan"}
              >
                {t('Japan')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Oman"}
              >
                {t('Oman')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Saudia Arabia"}
              >
                {t('Saudi Arabi')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"India"}
              >
                {t('India')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"China"}
              >
                {t('China')}
              </option>
              <option
                className="block font-normal min-h-[1.2em] whitespace-nowrap"
                value={"Hong Kong"}
              >
                {t('Hong Kong')}{" "}
              </option>
            </select>
          </div>
          <div className="px-3 w-full">
            <button className="w-full text-[14px] text-white bg-[#22b3c1] border border-solid border-[#22b3c1] py-3 px-[30px] text-center inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-80">
              {t('Make Your Reservation Now')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
