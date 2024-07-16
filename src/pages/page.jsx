import React from "react";
import Navbar from "./navbar/navbar";
import Slider from "./slider/slider";
import Tours from "./tours/tours";
import VisaSupport from "./visasupport/support";
import Explore from "./tourtransport/explore";
import TourCities from "./tourplaces/countries";

const Page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Tours />
      <VisaSupport />
      <Explore />
      <TourCities />
    </>
  );
};

export default Page;
