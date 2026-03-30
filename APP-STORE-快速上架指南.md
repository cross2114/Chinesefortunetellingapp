# 🚀 App Store 快速上架指南（中文版）

> **重要**：这是为你的 Mystic Arts 应用定制的上架流程

---

## 📋 第一步：理解 Bundle ID

### Bundle ID 是什么？

**Bundle ID** 就是你的应用在Apple生态系统中的**身份证号**。

### 格式说明
```
com.公司名.应用名
```

### 推荐的Bundle ID（选一个）

我为你推荐以下几个选项：

1. **`com.mysticarts.app`** ⭐⭐⭐⭐⭐（最推荐）
   - 简洁专业
   - 容易记忆
   
2. **`com.mysticarts.fortune`** ⭐⭐⭐⭐
   - 明确应用类型（fortune = 算命）
   
3. **`com.mysticarts.divination`** ⭐⭐⭐⭐
   - divination = 占卜

4. **`com.你的名字.mysticarts`** ⭐⭐⭐
   - 比如：`com.zhang.mysticarts`
   - 个人开发者常用

### ⚠️ 重要提示

- **一旦设置就永远不能改**（除非删除重新创建应用）
- **必须全球唯一**（不能和别人重复）
- **只能用小写字母、数字、点(.)、连字符(-)**
- **不能以数字开头**

---

## 🎨 第二步：应用图标

### ✅ 已完成！

我已经为你设计好了一个专业的应用图标：

**位置**：`/public/icons/app-icon-1024.svg`

**设计特点**：
- ✨ 敦煌壁画配色（赭石红、土黄、石青）
- ✨ 中心汉字"玄"（神秘、玄学）
- ✨ 太极阴阳图案
- ✨ 八卦八角形框架
- ✨ 神秘光晕和星点装饰

### 📐 如何生成所有尺寸

**最简单的方法**（5分钟搞定）：

1. **在浏览器打开图标**
   - 直接打开 `/public/icons/app-icon-1024.svg`
   
2. **截图保存为PNG**
   - Mac: `Cmd + Shift + 4` → 选择区域
   - 或右键 → "导出为PNG"
   - 保存为 `icon-1024.png`（确保是1024x1024）

3. **访问 [AppIcon.co](https://www.appicon.co/)**
   - 上传你的 `icon-1024.png`
   - 选择 "iPhone" 和 "iPad"
   - 点击 "Generate"
   - 下载zip文件

4. **解压使用**
   - 解压后得到 `AppIcon.appiconset` 文件夹
   - 包含所有尺寸的图标
   - 等会在Xcode中直接拖进去即可

📖 **详细说明**：查看 `/public/icons/ICON-GUIDE.md`

---

## 💻 第三步：安装Capacitor

### 前提条件

确认你有：
- ✅ Mac电脑（必须！）
- ✅ 已安装Node.js
- ✅ 已安装Xcode（从Mac App Store下载）

### 开始安装

在你的项目目录下运行：

```bash
# 1. 安装Capacitor核心包
npm install @capacitor/core @capacitor/cli

# 2. 安装iOS平台
npm install @capacitor/ios

# 3. 初始化Capacitor
npx cap init
```

**初始化时会问你几个问题**：

```
? App name: Mystic Arts
? App Package ID: com.mysticarts.app  (填你选的Bundle ID)
? Web asset directory: dist
```

### 配置Capacitor

初始化后会生成 `capacitor.config.ts` 文件，但我已经帮你准备好了更完善的配置。

运行这个命令复制配置：

```bash
# 复制示例配置
cp capacitor.config.example.ts capacitor.config.ts
```

然后编辑 `capacitor.config.ts`，**只需要改一行**：

```typescript
const config: CapacitorConfig = {
  appId: 'com.mysticarts.app', // 👈 改成你的Bundle ID
  appName: 'Mystic Arts',
  webDir: 'dist',
  // ... 其他配置我都帮你设置好了
};
```

---

## 🏗️ 第四步：构建iOS应用

### 1. 构建Web应用

```bash
npm run build
```

等待构建完成（大约30秒-1分钟）

### 2. 添加iOS平台

```bash
npx cap add ios
```

这会创建一个 `ios/` 文件夹，包含Xcode项目。

### 3. 同步代码到iOS

```bash
npx cap sync ios
```

### 4. 打开Xcode

```bash
npx cap open ios
```

Xcode会自动打开！

---

## ⚙️ 第五步：在Xcode中配置

Xcode打开后，按照以下步骤操作：

### 1. 选择Team（签名）

1. 左侧文件列表 → 点击最顶部的 **App**（蓝色图标）
2. 选择 **Signing & Capabilities** 标签
3. **Team** 下拉菜单 → 选择你的Apple Developer账号
   - 如果没有，点击 **Add Account...** 登录
   - 输入你的Apple ID和密码

### 2. 确认Bundle ID

在 **Signing & Capabilities** 页面：
- **Bundle Identifier** 应该显示：`com.mysticarts.app`
- 如果不对，手动修改

### 3. 设置图标

1. 左侧文件列表 → **App** → **Assets.xcassets** → **AppIcon**
2. 把之前生成的所有图标拖进对应的格子
   - 或者直接替换整个 `AppIcon.appiconset` 文件夹

### 4. 设置版本号

在 **General** 标签：
- **Version**: `1.0.0`
- **Build**: `1`

### 5. 设置部署目标

在 **General** 标签：
- **iOS Deployment Target**: 选择 `iOS 13.0` 或更高

---

## 📦 第六步：打包上传

### 1. 选择设备

Xcode顶部工具栏：
- 点击设备选择器（左边显示"iPhone 15 Pro"之类）
- 选择 **Any iOS Device (arm64)**

### 2. Archive（打包）

```
Xcode菜单栏 → Product → Archive
```

**等待5-15分钟**（首次会比较久）

构建完成后，会自动打开 **Organizer** 窗口。

### 3. 验证Archive

在Organizer窗口：
1. 确认看到你的Archive（版本1.0.0 (1)）
2. 点击 **Validate App**（验证）
3. 选择：**Automatically manage signing**
4. 点击 **Next** → **Validate**

等待验证完成（1-5分钟）

### 4. 上传到App Store Connect

验证通过后：
1. 点击 **Distribute App**
2. 选择：**App Store Connect**
3. 选择：**Upload**
4. 选择：**Automatically manage signing**
5. 确认所有信息 → **Upload**

**等待上传**（5-15分钟，取决于网速）

上传成功后，你会收到Apple的邮件确认！📧

---

## 🌐 第七步：App Store Connect配置

### 1. 访问App Store Connect

打开浏览器访问：[https://appstoreconnect.apple.com](https://appstoreconnect.apple.com)

登录你的Apple Developer账号

### 2. 创建新应用

1. 点击 **My Apps**
2. 点击左上角的 **+** → **New App**
3. 填写信息：
   ```
   Platforms: ☑️ iOS
   Name: Mystic Arts
   Primary Language: English (U.S.)
   Bundle ID: 选择 com.mysticarts.app
   SKU: mysticarts001  (随便填，唯一即可)
   User Access: Full Access
   ```
4. 点击 **Create**

### 3. 填写应用信息

#### App Information（应用信息）

点击左侧 **App Information**：

```
Subtitle（副标题，30字符以内）:
Ancient Chinese Divination

Privacy Policy URL:
https://你的域名.vercel.app/privacy

Category（类别）:
Primary: Lifestyle
Secondary: Entertainment
```

#### Pricing and Availability（定价）

点击左侧 **Pricing and Availability**：

```
Price: Free（免费下载）

Availability: 
☑️ Make this app available in all territories
```

### 4. 准备版本信息

点击 **1.0 Prepare for Submission**

#### 📸 截图（Screenshots）

你需要准备至少3张截图（建议5张），尺寸：
- **6.7" Display**: 1290 x 2796（iPhone 14 Pro Max）
- **6.5" Display**: 1242 x 2688（iPhone 11 Pro Max）  
- **5.5" Display**: 1242 x 2208（iPhone 8 Plus）

**如何截图**：

1. **在Xcode中运行模拟器**
   ```
   顶部选择：iPhone 15 Pro Max
   点击运行按钮（▶️）
   等待应用启动
   ```

2. **截取屏幕**
   ```
   模拟器菜单 → File → Save Screen
   或 Cmd + S
   ```

3. **截图内容建议**：
   - 首页（卡片轮播）
   - 生辰八字功能界面
   - 塔罗占卜界面
   - 每日运势界面
   - 订阅页面

4. **上传**
   - 在App Store Connect中
   - 拖拽截图到对应的设备尺寸区域
   - 至少每个尺寸3张

#### 📝 文字内容

**Promotional Text（促销文本，可选，170字符）**:
```
Discover your destiny through ancient Chinese wisdom. 
BaZi, I Ching, Tarot, and more. Start your journey today!
```

**Description（描述，4000字符以内）**:
```
Discover ancient Chinese divination wisdom through modern technology. 
Mystic Arts brings you authentic traditional fortune-telling methods 
including BaZi, I Ching, Tarot, Face Reading, and Daily Horoscopes.

✨ FEATURES

• BaZi (八字) - Four Pillars of Destiny Analysis
  Calculate your birth chart and discover your elemental nature

• I Ching (周易) - Book of Changes Divination
  Consult the ancient oracle with hexagram readings

• Tarot Reading - Multiple Spread Options
  Single card, three-card, and Celtic Cross spreads

• Face Reading (面相) - Traditional Physiognomy
  AI-powered analysis based on Chinese wisdom

• Daily Fortune - Personalized Guidance
  Lucky numbers, colors, and life forecasts

🎨 BEAUTIFUL DUNHUANG DESIGN

Experience the mystical aesthetics of ancient Dunhuang murals with:
- Rich ochre reds, stone blues, and earth yellows
- Elegant typography and smooth animations
- Immersive dark theme design
- 3D visual effects

💎 PREMIUM FEATURES

Try free for 7 days, then $1/month:
- Unlimited readings and consultations
- Detailed interpretation reports
- Reading history and favorites
- Priority support

📱 PERFECT FOR

- Eastern philosophy enthusiasts
- Tarot and divination lovers
- Those seeking cultural exploration
- Anyone interested in self-discovery

⚠️ ENTERTAINMENT PURPOSES ONLY

All divination services are for entertainment and cultural 
exploration. Not a substitute for professional advice.

問天知命 · 道法自然
```

**Keywords（关键词，100字符，逗号分隔）**:
```
fortune,tarot,iching,bazi,astrology,divination,horoscope,chinese
```

**Support URL（支持网址）**:
```
https://你的域名.vercel.app
```

**What's New in This Version（版本更新说明）**:
```
🎉 Initial Release - Welcome to Mystic Arts!

✨ NEW FEATURES
• BaZi (Four Pillars) destiny calculation
• I Ching divination with hexagram readings
• Tarot card spreads with detailed interpretations
• Face reading analysis
• Daily fortune and guidance
• Beautiful Dunhuang-inspired design
• 7-day free trial + $1/month subscription

🎨 DESIGN HIGHLIGHTS
• Immersive dark theme
• 3D card animations
• Smooth transitions
• Responsive on all devices

Your journey into ancient wisdom begins here!
Thank you for downloading Mystic Arts 🙏
```

### 5. 选择构建版本

在 **Build** 部分：
- 点击 **+** 或 **Select a build before you submit your app**
- 等待5-30分钟，你上传的版本会出现
- 选择版本 **1.0.0 (1)**

### 6. App Privacy（隐私问卷）

点击 **Edit** 回答数据收集问题：

**主要问题**：
```
Do you collect data from this app?
→ Yes

Data Types Collected:
☑️ Contact Info → Email Address
☑️ Identifiers → User ID  
☑️ Usage Data → Product Interaction
☑️ Other Data → Other User Content (生辰八字等)

How do you use this data?
☑️ App Functionality
☑️ Analytics
☑️ Personalization

Do you share data with third parties?
→ No (如果不分享的话)

Is the data linked to the user?
→ Yes

Do you provide a way to delete data?
→ Yes (在应用内或通过支持邮箱)
```

### 7. 年龄分级

点击 **Edit** 回答内容问卷：

大部分选 **No**：
- Gambling: No
- Contests: No
- Violence: No
- Horror: No
- Sexual Content: No
- Profanity: No
- Medical Info: No

**预期分级**：**4+** 或 **12+**

### 8. App Review Information（审核信息）

填写联系信息：
```
First Name: [你的名字]
Last Name: [你的姓氏]
Phone: [你的电话]
Email: support@mysticarts.app (或你的邮箱)
```

**如果应用需要登录**，提供测试账号：
```
☑️ Sign-in required

Username: demo@mysticarts.app
Password: Demo123456

Notes:
This is a premium account for testing all features.
All divination services are for entertainment purposes only.
```

### 9. 最后提交

检查所有信息：
- ✅ 截图已上传
- ✅ 描述完整
- ✅ 关键词填写
- ✅ 构建版本已选择
- ✅ 隐私问卷完成
- ✅ 年龄分级完成

点击右上角 **Submit for Review**（提交审核）

确认 **Export Compliance**：
```
Is your app designed to use cryptography or does it contain or 
incorporate cryptography?
→ No (如果只用HTTPS的话)
```

点击 **Submit**

---

## ⏰ 第八步：等待审核

### 审核流程

1. **Waiting for Review**（等待审核）
   - 时间：1-3天
   - 状态：排队中

2. **In Review**（审核中）
   - 时间：2-24小时
   - 状态：苹果审核团队正在测试

3. **Pending Developer Release**（等待发布）
   - 审核通过！
   - 你可以选择立即发布或稍后发布

4. **Ready for Sale**（已上架）
   - 在App Store可以搜索到
   - 用户可以下载了！🎉

### 如果被拒绝

收到拒绝邮件后：

1. **仔细阅读拒绝原因**
2. **修复问题**
3. **如需修改代码**：
   ```bash
   # 修改代码
   npm run build
   npx cap sync ios
   npx cap open ios
   
   # 增加Build号（1.0.0 (1) → 1.0.0 (2)）
   # 在Xcode中：General → Build改为2
   
   # 重新Archive和上传
   ```
4. **重新提交审核**

---

## ✅ 完整清单

### 准备阶段
- [ ] 有Mac电脑
- [ ] 已注册Apple Developer账号（$99/年）
- [ ] 已安装Xcode
- [ ] 已决定Bundle ID
- [ ] 已生成应用图标（所有尺寸）
- [ ] 已准备截图（至少3张/尺寸）

### 技术配置
- [ ] 安装Capacitor
- [ ] 配置`capacitor.config.ts`
- [ ] 构建Web应用（`npm run build`）
- [ ] 添加iOS平台（`npx cap add ios`）
- [ ] 同步代码（`npx cap sync ios`）

### Xcode配置
- [ ] 设置Team（签名）
- [ ] 确认Bundle ID
- [ ] 添加应用图标
- [ ] 设置版本号（1.0.0 / 1）
- [ ] Validate App（验证）
- [ ] Archive并上传

### App Store Connect
- [ ] 创建新应用
- [ ] 填写应用信息
- [ ] 上传截图
- [ ] 填写描述和关键词
- [ ] 选择构建版本
- [ ] 完成隐私问卷
- [ ] 完成年龄分级
- [ ] 填写审核信息
- [ ] 提交审核

---

## 🎉 预计时间表

| 任务 | 时间 |
|------|------|
| 准备资料（图标、截图） | 2-4小时 |
| 安装配置Capacitor | 30分钟 |
| Xcode配置和打包 | 1-2小时 |
| App Store Connect填写 | 1-2小时 |
| **等待审核** | **2-5天** |
| **总计** | **约1周** |

---

## 🆘 遇到问题？

### 常见错误

**❌ "No signing certificate found"**
→ 在Xcode中添加你的Apple Developer账号

**❌ "Build failed"**
→ `Product` → `Clean Build Folder`，然后重试

**❌ "Archive灰色不可点击"**
→ 确保选择了 "Any iOS Device (arm64)"

**❌ "构建版本不出现"**
→ 等待10-30分钟，刷新页面

### 需要帮助

如果遇到任何问题，告诉我：
1. 你在哪一步
2. 具体的错误信息
3. 截图（如果有）

我会立即帮你解决！💪

---

## 🎯 下一步

**告诉我**：

1. **你选择的Bundle ID是什么？**
   - 比如：`com.mysticarts.app`

2. **你现在有Mac电脑吗？**
   - 有 → 我们开始配置
   - 没有 → 讨论替代方案

3. **你已经注册Apple Developer账号了吗？**
   - 是 → 太好了
   - 否 → 现在去注册

**回答这些问题后，我会：**
1. ✅ 为你创建正式的`capacitor.config.ts`
2. ✅ 更新`package.json`添加快捷脚本
3. ✅ 提供逐步的命令指令
4. ✅ 解答所有疑问

**准备好开始了吗？** 🚀
