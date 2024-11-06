import React from "react";

const Company = () => {
  return (
    <div className="container mx-auto max-w-[65%] mt-24 md:mt-36 px-6">
      {/* Header Section */}
      <div className="text-center mx-auto mb-12">
        <h2 className="font-extrabold text-3xl md:text-6xl mb-4">About</h2>
        <hr className="border-t-2 border-blue-500 w-16 mx-auto" />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start space-y-12 md:space-y-0 md:space-x-12">
        
        {/* Left Side Company Info */}
        <div className="text-muted-foreground w-full md:w-1/2">
          <h3 className="font-bold text-2xl mb-6">会社概要</h3>
          
          <div className="space-y-6">
            <div className="border-b pb-2">
              <p><strong>会社名：</strong>株式会社 近藤薬局</p>
            </div>
            <div className="border-b pb-2">
              <p><strong>設立：</strong>1950年</p>
            </div>
            <div className="border-b pb-2">
              <p><strong>代表取締役：</strong>近藤 弘人</p>
            </div>
            <div className="border-b pb-2">
              <p><strong>所在地：</strong>〒417-0051 <br /> 静岡県富士市吉原２丁目 8番21-2号</p>
            </div>
          </div>
        </div>

        {/* Right Side Map */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <iframe
            className="w-full h-64 md:h-96 border rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.76073099668!2d138.68491027643637!3d35.1625875582891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a2b3b80616499%3A0x6c57d4d775647025!2z5qmY6aaZ5aCC6L-R6Jek6Jas5bGA77yId29yeCBtdC5mdWpp77yJ!5e0!3m2!1sja!2sjp!4v1730868375271!5m2!1sja!2sjp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Company;
