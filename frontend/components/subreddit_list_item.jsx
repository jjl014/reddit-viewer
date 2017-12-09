import React from 'react';

const SubredditListItem = ({subreddit, deleteSubreddit}) => {
  return (
    <li className="subreddit-tag">
      {`/r/${subreddit}`}
      <button onClick={deleteSubreddit}><i className="fa fa-times" aria-hidden="true"></i></button>
    </li>
  );
};

export default SubredditListItem;
