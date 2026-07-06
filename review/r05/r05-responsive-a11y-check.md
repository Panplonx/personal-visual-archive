# R05 响应式、无障碍与跨页面检查

检查日期：2026-07-05  
检查范围：项目现有 22 个 HTML 页面、7 个 CSS 文件、3 个 JavaScript 文件。

## 1. 检查方法与边界

- 已完整读取项目规则、课程要求、站点地图、设计系统、字体说明，以及 R02—R04 检查记录。
- 已对 22 个页面执行静态结构、资源路径、链接图、标题、描述、标题层级入口、图片替代文本和重复 ID 检查。
- 已检查响应式媒体查询、网格最小宽度、长文本换行、图片比例规则、焦点样式和 reduced-motion 规则。
- 已使用本地运行时对 3 个 JavaScript 文件执行语法检查。
- 尝试使用应用内浏览器检查本地页面；浏览器没有可接管的现有标签页，`file://` 被浏览器安全策略阻止，临时本地静态服务也无法从该浏览器环境访问。因此本文件不声称完成了肉眼视觉测试、200% 缩放实测或完整键盘遍历。

## 2. 页面清单

| 页面组 | 数量 | 静态检查 |
| --- | ---: | --- |
| 根目录页面：首页、Archive、Index、About、Contact、404 | 6 | 通过 |
| 分类页：TYPE、IMAGE、SYSTEM、FIELD NOTES | 4 | 通过 |
| 详情页：A01—A12 | 12 | 通过 |
| 合计 | 22 | 通过 |

未发现孤立页面。除作为独立错误页面保留的 `404.html` 外，其余 21 个页面均有站内入口；首页作为入口页不要求入链。

## 3. 响应式检查矩阵

| 宽度或场景 | 代码检查结果 | 仍需人工确认 |
| --- | --- | --- |
| 374 / 375 / 376px | 手机断点一致；单列内容、可换行工具组、折叠菜单规则存在 | 实际文字换行、触控密度、无横向滚动 |
| 767 / 768 / 769px | 767px 使用手机布局；768px 起使用平板布局 | 断点跳变是否自然 |
| 1023 / 1024 / 1025px | Index 在 1023px 前取消预览双栏；1024px 起恢复预览 | 1024px 预览区与长标题的实际间距 |
| 1440px | 使用桌面多列与最大内容宽度 | 大屏留白与图片裁切观感 |
| 200% 缩放 | 已移除 320px 页面硬下限，并为长标题、元数据、按钮和导航增加局部换行 | 浏览器实际缩放后的阅读顺序与横向滚动 |

## 4. 横向溢出

- 已删除 `html` 的 `min-width: 320px`，避免窄视口或高倍率缩放被强制撑宽。
- 已删除 `body` 的 `overflow-x: hidden`，避免用全局裁切掩盖真实布局问题。
- 已为标题、状态值、按钮、封面元数据、索引字段、详情元数据和详情导航增加局部换行或 `min-width: 0`。
- 768—1023px 的 Index 改为单栏，隐藏增强预览区，避免列表最小列宽与 240px 预览栏相互挤压。
- 319px 以下增加极窄屏保护：Archive 列表和详情导航改为单列，404 数字标题缩小。

静态检查未发现剩余的 `overflow-x: hidden` 或 `min-width: 320px` 掩盖规则。实际滚动宽度仍需人工浏览器确认。

## 5. 图片与字体

- HTML 共引用 60 个唯一图片文件：12 张正式封面和 48 张详情图。
- 60 个图片文件均存在并可由图像解码器读取。
- 所有 `<img>` 均有 `alt` 属性；Index 中重复的装饰性缩略图和增强预览使用空 `alt`。
- 封面使用 `object-fit: cover`；详情图使用 `width: 100%` 和 `height: auto`。
- 两个 WOFF2 路径均存在：
  - `assets/fonts/ibm-plex-sans-condensed-bold-latin1.woff2`
  - `assets/fonts/ibm-plex-mono-regular-latin1.woff2`
- 字体使用 `font-display: swap`，中文正文保留系统字体回退。

## 6. 无障碍与语义检查

- 22 页均有 `lang="zh-CN"`、UTF-8、viewport、唯一 `<title>`、唯一 meta description 和一个 `<h1>`。
- 22 页均有跳至 `#main-content` 的跳过链接。
- 22 页均包含 header、nav、main、section 和 footer 语义结构。
- 未发现重复 ID。
- 链接和按钮类型正确；Archive 控件使用真实 button。
- 全局 `:focus-visible` 提供 3px 清晰焦点轮廓。
- 移动菜单按钮由 JavaScript 创建，具有 `aria-controls` 与 `aria-expanded`，Escape 可关闭并返回焦点。
- Archive 当前筛选和视图状态同时使用 `aria-pressed`、边框和文字状态，不只依赖颜色。
- 分类页和详情页的 ARCHIVE 导航状态由错误的 `aria-current="page"` 改为 `aria-current="location"`；真正对应当前页面的主导航项继续使用 `page`。
- `prefers-reduced-motion` 会取消平滑滚动、动画持续时间和悬停位移。

完整 Tab 顺序、焦点可见性和屏幕阅读器朗读仍需人工确认。

## 7. JavaScript 失效状态

- 主要导航在原始 HTML 中存在；只有 `.js` 类存在时才显示移动菜单按钮并折叠导航。
- Archive 的 12 张卡片直接写在 HTML 中，禁用 JavaScript 后仍全部显示并可点击。
- Index 的 12 个链接和缩略图直接写在 HTML 中；增强预览不是核心内容。
- 首页、分类页、详情页、About、Contact 和 404 的核心文字与链接不依赖 JavaScript。
- 未发现通过 `fetch()` 加载核心内容的代码。

## 8. 链接与路径

- 所有 HTML 引用的 CSS、JavaScript、图片和站内 HTML 目标均存在。
- 未发现 `C:\`、`file:///`、根路径或其他绝对本地路径。
- 未发现正式页面引用 `assets/raw/` 或 `references/`。
- 未发现空 `href`、`javascript:` 链接或伪造完成页面。
- 站内页面图检查未发现普通页面孤立。

## 9. 404 状态

- `404.html` 是可直接打开的独立静态页面。
- 页面具有唯一 title、description、h1、跳过链接、主导航和返回首页/Archive 的有效链接。
- 静态网站不会自动把不存在的地址路由到该文件；页面正文已明确说明这一限制。

## 10. 自动检查结果摘要

- HTML 页面：22 / 22
- 唯一 title：22 / 22
- 唯一 description：22 / 22
- 单一 h1：22 / 22
- 重复 ID：0
- 断开的 HTML/CSS/JS/图片路径：0
- 孤立普通页面：0
- Archive 卡片：12
- 分类页卡片总数：12
- 图片读取失败：0 / 60
- 字体路径缺失：0 / 2
- JavaScript 语法错误：0 / 3

## 11. 人工检查清单

请优先按以下顺序检查：

1. `index.html`：375、768、1024、1440px，以及 200% 缩放。
2. `archive.html`：手机单列、桌面多列、GRID/LIST、筛选、INDEX/MIX 和键盘焦点。
3. `index-page.html`：767/768 与 1023/1024 断点；1024px 起预览不遮挡列表。
4. `entries/a01-nonhuman-alphabet.html`：详情页代表样本、长元数据和四项底部导航。
5. `entries/a12-unknown-rituals.html`：FIELD NOTES 长分类文字与 A12→A01 循环链接。
6. `collections/field-notes.html`：最长分类名称在手机端的换行。
7. `404.html`：窄屏标题、返回链接和独立静态页说明。
8. 用 Tab / Shift+Tab 遍历上述页面；在移动宽度测试 MENU、Escape 和焦点返回。
9. 禁用 JavaScript 后重新打开首页、Archive 和 Index，确认核心内容仍在。

当前未发现未解决的高优先级代码问题；未完成项均属于必须由用户浏览器实际观察的视觉与辅助技术验证。
