import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full  min-h-screen flex justify-center items-center">
        <Hero />
      </main>
    </>
  );
}
