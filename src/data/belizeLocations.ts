// 貝里斯地圖上的地點標記
// 在這裡新增你去過的地方

export interface BelizeLocation {
  name: string;
  nameEn: string;
  lat: number;
  lng: number;
  description: string;
  visited: boolean;  // true = 去過，false = 只標示位置
  image?: string;
}

export const belizeLocations: BelizeLocation[] = [
  {
    name: "貝里斯城",
    nameEn: "Belize City",
    lat: 17.2514,
    lng: -88.759,
    description: "貝里斯最大城市，也是主要的經濟與文化中心。菲利普．戈德森國際機場就在附近，是入境的第一站。",
    visited: true,
    image: "https://picsum.photos/seed/belizecity/400/300",
  },
  {
    name: "貝爾莫潘",
    nameEn: "Belmopan",
    lat: 17.2514,
    lng: -89.2628,  // 實際座標約 17.25, -88.77，這裡稍作示意
    description: "貝里斯首都，1970 年代因應颶風威脅而將首都遷至內陸。小而寧靜的行政城市。",
    visited: true,
  },
  {
    name: "聖伊格納西奧",
    nameEn: "San Ignacio",
    lat: 17.1564,
    lng: -89.0714,
    description: "貝里斯西部的旅遊重鎮，鄰近瓜地馬拉邊境，是探索馬雅遺址與叢林生態的基地。",
    visited: true,
    image: "https://picsum.photos/seed/sanignacio/400/300",
  },
  {
    name: "卡拉科爾馬雅遺址",
    nameEn: "Caracol",
    lat: 16.7639,
    lng: -89.1174,
    description: "貝里斯最大的馬雅古城遺址，鼎盛時期人口超過 10 萬。天空宮殿（Sky Palace）是貝里斯最高的人造建築。",
    visited: true,
    image: "https://picsum.photos/seed/caracol2/400/300",
  },
  {
    name: "普萊森西亞",
    nameEn: "Placencia",
    lat: 16.5243,
    lng: -88.3668,
    description: "南部的海岸度假村，以細白沙灘和加勒比海景色著稱，也是浮潛與出海賞海豚的好地方。",
    visited: false,
  },
  {
    name: "安伯格里斯礁",
    nameEn: "Ambergris Caye",
    lat: 17.914,
    lng: -87.9671,
    description: "貝里斯最大的島嶼，世界聞名的潛水勝地，藍洞（Great Blue Hole）就在附近。",
    visited: false,
  },
  {
    name: "丹格里加",
    nameEn: "Dangriga",
    lat: 16.9707,
    lng: -88.2293,
    description: "加里富納文化的精神故鄉，每年 11 月 19 日的加里富納定居日是貝里斯重要的文化慶典。",
    visited: false,
  },
];
