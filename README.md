# 个人博客

方奇兵的个人博客，使用 Hugo 和 Markdown 构建。

## 本地预览

安装 Hugo 后，在项目目录运行：

```sh
hugo server --buildDrafts
```

浏览器打开 `http://localhost:1313/`。

## 新建文章

```sh
hugo new content posts/文章文件名.md
```

文章完成后，将 Front Matter 中的 `draft` 改为 `false`，提交并推送到 `main` 分支。GitHub Actions 会自动构建并发布网站。

## 内容边界

本仓库只保存明确公开的博客内容。不要直接同步整个 Obsidian 仓库，也不要提交 Daily、Personal、项目资料或隐私附件。

