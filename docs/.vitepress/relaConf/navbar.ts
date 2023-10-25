import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北循游记',
        link: '/column/Travel/'
      },
      {
        text: '所思·所想',
        link: '/column/Growing/'
      }
    ]
  },
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/zxy1816378898' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/1638710930585911/posts'
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/dashboard'
      }
    ]
  }
];
