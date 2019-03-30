import React, { Component } from "react";

import PostItem from "./BbsPostItem";

import SimpleForm from './SimpleForm';

import "../theme/BbsPostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  //挂载阶段
  //componentDidMount 在组件被挂载到DOM后调用，且只会被调用一次。这时候已经可以获取到DOM结构，因此
  //依赖DOM节点的操作可以放到这个方法中。这个方法通常还会用于向服务器端发送请求数据。在这个方法中调用
  //this.setState会引起组件的重新渲染。

  componentDidMount() {
    // 用setTimeout模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张三",
            date: "2017-09-01 10:00",
            vote: 0
          },
          {
            id: 2,
            title: "前端框架，你最爱哪一个",
            author: "李四",
            date: "2017-09-01 12:00",
            vote: 0
          },
          {
            id: 3,
            title: "Web App的时代已经到来",
            author: "王五",
            date: "2017-09-01 14:00",
            vote: 0
          }
        ]
      });
    }, 1000);
  }

  //卸载阶段
  //组件从DOM中被卸载的过程，这个过程中只有一个生命周期方法componentWillUnmount
  //这个方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清理组件中使用的定时器
  //清除componentDidMount中手动创建的DOM元素等，以免引起内存泄漏
  //只有类组件才具有生命周期方法，函数组件是没有生命周期方法的，因此永远不要在函数组件中使用生命周期方法
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  // 处理点赞逻辑
  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({
      posts
    });
  }
  //保存帖子
  handleSave(post) {
    //根据post的id，过滤出当前要更新的post
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item;
      return newItem;
    });

    this.setState({
      posts
    });
  }

  render() {
    return (
      <div className="container">
        <h2>帖子列表</h2>
        <ul>
          {this.state.posts.map(item => (
            <PostItem
              key={item.id}
              post={item}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          ))}
        </ul>
        <hr/>
        <ul>
          <SimpleForm/>
        </ul>
      </div>
    );
  }
}

export default PostList;
