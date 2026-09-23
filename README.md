# 个人作品集 · Portfolio

基于原生 HTML、CSS、JavaScript 构建的静态个人作品集网站，用于展示个人介绍、技能方向与项目作品，并支持浅色 / 深色主题切换。

## 功能特性

- 杂志式排版：首屏 Hero、个人介绍、项目作品、关于我、联系方式等完整区块
- 项目作品网格：左文右图 / 上图下文 / 通栏大幅图三种布局变体
- 深浅色主题切换：导航栏一键切换，选择结果通过 `localStorage` 持久化，刷新后自动恢复
- 响应式布局：兼容桌面端与移动端，移动端支持汉堡菜单
- 滚动导航高亮、平滑滚动等交互动效

## 技术栈

- 原生 HTML5 / CSS3 / JavaScript（无前端框架、无第三方 UI 库）
- 字体：Noto Serif SC（思源宋体）、Space Grotesk
- 图片：按需动态生成并懒加载

## 目录结构

```
.
├── index.html       # 页面结构
├── css/
│   ├── base.css     # 变量 / reset / 通用样式
│   └── style.css    # 杂志式布局样式
├── js/
│   ├── projects.js  # 项目数据（PORTFOLIO_DATA）
│   └── main.js      # 渲染 / 导航交互 / 主题切换
└── .gitignore
```

## 如何运行

项目为纯静态网站，无需安装依赖。任选其一：

```bash
# 方式一：本地直接打开
# 在浏览器中打开 index.html

# 方式二：使用静态服务器
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 部署

本项目可部署到 GitHub Pages。将仓库推送到 GitHub 后，在仓库 Settings → Pages 中设置部署分支为 `main`、目录为根目录即可。