import Contents from "@/components/Contents";
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
      </main>
    </>
  );
}
