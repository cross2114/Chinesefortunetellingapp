# 🚀 将Mystic Arts发布到GitHub完整指南

## 📋 目录
1. [从Figma Make导出代码](#步骤1从figma-make导出代码)
2. [创建GitHub仓库](#步骤2创建github仓库)
3. [上传代码到GitHub](#步骤3上传代码到github)
4. [部署到Vercel](#步骤4部署到vercel推荐)
5. [后续管理](#步骤5后续管理)

---

## 步骤1：从Figma Make导出代码

### 方法A：直接下载（最简单）✅

1. **打开Figma Make项目**
   - 进入你的Mystic Arts项目

2. **找到导出按钮**
   - 点击右上角的 **菜单图标** ☰
   - 或者查找 **"Export"** / **"Download"** 选项

3. **下载代码包**
   - 选择 **"Download Code"** 或 **"Export Project"**
   - 会下载一个 `.zip` 文件
   - 解压到你的电脑（比如 `~/Desktop/mystic-arts`）

### 方法B：如果没有导出功能

如果Figma Make没有导出按钮，你可以使用我给你准备的完整代码包：

```bash
# 我会在下面提供完整的项目结构
# 你可以手动创建这些文件
```

---

## 步骤2：创建GitHub仓库

### 2.1 注册/登录GitHub

1. 访问 [https://github.com](https://github.com)
2. 如果没有账号，点击 **Sign up** 注册
3. 如果有账号，点击 **Sign in** 登录

### 2.2 创建新仓库

1. **点击右上角的 `+` 号**
   - 选择 **"New repository"**

2. **填写仓库信息**
   ```
   Repository name: mystic-arts
   Description: Ancient Chinese Divination App - 中国玄学算命应用
   
   选择: ☑️ Public（公开）或 ☐ Private（私有）
   
   不要勾选：
   ☐ Add a README file
   ☐ Add .gitignore
   ☐ Choose a license
   ```

3. **点击 `Create repository`**
   - 会看到一个空的仓库页面
   - **不要关闭这个页面**，稍后会用到里面的命令

---

## 步骤3：上传代码到GitHub

### 3.1 安装Git（如果还没有）

#### Windows
1. 下载Git：[https://git-scm.com/download/win](https://git-scm.com/download/win)
2. 双击安装，一路默认即可
3. 打开 **Git Bash**（安装后会有这个程序）

#### Mac
```bash
# 打开终端（Terminal），输入：
git --version

# 如果没有安装，会自动提示安装Xcode Command Line Tools
# 或者使用Homebrew安装：
brew install git
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt-get install git

# CentOS/Fedora
sudo yum install git
```

### 3.2 配置Git（首次使用）

```bash
# 设置你的名字和邮箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 检查配置
git config --list
```

### 3.3 上传代码

#### 方法A：使用命令行（推荐）

```bash
# 1. 打开终端/Git Bash，进入项目目录
cd ~/Desktop/mystic-arts

# 2. 初始化Git仓库
git init

# 3. 添加所有文件
git add .

# 4. 创建第一次提交
git commit -m "Initial commit: Mystic Arts - Ancient Chinese Divination App"

# 5. 连接到GitHub仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/mystic-arts.git

# 6. 推送到GitHub
git branch -M main
git push -u origin main
```

**示例**：
```bash
# 如果你的GitHub用户名是 johnsmith
git remote add origin https://github.com/johnsmith/mystic-arts.git
git branch -M main
git push -u origin main
```

**首次推送会要求登录**：
- 输入你的GitHub用户名
- 输入密码（或Personal Access Token）

#### 方法B：使用GitHub Desktop（更简单）

1. **下载GitHub Desktop**
   - [https://desktop.github.com](https://desktop.github.com)
   - 安装并登录

2. **添加本地仓库**
   - 点击 `File` → `Add Local Repository`
   - 选择你的项目文件夹（`mystic-arts`）
   - 如果提示"This is not a Git repository"，点击 `Create a repository`

3. **发布到GitHub**
   - 点击 `Publish repository`
   - 确认名称：`mystic-arts`
   - 取消勾选 `Keep this code private`（如果想公开）
   - 点击 `Publish Repository`

---

## 步骤4：部署到Vercel（推荐）

GitHub只是存储代码，要让别人访问，需要部署到托管平台。

### 为什么选择Vercel？

✅ **完全免费**（个人项目）  
✅ **自动部署**（推送代码就自动更新）  
✅ **速度更快**（全球CDN）  
✅ **完美支持PWA**（解决iOS状态栏问题）  
✅ **自定义域名**（可绑定自己的域名）  
✅ **HTTPS**（自动SSL证书）

### 4.1 连接Vercel

1. **访问Vercel**
   - [https://vercel.com](https://vercel.com)
   - 点击 **Sign Up** 或 **Login**

2. **使用GitHub登录**
   - 点击 **"Continue with GitHub"**
   - 授权Vercel访问你的GitHub

3. **导入项目**
   - 点击 **"Add New..."** → **"Project"**
   - 找到 `mystic-arts` 仓库
   - 点击 **Import**

### 4.2 配置部署

```
Project Name: mystic-arts
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build  (自动检测)
Output Directory: dist  (自动检测)
Install Command: npm install  (自动检测)
```

**环境变量**（如果需要）：
- 暂时不需要设置
- 后续如果接入Supabase，在这里添加API密钥

点击 **Deploy**

### 4.3 等待部署完成

- 大约1-2分钟
- 完成后会显示 **"Congratulations!"**
- 你会得到一个网址，类似：
  ```
  https://mystic-arts.vercel.app
  ```

### 4.4 测试PWA

1. **用手机Safari访问**
   ```
   https://mystic-arts.vercel.app
   ```

2. **添加到主屏幕**
   - 点击分享按钮 📤
   - 选择"添加到主屏幕"

3. **检查状态栏**
   - 这次应该是深色的了！✅

---

## 步骤5：后续管理

### 5.1 更新代码

```bash
# 1. 修改代码后，添加到Git
git add .

# 2. 提交更改
git commit -m "描述你的更改，比如：修复iOS状态栏颜色"

# 3. 推送到GitHub
git push

# 4. Vercel会自动检测并重新部署（约30秒）
```

### 5.2 查看部署历史

1. 登录Vercel
2. 点击你的项目
3. 查看 **Deployments** 标签
4. 可以看到每次部署的记录
5. 可以回滚到之前的版本

### 5.3 自定义域名（可选）

1. **在Vercel项目中**
   - 点击 **Settings** → **Domains**
   - 输入你的域名，比如：`mysticarts.com`

2. **在域名注册商处**
   - 添加Vercel提供的DNS记录
   - 等待DNS生效（5分钟-24小时）

3. **自动HTTPS**
   - Vercel自动配置SSL证书
   - 你的网站会有小锁图标 🔒

---

## 📁 完整项目结构

如果Figma Make无法导出，这是完整的项目结构：

```
mystic-arts/
├── public/
│   ├── icons/           # PWA图标
│   ├── manifest.json    # PWA配置
│   └── sw.js           # Service Worker
├── src/
│   ├── app/
│   │   ├── components/  # 所有React组件
│   │   ├── pages/       # 所有页面
│   │   ├── context/     # Context（AuthContext等）
│   │   ├── utils/       # 工具函数
│   │   ├── routes.ts    # 路由配置
│   │   └── App.tsx      # 主应用
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── index.css
│   └── main.tsx         # 入口文件
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔐 GitHub Personal Access Token

如果推送时密码不工作，需要创建Token：

1. **GitHub设置**
   - 点击右上角头像 → **Settings**
   - 左侧菜单 → **Developer settings**
   - **Personal access tokens** → **Tokens (classic)**

2. **生成新Token**
   - 点击 **Generate new token (classic)**
   - Note: `Mystic Arts Deployment`
   - Expiration: `90 days` 或 `No expiration`
   - 勾选：`repo`（所有子选项）
   - 点击 **Generate token**

3. **复制Token**
   - **重要**：立即复制保存，离开页面后无法再看到
   - 格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

4. **使用Token**
   ```bash
   # 推送时，用Token替代密码
   Username: 你的GitHub用户名
   Password: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

## 🎯 快速命令参考

### 第一次上传
```bash
cd mystic-arts
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mystic-arts.git
git branch -M main
git push -u origin main
```

### 后续更新
```bash
git add .
git commit -m "描述你的更改"
git push
```

### 查看状态
```bash
git status              # 查看哪些文件被修改
git log                 # 查看提交历史
git remote -v           # 查看远程仓库地址
```

### 回退更改
```bash
git checkout -- <file>  # 撤销单个文件的修改
git reset --hard        # 撤销所有未提交的修改（危险！）
```

---

## 🆘 常见问题

### Q1: git push时要求密码，但密码不对？
**A**: GitHub已经不支持密码推送，需要使用Personal Access Token（见上面的说明）

### Q2: 出现"permission denied"错误？
**A**: 检查：
1. GitHub仓库地址是否正确
2. 是否有仓库的写权限
3. 尝试使用HTTPS而不是SSH

### Q3: Vercel部署失败？
**A**: 检查：
1. `package.json` 是否完整
2. 是否有 `vite.config.ts`
3. 查看Vercel的错误日志

### Q4: 如何让团队成员协作？
**A**: 
1. GitHub仓库设置 → **Collaborators**
2. 添加他们的GitHub用户名
3. 他们就可以推送代码了

### Q5: 不小心提交了敏感信息怎么办？
**A**: 
```bash
# 从历史记录中删除敏感文件
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <敏感文件>" \
  --prune-empty --tag-name-filter cat -- --all

# 强制推送
git push origin --force --all
```

---

## 📊 部署对比

| 平台 | 优点 | 缺点 | 价格 |
|------|------|------|------|
| **Vercel** ✅ | 速度快、自动部署、完美PWA | 需要GitHub | 免费 |
| **Netlify** | 类似Vercel | 配置稍复杂 | 免费 |
| **GitHub Pages** | 直接集成 | 不支持SSR、较慢 | 免费 |
| **Figma Make** | 简单 | 功能限制、iOS问题 | 免费 |

**推荐顺序**：
1. 🥇 Vercel（最佳选择）
2. 🥈 Netlify
3. 🥉 GitHub Pages

---

## 🎬 完整流程总结

### 第一次发布
```
1. 从Figma Make导出代码
2. 创建GitHub仓库
3. 推送代码到GitHub
4. 连接Vercel
5. 自动部署完成！
```

### 后续更新
```
1. 修改代码
2. git add . && git commit -m "update"
3. git push
4. Vercel自动重新部署（30秒）
```

### 时间预估
- GitHub注册 + 创建仓库：5分钟
- 安装Git + 配置：5分钟
- 推送代码：2分钟
- Vercel部署：2分钟
- **总计：约15分钟**

---

## 🎉 完成后你将拥有

✅ **GitHub仓库**
   - 代码完全在你控制下
   - 可以查看完整历史记录
   - 可以邀请其他人协作

✅ **Vercel部署**
   - 自动HTTPS
   - 全球CDN加速
   - 自动部署更新
   - 完美PWA支持

✅ **专业网址**
   - `https://mystic-arts.vercel.app`
   - 可绑定自己的域名
   - 可以分享给任何人

---

## 📞 需要帮助？

如果在操作过程中遇到问题，告诉我：
1. 在哪一步卡住了
2. 看到什么错误信息
3. 用的什么操作系统

我会帮你解决！🚀

---

**版本**: v1.0  
**更新日期**: 2026-03-30  
**状态**: ✅ 完整指南
