import React from "react";

import PropTypes from "prop-types";

import '../theme/PostItem.css';

import like from '../images/like-default.png'

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li className="item">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div className='like'>
        {/* <button onClick={handleClick}>点赞</button>
        &nbsp; */}
        <span><img alt='vote' src={like} onClick={handleClick} /></span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

PostItem.propTypes = {
  post: PropTypes.object,
  onVote: PropTypes.func
};
export default PostItem;
