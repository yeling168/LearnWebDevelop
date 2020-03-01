import { login, getInfo } from "@/api/login";
import { Message } from "element-ui";

const state = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "", // 认证凭证'
  userName: "",
  roles: [],
  introduce: ""
};

const mutations = {
  SET_TOKEN(state, val) {
    state.token = val;
    localStorage.setItem("token", val);
  },
  DEL_TOKEN(state) {
    state.token = "";
    state.userName = "";
    state.roles = "";
    state.introduce = "";
    localStorage.removeItem("token");
  }
};

const actions = {
  // user login
  _login({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      login(formdatas)
        .then(res => {
          if (res.code === 0) {
            if (res.data.success) {
              Message.success(res.data.msg);
              commit("SET_TOKEN", res.data.token);
            } else {
              Message.error(res.data.msg);
            }
            resolve(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
  }