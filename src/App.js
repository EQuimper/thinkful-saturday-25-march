import React, { Component } from 'react';

import { PostsPage } from './modules';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

class App extends Component {
  render() {
    return (
      <div style={style}>
        <PostsPage />
      </div>
    );
  }
}

export default App;
