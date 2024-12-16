"use client";
import Loader from "@/components/Loader"; // Loaderをインポート
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import FacilityShowcase from "@/components/FacilityShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { homeConfig } from "@/data/homeData";
import useLoading from "@/hooks/useLoading";

export default function Home() {
  const isLoading = useLoading(3000);

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
            <Company />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
