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
                    collapsed: true, //默认展开
                    items: [
                        {
                            text: "Java程序基本结构",
                            link: "/column/Java/001_Java程序基本结构",
                        },
                        {
                            text: "Java变量和数据类型",
                            link: "/column/Java/002_Java变量和数据类型",
                        },
                        {
                            text: "Java整数运算",
                            link: "/column/Java/003_Java整数运算",
                        },
                        {
                            text: "Java浮点数运算",
                            link: "/column/Java/004_Java浮点数运算",
                        },
                        {
                            text: "Java布尔运算",
                            link: "/column/Java/005_Java布尔运算",
                        },
                        {
                            text: "Java字符和字符串",
                            link: "/column/Java/006_Java字符和字符串",
                        },
                        {
                            text: "Java数组类型",
                            link: "/column/Java/007_Java数组类型",
                        },
                    ],
                },
                {
                    text: "流程控制",
                    collapsed: true, //默认展开
                    items: [
                        {
                            text: "Java输入和输出",
                            link: "/column/Java/008_Java输入和输出",
                        },
                        {
                            text: "Java If判断",
                            link: "/column/Java/009_Java If判断",
                        },
                        {
                            text: "Java Switch判断",
                            link: "/column/Java/010_Java switch多重选择",
                        },
                        {
                            text: "Java While循环",
                            link: "/column/Java/011_Java while循环",
                        },
                        {
                            text: "Java do while循环",
                            link: "/column/Java/012_Java do while循环",
                        },
                        {
                            text: "Java for循环",
                            link: "/column/Java/013_Java for循环",
                        },
                        {
                            text: "Java break和continue",
                            link: "/column/Java/014_Java break和continue",
                        },
                        {
                            text: "Java 遍历数组",
                            link: "/column/Java/015_Java 遍历数组",
                        },
                        {
                            text: "Java 数组排序.md",
                            link: "/column/Java/016_Java 数组排序.md",
                        },
                    ],
                },
            ],
        },
    ],
};
