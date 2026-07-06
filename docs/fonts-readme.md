# PERSONAL VISUAL ARCHIVE
# 本地字体文件与使用说明

## 1. 文件用途

本文件记录网站当前实际存在并由 CSS 使用的本地字体文件、许可证和字体回退规则。

网站不使用 Google Fonts、外部 CDN 或其他在线字体服务。核心文字在断网状态下仍可显示。

---

## 2. 字体文件目录

字体与许可证统一保存在：

```text
assets/fonts/
```

当前实际存在的文件：

```text
assets/fonts/ibm-plex-sans-condensed-bold-latin1.woff2
assets/fonts/ibm-plex-mono-regular-latin1.woff2
assets/fonts/LICENSE-IBM-PLEX.txt
```

---

## 3. 字体与用途对照表

| 文件名 | CSS `font-family` 名称 | 字重 | 用途 |
|---|---|---:|---|
| `ibm-plex-sans-condensed-bold-latin1.woff2` | `"IBM Plex Sans Condensed"` | 700 / Bold | 首页超大标题、页面主标题、分类标题、项目英文标题、大型编号 |
| `ibm-plex-mono-regular-latin1.woff2` | `"IBM Plex Mono"` | 400 / Regular | 项目编号、状态、分类标签、Archive 工具按钮、网站状态信息、页脚小字 |
| `LICENSE-IBM-PLEX.txt` | 不适用 | 不适用 | IBM Plex 字体许可证 |

---

## 4. 实际 `@font-face` 路径

`@font-face` 当前定义在：

```text
assets/css/tokens.css
```

因为 `tokens.css` 位于 `assets/css/`，其中使用的相对路径为：

```css
url("../fonts/ibm-plex-sans-condensed-bold-latin1.woff2")
url("../fonts/ibm-plex-mono-regular-latin1.woff2")
```

从项目根目录理解，对应文件为：

```text
assets/fonts/ibm-plex-sans-condensed-bold-latin1.woff2
assets/fonts/ibm-plex-mono-regular-latin1.woff2
```

---

## 5. 标题字体

CSS 字体名称：

```css
"IBM Plex Sans Condensed"
```

实际字重：

```text
700 / Bold
```

实际字体栈：

```css
font-family:
  "IBM Plex Sans Condensed",
  "Arial Black",
  "Microsoft YaHei",
  "PingFang SC",
  Arial,
  sans-serif;
```

用途：

- 首页超大英文标题
- 页面主标题
- 分类标题
- 项目英文标题
- 大型数字和编号

---

## 6. 元数据字体

CSS 字体名称：

```css
"IBM Plex Mono"
```

实际字重：

```text
400 / Regular
```

实际字体栈：

```css
font-family:
  "IBM Plex Mono",
  Consolas,
  "Courier New",
  monospace;
```

用途：

- 项目编号
- 分类和状态标签
- Archive 筛选、视图和排序按钮
- 网站状态信息
- 页脚小字

---

## 7. 中文正文与系统字体回退

两个本地 WOFF2 文件均为 Latin1 文件。中文正文不依赖它们提供中文字形，而使用操作系统字体回退。

当前 CSS 的中文正文回退栈为：

```css
font-family:
  Arial,
  "Microsoft YaHei",
  "PingFang SC",
  sans-serif;
```

不同系统会自动选择可用字体：

- Windows 通常使用 `"Microsoft YaHei"`；
- macOS、iPhone 和 iPad 通常使用 `"PingFang SC"`；
- 其他系统使用可用的无衬线系统字体。

标题中的中文字符也会从标题字体栈继续回退到 `"Microsoft YaHei"`、`"PingFang SC"`、Arial 或系统无衬线字体。

---

## 8. 网络与本地运行规则

- 不使用 Google Fonts。
- 不使用外部 CDN。
- 不通过 JavaScript 下载字体。
- 不要求联网才能显示核心文字。
- 不得把字体路径改为绝对本地路径。
- 不得重命名字体文件，除非同步更新 CSS 和本文件。
- 字体加载失败时，系统字体回退必须继续保证文字可读。

---

## 9. 最终检查清单

- [ ] `assets/fonts/` 目录存在。
- [ ] 两个 WOFF2 文件名与本文件一致。
- [ ] `LICENSE-IBM-PLEX.txt` 存在。
- [ ] `tokens.css` 中两个 `@font-face` 路径有效。
- [ ] 标题使用 `"IBM Plex Sans Condensed"`，字重为 700。
- [ ] 元数据使用 `"IBM Plex Mono"`，字重为 400。
- [ ] 中文正文使用系统字体回退。
- [ ] 页面未引用 Google Fonts、外部 CDN 或在线字体。
- [ ] 直接打开本地 HTML 时，文字仍然可读。
