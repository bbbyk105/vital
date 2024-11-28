"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

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

      <motion.div
        className="relative z-10 flex flex-col items-center text-white text-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="mt-6 text-3xl font-bold tracking-wide leading-tight"
          variants={textVariants}
        >
          富士山の麓で
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold tracking-wide"
          variants={textVariants}
        >
          働く新しいスタイル
        </motion.h2>
        <motion.p className="mt-4 text-xl font-light" variants={textVariants}>
          橘香堂 | 近藤薬局 ワークスペース
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;
