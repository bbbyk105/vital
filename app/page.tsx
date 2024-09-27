import Cards from "@/components/Cards";
import Contents from "@/components/Contents";
import Fee from "@/components/Fee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { homeConfig } from "@/data/homeData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header items={homeConfig.mainNav} />
      <Hero />
      <main >
        <Contents />
        <Cards />
        <Fee />
      </main>
    </>
  );
}
