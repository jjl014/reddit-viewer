import { connect } from 'react-redux';
import Search from './search';
import {
  addSubreddit,
  fetchPostsBySubreddit
} from '../actions/reddit_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addSubreddit: (subreddit) => dispatch(addSubreddit(subreddit)),
  fetchPostsBySubreddit: (subreddit) => dispatch(fetchPostsBySubreddit(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
