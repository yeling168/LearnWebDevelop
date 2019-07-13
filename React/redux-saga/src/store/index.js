import { createStore,applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
//创建一个store,一个数据公共存储仓库
const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(todoSagas);

export default store;

/**开启redux调试工具 */
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
