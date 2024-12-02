"use client";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* 動画背景 */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mp4/173522-849651812_small.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
        <h1 className="mt-6 text-3xl font-bold tracking-wide leading-tight animate-tracking-in-expand">
          富士山の麓で
        </h1>
        <h2 className="text-2xl font-semibold tracking-wide animate-tracking-in-expand">
          働く新しいスタイル
        </h2>
        <p className="mt-4 text-xl font-light animate-tracking-in-expand">
          橘香堂 | 近藤薬局 ワークスペース
        </p>
      </div>
    </div>
  );
};

export default Loader;
