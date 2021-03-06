import { connect } from 'react-redux';
import PostList from './post_list';
import {
  fetchPostsBySubreddit
} from '../actions/reddit_actions';

const mapStateToProps = (state) => {
  return {
    subreddits: state.selectedSubreddits,
    posts: state.postsBySubreddit
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPostsBySubreddit: (subreddit) => dispatch(fetchPostsBySubreddit(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
