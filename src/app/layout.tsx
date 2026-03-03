import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "AI工具导航 - 发现最好的AI工具 | AI Tools Navigator",
  description: "精选热门AI工具分类导航，帮你快速找到ChatGPT、Claude、Midjourney、Cursor等最适合的AI工具。覆盖写作、图像生成、视频制作、编程开发等场景。",
  keywords: "AI工具, AI导航, ChatGPT, Claude, Midjourney, AI写作, AI图像生成, AI编程, AI视频, 人工智能工具",
  openGraph: {
    title: "AI工具导航 - 发现最好的AI工具",
    description: "精选热门AI工具分类导航，帮你快速找到最适合的AI工具",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
