# PERSONAL VISUAL ARCHIVE
# 网站地图与页面链接规则

## 1. 文件用途

本文件记录 PERSONAL VISUAL ARCHIVE 的全部 HTML 页面、页面层级和跳转关系。

网站必须具有真实的多页面结构。

不得使用同一个 HTML 页面中的多个滚动区块代替首页、分类页和详情页。

---

## 2. 页面总数

本项目计划完成 22 个独立 HTML 页面。

| 页面类型 | 数量 |
|---|---:|
| 首页 | 1 |
| Archive | 1 |
| 分类页 | 4 |
| 实验详情页 | 12 |
| Index | 1 |
| About | 1 |
| Contact | 1 |
| 404 | 1 |
| 总计 | 22 |

---

## 3. 核心页面路径

### 三级路径

```text
首页
index.html
↓
Archive
archive.html
↓
单项详情
entries/a01-nonhuman-alphabet.html

完整分类路径

首页
index.html
↓
Archive
archive.html
↓
TYPE 分类
collections/type.html
↓
A01 详情
entries/a01-nonhuman-alphabet.html

---

##4. 页面树状结构

PERSONAL VISUAL ARCHIVE
│
├── HOME
│   └── index.html
│
├── ARCHIVE
│   └── archive.html
│       │
│       ├── TYPE
│       │   └── collections/type.html
│       │       ├── A01 entries/a01-nonhuman-alphabet.html
│       │       ├── A02 entries/a02-broken-caption.html
│       │       └── A03 entries/a03-unreadable-weather.html
│       │
│       ├── IMAGE
│       │   └── collections/image.html
│       │       ├── A04 entries/a04-synthetic-fossils.html
│       │       ├── A05 entries/a05-soft-hardware.html
│       │       └── A06 entries/a06-archive-of-accidents.html
│       │
│       ├── SYSTEM
│       │   └── collections/system.html
│       │       ├── A07 entries/a07-false-taxonomy.html
│       │       ├── A08 entries/a08-signal-specimens.html
│       │       └── A09 entries/a09-interface-relics.html
│       │
│       └── FIELD NOTES
│           └── collections/field-notes.html
│               ├── A10 entries/a10-temporary-monument.html
│               ├── A11 entries/a11-color-conflict-01.html
│               └── A12 entries/a12-unknown-rituals.html
│
├── INDEX
│   └── index-page.html
│
├── ABOUT
│   └── about.html
│
├── CONTACT
│   └── contact.html
│
└── ERROR PAGE
    └── 404.html

---

##5. 一级页面

-HOME
文件：index.html
作用：网站首页与主要入口
必须链接到：
  -archive.html
  -index-page.html
  -about.html
  -contact.html

---

##6. 二级页面

-ARCHIVE
  文件：archive.html
  作用：展示全部 12 个视觉实验
  必须链接到：
    -四个分类页
    -十二个详情页
    -首页
    -Index
    -About
    -Contact

-Index
  文件：index-page.html
  作用：以纯文字列表显示 12 个实验
  必须链接到：
    -十二个详情页
    -Archive
    -首页

-About
  文件：about.html
  作用：介绍项目主题、分类和制作方式
  必须链接到：
    -首页
    -Archive
    -Contact

-Contact
  文件：contact.html
  作用：提供静态联系信息与返回其他主要页面的入口
  必须链接到：
    -首页
    -Archive
    -About

---

##7. 分类页

-TYPE
  文件：collections/type.html
  包含：
    -A01
    -A02
    -A03
  必须链接到：
    -entries/a01-nonhuman-alphabet.html
    -entries/a02-broken-caption.html
    -entries/a03-unreadable-weather.html
    -archive.html
    -index.html

-IMAGE
  文件：collections/image.html
  包含：
    -A04
    -A05
    -A06
  必须链接到：
    -entries/a04-synthetic-fossils.html
    -entries/a05-soft-hardware.html
    -entries/a06-archive-of-accidents.html
    -archive.html
    -index.html

-SYSTEM
  文件：collections/system.html
  包含：
    -A07
    -A08
    -A09
  必须链接到：
    -entries/a07-false-taxonomy.html
    -entries/a08-signal-specimens.html
    -entries/a09-interface-relics.html
    -archive.html
    -index.html

-FIELD NOTES
  文件：collections/field-notes.html
  包含：
    -A10
    -A11
    -A12
  必须链接到：
    -entries/a10-temporary-monument.html
    -entries/a11-color-conflict-01.html
    -entries/a12-unknown-rituals.html
    -archive.html
    -index.html

---

##8. 详情页

每个详情页必须包含：
  -返回所属分类
  -返回 Archive
  -返回首页
  -上一篇
  -下一篇

详情页对应关系
编号-文件-所属分类：
A01-entries/a01-nonhuman-alphabet.html-TYPE
A02-entries/a02-broken-caption.html-TYPE
A03-entries/a03-unreadable-weather.html-TYPE
A04-entries/a04-synthetic-fossils.html-IMAGE
A05-entries/a05-soft-hardware.html-IMAGE
A06-entries/a06-archive-of-accidents.html-IMAGE
A07-entries/a07-false-taxonomy.html-SYSTEM
A08-entries/a08-signal-specimens.html-SYSTEM
A09-entries/a09-interface-relics.html-SYSTEM
A10-entries/a10-temporary-monument.html-FIELD NOTES
A11-entries/a11-color-conflict-01.html-FIELD NOTES
A12-entries/a12-unknown-rituals.html-FIELD NOTES

---

##9. 上一篇与下一篇

当前页面-上一篇-下一篇：
A01-A12-A01
A02-A01-A03
A03-A02-A04
A04-A03-A05
A05-A04-A06
A06-A05-A07
A07-A06-A08
A08-A07-A09
A09-A08-A10
A10-A09-A11
A11-A10-A12
A12-A11-A01

---

##10. 404 页面
  文件：404.html
  作用：显示错误页面
  不需要出现在主导航中
  必须包含：
    -返回首页链接
    -返回 Archive 链接

---

##11. 全站导航

以下页面应使用统一主导航：

  -Home
  -Archive
  -Index
  -About
  -Contact

四个分类页可以从 Archive 进入。

详情页必须提供返回分类与返回 Archive 的链接。

---

##12. 孤立页面检查

以下页面必须能够通过可见链接进入：
 
 -archive.html
 -index-page.html
 -about.html
 -contact.html
 -collections/type.html
 -collections/image.html
 -collections/system.html
 -collections/field-notes.html
 -A01—A12 全部详情页

404 页面是异常页面，不要求放入主导航，但必须可以返回首页。

---

##13. 最终访问路径测试

路径一
index.html
→ archive.html
→ entries/a01-nonhuman-alphabet.html

路径二
index.html
→ archive.html
→ collections/type.html
→ entries/a01-nonhuman-alphabet.html

路径三
index.html
→ index-page.html
→ entries/a07-false-taxonomy.html

路径四
index.html
→ about.html
→ contact.html
→ index.html

以上路径必须都可以通过页面上的可见链接完成。
