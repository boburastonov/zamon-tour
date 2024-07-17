import React from "react";
import Navbar from "./navbar/navbar";
import Slider from "./slider/slider";
import Tours from "./tours/tours";
import VisaSupport from "./visasupport/support";
import Explore from "./tourtransport/explore";
import TourCities from "./tourplaces/countries";
import BestLocations from "./bestlocations";
import Reservation from "./reservation/reservation";
import Contact from "./contact/contact";
import Form from "./contactform/form";
import CTA from "./cta/cta";
import AreaMap from "./map/map";
import Footer from "./footer/footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Tours />
      <VisaSupport />
      <Explore />
      <TourCities />
      <BestLocations />
      <Reservation />
      <Contact />
      <AreaMap />
       <Form />
      <CTA />
      <Footer />
    </>
  );
};

export default Page;
