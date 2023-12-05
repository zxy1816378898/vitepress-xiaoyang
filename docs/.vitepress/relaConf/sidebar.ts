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
    "/column/Java/": [
        {
            text: "目录",
            items: [
                {
                    text: "Java程序基础",
                    items: [
                        {
                            text: "Java程序基本结构",
                            link: "/column/Java/001_Java程序基本结构",
                        },
                        {
                            text: "Java程序的基本语法",
                            link: "/column/Java/002_Java变量和数据类型",
                        },
                        {
                            text: "Java程序的基本语法",
                            link: "/column/Java/003_Java程序的基本语法",
                        },
                    ],
                },
            ],
        },
    ],
};
