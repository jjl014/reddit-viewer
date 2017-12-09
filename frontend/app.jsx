import { Provider } from 'react-redux';
import React from 'react';
import PostListContainer from './components/post_list_container';
import SubredditListContainer from './components/subreddit_list_container';
import SearchContainer from './components/search_container';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <SearchContainer />
        <SubredditListContainer />
        <PostListContainer />
      </div>
    </Provider>
  );
};

export default App;
