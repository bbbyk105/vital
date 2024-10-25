import Cards from "@/components/Cards";
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import Fee from "@/components/Fee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { homeConfig } from "@/data/homeData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Header items={homeConfig.mainNav} />
      <main>
        <Contents />
        <Cards />
        <Fee />
        <Company />
      </main>
    </>
  );
}
