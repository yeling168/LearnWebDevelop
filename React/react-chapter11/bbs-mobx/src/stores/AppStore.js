//AppStore管理的state包括应用当前的请求数量requestQuantity和应用的错误信息error

import { observable, computed, action } from "mobx";

class AppStore {
  @observable requestQuantity = 0;
  @observable error = null;

  //requestQuantity间接决定界面上是否需要显示Loading效果，因此可以创建一个computed value
  //直接标识是否需要显示Loading效果

  @computed get isLoading(){
      return this.requestQuantity>0;
  }
  //当前进行的请求数量加1
  @action increaseRequest(){
      this.requestQuantity++;
  }

  //
}
