import Mock from "mockjs";

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
      name: "dashboardPage",
      path: "/home/dashboard",
      component: "dashboard/dashboardPage",
      title: "仪表盘",
    },
    {
      icon: "HelpFilled",
      name: "basis",
      path: "/home/basis",
      component: "",
      title: "基础组件",
      children: [
        {
          name: "basisTablePage",
          path: "/home/basis/table",
          component: "basis/table/basisTablePage",
          title: "基础表格",
        },
        {
          name: "basisFormPage",
          path: "/home/basis/form",
          component: "basis/form/basisFormPage",
          title: "基础表单",
        },
        {
          name: "basisUploadPage",
          path: "/home/basis/upload",
          component: "basis/upload/basisUploadPage",
          title: "上传组件",
        },
      ],
    },
    {
      icon: "GoodsFilled",
      name: "senior",
      path: "/home/senior",
      component: "",
      title: "高级组件",
      children: [
        {
          name: "seniorTableV2Page",
          path: "/home/senior/tableV2",
          component: "senior/tableV2/seniorTableV2Page",
          title: "虚拟化表格",
        },
        // {
        //   name: "seniorEditTablePage",
        //   path: "/home/senior/editTable",
        //   component: "senior/editTable/seniorEditTablePage",
        //   title: "可编辑表格",
        // },
        {
          name: "seniorLnDialogPage",
          path: "/home/senior/lnDialog",
          component: "senior/lnDialog/seniorLnDialogPage",
          title: "内嵌式弹窗",
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
