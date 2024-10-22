"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 text-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 font-sans overflow-hidden">
        Facility
      </h2>
      <p className="text-muted-foreground mt-4">施設についての詳細情報はこちらからご覧いただけます。</p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="w-full h-full bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center justify-center"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Appleクラブの第一ルールは、Appleクラブを自慢することです。
              </span>{" "}
              日記をつけたり、買い物リストを書いたり、素晴らしいクラスノートを取ったりすることができます。メモをテキストに変換したいですか？問題ありません。
              あなたのすべての思考をキャプチャする準備ができています。
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Aceternity UIのMacbookモックアップ"
              height={500}
              width={500}
              className="w-full h-auto max-w-xl object-contain mt-6"
            />
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
    content: <DummyContent />,
  },
  {
    category: "working",
    title: "Enhance your work ability",
    src: "/working.jpg",
    content: <DummyContent />,
  },
  {
    category: "Community",
    title: "Available for communication",
    src: "/seminar.jpg",
    content: <DummyContent />,
  },

  {
    category: "Kids",
    title: "Kids space",
    src: "/kids.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "You can use the monitor",
    src: "/display.jpg",
    content: <DummyContent />,
  },
];
