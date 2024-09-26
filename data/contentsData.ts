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
      src: "/work.png",
      alt: "イベントスペース",
      description: "イベントスペースとしての利用",
    },
    {
      src: "/conversation.png",
      alt: "会議",
      description: "会議やミーティングの場",
    },
    {
      src: "/art.png",
      alt: "クリエイティブ活動",
      description: "クリエイティブな活動",
    },
    {
      src: "/farming.png",
      alt: "マルシェ",
      description: "マルシェでの利用",
      height: 170,
      width: 200,
    },
    {
      src: "/studying.png",
      alt: "学習",
      description: "学習や研究の場",
    },
  ];
  
  export default contentItems;