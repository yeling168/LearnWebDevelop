import React, { Component } from "react";

import "../theme/BbsPostItem.css";

import like from "../images/like-default.png";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false, //帖子是否处于编辑态
      post: props.post
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  //更新阶段
  //componentWillReceiveProps(nextProps)
  //这个方法只在props引起的组件更新过程中，才会被调用。State引起的组件更新不会触发
  //该方法的执行。方法的参数nextProps是父组件传递给当前组件的新的props。但如上文所述，父组件render
  //方法的调用并不能保证传递给子组件的props发生了变化，也就是说nextProps的值可能和
  //子组件当前props的值相等，因此往往需要比较nextProps和this.props来决定是否执行props发生变化后的逻辑
  //比如根据新的props调用this.setState触发组件的重新渲染

  //在componentWillReceiveProps中调用setState，只有在组件render及其之后的方法中
  //this.state指向的才是更新后的state。在render之前的方法shouldComponentUpdate 、componentWillUpdate 中中
  //this.state依然指向的是更新前的state
  componentWillReceiveProps(nextProps) {
    //父组件更新post后，更新postItem的state
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      });
    }
  }

  //处理点赞事件
  handleVote() {
    this.props.onVote(this.props.post.id);
  }

  //保存，编辑按钮点击之后的逻辑
  handleEditPost() {
    const editing = this.state.editing;
    //当前处于编辑态，调用父组件传递的onSave方法保存帖子
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFormaDate()
      });
    }
    this.setState({
      editing: !editing
    });
  }

  //处理标题textarea值的变化

  handleTitleChange(event) {
    const newPost = {
      ...this.state.post,
      title: event.target.value
    };
    this.setState({
      post: newPost
    });
  }

  getFormaDate() {
    //省略
  }

  render() {
    const { post } = this.state;
    return (
      <li className="item">
        <div className="title">
          {this.state.editing ? (
            <form>
              <textarea value={post.title} onChange={this.handleTitleChange} />
            </form>
          ) : (
            post.title
          )}
        </div>
        <div>
          创建人:<span>{post.author}</span>
        </div>
        <div>
          创建时间:<span>{post.date}</span>
        </div>
        <div className="like">
          <span>
            <img alt="vote" src={like} onClick={this.handleVote} />
          </span>
          <span>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? "保存" : "编辑"}
          </button>
        </div>
      </li>
    );
  }
}

export default PostItem;
