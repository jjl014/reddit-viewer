import { connect } from 'react-redux';
import SubredditList from './subreddit_list';
import {
  removeSubreddit
} from '../actions/reddit_actions';

const mapStateToProps = (state) => {
  return {
    subreddits: state.selectedSubreddits,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeSubreddit: (subreddit) => dispatch(removeSubreddit(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList);
