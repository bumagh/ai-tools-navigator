'use client';

import React, { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/data/tools';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 获取所有唯一分类
  const categories = useMemo(() => {
    return Array.from(new Set(tools.map(tool => tool.category)));
  }, []);

  // 过滤工具
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // 获取热门工具
  const popularTools = useMemo(() => {
    return tools.filter(tool => tool.isPopular).slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 英雄区 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              发现最适合你的 AI 工具
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              精选 {tools.length}+ 款热门 AI 工具，覆盖写作、图像、视频、编程等场景
            </p>
            
            {/* 搜索框 */}
            <div className="max-w-xl mx-auto">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            {/* 热门工具快捷标签 */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-blue-200 text-sm mr-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" /> 热门:
              </span>
              {popularTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => {
                    setSearchTerm(tool.name);
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 分类筛选区 */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">分类筛选</h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory('')}
                className="ml-2 text-sm text-blue-600 hover:text-blue-800"
              >
                (清除筛选)
              </button>
            )}
          </div>
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
        </div>

        {/* 工具网格 */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory ? selectedCategory : '全部工具'}
              <span className="text-gray-500 text-lg font-normal ml-2">
                ({filteredTools.length} 个)
              </span>
            </h2>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-500 text-lg mb-2">没有找到匹配的工具</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                清除筛选条件
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
