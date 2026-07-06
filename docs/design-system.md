# 全站视觉母版

视觉母版文件：

`docs/visual-master.png`

## 母版用途

该图片用于统一以下内容：

- 基础黑色和暖白色
- TYPE、IMAGE、SYSTEM、FIELD NOTES 四类颜色
- 几何符号
- 黑色粗边框
- 材料样本
- 网格和刻度
- 档案图形
- 建筑与城市摄影的裁切方式
- 图像整体的工业、实验和档案气质

## 使用限制

该图片是视觉风格母版，不是网页线框图，也不是首页完成稿。
该图片仅作为全站色彩、材质、图形和摄影方向的视觉母版，
不作为网页页面布局，不直接作为网页背景或项目内容图使用。
正式文字、图表、按钮和元数据均由 HTML/CSS 重新制作。

Codex 不得：

- 把整张母版直接作为网页背景
- 按照母版完整复制页面网格
- 把图中细小伪文字当作正式网页文字
- 直接裁切母版中的图片作为实验项目素材
- 让四个分类只通过改变颜色进行区别

后续页面应借鉴母版的色彩、材质、边框、图形和摄影裁切方式。


# PERSONAL VISUAL ARCHIVE
# Design System｜视觉设计系统

## 1. 文件用途

本文件规定 PERSONAL VISUAL ARCHIVE 全站必须遵守的视觉规则。

规则适用于：

- 首页
- Archive
- 四个分类页
- A01—A12 详情页
- Index
- About
- Contact
- 404 页面
- 桌面端
- 平板端
- 手机端

Codex 在编写 HTML、CSS 和 JavaScript 时必须以本文件为视觉依据。

不得在不同页面中临时改变颜色、字体、边框、圆角、阴影、间距和卡片比例。

---

## 2. 视觉依据

### 正式视觉母版

- 正式参考文件：`docs/visual-master.png`
- 原始备份文件：`assets/raw/global/visual-master-v03.png`

视觉母版用于规定：

- 基础色
- 分类色
- 黑色边框
- 模块化图形语言
- 材料和摄影气质
- 档案式视觉方向

视觉母版不属于 A01—A12 中的任何实验。

视觉母版不直接显示在网页中，也不作为网页背景、项目封面或详情图。

---

## 3. 核心视觉原则

全站视觉应保持：

- 档案式
- 模块化
- 高对比
- 平面化
- 清晰
- 克制
- 具有实验性但仍可阅读

全站避免：

- 渐变背景
- 玻璃拟态
- 柔和模糊阴影
- 大面积透明效果
- 装饰性圆角
- 随机增加颜色
- 每个页面使用不同字体
- 过度复杂的动画
- 把生成图片中的伪文字当成网页文字

---

# 4. 色彩系统

## 4.1 基础色

| 名称 | 色值 | 用途 |
|---|---|---|
| Ink | `#111111` | 主文字、边框、按钮、深色背景 |
| Paper | `#F2EFE7` | 全站主要背景 |
| Soft Grey | `#DADADA` | 次级背景、占位区、禁用状态 |
| Mid Grey | `#777777` | 次要文字、补充信息 |
| White | `#FFFFFF` | 深色背景上的文字 |

## 4.2 分类色

| 分类 | 色值 | 背景上使用的文字颜色 |
|---|---|---|
| TYPE | `#DFFF42` | `#111111` |
| IMAGE | `#FF4933` | `#111111` |
| SYSTEM | `#3155FF` | `#FFFFFF` |
| FIELD NOTES | `#7958FF` | `#FFFFFF` |

## 4.3 分类与项目对应关系

### TYPE

- A01 NONHUMAN ALPHABET
- A02 BROKEN CAPTION
- A03 UNREADABLE WEATHER

使用颜色：

```text
#DFFF42
```

### IMAGE

- A04 SYNTHETIC FOSSILS
- A05 SOFT HARDWARE
- A06 ARCHIVE OF ACCIDENTS

使用颜色：

```text
#FF4933
```

### SYSTEM

- A07 FALSE TAXONOMY
- A08 SIGNAL SPECIMENS
- A09 INTERFACE RELICS

使用颜色：

```text
#3155FF
```

### FIELD NOTES

- A10 TEMPORARY MONUMENT
- A11 COLOR CONFLICT 01
- A12 UNKNOWN RITUALS

使用颜色：

```text
#7958FF
```

## 4.4 分类色使用限制

分类色可以用于：

- 分类标签
- 当前筛选按钮
- 分类页标题区
- 详情页编号区
- 卡片悬停状态
- 小面积状态标识
- 首页实验模块

分类色不得：

- 代替所有正文背景
- 覆盖整张详情页
- 降低正文可读性
- 随意更改色值
- 加入新的相似颜色
- 使用渐变版本

同一个详情页只使用该项目所属分类的分类色。

首页与 Archive 可以同时出现四种分类色。

---

# 5. 边框规则

## 5.1 默认边框

普通卡片、按钮、图片和模块使用：

```css
border: 2px solid #111111;
```

## 5.2 细分隔线

表格行、列表行、元数据分隔使用：

```css
border-bottom: 1px solid #111111;
```

## 5.3 键盘焦点

键盘选中的链接或按钮使用：

```css
outline: 3px solid #111111;
outline-offset: 3px;
```

## 5.4 禁止行为

不得：

- 同时混用大量不同边框粗细
- 使用虚化边框
- 使用彩色描边代替主黑色边框
- 在同类卡片中使用不同边框

---

# 6. 圆角规则

全站默认圆角：

```css
border-radius: 0;
```

以下元素全部保持直角：

- 图片
- 项目卡片
- 按钮
- 导航
- 输入框
- 标签
- 弹出菜单
- Archive 工具栏

不得使用：

```text
8px
12px
16px
24px
胶囊形圆角
```

只有浏览器原生焦点状态可以保持自身显示，不需要强行修改。

---

# 7. 阴影规则

## 7.1 默认状态

全站默认不使用阴影：

```css
box-shadow: none;
```

## 7.2 可点击元素悬停状态

按钮或项目卡片可以使用一次硬边阴影：

```css
box-shadow: 4px 4px 0 #111111;
transform: translate(-2px, -2px);
```

该效果只用于：

- 项目卡片悬停
- 主要按钮悬停
- 可点击的分类模块

## 7.3 禁止阴影

不得使用：

- 模糊阴影
- 半透明浮层阴影
- 多层阴影
- 彩色发光
- 内阴影
- 玻璃拟态阴影

手机端点击状态不依赖阴影表达，文字和按钮状态必须保持清晰。

---

# 8. 字体系统

## 8.1 标题字体

```css
font-family:
  "Arial Black",
  "Microsoft YaHei",
  "PingFang SC",
  Arial,
  sans-serif;
```

用于：

- 首页超大标题
- 页面主标题
- 分类标题
- 项目英文标题
- 大型数字和编号

英文标题优先使用大写。

大型英文标题字距：

```css
letter-spacing: -0.03em;
```

中文标题不使用负字距。

---

## 8.2 正文字体

```css
font-family:
  Arial,
  "Microsoft YaHei",
  "PingFang SC",
  sans-serif;
```

用于：

- 中文项目说明
- About 正文
- 分类介绍
- 图片说明
- Contact 信息

正文行高：

```css
line-height: 1.7;
```

正文最大阅读宽度：

```css
max-width: 68ch;
```

不得把长正文铺满整个超宽屏幕。

---

## 8.3 元数据字体

```css
font-family:
  Consolas,
  "Courier New",
  monospace;
```

用于：

- 项目编号
- 日期
- 媒介
- 状态
- 标签
- Archive 工具按钮
- 网站状态信息
- 页脚小字

元数据通常使用大写英文。

元数据字距：

```css
letter-spacing: 0.08em;
```

---

# 9. 字号系统

## 9.1 桌面端

适用宽度：

```text
1024px 及以上
```

| 层级 | 字号 | 行高 |
|---|---:|---:|
| 首页超大标题 | 96px | 0.9 |
| 页面主标题 | 64px | 1.0 |
| 二级标题 | 40px | 1.1 |
| 三级标题 | 28px | 1.2 |
| 卡片标题 | 20px | 1.2 |
| 正文 | 16px | 1.7 |
| 小正文 | 14px | 1.5 |
| 元数据 | 12px | 1.4 |

## 9.2 平板端

适用宽度：

```text
768px—1023px
```

| 层级 | 字号 | 行高 |
|---|---:|---:|
| 首页超大标题 | 72px | 0.95 |
| 页面主标题 | 48px | 1.0 |
| 二级标题 | 34px | 1.1 |
| 三级标题 | 24px | 1.2 |
| 卡片标题 | 19px | 1.2 |
| 正文 | 16px | 1.7 |
| 小正文 | 14px | 1.5 |
| 元数据 | 12px | 1.4 |

## 9.3 手机端

适用宽度：

```text
767px 及以下
```

| 层级 | 字号 | 行高 |
|---|---:|---:|
| 首页超大标题 | 48px | 0.95 |
| 页面主标题 | 36px | 1.0 |
| 二级标题 | 28px | 1.1 |
| 三级标题 | 22px | 1.2 |
| 卡片标题 | 18px | 1.25 |
| 正文 | 15px | 1.7 |
| 小正文 | 13px | 1.5 |
| 元数据 | 11px | 1.4 |

首页标题可以根据屏幕宽度使用 `clamp()`，但不得小于 48px，也不得在手机端溢出屏幕。

---

# 10. 响应式断点

全站只使用三组主要断点。

## 手机

```css
@media (max-width: 767px)
```

## 平板

```css
@media (min-width: 768px) and (max-width: 1023px)
```

## 桌面

```css
@media (min-width: 1024px)
```

测试宽度必须至少包括：

```text
375px
768px
1024px
1440px
```

---

# 11. 网格系统

## 11.1 桌面网格

适用：

```text
1024px 及以上
```

规则：

- 12 列
- 页面左右边距：32px
- 列间距：24px
- 最大内容宽度：1600px
- 内容整体水平居中

```css
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: 24px;
```

## 11.2 平板网格

适用：

```text
768px—1023px
```

规则：

- 8 列
- 页面左右边距：24px
- 列间距：20px

```css
grid-template-columns: repeat(8, minmax(0, 1fr));
gap: 20px;
```

## 11.3 手机网格

适用：

```text
767px 及以下
```

规则：

- 4 列
- 页面左右边距：16px
- 列间距：16px

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 16px;
```

---

# 12. 各页面网格使用方式

## 12.1 首页桌面端

12 列网格：

- 左侧档案控制区：4 列
- 右侧拼贴项目区：8 列

```text
4 / 8
```

手机端：

- 所有区域占满 4 列
- 左侧控制区取消固定
- 内容按照正常顺序纵向排列

## 12.2 Archive 网格

桌面端：

- 每行 3 张卡片
- 每张卡片占 4 列

平板端：

- 每行 2 张卡片
- 每张卡片占 4 列

手机端：

- 每行 1 张卡片
- 每张卡片占 4 列

## 12.3 分类页

使用与 Archive 相同的卡片网格：

- 桌面：3 张一行
- 平板：2 张一行
- 手机：1 张一行

## 12.4 详情页首屏

桌面端：

- 左侧文字与元数据：5 列
- 右侧主图：7 列

```text
5 / 7
```

平板和手机：

- 文字与主图上下排列
- 全部占满页面宽度

## 12.5 Index 页面

桌面端：

- 左侧文字索引：7 列
- 右侧悬停预览：5 列

```text
7 / 5
```

平板和手机：

- 索引占满宽度
- 手机端隐藏悬停预览
- 点击索引直接进入详情页

## 12.6 About 页面

桌面端可使用：

- 标题和介绍：5 列
- 分类与制作信息：7 列

平板与手机改为单列排列。

---

# 13. 间距系统

全站只使用以下间距值：

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

不得随意使用：

```text
17px
29px
43px
71px
```

## 13.1 间距用途

| 间距 | 用途 |
|---:|---|
| 4px | 图标与极小文字之间 |
| 8px | 标签之间、按钮内部小间距 |
| 12px | 元数据行、紧凑列表 |
| 16px | 手机边距、卡片内部基础间距 |
| 24px | 卡片间距、桌面网格间距 |
| 32px | 模块内部间距 |
| 48px | 普通页面区块之间 |
| 64px | 主要页面区块之间 |
| 96px | 页面首屏和重要大区块之间 |

## 13.2 页面上下边距

桌面端：

```text
页面顶部：64px
页面底部：96px
```

平板端：

```text
页面顶部：48px
页面底部：64px
```

手机端：

```text
页面顶部：32px
页面底部：48px
```

导航栏高度不计入上述页面内容间距。

---

# 14. 导航尺寸

桌面端导航高度：

```text
64px
```

手机端导航高度：

```text
56px
```

导航左右内边距遵守当前设备的页面边距。

导航链接最小点击区域：

```text
44px × 44px
```

移动端菜单按钮也不得小于：

```text
44px × 44px
```

---

# 15. 按钮规则

## 15.1 默认按钮

```css
min-height: 44px;
padding: 12px 16px;
border: 2px solid #111111;
border-radius: 0;
background: #F2EFE7;
color: #111111;
```

## 15.2 普通悬停

```css
background: #111111;
color: #F2EFE7;
box-shadow: 4px 4px 0 #111111;
transform: translate(-2px, -2px);
```

## 15.3 分类按钮激活状态

TYPE：

```text
背景 #DFFF42
文字 #111111
```

IMAGE：

```text
背景 #FF4933
文字 #111111
```

SYSTEM：

```text
背景 #3155FF
文字 #FFFFFF
```

FIELD NOTES：

```text
背景 #7958FF
文字 #FFFFFF
```

按钮状态不得只依靠颜色表达，还应通过粗边框、文字或 `aria-pressed` 表明当前状态。

---

# 16. 卡片规则

## 16.1 Archive 项目卡片

卡片结构：

1. 封面图片
2. 项目编号
3. 英文标题
4. 中文标题
5. 分类、日期或状态

默认规则：

```css
border: 2px solid #111111;
border-radius: 0;
background: #F2EFE7;
padding: 0;
```

文字区内边距：

```text
16px
```

手机端可以保持相同内边距。

## 16.2 卡片悬停

桌面端：

- 图片轻微放大
- 卡片显示硬边阴影
- 分类色出现
- 标题始终保持可读

图片放大不得超过：

```css
transform: scale(1.05);
```

动画时间：

```text
150ms—250ms
```

手机端不依靠悬停，重要信息默认可见。

---

# 17. 图片比例

## 17.1 Archive 封面

统一使用：

```text
4:3
```

CSS：

```css
aspect-ratio: 4 / 3;
object-fit: cover;
```

图片不得横向拉伸或纵向压缩。

## 17.2 首页拼贴

首页允许使用以下比例：

```text
1:1
4:3
3:4
16:9
```

不得使用完全随机的比例。

## 17.3 详情页主图

桌面端建议使用：

```text
4:3
```

图片使用：

```css
width: 100%;
height: auto;
```

如果主图位于固定比例框中，可以使用 `object-fit: cover`。

## 17.4 详情页内容图

详情图优先保留原始比例：

```css
width: 100%;
height: auto;
```

不得为了统一而强行拉伸。

需要统一裁切时，只能在明确的图片框中使用：

```css
object-fit: cover;
```

## 17.5 Index 悬停预览

统一使用：

```text
4:3
```

---

# 18. 图片边框和背景

项目图片默认使用：

```css
border: 2px solid #111111;
background: #DADADA;
```

加载失败时显示：

- 浅灰背景
- 项目编号
- 简短替代文字

图片必须设置准确的 `alt` 属性。

---

# 19. 页面背景规则

全站默认背景：

```css
background: #F2EFE7;
```

主要文字：

```css
color: #111111;
```

允许部分模块使用：

```text
#FFFFFF
#DADADA
四个分类色
```

禁止使用全屏渐变、随机纹理或与视觉母版无关的新颜色。

---

# 20. 交互与动画

## 20.1 默认动画时长

```text
150ms—250ms
```

## 20.2 允许的动画

- 颜色切换
- 2px 的位置移动
- 1.03—1.05 的图片放大
- 移动端菜单展开
- Archive GRID / LIST 切换
- MIX 排列变化
- Index 悬停预览

## 20.3 禁止动画

- 长时间自动播放
- 大幅度旋转
- 复杂视差滚动
- 闪烁
- 持续抖动
- 全屏加载动画
- WebGL 或 3D 动画
- 影响阅读的文字运动

## 20.4 减少动画偏好

CSS 应支持：

```css
@media (prefers-reduced-motion: reduce)
```

在该状态下关闭不必要的动画和位移。

---

# 21. 可读性规则

- 正文字号不得小于 15px。
- 手机端可点击区域不得小于 44px。
- 正文行高保持约 1.7。
- 长段正文最大宽度为 68 个字符。
- 不在彩色背景上使用低对比度文字。
- 不把文字直接压在复杂图片上。
- 图片上的伪文字不承担导航或信息功能。
- 所有按钮必须包含清晰文字标签。
- 手机端不得依靠鼠标悬停才能看到重要内容。

---

# 22. CSS 变量建议

Codex 创建 CSS 时，应优先使用以下变量：

```css
:root {
  --color-ink: #111111;
  --color-paper: #F2EFE7;
  --color-soft-grey: #DADADA;
  --color-mid-grey: #777777;
  --color-white: #FFFFFF;

  --color-type: #DFFF42;
  --color-image: #FF4933;
  --color-system: #3155FF;
  --color-field-notes: #7958FF;

  --border-thin: 1px;
  --border-default: 2px;
  --border-focus: 3px;

  --radius-default: 0;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  --font-display:
    "Arial Black",
    "Microsoft YaHei",
    "PingFang SC",
    Arial,
    sans-serif;

  --font-body:
    Arial,
    "Microsoft YaHei",
    "PingFang SC",
    sans-serif;

  --font-meta:
    Consolas,
    "Courier New",
    monospace;

  --transition-fast: 180ms ease;
}
```

以上变量用于减少不同页面之间的视觉偏差。

---

# 23. 规则优先级

发生冲突时，按照以下顺序判断：

1. `docs/course-requirements.md`
2. `docs/sitemap.md`
3. `docs/design-system.md`
4. `docs/reference-map.md`
5. `references/` 中的截图

参考网站不能推翻本设计系统。

---

# 24. 禁止擅自添加

Codex 不得擅自添加：

- 新分类色
- 新字体
- 新圆角
- 渐变
- 玻璃拟态
- 模糊阴影
- 未规划的弹窗
- 未规划的轮播图
- 自动播放视频
- 新的复杂交互框架
- Bootstrap
- Tailwind
- React
- Vue
- WebGL
- Three.js

全站使用：

- HTML5
- CSS3
- 原生 JavaScript

---

# 25. 完成检查

- [ ] 基础色已经固定。
- [ ] 四个分类色已经固定。
- [ ] 每种分类色的文字颜色已经固定。
- [ ] 边框粗细已经固定。
- [ ] 圆角已经固定为 0。
- [ ] 阴影规则已经固定。
- [ ] 标题字体已经固定。
- [ ] 正文字体已经固定。
- [ ] 元数据字体已经固定。
- [ ] 桌面端网格已经固定为 12 列。
- [ ] 平板端网格已经固定为 8 列。
- [ ] 手机端网格已经固定为 4 列。
- [ ] 页面边距已经固定。
- [ ] 常用间距已经固定。
- [ ] Archive 卡片比例已经固定为 4:3。
- [ ] 详情图不会被强行拉伸。
- [ ] 交互动画时间已经固定。
