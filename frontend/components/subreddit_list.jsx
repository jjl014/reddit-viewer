import React from 'react';

export default class SubredditList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubredditList() {
    const { subreddits } = this.props;
    return subreddits.map((subreddit, i) => {
      return <li className="subreddit-tag" key={`subreddit-${i}`}>{`/r/${subreddit}`}</li>;
    });
  }

  render() {
    return (
      <div className="subreddit-list-wrapper">
        <ul className="subreddit-list h-box">
          {this.renderSubredditList()}
        </ul>
      </div>
    );
  }
}
