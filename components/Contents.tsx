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
    <section id="contents" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-50" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
            Contents
          </h2>
          <p className="mt-6 text-neutral-600 text-lg md:text-xl max-w-3xl mx-auto">
            マルシェや仕事、イベントなど、幅広いシーンで老若男女問わず利用できる場です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contentsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-neutral-700 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents;