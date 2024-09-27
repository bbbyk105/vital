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
      className="container bg-slate-50 max-w-[65%] mx-auto my-8 md:my-12 lg:my-24"
    >
      <div className="text-center">
        <h2 className="font-extrabold text-3xl md:text-6xl mb-4">Contents</h2>
        <p className="text-muted-foreground mb-8">
          マルシェや仕事、イベントなど、幅広いシーンで老若男女問わず利用できる場です。
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        {contentsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.alt}
              height={200}
              width={300}
              className="object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contents;