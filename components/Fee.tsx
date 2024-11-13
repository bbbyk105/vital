"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Fee: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactRedirect = () => {
    router.push('/contact');
  };

  const features = {
    同時入店人数: {
      visitor: '1名まで',
      regular: '3名まで同行可能',
      corporate: '5名まで同行可能',
    },
    基本料金: {
      visitor: '550円/日',
      regular: '550円/日',
      corporate: '550円/日',
    },
    月額料金: {
      visitor: '5500円/月',
      regular: '5500円/月',
      corporate: '550円/日',
    },
    入会金: {
      visitor: 'なし',
      regular: '5,500円',
      corporate: '主契約：5,500円\n小契約：2,750円',
    },
    イベントスペース利用: {
      visitor: '×',
      regular: '通常の半額',
      corporate: '通常の半額（優先予約可）',
    },
    会員特典: {
      visitor: '×',
      regular: '○',
      corporate: '○',
    },
    請求書払い: {
      visitor: '×',
      regular: '×',
      corporate: '○',
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24 bg-gray-50">
      <section id="fee" className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800">
            Membership Plans
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            あなたに最適なプランをお選びください
          </p>
          <hr className="mx-auto w-16 border-t-2 border-gray-400 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {/* ビジター */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="bg-gray-600 text-white p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium">ビジター</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4">
                550円<span className="text-sm">/日</span>
              </p>
              <p className="text-xs sm:text-sm mt-2">入会金不要</p>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                気軽に利用したい方向け
              </p>
              <button
                onClick={handleContactRedirect}
                className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
              >
                利用する
              </button>
            </div>
          </div>

          {/* 通常会員 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg relative">
            <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 rounded-bl-lg text-xs sm:text-sm">
              人気
            </div>
            <div className="bg-gray-800 text-white p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium">通常会員</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4">
                550円<span className="text-sm">/日</span>
              </p>
              <p className="text-xs sm:text-sm mt-2">入会金：5,500円</p>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                定期的な利用に最適
              </p>
              <button
                onClick={handleContactRedirect}
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
              >
                入会する
              </button>
            </div>
          </div>

          {/* 法人会員 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="bg-gray-700 text-white p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium">法人会員</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4">
                550円<span className="text-sm">/日</span>
              </p>
              <p className="text-xs sm:text-sm mt-2">入会金：5,500円〜</p>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                ビジネス利用に最適
              </p>
              <button
                onClick={handleContactRedirect}
                className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base"
              >
                法人登録
              </button>
            </div>
          </div>
        </div>

        {/* 比較表 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-4 sm:p-6 lg:p-8 mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">
            プラン比較表
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    機能
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    ビジター
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    通常会員
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    法人会員
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(features).map(([feature, values]) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-700 text-sm sm:text-base">
                      {feature}
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">
                      {values.visitor}
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">
                      {values.regular}
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4 text-center text-gray-600 text-sm sm:text-base">
                      {values.corporate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-600 px-4 sm:px-0">
          <h4 className="font-medium text-gray-800 mb-2">注意事項：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>料金は全て税込表示です</li>
            <li>法人会員の小契約は、主契約に付随する形でのみご契約いただけます</li>
            <li>イベントスペースは別途利用料金が発生します</li>
            <li>営業時間は平日9:00-21:00 土日祝9:00-18:00です。</li>
            <li>営業時間外のご利用は事前申請が必要です</li>
          </ul>
        </div>
      </section>

      {/* スクロール時の固定ヘッダー（モバイル用） */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around items-center">
          <button
            onClick={handleContactRedirect}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm"
          >
            お問い合わせ
          </button>
        </div>
      )}
    </div>
  );
};

export default Fee;