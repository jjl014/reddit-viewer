import React from 'react';
import PostListItem from './post_list_item';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {subreddits, getPostsBySubreddit} = this.props;
    Object.keys(subreddits).forEach(subreddit => {
      getPostsBySubreddit(subreddit);
    });
  }

  renderPostsByPopularity() {
    const { posts } = this.props;
    const postListBySubreddit = Object.keys(posts).map(subreddit => {
      return posts[subreddit].items;
    });
    const allPosts = [].concat.apply([], postListBySubreddit);
    const sortedPosts =  allPosts.sort((a,b) => a.score < b.score ? 1 : -1);
    return sortedPosts.map((post, i) => {
      return <PostListItem post={post} key={`post-${i}`}/>;
    });
  }

  render() {
    return (
      <div className="post-list-wrapper">
        <ul className="post-list">
          {this.renderPostsByPopularity()}
        </ul>
      </div>
    );
  }
}
