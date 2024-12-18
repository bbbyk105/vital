import React from "react";
import Fee from "@/components/Fee";
import RentalSpacePricing from "@/components/RentalSpacePricing";
import Service from "@/components/Service";
import Header from "@/components/Header";
import { homeConfig } from "@/data/homeData";
import Footer from "@/components/Footer";

const fee = () => {
  return (
    <>
      <Header items={homeConfig.mainNav} />
      <Fee />
      <RentalSpacePricing />
      <Service />
      <Footer />
    </>
  );
};

export default fee;
