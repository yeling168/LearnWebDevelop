//AppStore管理的state包括应用当前的请求数量requestQuantity和应用的错误信息error

import { observable, computed, action } from "mobx";

class AppStore {
  @observable requestQuantity = 0;
  @observable error = null;

  //requestQuantity间接决定界面上是否需要显示Loading效果，因此可以创建一个computed value
  //直接标识是否需要显示Loading效果

  @computed get isLoading() {
    return this.requestQuantity > 0;
  }
  //当前进行的请求数量加1
  @action increaseRequest() {
    this.requestQuantity++;
  }

  //当前进行的请求数量减1
  @action decreaseRequest() {
    if (this.requestQuantity > 0) {
      this.requestQuantity--;
    }
  }
  //设置错误信息
  @action setError(error) {
    this.error = error;
  }

  //删除错误信息
  @action.bound removeError() {
    this.error = null;
  }
}
export default AppStore;

//这里，removeError使用@action.bound绑定this，因为存在removeError不是通过AppStore实例
//调用的场景，而是直接作为组件的回调函数被使用。为了保证removeError中的this一直指向的是
//AppStore的实例对象，所以使用了@action.bound.
