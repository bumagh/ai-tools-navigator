// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AI工具导航 - 发现最好的AI工具
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/bumagh/ai-tools-navigator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;