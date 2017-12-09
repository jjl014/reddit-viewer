import {
  RECEIVE_POSTS
} from '../actions/reddit_actions';
import postsReducer from './posts_reducer';

const postsBySubredditReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: postsReducer(state[action.subreddit], action)
      });
    default:
      return state;
  }
};

export default postsBySubredditReducer;
