import React from 'react';
import SubredditListItem from './subreddit_list_item';

export default class SubredditList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteSubreddit(subreddit) {
    console.log("hi");
    return () => {
      console.log(`deleting ${subreddit}`);
      this.props.removeSubreddit(subreddit);
    };
  }

  renderSubredditList() {
    const { subreddits, removeSubreddit } = this.props;
    return Object.keys(subreddits).map((subreddit, i) => {
      if (subreddits[subreddit]) {
        return (
          <SubredditListItem
            subreddit={subreddit}
            key={`subreddit-${i}`}
            deleteSubreddit={this.deleteSubreddit(subreddit)}/>
        );
      }
    });
  }

  render() {
    return (
      <div className="subreddit-list-wrapper">
        <ul className="subreddit-list h-box flex-center">
          {this.renderSubredditList()}
        </ul>
      </div>
    );
  }
}
