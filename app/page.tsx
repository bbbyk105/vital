"use client";
import Loader from "@/components/Loader"; // Loaderをインポート
import Company from "@/components/Company";
import Contents from "@/components/Contents";
import FacilityShowcase from "@/components/FacilityShowcase";
import Hero from "@/components/Hero";
import useLoading from "@/hooks/useLoading";

export default function Home() {
  const isLoading = useLoading(3000);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Hero />
          <main>
            <Contents />
            <FacilityShowcase />
            <Company />
          </main>
        </>
      )}
    </>
  );
}
