// 我的地圖頁面：全螢幕互動式貝里斯地圖 + 側邊地點清單

import dynamic from "next/dynamic";
import { belizeLocations } from "@/data/belizeLocations";
import Image from "next/image";

const BelizeMap = dynamic(() => import("@/components/BelizeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-xl bg-beige-50 border border-border flex items-center justify-center">
      <p className="font-sans text-ink-muted text-sm">地圖載入中…</p>
    </div>
  ),
});

export default function MapPage() {
  const visited = belizeLocations.filter((l) => l.visited);
  const notVisited = belizeLocations.filter((l) => !l.visited);

  return (
    <div className="min-h-screen">
      {/* ── 頁面頂部 ─────────────────────────────── */}
      <div className="page-header pb-8">
        <p className="section-subtitle">My Map</p>
        <h1 className="section-title mt-1">我的地圖</h1>
        <p className="font-sans text-ink-muted mt-4 max-w-xl leading-relaxed">
          在貝里斯這一個月，我走過了{visited.length} 個城市與地點，
          每個地方都留下了不同的記憶。
        </p>
      </div>

      <div className="content-container pt-0">
        {/* ── 地圖 + 側邊欄 ─────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* 地圖（佔 2/3） */}
          <div className="lg:col-span-2 h-[600px]">
            <BelizeMap height="600px" />
          </div>

          {/* 側邊地點清單（佔 1/3） */}
          <div className="lg:col-span-1 flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-1">
            {/* 已到訪 */}
            <div className="mb-2">
              <p className="font-sans text-xs uppercase tracking-widest text-sage-300 mb-3 px-1">
                ✓ 已到訪 ({visited.length})
              </p>
              {visited.map((loc) => (
                <div
                  key={loc.nameEn}
                  className="card p-4 mb-2 border-l-4 border-sage-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-base text-ink">
                        {loc.name}
                      </h3>
                      <p className="font-sans text-xs text-ink-muted">
                        {loc.nameEn}
                      </p>
                    </div>
                    {loc.image && (
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={loc.image}
                          alt={loc.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <p className="font-sans text-xs text-ink-mid mt-2 leading-relaxed line-clamp-2">
                    {loc.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 未到訪 */}
            {notVisited.length > 0 && (
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-3 px-1">
                  未前往 ({notVisited.length})
                </p>
                {notVisited.map((loc) => (
                  <div
                    key={loc.nameEn}
                    className="card p-4 mb-2 opacity-60"
                  >
                    <h3 className="font-serif text-base text-ink-mid">
                      {loc.name}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted">
                      {loc.nameEn}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-1 leading-relaxed line-clamp-2">
                      {loc.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── 地點照片牆 ────────────────────────── */}
        <div className="border-t border-border pt-16 mb-20">
          <h2 className="font-serif text-3xl text-ink mb-8">地點照片</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {visited
              .filter((loc) => loc.image)
              .map((loc) => (
                <div
                  key={loc.nameEn}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer"
                >
                  <Image
                    src={loc.image!}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover 疊層 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-sans text-white text-xs font-medium">
                      {loc.name}
                    </p>
                  </div>
                </div>
              ))}
            {/* 佔位格子（讓你知道可以加更多） */}
            <div className="aspect-square rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-beige-50">
              <p className="font-sans text-xs text-ink-muted text-center px-4">
                + 新增照片
                <br />
                放到 /assets/images/belize/
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
