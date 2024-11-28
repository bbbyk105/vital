"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Loaderをインポート
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import FacilityShowcase from "@/components/FacilityShowcase";
import Fee from "@/components/Fee";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RentalSpacePricing from "@/components/RentalSpacePricing";
import Service from "@/components/Service";
import { homeConfig } from "@/data/homeData";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Hero />
          <Header items={homeConfig.mainNav} />
          <main>
            <Contents />
            <FacilityShowcase />
            <Fee />
            <RentalSpacePricing />
            <Service />
            <Company />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
