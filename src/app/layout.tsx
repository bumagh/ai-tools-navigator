import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Navigator - 发现最好的AI工具",
  description: "精选AI工具分类导航，帮你快速找到最适合的AI工具",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
