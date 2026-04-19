// 個人介紹頁面

import Image from "next/image";

// ── 請修改這裡的個人資訊 ──────────────────────────
const profile = {
  name: "Frank Huang",       // 你的名字
  chineseName: "黃○○",       // 中文名
  title: "百億青年行動計畫 · 貝里斯組",
  school: "○○大學 ○○系",    // 就讀學校科系
  year: "大學四年級",         // 年級
  bio: `我是一名對國際事務與永續發展充滿熱情的大學生。在申請百億青年行動計畫之前，我一直希望能夠親身了解中美洲的社會生態——不只是從書本上讀到，而是真正踏在那片土地上。

貝里斯的這段旅程徹底改變了我對「發展」與「援助」的理解。我學到了傾聽的重要，也學到了文化謙遜。這個網站是我試著把那些學習整理成文字與畫面的地方。`,
  // ↑ 換成你自己的自我介紹
  photo: "https://picsum.photos/seed/profile/600/600",
  // ↑ 換成：/assets/images/profile/headshot.jpg
};

// ── 學經歷（按時間倒序） ──────────────────────────
const experiences = [
  {
    year: "2024",
    title: "百億青年行動計畫 · 貝里斯組",
    org: "外交部國際合作發展基金會",
    description: "赴貝里斯進行為期一個月的國際志工實習，參與社區發展、教育推廣等計畫。",
    type: "國際",
  },
  {
    year: "2023",
    title: "○○研究計畫研究助理",
    org: "○○大學 ○○實驗室",
    description: "協助教授進行○○相關研究，負責資料蒐集、整理與分析。",
    type: "研究",
  },
  {
    year: "2023",
    title: "○○學生社團 幹部",
    org: "○○大學",
    description: "擔任○○職位，負責○○工作。",
    type: "社團",
  },
  {
    year: "2022",
    title: "○○實習",
    org: "○○公司",
    description: "暑假期間於○○部門實習，參與○○專案。",
    type: "實習",
  },
  {
    year: "2021",
    title: "進入○○大學 ○○系",
    org: "○○大學",
    description: "",
    type: "學歷",
  },
];

// ── 技能 / 興趣標籤 ──────────────────────────────
const skills = [
  "國際事務",
  "永續發展",
  "專案管理",
  "英語溝通",
  "田野調查",
  "資料分析",
  "攝影",
  "簡報設計",
];

// 標籤顏色交替
const tagBgs = ["bg-beige-100", "bg-sky-100", "bg-sage-100"];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── 頁面頂部 ─────────────────────────────── */}
      <div className="page-header">
        <p className="section-subtitle">About Me</p>
        <h1 className="section-title mt-1">{profile.name}</h1>
      </div>

      {/* ── 主要內容 ─────────────────────────────── */}
      <div className="content-container pt-0">
        {/* 個人資料區 */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* 照片 */}
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-border sticky top-28">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 文字內容 */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-ink mb-1">
                {profile.chineseName}
              </h2>
              <p className="font-sans text-sm text-ink-muted tracking-wide">
                {profile.school} · {profile.year}
              </p>
              <p className="font-sans text-sm text-sky-300 mt-1">
                {profile.title}
              </p>
            </div>

            <div className="prose prose-sm max-w-none">
              {profile.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-ink-mid leading-loose mb-4"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* 技能標籤 */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-4">
                專長 / 興趣
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`tag ${tagBgs[i % tagBgs.length]} text-ink-mid`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="border-t border-border mb-16" />

        {/* 學經歷時間軸 */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl text-ink mb-10">學經歷</h2>

          <div className="relative">
            {/* 垂直線 */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-8 items-start">
                  {/* 年份 */}
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-serif text-xl text-ink-muted">
                      {exp.year}
                    </span>
                  </div>

                  {/* 圓點（時間軸上的點） */}
                  <div className="flex-shrink-0 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-beige-300 border-2 border-white shadow-sm mt-2" />
                  </div>

                  {/* 內容卡片 */}
                  <div className="card flex-1 p-5">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-serif text-lg text-ink">
                        {exp.title}
                      </h3>
                      <span
                        className={`tag flex-shrink-0 ${
                          exp.type === "國際"
                            ? "bg-sage-100 text-sage-300"
                            : exp.type === "研究"
                            ? "bg-sky-100 text-sky-300"
                            : "bg-beige-100 text-ink-mid"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-ink-muted mb-2">
                      {exp.org}
                    </p>
                    {exp.description && (
                      <p className="font-sans text-sm text-ink-mid leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
