import React from "react";

const Service = () => {
    interface Service {
        name: string;
        price: string;
        description: string;
    }

    const services: Service[] = [
        {
            name: "登記利用",
            price: "11,000円/月",
            description:
                "橘香堂近豚薬局（worx mt.fuji）の店舗住所を、法人登記する際に本店所在地として登録できます。価格には法人登記、住所利用・ポスト利用、ロッカーの使用を含みます。",
        },
        {
            name: "住所利用",
            price: "3,300円/月",
            description: "ホームページや名刺などに住所を載せて使うことができます。",
        },
        {
            name: "ポスト利用",
            price: "5,500円/月",
            description:
                "住所利用に加えて契約することで、郵便物や荷物の受け取りが可能になります。",
        },
        {
            name: "学生割引",
            price: "2,200円/月",
            description:
                "学生証の提示により、利用開始となります。学生が終了する年度の3月末日で学生割引は自動で終了となります。",
        },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-purple-50 mt-32">
            <section className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 text-gray-800">
                        Services
                    </h2>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base">
                        多様なニーズに対応する各種サービス
                    </p>
                    <hr className="mx-auto w-16 border-t-2 border-gray-400 mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {services.map((service: Service) => (
                        <div
                            key={service.name}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-medium text-gray-800">
                                    {service.name}
                                </h3>
                                <span className="text-lg font-bold text-blue-600">
                                    {service.price}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                    <h4 className="font-medium text-gray-800 mb-4">注意事項：</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            価格はすべて税込み価格となります。
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            イベント開催や全館貸切、長期に渡る貸切等、個別にご相談ください。
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            法人の利用契約について、詳細は個別にご相談ください。
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            コピー料金・・白黒10円/枚、カラー30円/枚。ご利用時はスタッフにお声がけください。
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Service;