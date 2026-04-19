// 文章內頁
// Next.js 的動態路由：[id] 會對應到 /works/1、/works/2 等等
// 每篇文章共用這一個頁面模板，內容由 id 決定

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles, categoryColors } from "@/data/articles";

// Next.js 需要這個函式來知道要預先產生哪些頁面
export function generateStaticParams() {
  return articles.map((article) => ({ id: String(article.id) }));
}

interface Props {
  params: { id: string };
}

export default function ArticlePage({ params }: Props) {
  // 根據網址的 id 找到對應的文章
  const article = articles.find((a) => a.id === Number(params.id));

  // 找不到就顯示 404
  if (!article) notFound();

  // 把內文按空行拆成段落陣列
  const paragraphs = article.content
    ? article.content.split("\n\n").filter((p) => p.trim())
    : null;

  return (
    <div className="min-h-screen">
      {/* ── 返回按鈕 ─────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-6">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 font-sans text-sm text-ink-muted hover:text-ink transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>
          返回數位成果
        </Link>
      </div>

      {/* ── 文章頭部 ─────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        {/* 類別標籤 + 日期 */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`tag text-xs ${categoryColors[article.category]}`}
          >
            {article.category}
          </span>
          <span className="font-sans text-sm text-ink-muted">
            {article.date}
          </span>
        </div>

        {/* 標題 */}
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        {/* 摘要（intro 樣式，比內文稍大） */}
        <p className="font-serif text-xl text-ink-muted font-light leading-relaxed mb-10 pb-10 border-b border-border">
          {article.summary}
        </p>

        {/* 封面圖 */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ── 文章內文 ─────────────────────────── */}
        {paragraphs ? (
          <div className="space-y-6">
            {paragraphs.map((para, index) => {
              // 如果段落以【開頭，當作小標題處理
              if (para.startsWith("【") && para.includes("】")) {
                return (
                  <h2
                    key={index}
                    className="font-serif text-2xl text-ink mt-10 mb-2"
                  >
                    {para}
                  </h2>
                );
              }
              // 一般段落
              return (
                <p
                  key={index}
                  className="font-sans text-ink-mid leading-[1.9] text-[1.05rem]"
                >
                  {para}
                </p>
              );
            })}
          </div>
        ) : (
          /* 沒有填 content 的文章 */
          <div className="text-center py-16 rounded-2xl bg-beige-50 border border-dashed border-beige-300">
            <p className="font-serif text-2xl text-ink-muted mb-2">
              內容整理中
            </p>
            <p className="font-sans text-sm text-ink-muted">
              在{" "}
              <code className="bg-beige-100 px-1.5 py-0.5 rounded text-xs">
                src/data/articles.ts
              </code>{" "}
              的 content 欄位貼上文字即可顯示
            </p>
          </div>
        )}

        {/* 外部連結（如果有的話） */}
        {article.link && (
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm border border-ink text-ink px-6 py-3 hover:bg-ink hover:text-warm-white transition-all duration-200"
            >
              查看原始連結 ↗
            </a>
          </div>
        )}

        {/* ── 上下篇導航 ────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 gap-4">
          {/* 上一篇 */}
          {(() => {
            const prev = articles.find((a) => a.id === article.id - 1);
            return prev ? (
              <Link href={`/works/${prev.id}`} className="group">
                <div className="card p-4 h-full hover:border-ink transition-colors">
                  <p className="font-sans text-xs text-ink-muted mb-2">
                    ← 上一篇
                  </p>
                  <p className="font-serif text-base text-ink group-hover:text-ink-mid line-clamp-2">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            );
          })()}

          {/* 下一篇 */}
          {(() => {
            const next = articles.find((a) => a.id === article.id + 1);
            return next ? (
              <Link href={`/works/${next.id}`} className="group col-start-2">
                <div className="card p-4 h-full text-right hover:border-ink transition-colors">
                  <p className="font-sans text-xs text-ink-muted mb-2">
                    下一篇 →
                  </p>
                  <p className="font-serif text-base text-ink group-hover:text-ink-mid line-clamp-2">
                    {next.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            );
          })()}
        </div>
      </article>
    </div>
  );
}
