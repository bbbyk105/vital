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
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        <Image src="/work.png" alt="Work Icon" height={200} width={300} />
      </div>
    </section>
  );
};

export default Contents;
