"use client"
import React from "react";
import { useRouter } from 'next/navigation';

const Fee: React.FC = () => {
  const router = useRouter();

  const handleContactRedirect = () => {
    router.push('/contact');
  };

  return (
    <div className="container max-w-[65%] mx-auto py-8 md:py-12 lg:py-24">
      <section id="fee">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-3xl md:text-6xl mb-1">Fee</h2>
          <hr className="mx-auto w-24 border-t-2 border-blue-500" />
        </div>
      </section>

      {/* 入会金セクション */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          入会金
        </h3>
        <div className="flex flex-wrap -mx-4">
          {/* 通常会員 入会金 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-500 text-white text-center py-4">
                <h4 className="text-xl font-semibold">通常会員</h4>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4">5,500円</p>
                <ul className="mb-6">
                  <li>初回のみの支払い</li>
                  <li>通常会員としての特典が含まれます</li>
                </ul>
                <button
                  onClick={handleContactRedirect}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  申し込む
                </button>
              </div>
            </div>
          </div>
          {/* 法人会員 入会金 */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-green-500 text-white text-center py-4">
                <h4 className="text-xl font-semibold">法人会員</h4>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4">
                  主契約: 5,500円 小契約: 2,750円
                </p>
                <ul className="mb-6">
                  <li>主契約は法人全体で利用可能</li>
                  <li>小契約は個別の部署やチーム向け</li>
                </ul>
                <button
                  onClick={handleContactRedirect}
                  className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-600"
                >
                  申し込む
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 利用料金セクション */}
      <div>
        <h3 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          利用料金
        </h3>
        <div className="flex flex-wrap -mx-4">
          {/* 通常会員 利用料金 */}
          <div className="w-full md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-500 text-white text-center py-4">
                <h4 className="text-xl font-semibold">通常会員</h4>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4">
                  550円 <span className="text-lg">/日</span>
                </p>
                <ul className="mb-6">
                  <li>1名の会員につき同時入店3名まで<br />2時間無料</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 法人会員 利用料金 */}
          <div className="w-full md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-green-500 text-white text-center py-4">
                <h4 className="text-xl font-semibold">法人会員</h4>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4">
                  550円 <span className="text-lg">/日</span>
                </p>
                <ul className="mb-6">
                  <li>1名の会員につき同時入店5名まで<br />2時間無料</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ビジター 利用料金 */}
          <div className="w-full md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-yellow-500 text-white text-center py-4">
                <h4 className="text-xl font-semibold">ビジター</h4>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold mb-4">
                  550円 <span className="text-lg">/日</span>
                </p>
                <ul className="mb-6">
                  <li>1名の利用</li>
                  <li>自由に施設を利用可能（時間制限あり）</li>
                  <li>会員割引の対象外</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fee;
