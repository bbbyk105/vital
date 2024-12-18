import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { homeConfig } from "@/data/homeData";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "株式会社近藤薬局 橘香堂",
  description:
    "富士山の麓の橘香堂は、個人からビジネスまで柔軟に対応できるコワーキングスペース。プロフェッショナルな仕事環境と地域の温かさが融合する、開かれた多目的ワークスペースです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen text-black",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <main>
          <Header items={homeConfig.mainNav} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
