import React from "react";
import Image from "next/image";
import contentItems from "@/data/contentsData";

interface ContentItem {
  src: string;
  alt: string;
  description: string;
}

const contentsData: ContentItem[] = contentItems;

const Contents: React.FC = () => {
  return (
    <section
      id="contents"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden hidden md:block"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24">
          {/* ヘッダーセクション */}
          <h2
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500
              tracking-tight leading-tight"
          >
            Contents
          </h2>
          <p
            className="mt-4 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl 
                        max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto
                        leading-relaxed"
          >
            マルシェや仕事、イベントなど、幅広いシーンで老若男女問わず利用できる場です。
          </p>
        </div>

        {/* グリッドレイアウト */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-4 sm:gap-6 md:gap-8 
                        px-4 sm:px-6 md:px-8 lg:px-0"
        >
          {contentsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* 画像コンテナ */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
                {/* ホバーオーバーレイ */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                              from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300"
                />
              </div>

              {/* テキストコンテナ */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <p
                  className="text-neutral-700 
                  text-xs sm:text-sm md:text-base lg:text-lg 
                  font-medium leading-relaxed"
                >
                  {item.description}
                </p>
              </div>

              {/* ボトムアクセント */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 
                            bg-gradient-to-r from-blue-500 to-purple-500 
                            transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-300 origin-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents;
