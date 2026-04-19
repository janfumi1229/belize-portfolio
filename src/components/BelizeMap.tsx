"use client";
// 這個元件必須是 Client Component，因為 Leaflet 需要瀏覽器環境（不能在伺服器端執行）

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { belizeLocations } from "@/data/belizeLocations";
import Image from "next/image";

// 修正 Next.js 中 Leaflet 預設圖示的路徑問題
function fixLeafletIcons() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

// 自訂「去過」的紅色圖示
const visitedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// 自訂「未去過」的灰色圖示
const notVisitedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface BelizeMapProps {
  height?: string; // 地圖高度，例如 "500px"
}

export default function BelizeMap({ height = "500px" }: BelizeMapProps) {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  // 貝里斯中心座標
  const belizeCenter: [number, number] = [17.1, -88.7];

  return (
    <div style={{ height }} className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
      <MapContainer
        center={belizeCenter}
        zoom={8}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false} // 預設關閉滾輪縮放，避免與頁面滾動衝突
      >
        {/* 地圖底圖：OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 標記每個地點 */}
        {belizeLocations.map((location) => (
          <Marker
            key={location.nameEn}
            position={[location.lat, location.lng]}
            icon={location.visited ? visitedIcon : notVisitedIcon}
          >
            <Popup maxWidth={280}>
              <div className="p-1">
                {/* 如果有圖片就顯示 */}
                {location.image && (
                  <div className="relative w-full h-36 mb-2 rounded overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-ink text-sm">
                  {location.name}
                  <span className="text-ink-muted font-normal ml-1">
                    {location.nameEn}
                  </span>
                </h3>
                <span
                  className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 mb-2 ${
                    location.visited
                      ? "bg-sage-100 text-sage-300"
                      : "bg-beige-100 text-ink-muted"
                  }`}
                >
                  {location.visited ? "✓ 曾到訪" : "未前往"}
                </span>
                <p className="text-xs text-ink-mid leading-relaxed">
                  {location.description}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
