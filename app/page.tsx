"use client";
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import FacilityShowcase from "@/components/FacilityShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { homeConfig } from "@/data/homeData";

export default function Home() {
  return (
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
  );
}
