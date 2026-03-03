import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '博客 - AI工具导航',
  description: 'AI 工具评测、教程与趋势文章。',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900">博客</h1>
          <p className="mt-2 text-gray-600">我们会在这里持续更新 AI 工具清单、使用教程与行业趋势。</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-gray-600">文章系统准备中。</p>
          <p className="text-gray-600 mt-2">
            你也可以先看看：
            <Link href="/free" className="text-blue-600 hover:text-blue-800 ml-1">
              免费 AI 工具合集
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
