"use client";
// Navbar 是一個 Client Component，因為需要偵測滑鼠滾動來改變樣式

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/about", label: "個人介紹" },
  { href: "/program", label: "計畫介紹" },
  { href: "/map", label: "我的地圖" },
  { href: "/works", label: "數位成果" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // 偵測滾動，滾動超過 60px 後讓 navbar 變白底加陰影
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-warm-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 左側：名字 / Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-widest text-ink hover:text-ink-mid transition-colors"
        >
          FRANK HUANG
          {/* ↑ 換成你的名字 */}
        </Link>

        {/* 右側：導覽連結 */}
        <ul className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-sans text-sm tracking-wide transition-colors relative group ${
                  pathname === href
                    ? "text-ink font-medium"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
                {/* 底線動畫 */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-ink transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
