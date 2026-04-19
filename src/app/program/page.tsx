// 計畫介紹頁面：時程表 + 貝里斯地圖
// 地圖使用 Leaflet，需要用 dynamic import 關閉 SSR

import dynamic from "next/dynamic";
import { timeline } from "@/data/timeline";

// dynamic import：讓地圖只在瀏覽器端載入（關閉 SSR）
// 這是 Next.js 中使用 Leaflet 的標準做法
const BelizeMap = dynamic(() => import("@/components/BelizeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-xl bg-beige-50 border border-border flex items-center justify-center">
      <p className="font-sans text-ink-muted text-sm">地圖載入中…</p>
    </div>
  ),
});

// 標籤顏色
const tagColors: Record<string, string> = {
  準備: "bg-beige-100 text-ink-mid",
  出發: "bg-sky-100 text-sky-300",
  實習: "bg-sage-100 text-sage-300",
  返台: "bg-beige-200 text-ink-mid",
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen">
      {/* ── 頁面頂部 ─────────────────────────────── */}
      <div className="page-header">
        <p className="section-subtitle">Program</p>
        <h1 className="section-title mt-1">計畫介紹</h1>
        <p className="font-sans text-ink-muted mt-4 max-w-xl leading-relaxed">
          百億青年行動計畫由外交部國合會主辦，每年選送台灣青年赴友邦進行實習與文化交流。
          2024 年，我代表台灣前往中美洲的貝里斯。
        </p>
      </div>

      <div className="content-container pt-0">
        {/* ── 計畫數字概覽 ──────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { number: "30", unit: "天", label: "實習天數" },
            { number: "1", unit: "國", label: "前往國家" },
            { number: "7+", unit: "個", label: "到訪城市" },
            { number: "2024", unit: "年", label: "計畫年度" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-beige-50 rounded-2xl p-6 text-center border border-border"
            >
              <div className="font-serif text-4xl text-ink">
                {stat.number}
                <span className="text-xl text-ink-muted ml-1">{stat.unit}</span>
              </div>
              <p className="font-sans text-xs text-ink-muted mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 分隔線 */}
        <div className="border-t border-border mb-16" />

        {/* ── 時程表 ────────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl text-ink mb-10">行程時程表</h2>

          <div className="relative">
            {/* 垂直連接線 */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-border" />

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* 時間軸圓點 */}
                  <div className="flex-shrink-0 w-12 flex justify-center pt-4">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                        item.tag === "實習"
                          ? "bg-sage-300"
                          : item.tag === "出發"
                          ? "bg-sky-300"
                          : item.tag === "返台"
                          ? "bg-beige-300"
                          : "bg-beige-200"
                      }`}
                    />
                  </div>

                  {/* 卡片 */}
                  <div className="card flex-1 p-5 mb-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <p className="font-sans text-xs text-ink-muted mb-1 tracking-wide">
                          {item.date}
                        </p>
                        <h3 className="font-serif text-xl text-ink">
                          {item.title}
                        </h3>
                      </div>
                      {item.tag && (
                        <span className={`tag ${tagColors[item.tag]}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-ink-mid leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 分隔線 */}
        <div className="border-t border-border mb-16" />

        {/* ── 貝里斯地圖 ────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl text-ink mb-3">
            貝里斯走過的地方
          </h2>
          <p className="font-sans text-sm text-ink-muted mb-6">
            <span className="inline-block w-3 h-3 rounded-full bg-red-400 mr-2 align-middle" />
            紅色標記：曾到訪
            <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2 ml-4 align-middle" />
            灰色標記：未前往
          </p>

          {/* 地圖元件（動態載入，避免 SSR 錯誤） */}
          <BelizeMap height="520px" />

          <p className="font-sans text-xs text-ink-muted mt-3">
            點擊標記查看地點介紹。地圖資料來源：OpenStreetMap。
          </p>
        </section>
      </div>
    </div>
  );
}
