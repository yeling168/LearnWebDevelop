import { createStore, applyMiddleware } from "redux";

import trunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

//现在定义一个异步action模拟向服务器请求数据

//异步action

function getData(url) {
  return function(dispatch) {
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log("An error occured", error)
      )
      .then(json =>
        dispatch({
          type: "RECEIVE_DATA",
          data: json
        })
      );
  };
}

//发送这个action

store.dispatch(getData("http://xxx"));

{
    type:'FETCH_DATA_REQUEST'
}

{
    type:'FETCH_DATA_SUCCESS',data:{...}
}

{
    type:'FETCH_DATA_FAILURE',error:'Oops'
}

//使用这三个action改写上面的代码

//异步action

function getData(url){
    return function(dispatch){
        dispatch({type:'FETCH_DATA_REQUEST'});
        return fetch(url).then(
            response=>response.json(),error=>{
                console.log('An error occured.',error);
                dispatch({
                    type:'FETCH_DATA_FAILURE',error
                });
            }.then(json=>dispatch({type:'FETCH_DATA_SUCCESS',data:json});
        )
    }
}