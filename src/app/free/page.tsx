import React from 'react';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';

export const metadata = {
  title: '免费 AI 工具 - AI工具导航',
  description: '精选免费 AI 工具合集：写作、图像、视频、编程等。',
};

export default function FreeToolsPage() {
  const freeTools = tools.filter((t) => t.isFree);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900">免费 AI 工具</h1>
          <p className="mt-2 text-gray-600">
            这里整理了可免费使用（或提供免费额度/免费版）的 AI 工具，适合快速上手与日常使用。
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            共 {freeTools.length} 个
          </h2>
        </div>

        {freeTools.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500 text-lg">暂未标记免费工具</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freeTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
