import Mock from "mockjs";
const Random = Mock.Random;

Mock.setup({
  //设置请求延时时间
  timeout: 1000,
});

let datalist = {
  code: 200,
  msg: "获取成功!",
  data: [] as Array<any>,
};

Mock.mock("http://127.0.0.1:5173/api/login", "post", datalist);
