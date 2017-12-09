import {
  RECEIVE_POSTS,
  REMOVE_SUBREDDIT
} from '../actions/reddit_actions';
import postsReducer from './posts_reducer';

const postsBySubredditReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: postsReducer(state[action.subreddit], action)
      });
    case REMOVE_SUBREDDIT:
      let newState = Object.assign({}, state);
      delete newState[action.subreddit];
      return newState;
    default:
      return state;
  }
};

export default postsBySubredditReducer;
