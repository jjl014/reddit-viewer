import React from 'react';

const PostListItem = ({post}) => {
  return (
    <li className="post-list-item h-box">
      <div className="score-wrapper flex-center"><h3>{post.score}</h3></div>
        {
          !post.thumbnail || post.thumbnail === "self" ?
          null :
          <div className="post-img-wrapper">
            <img src={post.thumbnail}/>
          </div>
        }
      <div className="title-info-wrapper v-box">
        <div><a href={post.url}><h2>{post.title}</h2></a></div>
        <p>Posted by <span>{post.author}</span></p>
      </div>
    </li>
  );
};

export default PostListItem;
