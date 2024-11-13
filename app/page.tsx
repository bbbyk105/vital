import Cards from "@/components/Cards";
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import Fee from "@/components/Fee";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RentalSpacePricing from "@/components/RentalSpacePricing";
import { homeConfig } from "@/data/homeData";

export default function Home() {
  return (
    <>
      <Hero />
      <Header items={homeConfig.mainNav} />
      <main>
        <Contents />
        <Cards />
        <Fee />
        <RentalSpacePricing />
        <Company />
      </main>
      <Footer />
    </>
  );
}
