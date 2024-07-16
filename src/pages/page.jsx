import React from "react";
import Navbar from "./navbar/navbar";
import Slider from "./slider/slider";
import Tours from "./tours/tours";
import VisaSupport from "./visasupport/support";

const Page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Tours />
      <VisaSupport />
    </>
  );
};

export default Page;
