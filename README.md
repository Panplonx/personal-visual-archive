# PERSONAL VISUAL ARCHIVE

## 个人视觉实验档案

### 1. 项目简介

PERSONAL VISUAL ARCHIVE 是一个大学网页设计课程项目，收录十二项原创视觉实验，并按照 TYPE、IMAGE、SYSTEM 和 FIELD NOTES 四个分类组织。

网站以多页面档案的形式呈现项目，不是商业项目，也不是传统求职作品集。

### 2. 如何打开网站

1. 解压整个 `personal-visual-archive` 项目文件夹。
2. 保持文件与目录结构不变。
3. 找到根目录中的 `index.html`。
4. 使用 Chrome、Edge 或 Firefox 打开。
5. 网站核心内容不需要 npm、Node.js、数据库或构建工具。
6. 浏览器测试需要时可以使用简单本地静态服务器，但服务器不是网站的核心依赖。

### 3. 网站结构

- 首页：`index.html`
- Archive：`archive.html`
- 分类页：`collections/` 中的四个页面
- 详情页：`entries/` 中的十二个页面
- Index：`index-page.html`
- About：`about.html`
- Contact：`contact.html`
- 404：`404.html`

真实三级浏览路径：

```text
首页 → Archive → 分类 → 详情
```

Archive 和 Index 也可以直接进入各个详情页。

### 4. 主要功能

- ALL / TYPE / IMAGE / SYSTEM / FIELD NOTES 分类筛选
- GRID / LIST 视图切换
- INDEX / MIX 排序
- 移动端菜单
- Index 封面预览
- 详情页上一篇与下一篇导航
- 响应式布局
- 清晰的键盘焦点状态
- JavaScript 失效时核心文字、图片和链接仍可访问

### 5. 技术

项目使用：

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS 自定义属性
- CSS 媒体查询
- 原生 JavaScript
- 本地 WOFF2 字体
- 本地图片

项目不使用 React、Vue、Bootstrap、Tailwind、npm、Node.js、构建工具或外部 CDN。

### 6. 目录说明

```text
personal-visual-archive/
├── assets/       CSS、JavaScript、本地字体与正式图片
├── collections/  四个分类页面
├── content/      项目内容源与 Archive manifest
├── docs/         课程要求、站点地图与设计规范
├── entries/      A01—A12 详情页面
├── references/   本地参考截图
├── review/       各轮检查与验收记录
├── wireframes/   规划中的线框资料目录；当前项目副本中未发现
└── *.html        首页、Archive、Index、About、Contact 与 404
```

如果最终提交规范仍要求保留 `wireframes/`，应从原始项目资料恢复该目录，不应使用空白或虚构文件代替。

### 7. 响应式测试

项目按以下宽度和场景进行了人工检查：

- 375px
- 768px
- 1024px
- 1440px
- 200% 浏览器缩放

人工检查范围包括键盘 Tab、移动菜单、Archive 交互、Index 预览、JavaScript 禁用状态和浏览器控制台。

浏览器视觉与交互测试由用户人工完成。

### 8. 字体

- 标题字体：`ibm-plex-sans-condensed-bold-latin1.woff2`
- 元数据等宽字体：`ibm-plex-mono-regular-latin1.woff2`
- 中文正文：使用系统字体回退
- 字体许可证：`assets/fonts/LICENSE-IBM-PLEX.txt`

字体均保存在 `assets/fonts/`，不依赖在线字体服务。

### 9. 参考说明

- Guajiro Bampo 只用于模块化构成、粗边框、超大标题和视觉节奏参考。
- Tristan Bagot 只用于项目列表、元数据组织和档案秩序参考。
- 本项目未复制参考网站的图片、文字、代码或完整布局。
- GRID、LIST、INDEX、MIX 和分类筛选属于本项目自行规划的功能。

### 10. 404 说明

根目录包含可独立打开的 `404.html`。本地直接打开文件时，错误地址不会自动映射到该页面；自动 404 行为取决于最终托管平台配置。

404 页面自身可以正常打开，并提供返回首页和 Archive 的链接。

### 11. 已知限制

- 本地 `file://` 环境无法配置自动 404 路由。
- Index 动态预览和 Archive 动态筛选需要 JavaScript。
- JavaScript 关闭后核心内容仍然可读，但增强交互不可用。
- 当前项目副本未发现 `wireframes/`；如果提交规范要求该资料目录，需要由用户从原始资料恢复。

### 12. 项目信息

- 项目名称：PERSONAL VISUAL ARCHIVE｜个人视觉实验档案
- 项目类型：大学网页设计课程项目
- 制作年份：2026
- 技术形式：HTML5、CSS3、原生 JavaScript 静态多页面网站
