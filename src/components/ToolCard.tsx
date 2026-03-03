// src/components/ToolCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Star, Sparkles } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  rating: number;
  tags: string[];
  isFree?: boolean;
  isPopular?: boolean;
  pricing?: string;
}

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  // 处理工具点击事件
  const handleToolClick = () => {
    // 触发 GA4 工具点击事件
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tool_click', {
        event_category: 'engagement',
        event_label: tool.name,
        tool_category: tool.category,
        tool_id: tool.id,
      });
    }
    console.log(`[Analytics] Tool clicked: ${tool.name} (${tool.category})`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            {tool.isPopular && (
              <Sparkles className="w-4 h-4 text-yellow-500" />
            )}
          </div>
          <div className="flex items-center bg-yellow-50 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {tool.rating}
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{tool.description}</p>
        
        {/* 标签 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* 分类和价格 */}
        <div className="flex items-center justify-between mt-auto">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
            {tool.category}
          </span>
          {tool.pricing && (
            <span className={`text-xs font-medium ${tool.isFree || tool.pricing === 'Freemium' || tool.pricing === '免费' ? 'text-green-600' : 'text-orange-600'}`}>
              {tool.pricing}
            </span>
          )}
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
        <Link 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleToolClick}
          className="flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          访问工具
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
