import { defineStore } from "pinia";

interface configType {
  isMobile: boolean;
}

const storeHome = defineStore("home", {
  state: () =>
    <configType>{
      isMobile: false,
    },
  getters: {},
  actions: {},
});

export default storeHome;
