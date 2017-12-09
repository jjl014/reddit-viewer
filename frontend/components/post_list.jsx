import React from 'react';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {subreddits, getPostsBySubreddit} = this.props;
    subreddits.forEach(subreddit => {
      getPostsBySubreddit(subreddit);
    });
  }

  renderPostsByPopularity() {

  }

  render() {

    return (
      <div className="post-list-wrapper">
        <ul className="post-list">

        </ul>
      </div>
    );
  }
}
