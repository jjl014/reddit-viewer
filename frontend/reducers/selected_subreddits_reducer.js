const _defaultState = ["news", "gifs"];

const selectedSubredditsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default selectedSubredditsReducer;
