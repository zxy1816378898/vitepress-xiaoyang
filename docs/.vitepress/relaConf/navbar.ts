import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "个人成长",
        items: [
            {
                text: "大江南北循游记",
                link: "/column/Travel/",
            },
            {
                text: "所思·所想",
                link: "/column/Growing/",
            },
        ],
    },
    {
        text: "前端开发",
        items: [
            {
                text: "JavaScript",
                link: "/column/JavaScript/001_DataType",
            },
            {
                text: "Vue3",
                link: "/column/Vue3/001_Vue3",
            },
            {
                text: "Node",
                link: "/column/Node/001_Node",
            },
            {
                text: "Webpack",
                link: "/column/Webpack/001_Webpack",
            },
            {
                text: "浏览器",
                link: "/column/Browser/001_Browser",
            },
        ],
    },
    {
        text: "关于我",
        items: [
            { text: "Github", link: "https://github.com/zxy1816378898" },
            {
                text: "掘金",
                link: "https://juejin.cn/user/1638710930585911/posts",
            },
            {
                text: "语雀",
                link: "https://www.yuque.com/dashboard",
            },
        ],
    },
];
