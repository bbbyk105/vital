// contentData.ts
export interface ContentItem {
  src: string;
  alt: string;
  description: string;
  height?: number;
  width?: number;
}

const contentItems: ContentItem[] = [
  {
    src: "/tvwork.png",
    alt: "リモートワーク",
    description: "リモートワークなどでの利用",
  },
  {
    src: "/event.png",
    alt: "イベントスペース",
    description: "イベントスペースとしての利用",
  },
  {
    src: "/conve.png",
    alt: "会議",
    description: "会議やミーティングの場",
  },
  {
    src: "/art.jpg",
    alt: "クリエイティブ活動",
    description: "クリエイティブな活動",
  },
  {
    src: "/farming.jpg",
    alt: "マルシェ",
    description: "マルシェでの利用",
    height: 170,
    width: 200,
  },
  {
    src: "/study.jpg",
    alt: "学習",
    description: "学習や研究の場",
  },
];

export default contentItems;
