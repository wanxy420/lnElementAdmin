import Mock from "mockjs";
const Random = Mock.Random;

Mock.setup({
  //设置请求延时时间
  timeout: 1000,
});

let datalist = {
  code: 200,
  msg: "获取成功!",
  data: [
    {
      icon: "Platform",
      name: "homeDashboard",
      path: "/home/dashboard",
      component: "dashboard/index",
      title: "仪表盘",
    },
    {
      icon: "HelpFilled",
      name: "pageManage",
      path: "/home/pageManage",
      component: "",
      title: "基础组件",
      children: [
        {
          name: "pageManageTable",
          path: "/home/pageManage/table",
          component: "pageManage/table/index",
          title: "基础表格",
        },
        {
          name: "pageManageForm",
          path: "/home/pageManage/form",
          component: "pageManage/form/index",
          title: "基础表单",
        },
        {
          name: "pageManageUpload",
          path: "/home/pageManage/upload",
          component: "pageManage/upload/index",
          title: "上传组件",
        },
      ],
    },
    // {
    //   icon: "home",
    //   name: "level",
    //   path: "/home/level",
    //   component: "",
    //   title: "一级菜单",
    //   children: [
    //     {
    //       name: "levelLevel1",
    //       path: "/home/level/level1",
    //       component: "level/level1/",
    //       title: "二级菜单",
    //       children: [
    //         {
    //           name: "levelLevel1Level2",
    //           path: "/home/level/level1/level2",
    //           component: "level/level1/level2/index",
    //           title: "三级菜单",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

Mock.mock("http://127.0.0.1:5173/api/getMenu", "get", datalist);
