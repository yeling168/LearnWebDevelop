//该模块作为Redux的根模块。在index.js中做的事情很简单，只是将其余模块中的reducer合并成一个根reducer

import {combineReducers} from 'redux';
import app from './app';
import auth from './auth';
import ui from './ui';
import comments from './comments';
import posts, { getPostIds, getPostById } from "./posts";
import users,{getUserById} from './users';

//合并所有模块的reducer成一个根reducer

const rootReducer = combineReducers({
    app,
    auth,
    ui,
    posts,
    comments,
    users
  });
  
  export default rootReducer;

 /*  当需要以多个模块的state作为selector的输入时，这个selector就不再适合定义在某个具体模块中
  这种情况中，我们定义到redux/module/index.js。例如，posts模块的state只包含作者的ID信息，
  但当展示帖子列表时，需要显示的是作者的用户名，而作者信息需要从users模块获取，因此获取帖子
  列表的selector就应该定义在redux/module/index.js中 */

export const getPostListWithAuthors=state=>{
    //通过posts模块的getPostIds获取所有帖子的id
    const postIds=getPostIds(state);
    return postIds.map(id=>{
        //通过posts模块的getPostById获取每个帖子的详情
        const post=getPostById(state,id);
        //users模块的getUserById获取作者信息，并将作者信息合并到post对象中
        return {...post,author:getUserById(state,post.author)};
    })
}