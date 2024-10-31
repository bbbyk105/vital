import React from "react";
import Link from "next/link"; // リンク機能のためにLinkをインポート

const SuccessPage = () => {
  return (
    <div className="container text-center mx-auto pt-16 px-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        送信が完了しました！
      </h1>
      
      <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
        お問い合わせありがとうございます。3営業日以内にご返信いたします。
      </p>

      <Link href="/">
        <span className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 text-sm md:text-base lg:text-lg">
          ホームに戻る
        </span>
      </Link>
    </div>
  );
};

export default SuccessPage;