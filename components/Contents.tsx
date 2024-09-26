import React from "react";
import Image from "next/image";

const Contents = () => {
  return (
    <section
      id="about"
      className="container bg-slate-50 max-w-[90%] mx-auto py-8 md:py-12 lg:py-24"
    >
      <div className="flex text-center content-center flex-col space-y-4">
        <h2 className="mx-auto font-extrabold text-3xl md:text-6xl">
          Contents
        </h2>
        <p className="text-muted-foreground">
          マルシェや仕事、イベントなど、幅広いシーンで老若男女問わず利用できる場です。
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          <div className="flex flex-col items-center">
            <Image
              src="/tvwork.png"
              alt="Work Icon"
              layout="responsive"
              height={200}
              width={300}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">リモートワークなどでの利用</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/work.png"
              alt="Work Icon"
              layout="responsive"
              height={200}
              width={300}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">イベントスペースとしての利用</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/convesation.png"
              alt="Work Icon"
              layout="responsive"
              height={200}
              width={300}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">会議やミーティングの場</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/art.png"
              alt="Work Icon"
              layout="responsive"
              height={200}
              width={300}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">クリエイティブな活動</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/farming.png"
              alt="Work Icon"
              layout="responsive"
              height={170}
              width={200}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">マルシェでの利用</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/studying.png"
              alt="Work Icon"
              layout="responsive"
              height={200}
              width={300}
              className="object-cover"
            />
            <p className="mt-2 text-sm text-gray-600">学習や研究の場</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;