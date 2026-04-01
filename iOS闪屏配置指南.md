# 🎨 iOS 闪屏配置指南

## 问题
原生iOS闪屏（LaunchScreen）盖住了自定义React闪屏，导致看不到我们设计的敦煌风格动画。

---

## ✅ 解决方案：在Xcode中配置LaunchScreen

### **步骤1：打开LaunchScreen.storyboard**

1. 在Xcode左侧导航栏找到：
   ```
   App (蓝色图标)
     ↓
   App (文件夹)
     ↓
   Base.lproj
     ↓
   LaunchScreen.storyboard
   ```

2. **点击打开** LaunchScreen.storyboard

---

### **步骤2：设置深色背景**

1. **选中View Controller**（点击界面中的空白区域）

2. **在右侧属性面板**找到 `Background` 属性

3. **设置背景色为深棕色：**
   - 点击颜色选择器
   - 选择 `Custom`
   - 输入 Hex 值：`#0F0A08`
   - 或者使用RGB：
     - R: 15
     - G: 10
     - B: 8

---

### **步骤3：添加简单的Logo（可选）**

如果你想在原生闪屏显示一个简单的Logo：

1. **拖入Image View：**
   - 从右下角 Object Library 拖入 `Image View`
   - 放置在屏幕中央

2. **设置约束（Auto Layout）：**
   - 选中Image View
   - 点击底部的 `Add New Constraints` 按钮
   - 勾选 `Width` 和 `Height`，设为 `120`
   - 点击 `Align` 按钮
   - 勾选 `Horizontally in Container` 和 `Vertically in Container`
   - 点击 `Add Constraints`

3. **设置图片：**
   - 在右侧 Attributes Inspector
   - Content Mode: `Aspect Fit`
   - Tint Color: 设为金色 `#D4A76A`

---

### **步骤4：最简化方案（推荐）**

**只保留深色背景，不添加任何元素：**

1. 删除LaunchScreen.storyboard中的所有UI元素
2. 只保留深色背景 `#0F0A08`
3. 这样原生闪屏会立即消失，显示我们的React闪屏

---

### **步骤5：确认配置**

在 `Info.plist` 中确认：

```xml
<key>UILaunchStoryboardName</key>
<string>LaunchScreen</string>
```

这个应该已经存在，不需要修改。

---

## 🚀 测试步骤

### **方法1：完全删除原生闪屏内容（最快）**

1. **打开 LaunchScreen.storyboard**
2. **删除所有子视图**（保留View Controller）
3. **设置背景色为 `#0F0A08`**
4. **Clean Build Folder**（Cmd + Shift + K）
5. **删除APP**（长按图标 → 删除APP）
6. **重新运行**（Cmd + R）

### **方法2：完全禁用原生闪屏（最彻底）**

如果上面的方法还是不行，在Xcode中：

1. **选择项目根节点** `App`（蓝色图标）
2. **选择 `App` Target**
3. **点击 `Info` 标签页**
4. **找到 `Launch Screen`**
5. **删除 `UILaunchStoryboardName` 条目**

⚠️ **注意：** 这样可能会导致APP审核被拒，因为Apple要求有启动页。所以推荐方法1。

---

## 📸 预期效果

完成配置后，APP启动流程应该是：

```
1. 原生深色闪屏（0.1秒）← 几乎看不到
   ↓
2. React自定义闪屏（3秒）← 显示敦煌风格动画
   ↓  
3. 进入主页面
```

---

## 🎯 自定义闪屏的动画包括：

✨ **旋转太极图标** - 阴阳鱼持续旋转  
✨ **八卦光束** - 8条光束从中心射出  
✨ **六边形和八边形容器** - 反向旋转  
✨ **顶部和底部装饰线** - 从中心展开  
✨ **四角装饰** - 逐个淡入  
✨ **品牌名称和中文** - 淡入动画  
✨ **加载指示器** - 三个点循环闪烁  

---

## 🔧 如果还是看不到动画

### **在Xcode控制台检查：**

1. 运行APP
2. 查看Console输出
3. 看是否有JavaScript错误

### **添加调试日志：**

在 `/src/app/App.tsx` 的 `useEffect` 中添加：

```typescript
console.log('App mounted, showing splash:', showSplash);
console.log('Is native platform:', Capacitor.isNativePlatform());
```

---

## 📝 完成清单

- [ ] 打开 LaunchScreen.storyboard
- [ ] 设置背景色为 `#0F0A08`
- [ ] 删除所有不必要的UI元素
- [ ] Clean Build Folder
- [ ] 删除设备上的旧APP
- [ ] 重新运行并测试

---

**现在去Xcode配置LaunchScreen，然后重新运行！** 🎨✨
