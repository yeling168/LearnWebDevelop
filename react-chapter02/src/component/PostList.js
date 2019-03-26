import React, { Component } from "react";

import PostItem from "./PostItem";

import Welcome from "./Welcome";

import Blog from "./Blog";

import "../theme/PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null; //定时器
    this.handleVote = this.handleVote.bind(this); //ES6 class中，必须手动绑定方法this的指向
  }
  //componentDidMount:在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
  componentDidMount() {
    //用setTimeout模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React 吧",
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

  //componentWillUnmount在组件从 DOM 中移除之前立刻被调用。
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleVote(id) {
    //根据帖子id 进行过滤，找到待修改vote 属性的帖子，返回新的posts 对象
    const posts = this.state.posts.map(item => {
      const newitem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newitem;
    });
    this.setState({
      posts
    });
  }

  render() {
    //posts 结构
    const posts = [
      { id: 1, title: "Hello React", content: "Welcome to learning React !" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm."
      }
    ];
    return (
      <div>
        帖子列表:
        <ul>
          {/* {this.state.posts.map((item, i) => (
          <PostItem key={i} post={item} onVote={this.handleVote} />
        ))} */}
          {this.state.posts.map((item, i) => (
            <PostItem key={i} post={item} onVote={this.handleVote} />
          ))}
        </ul>
        <ul>
          <Welcome name="world" />
        </ul>
        <ul>
          <Blog name="beyondthestars" posts={posts}/>
        </ul>
      </div>
    );
  }
}

export default PostList;
