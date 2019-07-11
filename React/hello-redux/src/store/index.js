import { createStore } from "redux";
import reducer from "./reducer";
//创建一个store,一个数据公共存储仓库

const store = createStore(reducer);

export default store;