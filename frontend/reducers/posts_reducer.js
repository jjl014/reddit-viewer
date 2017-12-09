import {
  RECEIVE_POSTS
} from '../actions/reddit_actions';

const _defaultState = {
  items: []
};

const postsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      });
    default:
      return state;
  }
};

export default postsReducer;
