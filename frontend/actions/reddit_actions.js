export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_SUBREDDIT = "SELECT_SUBREDDIT";
export const REMOVE_SUBREDDIT = "REMOVE_SUBREDDIT";
const url = "https://www.reddit.com";

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data)
});

export const addSubreddit = (subreddit) => ({
  type: ADD_SUBREDDIT,
  subreddit
});

export const removeSubreddit = (subreddit) => ({
  type: REMOVE_SUBREDDIT,
  subreddit
});

export const fetchPostsBySubreddit = (subreddit) => dispatch => (
  fetch(`${url}/r/${subreddit}.json`)
    .then(res => res.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
    .catch(err => console.log(err))
);
