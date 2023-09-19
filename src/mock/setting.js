import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    siteTitle: "Ma-Yuhang",
    github: "https://github.com/Ma-Yuhang",
    qq: "2312165827",
    weixin: "a19883315871",
    mail: "ma_yuhang@sina.com",
    githubName: "Ma-Yuhang",
  },
});