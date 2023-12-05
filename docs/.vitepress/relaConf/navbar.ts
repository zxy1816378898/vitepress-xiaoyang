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
        text: "全栈学习",
        items: [
            {
                text: "Java",
                link: "/column/Java/001_Java程序基本结构",
            },
            {
                text: "JavaScript",
                link: "/column/JavaScript/001_DataType",
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
