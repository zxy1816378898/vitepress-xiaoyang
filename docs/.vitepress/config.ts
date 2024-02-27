import { defineConfig } from "vitepress";
import { sidebar, nav } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "",
    title: "XiaoYang's Blog",
    description: "A VitePress Site",

    // 配置markdown写作风格
    // markdown: {
    //   toc: {
    //     level: [1, 2, 3, 4]
    //   },
    //   headers: {
    //     level: [1, 2, 3, 4]
    //   },
    //   // https://github.com/valeriangalliat/markdown-it-anchor#usage
    //   anchor: {
    //     // permalink: anchor.permalink.headerLink()
    //   },
    //   lineNumbers: true // 让代码块中实现行号

    //   // config: (md) => {
    //   //   md.use(demoBlockPlugin, {
    //   //     cssPreprocessor: 'less'
    //   //   });
    //   // }
    // },

    themeConfig: {
        logo: "/head_portrait.png",
        nav: nav,
        sidebar: sidebar,

        outline: {
            level: [2, 6],
            label: "目录",
        },

        i18nRouting: true,

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
