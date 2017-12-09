import { Provider } from 'react-redux';
import React from 'react';
import PostListContainer from './components/post_list_container';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
        <PostListContainer />
      </div>
    </Provider>
  );
};

export default App;
