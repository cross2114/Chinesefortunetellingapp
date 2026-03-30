# 🔮 Mystic Arts - 中国玄学算命应用

[English](README.md) | 简体中文

![Mystic Arts Banner](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=400&fit=crop)

将古老的中国算命智慧带向世界的现代化Web应用。体验生辰八字、周易卜卦、塔罗占卜、面相分析和每日运势。

## ✨ 功能特色

### 🎴 五大算命系统

- **生辰八字** - 四柱命理分析
  - 根据年月日时计算命盘
  - 发现你的五行属性和生肖
  - 了解你的人生轨迹和性格特征

- **周易卜卦** - 易经占卜
  - 向古老的智慧提问
  - 获得卦象解读和启示
  - 传统铜钱卜卦模拟

- **塔罗占卜** - 神秘卡牌
  - 多种牌阵选择（单张、三张、凯尔特十字）
  - 精美的卡牌插图
  - 每个位置的详细解读

- **面相分析** - 传统相术
  - 上传照片进行AI分析
  - 基于中国传统面相学原理
  - 性格和运势洞察

- **每日运势** - 每日指引
  - 个性化每日运势
  - 幸运数字、颜色和方位
  - 各方面运势预测（爱情、事业、健康、财运）

### 🎨 设计亮点

- **敦煌美学** - 灵感来源于中国古代敦煌壁画
- **深色主题** - 丰富的赭石红、石青和土黄色调
- **响应式设计** - 完美适配移动端和桌面端
- **PWA支持** - 可在任何设备上安装为原生应用
- **流畅动画** - 优雅的过渡效果和3D动效
- **玻璃态UI** - 现代化的玻璃质感卡片

### 🔐 用户系统

- **免费版** - 每月有限次数的算命服务
- **会员计划** - 无限次使用所有功能
- **历史记录** - 追踪你的咨询历史
- **个人资料** - 个性化体验

## 🚀 技术栈

- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS v4
- **路由**: React Router v7
- **动画**: Motion (Framer Motion)
- **构建工具**: Vite
- **图标**: Lucide React
- **字体**: Cormorant Garamond, Noto Serif SC

## 📦 安装

### 环境要求

- Node.js 18+ 
- npm 或 pnpm

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/mystic-arts.git
cd mystic-arts

# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm run dev
# 或
pnpm dev

# 在浏览器中打开 http://localhost:5173
```

## 🏗️ 构建

```bash
# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

## 📁 项目结构

```
mystic-arts/
├── public/
│   ├── icons/              # PWA图标 (72x72 到 512x512)
│   ├── manifest.json       # PWA清单文件
│   └── sw.js              # Service Worker
├── src/
│   ├── app/
│   │   ├── components/     # React组件
│   │   │   ├── ui/        # UI基础组件 (button, input等)
│   │   │   ├── Layout.tsx
│   │   │   ├── Card3D.tsx
│   │   │   └── ...
│   │   ├── pages/         # 路由页面
│   │   │   ├── Home.tsx
│   │   │   ├── BaZi.tsx
│   │   │   ├── IChing.tsx
│   │   │   ├── Tarot.tsx
│   │   │   ├── FaceReading.tsx
│   │   │   └── ...
│   │   ├── context/       # React Context
│   │   │   └── AuthContext.tsx
│   │   ├── utils/         # 工具函数
│   │   ├── routes.ts      # 路由配置
│   │   └── App.tsx        # 主应用组件
│   ├── styles/
│   │   ├── fonts.css      # 字体导入
│   │   ├── tailwind.css   # Tailwind指令
│   │   ├── theme.css      # 设计令牌和工具类
│   │   └── index.css      # 入口CSS
│   └── main.tsx           # 应用入口
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 设计系统

### 配色方案（敦煌风格）

```css
/* 主色调 */
--ochre-red: #B8543E      /* 赭石红 */
--stone-blue: #4A6FA5     /* 石青 */
--earth-yellow: #D4A76A   /* 土黄 */
--dark-bg: #0f0a08        /* 深色背景 */

/* 五行色彩 */
--wood: emerald-500       /* 木 */
--fire: red-500          /* 火 */
--earth: yellow-500      /* 土 */
--metal: gray-400        /* 金 */
--water: blue-500        /* 水 */
```

### 字体排版

- **标题**: Cormorant Garamond (优雅衬线体)
- **正文**: 系统字体 + 中文回退 (Noto Serif SC)
- **字距**: 宽字距营造神秘感

### 动画效果

- **3D卡片**: `card-3d` 类配合悬停变换
- **浮动动画**: 装饰元素的微妙浮动
- **发光效果**: 神秘氛围的动画阴影
- **光泽**: 加载和高亮效果

## 🌐 部署

### Vercel（推荐）

[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/mystic-arts)

1. 推送到GitHub
2. 在Vercel中导入项目
3. 每次推送自动部署

### Netlify

```bash
# 构建命令
npm run build

# 发布目录
dist
```

### GitHub Pages

```bash
# 安装gh-pages
npm install -D gh-pages

# 添加到package.json scripts
"deploy": "gh-pages -d dist"

# 部署
npm run deploy
```

## 📱 PWA功能

- ✅ 离线支持
- ✅ 添加到主屏幕
- ✅ 推送通知就绪
- ✅ 所有设备的应用图标
- ✅ 状态栏深色主题
- ✅ 安全区域支持（iPhone刘海）

## 🔮 未来计划

- [ ] Supabase后端集成
- [ ] 用户认证（邮箱/社交登录）
- [ ] 会员支付集成
- [ ] AI驱动的面相分析
- [ ] 咨询历史和收藏
- [ ] 社交分享功能
- [ ] 多语言支持
- [ ] 深色/浅色主题切换
- [ ] 生肖配对检测
- [ ] 年度运势报告

## 🤝 贡献

欢迎贡献！请随时提交Pull Request。

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 📄 许可证

本项目采用MIT许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 敦煌壁画提供设计灵感
- 中国古代算命智慧
- 现代Web技术
- 开源社区

## 📞 联系方式

- **项目链接**: https://github.com/YOUR_USERNAME/mystic-arts
- **在线演示**: https://mystic-arts.vercel.app

---

## 📚 其他文档

- [GitHub发布完整指南](./GitHub发布完整指南.md) - 如何将项目发布到GitHub
- [App Store上架完整指南](./App%20Store上架完整指南.md) - 如何上架到iOS App Store
- [快速开始](./快速开始.md) - 5分钟快速发布指南
- [5分钟快速决策指南](./5分钟快速决策指南.md) - PWA vs App Store决策
- [上架清单](./上架清单.md) - App Store上架完整清单

---

**用 ✨ 古老智慧和现代技术共同打造**

*問天知命 · 道法自然*
