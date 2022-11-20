# Azzar

## Built with Next.js and Vercel

This repo contains a **rather stable** version of my personal site [Azzar](http://ivork.me 'Azzar').

Many expected features are under development.

## Main Dependencies

- `sass`

- `styled-components`

- `remark` & `remark-html`

- `react-icons`

## Structure

Since there're **4 parts** (about, portfolio, blog and my collections) with many contents inside each, a top-level folder `/src` was created.

- `/components` contains UI snippets.

- `/lib` contains functional scripts.

- `/pages` contains site pages.

- `/public` contains static resources like fonts and images.

- `/src` contains drafts and posts. I mainly use `.mdx` file.

- `/styles` contains theme modules, I mainly use `.scss` file.

Refer to official doc of [Next.js](https://nextjs.org/ 'Next.js') for more infomation about other files like `/next.config.cjs` and `/package.json`

## Design Part

I've considered importing libraries like react-spring or Framer Motion, or using design systems like Ant Design, however decided to stay simple and focus on content.

A rough template in `/styles/_vars.scss` states **font and color** globally.

Styles for **header and footer** are located in `/styles/layout.module.scss`.

## 以及

从开始在 iPad 上画 sitemap 到构建至该仓库的第一个版本花了大约三天时间，在这三天前我的网页基础为：

`HTML`：知道标签，能分清 head 和 body；

`CSS`：能改颜色大小透明度，定位只会 margin 和 padding；

`JavaScript`：只看得懂 var 和 const，分不清三种括号。

SO DON'T EXPECT HIGH.
