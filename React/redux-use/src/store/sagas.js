/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

/**docs refer to https://github.com/redux-saga/redux-saga */
import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

//getInitList既可以是普通函数，也可以是Generator函数。最好是Generator函数。
function* getInitList() {
  //console.log("abc");
  //Generator函数里面的异步请求不能用promise
  //   axios.get("http://localhost:3004/posts").then(res => {
  //     const data = res.data;
  //     const action = initListAction(data);
  //     put(action);
  //   });

  try {
    //res会一直等待ajax请求数据获取完毕，将结果存在res
    const res = yield axios.get("http://localhost:3004/posts");
    const action = initListAction(res.data);
    //等action处理完成之后再继续往下执行代码
    yield put(action);
  } catch (e) {
    console.log("list.json网络请求失败！");
  }
}

function* mySaga() {
  //takeEvery捕捉每一个action类型
  //捕捉到GET_INIT_LIST就执行fetchUser
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
