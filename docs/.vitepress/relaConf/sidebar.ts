import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
    "/column/JavaScript/": [
        {
            text: "JavaScript",
            items: [
                {
                    text: "数据类型",
                    link: "/column/JavaScript/001_DataType",
                },
                {
                    text: "ES6",
                    link: "/column/JavaScript/002_Es6",
                },
            ],
        },
    ],
    "/column/Vue3/": [
        {
            text: "Vue3",
            items: [
                {
                    text: "Vue3",
                    link: "/column/Vue3/001_Vue3",
                },
            ],
        },
    ],
    "/column/Node/": [
        {
            text: "Node",
            items: [
                {
                    text: "Node",
                    link: "/column/Node/001_Node",
                },
            ],
        },
    ],
    "/column/Webpack/": [
        {
            text: "Webpack",
            items: [
                {
                    text: "Webpack",
                    link: "/column/Webpack/001_Webpack",
                },
            ],
        },
    ],
    "/column/Browser/": [
        {
            text: "浏览器",
            items: [
                {
                    text: "浏览器",
                    link: "/column/Browser/001_Browser",
                },
            ],
        },
    ],
};
