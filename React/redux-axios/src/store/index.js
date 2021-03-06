import { createStore } from "redux";
import reducer from "./reducer";
//创建一个store,一个数据公共存储仓库

const store = createStore(
  reducer,
  /**开启redux调试工具 */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
