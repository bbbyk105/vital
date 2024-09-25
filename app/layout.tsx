import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"; // Imageコンポーネントの追加

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
  title: "株式会社バイタルコミュニケーション",
  description: "Generated by create next app",
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
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="logo">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                width={120}
                height={40}
                priority={true}
              />
            </div>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#About">About</Link>
                </li>
                <li>
                  <Link href="/recruit">Recruit</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
