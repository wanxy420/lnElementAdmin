import { defineStore } from "pinia";

interface homeType {
  isAsyncRouter: boolean;
  leftDrawerOpen: boolean;
  headerTabsList: Array<tabsType>;
  includeList: Array<string>;
  leftMenuList: Array<menuType>;
}

interface tabsType {
  name: string;
  path: string;
  title: string;
}

const storeHome = defineStore("home", {
  state: () =>
    <homeType>{
      isAsyncRouter: true,
      leftDrawerOpen: false,
      headerTabsList: [],
      includeList: [],
      leftMenuList: [],
    },
  getters: {},
  actions: {},
});

export default storeHome;
