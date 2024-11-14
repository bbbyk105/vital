import React from "react";

const RentalSpacePricing = () => {
  const spaces = {
    グリーンスペース: {
      description: "植物に囲まれた開放的なスペース",
    },
    ギャラリースペース: {
      description: "展示や作品発表に最適なスペース",
    },
    レンタルスペース: {
      description:
        "コワーキングスペースの奥をパーテーションで区切って使用できるスペース",
    },
  };

  const pricing = {
    member: {
      free: {
        name: "無償・展示のみ",
        hourly: "150円",
        daily: "1,000円",
      },
      paid: {
        name: "有償・物販あり",
        hourly: "500円",
        daily: "3,000円",
      },
    },
    nonMember: {
      free: {
        name: "無償・展示のみ",
        hourly: "300円",
        daily: "2,000円",
      },
      paid: {
        name: "有償・物販あり",
        hourly: "1,000円",
        daily: "6,000円",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-blue-50 mt-32">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800">
            Rental Space
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            用途に応じて選べる3つのスペース
          </p>
          <hr className="mx-auto w-16 border-t-2 border-gray-400 mt-6" />
        </div>

        {/* スペース説明カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {Object.entries(spaces).map(([name, { description }]) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">{name}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* 料金表 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">
            料金表
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    利用形態
                  </th>
                  <th
                    className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base"
                    colSpan={2}
                  >
                    有料会員
                  </th>
                  <th
                    className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base"
                    colSpan={2}
                  >
                    無料会員
                  </th>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base"></th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    時間料金
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    1日料金
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    時間料金
                  </th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 font-medium text-gray-600 text-sm sm:text-base">
                    1日料金
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-700 text-sm sm:text-base">
                    {pricing.member.free.name}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.member.free.hourly}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.member.free.daily}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.nonMember.free.hourly}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.nonMember.free.daily}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 sm:py-4 sm:px-4 text-gray-700 text-sm sm:text-base">
                    {pricing.member.paid.name}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.member.paid.hourly}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.member.paid.daily}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.nonMember.paid.hourly}
                  </td>
                  <td className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-600 text-sm sm:text-base">
                    {pricing.nonMember.paid.daily}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-600 px-4 sm:px-0">
          <h4 className="font-medium text-gray-800 mb-2">注意事項：</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>料金は全て税込表示です</li>
            <li>1日料金は営業時間内でのご利用となります</li>
            <li>
              レンタルスペースはコワーキングスペースの奥をパーテーションで区切って使用します
            </li>
            <li>物販を行う場合は事前申請が必要です</li>
            <li>スペースの利用は事前予約制となります</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RentalSpacePricing;
