/*
 * @Description:
 * @Author: 邓建军
 * @Date: 2023-08-25 09:49:18
 * @LastEditTime: 2023-08-25 11:30:46
 */
module.exports = {
  title: "TypeScript4 文档",
  description: "TypeScript4 最新官方文档翻译",
  base:"/front-endLearnig/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", items: [{ text: "Github", link: "https://github.com/djjniubi" }] },
    ],
    sidebar: [
      {
        title: "js学习之路",
        path: "/jsBook/PrimaryDataType",
        collapsable: false,
        children: [
          { title: "js基本数据类型", path: "/jsBook/PrimaryDataType" },
          { title: "表达式和运算符", path: "/jsBook/ExpressionOperator" },
        ],
      },
    ],
  },
  theme:"reco"
};
