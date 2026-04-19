// Root Layout：所有頁面共用的外殼，包含字體載入、Navbar、基礎 <html> 結構

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// 載入 Google Fonts（Next.js 會自動最佳化，不需要外部 <link>）
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 網站的 SEO meta 資訊
export const metadata: Metadata = {
  title: "Frank Huang | 青年百億 · 貝里斯 2024",
  // ↑ 換成你的名字
  description:
    "百億青年行動計畫成果網站，記錄 2024 年 9 月於貝里斯的實習旅程、文化觀察與個人成長。",
  keywords: ["青年百億", "貝里斯", "Belize", "百億青年行動計畫", "外交部"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* 固定在最上方的導覽列 */}
        <Navbar />

        {/* 主要內容 */}
        <main>{children}</main>

        {/* 頁尾 */}
        <footer className="border-t border-border mt-24 py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-serif text-ink-muted text-sm tracking-wide">
              FRANK HUANG · 青年百億行動計畫 · 貝里斯 2024
              {/* ↑ 換成你的名字 */}
            </p>
            <p className="font-sans text-xs text-ink-muted">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
