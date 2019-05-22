//AuthStore负责用户的登录认证，使用到的state包括userId,username和password,除了包含直接修改这几个state的action外
//还定义了登录和注销两个action，这两个action涉及网络请求，所以又会改变AppStore的state，我们通过构造函数把AppStore
//的实例和登录API传递给AuthStore，代码如下

import { observable, action } from "mobx";
class AuthStore {
  api;
  appStore;
  @observable userId = sessionStorage.getItem("userId");
  @observable username = sessionStorage.getItem("username");
  @observable password = "";
  //通过构造函数传递AppStore的实例对象和登录相关的API
  constructor(api, appStore) {
    this.api = api;
    this.appStore = appStore;
  }

  @action setUsername(username) {
    this.username = username;
  }
  @action setPassword(password) {
    this.password = password;
  }

  @action login() {
    this.appStore.increaseRequest();
    const params = {
      username: this.username,
      password: this.password
    };
    //异步回调函数需要单独定义成一个action
    return this.api.login(params).then(
      action(data => {
        this.appStore.decreaseRequest();
        if (!data.error) {
          this.userId = data.userId;
          sessionStorage.setItem("userId", this.userId);
          sessionStorage.setItem("username", this.username);
          return Promise.resolve();
        } else {
          this.appStore.setError(data.error);
          return Promise.reject();
        }
      })
    );
  }

  @action.bound logout() {
    this.userId = null;
    this.username = null;
    this.password = null;
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
  }
}

export default AuthStore;
