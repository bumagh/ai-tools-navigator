// src/components/Newsletter.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    // 模拟 API 调用 - 实际项目中需要连接到 ConvertKit 或其他邮件服务
    setTimeout(() => {
      setStatus('success');
      // 触发 GA4 事件
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: email,
        });
      }
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-100">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">订阅成功！</h3>
        <p className="text-gray-600">
          感谢订阅！我们会不定期为你推送最新的 AI 工具和实用技巧。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          订阅最新 AI 工具资讯
        </h3>
        
        <p className="text-blue-100 text-lg mb-8">
          每周精选优质 AI 工具，第一时间送达你的邮箱。告别盲目搜索，让 AI 为你工作。
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="输入你的邮箱地址"
            required
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === 'loading' ? (
              <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                订阅
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-blue-200 text-sm mt-4">
          📧 每周六发送，随时可取消订阅
        </p>
      </div>
    </div>
  );
}
