"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-auto h-full py-20 text-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 font-sans overflow-hidden">
        Facility
      </h2>
      <p className="text-muted-foreground mt-4">
        施設についての詳細情報はこちらからご覧いただけます。
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const YogaClassContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"yoga-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center overflow-hidden"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                ヨガでのご利用
              </span>{" "}
              <br />
              緑豊かな空間で行われるヨガクラスは、心と体をリフレッシュさせる完璧な環境です。初心者から上級者まで、誰でもリラックスでき、エネルギーを取り戻すことができます。
            </p>
          </div>
        );
      })}
    </>
  );
};

const WorkSpaceContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"workspace-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                ワークスペースとしてのご利用
              </span>{" "}
              <br />
              快適な環境で集中して作業を行えるワークスペースとしてご利用いただけます。
              <br />
              自然光が差し込む開放感のある空間は、クリエイティビティを刺激し、効率的な仕事環境を提供します。
              <br />
            </p>
          </div>
        );
      })}
    </>
  );
};

const CommunityContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"community-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                コミュニティスペースとしてのご利用
              </span>{" "}
              <br />
              ワークショップやセミナーを通じて、さまざまなバックグラウンドを持つ人々との出会いがあり、共に学び合い、成長できる環境を提供します。
              <br />
              また、カジュアルな集まりやリラックスした交流の場としてもご利用いただけます。
              <br />
            </p>
          </div>
        );
      })}
    </>
  );
};

const WhoeverContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"whoever-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center overflow-hidden"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                誰でも利用可能
              </span>{" "}
              <br />
              私たちのスペースは、大人から子供まで、年齢や性別を問わず、どなたでも気軽にご利用いただけます。
              <br />
              自然豊かな環境の中で、リラックスしたり、創造的な活動を楽しんだりできる場所を提供しています。
              <br />
            </p>
          </div>
        );
      })}
    </>
  );
};

const MonitorContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"monitor-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center overflow-hidden"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                利用可能な設備
              </span>{" "}
              <br />
              私たちのスペースでは、モニターなど、さまざまな設備をご利用いただけます。<br />
              すべての設備を活用して、充実した時間をお過ごしください。
            </p>
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Yoga Class",
    title: "Green Space",
    src: "/yoga.jpg",
    content: <YogaClassContent />,
  },
  {
    category: "working",
    title: "Enhance your work ability",
    src: "/working.jpg",
    content: <WorkSpaceContent />,
  },
  {
    category: "Community",
    title: "Available for communication",
    src: "/seminar.jpg",
    content: <CommunityContent />,
  },

  {
    category: "Whoever",
    title: "A Space for Everyone",
    src: "/kids.jpg", 
    content: <WhoeverContent />,
  },

  {
    category: "Product",
    title: "Various Equipment Available",
    src: "/display.jpg",
    content: <MonitorContent/>,
  }
];
