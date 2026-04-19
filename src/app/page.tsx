// 首頁：Hero + 四個導覽卡片

import Image from "next/image";
import Link from "next/link";

// 四個主要區塊的卡片設定
const sections = [
  {
    href: "/about",
    label: "個人介紹",
    labelEn: "About",
    description: "我的背景、學經歷與走過的地方",
    bg: "bg-beige-100 hover:bg-beige-200",
    number: "01",
  },
  {
    href: "/program",
    label: "計畫介紹",
    labelEn: "Program",
    description: "百億計畫時程表與貝里斯實習地圖",
    bg: "bg-sky-50 hover:bg-sky-100",
    number: "02",
  },
  {
    href: "/map",
    label: "我的地圖",
    labelEn: "My Map",
    description: "貝里斯走過的地方與地理紀錄",
    bg: "bg-sage-50 hover:bg-sage-100",
    number: "03",
  },
  {
    href: "/works",
    label: "數位成果",
    labelEn: "Works",
    description: "心得文章、攝影作品與實習成果",
    bg: "bg-beige-50 hover:bg-beige-100",
    number: "04",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero 區塊 ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center">
        {/* 背景裝飾色塊 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-100/60 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-sage-100/50 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-beige-200/40 blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左側文字 */}
            <div className="animate-fade-up">
              {/* 小標籤 */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-ink-muted" />
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-ink-muted">
                  百億青年行動計畫 · 2024
                </span>
              </div>

              {/* 主標題 */}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-ink leading-none tracking-tight mb-6">
                Frank
                <br />
                <span className="text-ink-mid">Huang</span>
                {/* ↑ 換成你的名字 */}
              </h1>

              {/* 副標題 */}
              <p className="font-serif text-2xl md:text-3xl text-ink-muted font-light mb-8 tracking-wide">
                貝里斯 · Belize
              </p>

              {/* 描述 */}
              <p className="font-sans text-ink-mid leading-relaxed max-w-md mb-10">
                2024 年 9 月，我以百億青年行動計畫的一員身份，踏上中美洲的小國貝里斯。
                這個網站記錄了那段旅程——關於學習、文化衝擊與自我探索。
              </p>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase border border-ink text-ink px-8 py-3.5 hover:bg-ink hover:text-warm-white transition-all duration-300"
              >
                探索更多
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* 右側圖片 */}
            <div className="relative animate-fade-in">
              {/* 主圖 */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/seed/belize-hero/600/750"
                  // ↑ 換成你的照片：/assets/images/belize/hero.jpg
                  alt="貝里斯旅程"
                  fill
                  className="object-cover"
                  priority
                />
                {/* 圖片上的文字疊層 */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-white/90 text-sm tracking-widest">
                    Belize, Central America · Sep 2024
                  </p>
                </div>
              </div>

              {/* 浮動小卡片 */}
              <div className="absolute -bottom-6 -left-6 bg-warm-white border border-border rounded-xl shadow-lg px-5 py-4">
                <p className="font-sans text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Duration
                </p>
                <p className="font-serif text-2xl text-ink">30 days</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-beige-100 border border-beige-200 rounded-xl shadow-lg px-5 py-4">
                <p className="font-sans text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="font-serif text-xl text-ink">Belize 🇧🇿</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 導覽卡片區塊 ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-px bg-ink-muted" />
          <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-ink-muted">
            Explore
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div
                className={`${section.bg} rounded-2xl p-7 h-52 flex flex-col justify-between transition-all duration-300 cursor-pointer group`}
              >
                {/* 頂部：編號 */}
                <span className="font-serif text-5xl text-ink/10 font-light">
                  {section.number}
                </span>

                {/* 底部：標題與描述 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl text-ink">
                      {section.label}
                    </h3>
                    <span className="text-ink-muted group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
