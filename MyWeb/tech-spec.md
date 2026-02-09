# 何雨飞个人作品集 - 技术规范文档

---

## 1. 组件清单

### shadcn/ui 组件
| 组件 | 用途 |
|------|------|
| Button | 导航按钮、查看详情按钮 |
| Card | 教育经历卡片、项目/实习卡片 |
| Badge | 技能标签 |
| Separator | 分隔线 |

### 自定义组件
| 组件 | 用途 | 位置 |
|------|------|------|
| WatermarkBackground | 动态水印背景 | components/WatermarkBackground.tsx |
| Timeline | 时间轴容器 | components/Timeline.tsx |
| TimelineItem | 时间轴项目节点 | components/TimelineItem.tsx |
| ProjectCard | 项目经历卡片 | components/ProjectCard.tsx |
| InternshipCard | 实习经历卡片 | components/InternshipCard.tsx |
| EducationCard | 教育经历卡片 | components/EducationCard.tsx |
| ContactBar | 底部联系栏 | components/ContactBar.tsx |
| AnimatedSection | 滚动动画包装器 | components/AnimatedSection.tsx |
| StaggerContainer | 序列动画容器 | components/StaggerContainer.tsx |

---

## 2. 动画实现方案

### 动画库选择
- **Framer Motion**: 主要动画库，用于组件动画、页面过渡、手势交互
- **CSS Animations**: 简单悬停效果、背景动画

### 动画实现表

| 动画 | 库 | 实现方式 | 复杂度 |
|------|-----|----------|--------|
| 页面加载序列动画 | Framer Motion | staggerChildren + variants | 高 |
| 水印文字浮动 | CSS | @keyframes float | 低 |
| 滚动触发显示 | Framer Motion | whileInView + viewport | 中 |
| 时间轴延伸 | Framer Motion | height animation + whileInView | 中 |
| 卡片滑入 | Framer Motion | x/opacity animation + stagger | 中 |
| 卡片悬停上浮 | Framer Motion | whileHover + translateY | 低 |
| 按钮悬停效果 | CSS/Framer | hover state + translateX arrow | 低 |
| 技能标签悬停 | CSS | hover scale + bg color | 低 |
| 联系图标悬停 | CSS | hover color + scale | 低 |
| 页面切换过渡 | Framer Motion | AnimatePresence + motion.div | 中 |

### 关键动画参数

**入场动画 (Stagger):**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}
```

**滚动触发动画:**
```typescript
const scrollVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}
// viewport: { once: true, amount: 0.2 }
```

**悬停动画:**
```typescript
whileHover={{
  y: -4,
  transition: { duration: 0.3 }
}}
```

---

## 3. 项目文件结构

```
app/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui 组件
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── WatermarkBackground.tsx
│   │   ├── Timeline.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── InternshipCard.tsx
│   │   ├── EducationCard.tsx
│   │   ├── ContactBar.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── StaggerContainer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx        # 封面页
│   │   ├── ProjectsSection.tsx    # 项目经历
│   │   └── InternshipsSection.tsx # 实习经历
│   ├── pages/
│   │   ├── HomePage.tsx           # 首页（封面）
│   │   ├── ProjectsPage.tsx       # 项目经历页
│   │   └── InternshipsPage.tsx    # 实习经历页
│   ├── data/
│   │   ├── projects.ts            # 项目数据
│   │   └── internships.ts         # 实习数据
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       └── avatar.jpg             # 头像照片
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 4. 依赖清单

### 核心依赖 (项目初始化自带)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/react-*

### 额外安装
```bash
# 动画库
npm install framer-motion

# 图标库
npm install lucide-react

# 路由
npm install react-router-dom
```

---

## 5. 样式配置

### Tailwind 扩展配置
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
          light: '#a78bfa',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}
```

### CSS 变量
```css
:root {
  --primary-purple: #7c3aed;
  --primary-dark: #6d28d9;
  --primary-light: #a78bfa;
  --lavender-50: #f5f3ff;
  --lavender-100: #ede9fe;
  --lavender-200: #ddd6fe;
}
```

---

## 6. 路由配置

```typescript
// App.tsx 路由结构
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/internships" element={<InternshipsPage />} />
  </Routes>
</BrowserRouter>
```

---

## 7. 性能优化

### 动画性能
- 使用 `transform` 和 `opacity` 进行动画 (GPU 加速)
- 添加 `will-change: transform` 到频繁动画元素
- 使用 `viewport={{ once: true }}` 避免重复触发

### 图片优化
- 头像使用适当尺寸 (400x400px)
- 使用 WebP 格式 (如需要)
- 懒加载非首屏图片

### 代码分割
- 页面组件按需加载
- 动画库 tree-shaking

---

## 8. 无障碍考虑

- 所有交互元素可通过键盘访问
- 图片添加 alt 属性
- 颜色对比度符合 WCAG 标准
- 减少动画偏好支持 (prefers-reduced-motion)
