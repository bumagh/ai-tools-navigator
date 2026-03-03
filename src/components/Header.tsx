// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI工具导航</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  首页
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/bumagh/ai-tools-navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
