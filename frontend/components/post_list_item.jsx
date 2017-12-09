import React from 'react';

const PostListItem = ({post}) => {
  return (
    <li>
      <div>
        <img src={post.thumbnail}/>
      </div>
      <div>
        {post.score} - <a href={post.url}>{post.title}</a>
      </div>
    </li>
  );
};

export default PostListItem;
