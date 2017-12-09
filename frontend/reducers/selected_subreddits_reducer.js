import {
  ADD_SUBREDDIT,
  REMOVE_SUBREDDIT
} from '../actions/reddit_actions';

const _defaultState = {
  "news": true,
  "gifs": true
};

const selectedSubredditsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_SUBREDDIT:
      return Object.assign({}, state, {[action.subreddit]: true});
    case REMOVE_SUBREDDIT:
      let newState = Object.assign([], state);
      newState[action.subreddit] = false;
      return newState;
    default:
      return state;
  }
};

export default selectedSubredditsReducer;
