import React from "react";
import Fee from "@/components/Fee";
import RentalSpacePricing from "@/components/RentalSpacePricing";
import Service from "@/components/Service";

const fee = () => {
  return (
    <>
      <Fee />
      <RentalSpacePricing />
      <Service />
    </>
  );
};

export default fee;
