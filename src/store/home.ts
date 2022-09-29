import { defineStore } from "pinia";

interface homeType {
  isAsyncRouter: boolean;
  leftDrawerOpen: boolean;
  headerTabsList: Array<tabsType>;
  leftMenuList: Array<menuType>;
}

interface tabsType {
  path: string;
  title: string;
}

const storeHome = defineStore("home", {
  state: () =>
    <homeType>{
      isAsyncRouter: true,
      leftDrawerOpen: false,
      headerTabsList: [],
      leftMenuList: [],
    },
  getters: {},
  actions: {},
});

export default storeHome;
