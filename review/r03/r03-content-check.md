# R03 正式内容人工检查清单

检查口径：

- 标题、分类、摘要、说明和元数据来自 `content/archive-manifest.xlsx` 与对应的 `content/entries/aXX.md`。
- 封面来自 `assets/images/covers/aXX-cover.png`。
- 每项四张详情图来自 `assets/images/entries/aXX/`。
- 详情图保持 `width: 100%`、`height: auto`，不强制裁切。
- R03.1 已统一元数据：内容源日期为 `2026-07`，网页显示为 `2026.07`；内容源状态为 `COMPLETE｜已完成`，网页显示为 `COMPLETE`。

| 编号 | 标题 | 分类 | 文案 | 元数据 | 封面 | 详情图数量 | 图片归属 | alt | 裁切 | 上一篇 / 下一篇 |
|---|---|---|---|---|---|---:|---|---|---|---|
| A01 | NONHUMAN ALPHABET｜非人字母表 | TYPE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A01 | 已核对 | 详情图不裁切 | A12 / A02 |
| A02 | BROKEN CAPTION｜破损字幕 | TYPE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A02 | 已核对 | 详情图不裁切 | A01 / A03 |
| A03 | UNREADABLE WEATHER｜不可读天气 | TYPE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A03 | 已核对 | 详情图不裁切 | A02 / A04 |
| A04 | SYNTHETIC FOSSILS｜合成化石 | IMAGE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A04 | 已核对 | 详情图不裁切 | A03 / A05 |
| A05 | SOFT HARDWARE｜柔软硬件 | IMAGE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A05 | 已核对 | 详情图不裁切 | A04 / A06 |
| A06 | ARCHIVE OF ACCIDENTS｜偶发档案 | IMAGE | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A06 | 已核对 | 详情图不裁切 | A05 / A07 |
| A07 | FALSE TAXONOMY｜虚构分类学 | SYSTEM | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A07 | 已核对 | 详情图不裁切 | A06 / A08 |
| A08 | SIGNAL SPECIMENS｜信号标本 | SYSTEM | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A08 | 已核对 | 详情图不裁切 | A07 / A09 |
| A09 | INTERFACE RELICS｜界面遗物 | SYSTEM | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A09 | 已核对 | 详情图不裁切 | A08 / A10 |
| A10 | TEMPORARY MONUMENT｜临时纪念碑 | FIELD NOTES | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A10 | 已核对 | 详情图不裁切 | A09 / A11 |
| A11 | COLOR CONFLICT 01｜色彩冲突 01 | FIELD NOTES | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A11 | 已核对 | 详情图不裁切 | A10 / A12 |
| A12 | UNKNOWN RITUALS｜未知仪式 | FIELD NOTES | 已核对 | 2026-07 / COMPLETE｜已完成 | 正确 | 4 | 仅 A12 | 已核对 | 详情图不裁切 | A11 / A01 |

## 人工检查步骤

- [ ] 在 1440px 下检查封面裁切是否适合卡片。
- [ ] 在 375px 下检查长标题、双语元数据和完整图注是否可读。
- [ ] 逐页确认四张详情图完整显示，边缘文字、编号和构图没有被裁掉。
- [ ] 使用键盘检查全站导航、分类返回、Archive 返回及上一篇/下一篇。
- [ ] 在 Archive 检查分类筛选、GRID / LIST、INDEX / MIX。
- [ ] 禁用 JavaScript 后确认 Archive 的十二张卡片和 Index 文字列表仍存在。
