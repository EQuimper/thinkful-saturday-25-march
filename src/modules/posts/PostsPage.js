import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, createPost } from './actions';

const initialState = {
  title: '',
  author: ''
}

class PostsPage extends Component {
  state = initialState

  componentDidMount() {
    this.props.fetchPosts();
  }

  _handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  _handleFormSubmit = e => {
    e.preventDefault();

    this.props.createPost(this.state);

    this.setState(initialState);
  }

  render() {
    const { posts } = this.props;
    if (posts.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <form onSubmit={this._handleFormSubmit}>
          <input
            type="text"
            placeholder="Title here..."
            value={this.state.title}
            id="title"
            onChange={this._handleChange}
          />
          <input
            type="text"
            placeholder="Author here..."
            value={this.state.author}
            id="author"
            onChange={this._handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <hr />
        {posts.data.map(({ title, author }, i) => (
          <div key={i}>
            <h5>Title: {title}</h5>
            <em>Author: {author}</em>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts
  }),
  { fetchPosts, createPost }
)(PostsPage);