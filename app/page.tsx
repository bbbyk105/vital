import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <main className="w-full  min-h-screen flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
