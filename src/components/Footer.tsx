// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AI工具导航 - 发现最好的AI工具
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-500">
              首页
            </Link>
            <Link href="/free" className="text-sm text-gray-400 hover:text-gray-500">
              免费工具
            </Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-500">
              博客
            </Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-gray-500">
              关于
            </Link>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://github.com/bumagh/ai-tools-navigator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;