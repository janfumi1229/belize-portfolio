// 計畫時程表資料
// 修改這裡的內容來更新頁面上的時程表

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tag?: string; // 標籤：準備、出發、實習、返台
}

export const timeline: TimelineItem[] = [
  {
    date: "2024 年 5 月",
    title: "提交申請",
    description: "完成百億青年行動計畫申請文件、撰寫計畫書與自傳，通過初審進入面試階段。",
    tag: "準備",
  },
  {
    date: "2024 年 6 月",
    title: "錄取與行前培訓",
    description: "正式錄取，參加國內行前培訓課程，學習貝里斯的歷史、文化、語言基礎。",
    tag: "準備",
  },
  {
    date: "2024 年 8 月",
    title: "行前準備",
    description: "辦理貝里斯入境文件、接種黃熱病等預防針、準備實習所需器材與物資。",
    tag: "準備",
  },
  {
    date: "2024 年 9 月 1 日",
    title: "出發！",
    description: "從桃園國際機場出發，經由美國休士頓轉機，飛行約 20 小時後抵達貝里斯城菲利普．戈德森國際機場。",
    tag: "出發",
  },
  {
    date: "2024 年 9 月 2 日",
    title: "抵達與環境適應",
    description: "入住宿舍，參觀實習機構，與當地夥伴及同事初步交流，開始適應中美洲氣候。",
    tag: "實習",
  },
  {
    date: "2024 年 9 月 3 日－9 月 25 日",
    title: "正式實習",
    description: "於貝里斯當地機構展開為期三週的實習，參與實地計畫、社區服務與文化交流活動。",
    tag: "實習",
  },
  {
    date: "2024 年 9 月 26 日",
    title: "成果發表",
    description: "在當地舉辦小型成果分享會，向台灣駐外館處及當地合作夥伴說明實習成果。",
    tag: "實習",
  },
  {
    date: "2024 年 9 月 30 日",
    title: "返台",
    description: "帶著滿滿的回憶與學習踏上歸途，開始整理心得與撰寫成果報告。",
    tag: "返台",
  },
];
