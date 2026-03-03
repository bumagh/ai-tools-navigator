// src/app/about/page.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">关于AI工具导航</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              AI工具导航是一个精心挑选和整理的AI工具分类目录，旨在帮助用户快速找到最适合的AI工具。
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">我们的使命</h2>
            <p className="text-gray-700 mb-6">
              随着AI技术的快速发展，市场上涌现出越来越多的AI工具。我们致力于为用户提供一个清晰、易用的导航平台，
              让每个人都能轻松找到符合自己需求的AI工具，提升工作和学习效率。
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">如何使用</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>通过搜索框快速查找特定工具</li>
              <li>使用分类筛选找到相关工具</li>
              <li>点击工具卡片访问工具网站</li>
              <li>根据评分了解工具质量</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">联系我们</h2>
            <p className="text-gray-700">
              如果您有任何建议或想推荐新的AI工具，请通过GitHub联系我们。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;