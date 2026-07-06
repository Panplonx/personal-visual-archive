# R05 修复日志

修复日期：2026-07-05

## 1. 修改前确认的问题

1. `assets/css/base.css` 使用 `body { overflow-x: hidden; }`，可能裁掉溢出内容并掩盖真实响应式问题。
2. `html { min-width: 320px; }` 会在极窄视口或 200% 缩放场景强制产生页面宽度下限。
3. 768—1023px 的 Index 同时保留固定 240px 预览栏和具有较大最小列宽的项目列表，存在挤压与横向溢出风险。
4. 若干长英文标题、FIELD NOTES、详情元数据和导航文字缺少统一的局部换行保护。
5. 四个分类页和十二个详情页把 ARCHIVE 父级入口标记为 `aria-current="page"`，语义上并非当前文件。

## 2. 创建的文件

- `review/r05/r05-responsive-a11y-check.md`
- `review/r05/r05-fix-log.md`

## 3. 修改的 CSS

- `assets/css/base.css`
  - 删除 320px 页面硬下限。
  - 删除全局横向裁切。
  - 为标题增加必要时的任意位置换行。
- `assets/css/components.css`
  - 当前导航样式支持所有合法 `aria-current` 值。
  - 为按钮、状态值、封面元数据、索引字段、详情元数据与详情导航增加局部收缩和换行保护。
- `assets/css/responsive.css`
  - 768—1023px 的 Index 改为单栏并隐藏增强预览。
  - 增加 319px 以下极窄屏保护。

## 4. 修改的 HTML

只修改了导航 ARIA 状态，没有改正文、图片、链接目标、结构或样式类。

- `collections/type.html`
- `collections/image.html`
- `collections/system.html`
- `collections/field-notes.html`
- `entries/a01-nonhuman-alphabet.html`
- `entries/a02-broken-caption.html`
- `entries/a03-unreadable-weather.html`
- `entries/a04-synthetic-fossils.html`
- `entries/a05-soft-hardware.html`
- `entries/a06-archive-of-accidents.html`
- `entries/a07-false-taxonomy.html`
- `entries/a08-signal-specimens.html`
- `entries/a09-interface-relics.html`
- `entries/a10-temporary-monument.html`
- `entries/a11-color-conflict-01.html`
- `entries/a12-unknown-rituals.html`

以上页面的 ARCHIVE 导航状态由 `aria-current="page"` 改为 `aria-current="location"`。

## 5. 未修改项目

- 未修改 `index.html`、`archive.html`、`index-page.html`、`about.html`、`contact.html`、`404.html`。
- 未修改任何 JavaScript；R04 交互逻辑保持不变。
- 未修改 `content/`、`docs/`、`assets/images/`、`assets/fonts/`、`assets/raw/`、`references/` 或 `wireframes/`。
- 未新增或删除网站页面。
- 未修改正式文案、项目名称、日期、状态、图片或字体。

## 6. 修复后验证

- 22 个 HTML 页面全部存在。
- 所有内部 HTML、CSS、JavaScript和图片路径可解析到真实文件。
- 22 个 title 与 22 个 description 均唯一。
- 每页一个 h1；未发现重复 ID。
- 60 个被引用图片均存在且可读取。
- 2 个字体路径均存在。
- Archive 的 12 张卡片仍直接存在于 HTML。
- 3 个 JavaScript 文件语法检查通过。
- 未发现绝对本地路径、`assets/raw/` 或 `references/` 正式页面引用。
- 未发现普通孤立页面。
- 未发现剩余的全局 `overflow-x: hidden` 或 320px 页面硬下限。

## 7. 尚需人工验证

- 374/375/376、767/768/769、1023/1024/1025 和 1440px 的实际视觉结果。
- 200% 浏览器缩放下的阅读与横向滚动。
- 全站 Tab / Shift+Tab 顺序、焦点轮廓与移动菜单 Escape 返回焦点。
- 实际禁用 JavaScript 后的浏览器显示。
- 真实手机或触控模拟下的按钮密度和非 hover 可用性。

这些项目未被标记为“已通过浏览器视觉测试”，因为本轮应用内浏览器无法访问本地测试页面。
