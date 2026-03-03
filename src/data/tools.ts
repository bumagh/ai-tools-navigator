// 定义工具和类别类型
export type Tool = {
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
  affiliate?: string;
  imageUrl?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};

// 类别数据
export const categories: Category[] = [
  {
    id: "1",
    name: "写作助手",
    slug: "writing",
    description: "AI写作、文案生成、内容创作工具",
    icon: "📝"
  },
  {
    id: "2",
    name: "图像生成",
    slug: "image-generation",
    description: "AI图像生成、艺术创作、设计工具",
    icon: "🎨"
  },
  {
    id: "3",
    name: "视频制作",
    slug: "video",
    description: "AI视频生成、编辑、虚拟形象工具",
    icon: "🎬"
  },
  {
    id: "4",
    name: "编程开发",
    slug: "programming",
    description: "AI编程助手、代码生成、调试工具",
    icon: "💻"
  },
  {
    id: "5",
    name: "效率工具",
    slug: "productivity",
    description: "AI效率提升、笔记、搜索工具",
    icon: "⚡"
  },
  {
    id: "6",
    name: "语音转写",
    slug: "transcription",
    description: "AI语音转文字、会议记录工具",
    icon: "🎙️"
  }
];

// 工具数据 - 基于市场研究精选
export const tools: Tool[] = [
  // 写作助手
  {
    id: "1",
    name: "ChatGPT",
    description: "OpenAI 开发的大型语言模型，支持对话、写作、编程等多种任务，是目前最流行的 AI 聊天工具",
    url: "https://chat.openai.com",
    category: "写作助手",
    rating: 5,
    tags: ["对话", "写作", "编程", "学习"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "2",
    name: "Claude",
    description: "Anthropic 推出的 AI 助手，擅长长文本分析、写作辅助和代码编写，以安全性和实用性著称",
    url: "https://claude.ai",
    category: "写作助手",
    rating: 5,
    tags: ["长文本", "写作", "代码", "安全"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "3",
    name: "Jasper",
    description: "专业的 AI 写作平台，专注于营销文案、博客文章和广告创意生成",
    url: "https://www.jasper.ai",
    category: "写作助手",
    rating: 4,
    tags: ["营销", "文案", "博客", "创意"],
    isFree: false,
    isPopular: true,
    pricing: "付费"
  },
  {
    id: "4",
    name: "Writesonic",
    description: "AI 内容创作平台，支持文章写作、广告文案和产品描述",
    url: "https://writesonic.com",
    category: "写作助手",
    rating: 4,
    tags: ["写作", "营销", "文案", "SEO"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "5",
    name: "Notion AI",
    description: "集成在 Notion 中的 AI 助手，帮助用户提升笔记和文档处理效率",
    url: "https://www.notion.so/product/ai",
    category: "效率工具",
    rating: 4,
    tags: ["笔记", "写作", "效率", "协作"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "6",
    name: "Gamma",
    description: "AI 演示文稿和网页生成工具，快速创建专业的 PPT 和设计页面",
    url: "https://gamma.app",
    category: "效率工具",
    rating: 4,
    tags: ["PPT", "演示", "设计", "效率"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },

  // 图像生成
  {
    id: "7",
    name: "Midjourney",
    description: "强大的 AI 图像生成工具，通过文本描述创建高质量艺术作品",
    url: "https://www.midjourney.com",
    category: "图像生成",
    rating: 5,
    tags: ["图像生成", "艺术", "设计", "创意"],
    isFree: false,
    isPopular: true,
    pricing: "付费"
  },
  {
    id: "8",
    name: "DALL-E",
    description: "OpenAI 的图像生成模型，可根据文字描述创建逼真的图像和艺术作品",
    url: "https://openai.com/dall-e-3",
    category: "图像生成",
    rating: 5,
    tags: ["图像生成", "AI", "创意", "设计"],
    isFree: true,
    isPopular: true,
    pricing: "付费"
  },
  {
    id: "9",
    name: "Stable Diffusion",
    description: "开源的图像生成模型，支持本地部署和高度定制化",
    url: "https://stability.ai",
    category: "图像生成",
    rating: 5,
    tags: ["开源", "图像生成", "自定义", "本地部署"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "10",
    name: "Leonardo.ai",
    description: "免费的 AI 图像生成平台，提供多种风格和精细控制",
    url: "https://leonardo.ai",
    category: "图像生成",
    rating: 5,
    tags: ["图像生成", "免费", "艺术", "创意"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "11",
    name: "Canva AI",
    description: "设计平台的 AI 功能，提供图像生成、文案生成等工具",
    url: "https://www.canva.com",
    category: "图像生成",
    rating: 4,
    tags: ["设计", "图像", "模板", "编辑"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "12",
    name: "Adobe Firefly",
    description: "Adobe 的 AI 创意工具，集成在创意套件中",
    url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    category: "图像生成",
    rating: 4,
    tags: ["设计", "图像", "Adobe", "创意"],
    isFree: false,
    pricing: "付费"
  },

  // 视频制作
  {
    id: "13",
    name: "Runway",
    description: "AI 视频生成和编辑平台，提供视频合成、风格迁移等功能",
    url: "https://runwayml.com",
    category: "视频制作",
    rating: 5,
    tags: ["视频编辑", "生成", "创意", "特效"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "14",
    name: "Pika",
    description: "新兴的 AI 视频生成工具，支持文本转视频和图像转视频",
    url: "https://pika.art",
    category: "视频制作",
    rating: 4,
    tags: ["视频生成", "文本转视频", "图像转视频", "创意"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "15",
    name: "HeyGen",
    description: "AI 数字人视频生成平台，可创建逼真的 AI 主播和虚拟形象",
    url: "https://www.heygen.com",
    category: "视频制作",
    rating: 4,
    tags: ["数字人", "AI主播", "虚拟形象", "视频生成"],
    isFree: false,
    isPopular: true,
    pricing: "付费"
  },
  {
    id: "16",
    name: "Synthesia",
    description: "AI 虚拟主播视频制作平台，创建专业解说视频",
    url: "https://www.synthesia.io",
    category: "视频制作",
    rating: 4,
    tags: ["虚拟主播", "解说视频", "演示", "培训"],
    isFree: false,
    pricing: "付费"
  },
  {
    id: "17",
    name: "Pictory",
    description: "将文本转换为视频的 AI 工具，适用于营销和教育内容",
    url: "https://pictory.ai",
    category: "视频制作",
    rating: 4,
    tags: ["视频制作", "文本转视频", "营销", "教育"],
    isFree: false,
    pricing: "付费"
  },

  // 编程开发
  {
    id: "18",
    name: "Cursor",
    description: "基于 AI 的代码编辑器，集成 GPT-4 用于代码补全、调试和重构",
    url: "https://cursor.sh",
    category: "编程开发",
    rating: 5,
    tags: ["代码编辑器", "AI编程", "补全", "重构"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "19",
    name: "GitHub Copilot",
    description: "GitHub 推出的 AI 编程助手，提供实时代码建议和自动补全",
    url: "https://github.com/features/copilot",
    category: "编程开发",
    rating: 5,
    tags: ["编程", "代码", "助手", "IDE"],
    isFree: false,
    isPopular: true,
    pricing: "付费"
  },
  {
    id: "20",
    name: "Codeium",
    description: "免费的 AI 编程助手，支持多种语言和 IDE",
    url: "https://codeium.com",
    category: "编程开发",
    rating: 4,
    tags: ["编程", "代码", "助手", "免费"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "21",
    name: "Tabnine",
    description: "AI 代码完成工具，支持多种编辑器和编程语言",
    url: "https://www.tabnine.com",
    category: "编程开发",
    rating: 4,
    tags: ["代码完成", "IDE", "编程", "效率"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "22",
    name: "Amazon CodeWhisperer",
    description: "AWS 的 AI 编程助手，安全且能生成优质代码建议",
    url: "https://aws.amazon.com/codewhisperer",
    category: "编程开发",
    rating: 4,
    tags: ["编程", "AWS", "安全", "代码建议"],
    isFree: true,
    pricing: "免费"
  },

  // 效率工具
  {
    id: "23",
    name: "Perplexity",
    description: "AI 搜索引擎，结合大型语言模型提供直接答案和来源引用",
    url: "https://www.perplexity.ai",
    category: "效率工具",
    rating: 5,
    tags: ["搜索", "AI", "研究", "效率"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "24",
    name: "Microsoft Copilot",
    description: "Microsoft 365 中的 AI 助手，集成在 Office 套件中",
    url: "https://www.microsoft.com/copilot",
    category: "效率工具",
    rating: 4,
    tags: ["办公", "Microsoft", "协作", "效率"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "25",
    name: "Google Gemini",
    description: "Google 的 AI 助手，集成搜索、写作和创意功能",
    url: "https://gemini.google.com",
    category: "效率工具",
    rating: 5,
    tags: ["搜索", "AI", "助手", "Google"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "26",
    name: "Tome",
    description: "AI 驱动的演示文稿创作工具，快速创建专业的演示",
    url: "https://tome.app",
    category: "效率工具",
    rating: 4,
    tags: ["演示", "PPT", "设计", "自动化"],
    isFree: true,
    pricing: "Freemium"
  },

  // 语音转写
  {
    id: "27",
    name: "Otter.ai",
    description: "AI 会议助手，提供实时语音转文字和会议纪要生成",
    url: "https://otter.ai",
    category: "语音转写",
    rating: 5,
    tags: ["语音转写", "会议记录", "AI笔记", "效率"],
    isFree: true,
    isPopular: true,
    pricing: "Freemium"
  },
  {
    id: "28",
    name: "Descript",
    description: "基于文本的视频和音频编辑器，提供 AI 转录和编辑功能",
    url: "https://www.descript.com",
    category: "语音转写",
    rating: 4,
    tags: ["视频编辑", "音频编辑", "转录", "协作"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "29",
    name: "Loom",
    description: "屏幕录制和视频分享工具，支持 AI 转录和摘要",
    url: "https://www.loom.com",
    category: "语音转写",
    rating: 4,
    tags: ["屏幕录制", "分享", "转录", "协作"],
    isFree: true,
    pricing: "Freemium"
  },
  {
    id: "30",
    name: "Rev",
    description: "专业的语音转文字服务，提供高精度转录和翻译",
    url: "https://www.rev.com",
    category: "语音转写",
    rating: 4,
    tags: ["转录", "翻译", "字幕", "专业"],
    isFree: false,
    pricing: "付费"
  }
];
