
module.exports = {
  head:[
    ['script',{},`
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?0c169f674f8e30fcbcbd6d07eeaf7446";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
    `]
  ],
  title: "一个菜鸟前端学习笔记",
  description: "TypeScript4 最新官方文档翻译",
  base:"/front-endLearnig/",
  themeConfig: {
    lastUpdated:"上次更新",
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
