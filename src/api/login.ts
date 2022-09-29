import axios from "@/axios/index";
import "@/mock/login.ts";
import "@/mock/menu.ts";

export const login = (params: LoginData) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<RequestData>("/login", params);
};

export const getMenu = () => {
  // 返回的数据格式可以和服务端约定
  return axios.get<RequestData>("/getMenu");
};
