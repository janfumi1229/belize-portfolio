"use client";
// 數位成果頁面：文章 + 作品集，有類別篩選功能
// 需要 "use client" 因為有 useState（互動式篩選）

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { articles, categoryColors } from "@/data/articles";

type Category = "全部" | "心得文章" | "攝影" | "數位成果" | "媒體報導";

const categories: Category[] = ["全部", "心得文章", "攝影", "數位成果", "媒體報導"];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("全部");

  const filtered =
    activeCategory === "全部"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* ── 頁面頂部 ─────────────────────────────── */}
      <div className="page-header">
        <p className="section-subtitle">Works & Writings</p>
        <h1 className="section-title mt-1">數位成果</h1>
        <p className="font-sans text-ink-muted mt-4 max-w-xl leading-relaxed">
          這裡收錄了我在貝里斯期間與返台後撰寫的心得文章、拍攝的照片，以及實習相關的數位成果。
        </p>
      </div>

      <div className="content-container pt-0">
        {/* ── 類別篩選 tabs ─────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-ink text-warm-white border-ink"
                  : "bg-transparent text-ink-muted border-border hover:border-ink hover:text-ink"
              }`}
            >
              {cat}
              {cat === "全部" ? (
                <span className="ml-1.5 text-xs opacity-60">
                  ({articles.length})
                </span>
              ) : (
                <span className="ml-1.5 text-xs opacity-60">
                  ({articles.filter((a) => a.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── 文章卡片網格 ──────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((article) => {
            // 決定點擊目的地：有外部連結就開新分頁，否則進內頁
            const href = article.link ? article.link : `/works/${article.id}`;
            const isExternal = !!article.link;

            return (
              <a
                key={article.id}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <article className="card group overflow-hidden cursor-pointer h-full">
                  {/* 封面圖 */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* 類別標籤 */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`tag text-xs font-sans ${
                          categoryColors[article.category]
                        }`}
                      >
                        {article.category}
                      </span>
                    </div>
                    {/* 外部連結標示 */}
                    {isExternal && (
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="font-sans text-white text-xs">↗</span>
                      </div>
                    )}
                  </div>

                  {/* 文字內容 */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-sans text-xs text-ink-muted mb-2 tracking-wide">
                      {article.date}
                    </p>
                    <h3 className="font-serif text-xl text-ink mb-3 leading-snug group-hover:text-ink-mid transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-mid leading-relaxed line-clamp-3 mb-4 flex-1">
                      {article.summary}
                    </p>

                    {/* 閱讀標示 */}
                    <span className="font-sans text-xs text-ink-muted group-hover:text-ink inline-flex items-center gap-1 transition-colors">
                      {isExternal ? "前往原文 ↗" : "閱讀全文 →"}
                    </span>
                  </div>
                </article>
              </a>
            );
          })}

          {/* 空狀態 */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="font-serif text-2xl text-ink-muted mb-2">
                尚無此類別的內容
              </p>
              <p className="font-sans text-sm text-ink-muted">
                在 src/data/articles.ts 新增內容
              </p>
            </div>
          )}
        </div>

        {/* ── 如何新增內容的提示（開發中提示，上線前可刪） ── */}
        <div className="border border-dashed border-beige-300 rounded-2xl p-8 mb-10 bg-beige-50">
          <h3 className="font-serif text-xl text-ink mb-2">新增文章 / 作品</h3>
          <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3">
            在{" "}
            <code className="bg-beige-100 px-1.5 py-0.5 rounded text-xs">
              src/data/articles.ts
            </code>{" "}
            裡按格式新增一筆資料，圖片放到{" "}
            <code className="bg-beige-100 px-1.5 py-0.5 rounded text-xs">
              public/assets/images/works/
            </code>{" "}
            再用{" "}
            <code className="bg-beige-100 px-1.5 py-0.5 rounded text-xs">
              /assets/images/works/你的圖片.jpg
            </code>{" "}
            引用。
          </p>
          <p className="font-sans text-xs text-ink-muted">
            如果文章發表在方格子 / Medium，在{" "}
            <code className="bg-beige-100 px-1.5 py-0.5 rounded text-xs">
              link
            </code>{" "}
            欄位填入網址，點擊後就會開啟外部連結。
          </p>
        </div>
      </div>
    </div>
  );
}
