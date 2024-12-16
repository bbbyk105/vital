import React from "react";
import Fee from "@/components/Fee";
import RentalSpacePricing from "@/components/RentalSpacePricing";
import Header from "@/components/Header";
import { homeConfig } from "@/data/homeData";
import Footer from "@/components/Footer";
import Service from "@/components/Service";

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
