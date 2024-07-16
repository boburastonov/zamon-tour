import React from "react";
import Navbar from "./navbar/navbar";
import Slider from "./slider/slider";
import Tours from "./tours/tours";
import VisaSupport from "./visasupport/support";
import Explore from "./tourtransport/explore";

const Page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Tours />
      <VisaSupport />
      <Explore />
    </>
  );
};

export default Page;
