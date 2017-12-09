import { combineReducers } from 'redux';
import postsBySubredditReducer from './posts_by_subreddit_reducer';
import selectedSubredditsReducer from './selected_subreddits_reducer';

const rootReducer = combineReducers({
  postsBySubreddit: postsBySubredditReducer,
  selectedSubreddits: selectedSubredditsReducer
});

export default rootReducer;
