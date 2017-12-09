import { connect } from 'react-redux';
import SubredditList from './subreddit_list';

const mapStateToProps = (state) => {
  return {
    subreddits: state.selectedSubreddits,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList);
