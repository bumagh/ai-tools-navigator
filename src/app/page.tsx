import { Search, Sparkles, ArrowRight, Zap, Brain, Image, Code, Music, Video, MessageSquare, FileText, Palette } from "lucide-react";

const categories = [
  { name: "文本生成", icon: FileText, count: 25, color: "bg-blue-100 text-blue-600" },
  { name: "AI 对话", icon: MessageSquare, count: 18, color: "bg-purple-100 text-purple-600" },
  { name: "图像生成", icon: Image, count: 22, color: "bg-pink-100 text-pink-600" },
  { name: "代码助手", icon: Code, count: 15, color: "bg-green-100 text-green-600" },
  { name: "音频处理", icon: Music, count: 10, color: "bg-orange-100 text-orange-600" },
  { name: "视频制作", icon: Video, count: 12, color: "bg-red-100 text-red-600" },
  { name: "AI 绘画", icon: Palette, count: 20, color: "bg-indigo-100 text-indigo-600" },
  { name: "效率工具", icon: Zap, count: 30, color: "bg-yellow-100 text-yellow-600" },
];

const featuredTools = [
  { name: "ChatGPT", desc: "OpenAI 的对话 AI，支持文本生成、代码编写、翻译等", category: "AI 对话", url: "https://chat.openai.com", tag: "热门" },
  { name: "Midjourney", desc: "顶级 AI 图像生成工具，擅长艺术风格和创意设计", category: "AI 绘画", url: "https://midjourney.com", tag: "创意" },
  { name: "Claude", desc: "Anthropic 的 AI 助手，擅长长文分析和编程辅助", category: "AI 对话", url: "https://claude.ai", tag: "推荐" },
  { name: "Cursor", desc: "AI 驱动的代码编辑器，内置 GPT-4 和 Claude", category: "代码助手", url: "https://cursor.sh", tag: "开发" },
  { name: "Suno", desc: "AI 音乐创作平台，输入文字即可生成完整歌曲", category: "音频处理", url: "https://suno.ai", tag: "音乐" },
  { name: "Runway", desc: "专业 AI 视频编辑和生成工具，支持 Gen-3 模型", category: "视频制作", url: "https://runway.ml", tag: "视频" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-500 bg-clip-text text-transparent">
              AI Tools Navigator
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#categories" className="hover:text-primary transition">分类</a>
            <a href="#featured" className="hover:text-primary transition">精选</a>
            <a href="#submit" className="hover:text-primary transition">提交工具</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            收录 150+ 精选 AI 工具
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            发现最适合你的
            <span className="bg-gradient-to-r from-primary to-accent-500 bg-clip-text text-transparent"> AI 工具</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            精选分类、真实评测、持续更新。不再迷失在海量 AI 工具中。
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索 AI 工具、分类或功能..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-base"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">按分类浏览</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <a key={cat.name} href={`#${cat.name}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition group cursor-pointer">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-primary transition">{cat.name}</div>
                  <div className="text-sm text-gray-400">{cat.count} 个工具</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section id="featured" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">精选工具</h2>
            <a href="#" className="text-primary text-sm flex items-center gap-1 hover:underline">
              查看全部 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition">{tool.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tool.tag}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tool.desc}</p>
                <span className="text-xs text-gray-400">{tool.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section id="submit" className="py-16 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">提交你发现的 AI 工具</h2>
          <p className="text-gray-600 mb-6">发现了好用的 AI 工具？提交给我们，帮助更多人发现它。</p>
          <a href="mailto:submit@example.com"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition font-medium">
            <Sparkles className="w-4 h-4" /> 提交工具
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t text-center text-sm text-gray-400">
        <p>© 2026 AI Tools Navigator. Built with ❤️ by AI Agent Team.</p>
      </footer>
    </div>
  );
}
