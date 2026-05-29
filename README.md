# CC Mine Knowledge

基于 Docusaurus 的个人知识库，适合沉淀文档、面试 QA、项目复盘和博客文章。

## 快速启动

```bash
npm install
npm start
```

默认本地地址：`http://localhost:3000`

## 内容结构

- `docs/`：文档区（含面试 QA）
- `blog/`：博客区
- `static/`：静态资源

## 常用命令

```bash
npm start       # 本地开发
npm run build   # 生产构建
npm run serve   # 本地预览 build 结果
```

## 部署（GitHub Pages）

当前配置：

- GitHub 用户：`cathats`
- 仓库：`cc-mine-knowledge`
- `baseUrl`: `/cc-mine-knowledge/`

## 接入 Google Analytics（GA4）

1. 在 GA 创建 Web Data Stream，拿到 `Measurement ID`（格式如 `G-XXXXXXXXXX`）
2. 发布前注入环境变量并部署：

```bash
GA_TRACKING_ID=G-XXXXXXXXXX GIT_USER=cathats npm run deploy
```

说明：

- 未设置 `GA_TRACKING_ID` 时不会注入统计脚本
- 已开启 `anonymizeIP: true`
