export default [
  {
    path: "/getUserInfo",
    data: {
      username: "Mr.cyzj",
      avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=745008878,2424441072&fm=26&gp=0.jpg",
      slogan: "要永远坚信这一点：一切都会变得，无论受多大创伤心情多么沉重，一贫如洗也好，都要坚持住。太阳落了还会升起，不幸的日子总会有尽头，过去是这样，将来也是这样。",

      // 左边导航组成
      leftNav: {
        enable: true,
        row: 4,
        modules: [
          {
            navName: "导航",
            data: [
              {icon: "el-icon-s-home", title: "首页", path: "/home", _blank: false},
              {icon: "el-icon-s-unfold", title: "追番", path: "/movie", _blank: false},
              {icon: "el-icon-position", title: "友链", path: "/links", _blank: false},
            ]
          },
          {
            navName: "组成",
            data: [
              {
                icon: "", title: "相册", _blank: false, flag: false, children: [
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                ]
              },
              {
                icon: "", title: "页面", _blank: false, flag: false,  children: [
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                ]
              },
              {
                icon: "", title: "友链", _blank: false, flag: false,  children: [
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                  {icon: "", title: "相册", path: "/category/image"},
                ]
              }
            ]
          }
        ]

      },

    }
  }
]
