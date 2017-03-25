import axios from 'axios';

const url = 'http://localhost:3004/posts';

/**
 * FETCH POST
 */
export const FETCH_POSTS = 'posts/FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'posts/FETCH_POSTS_ERROR';

export const fetchPosts = () => async dispatch => {
  dispatch({ type: FETCH_POSTS });

  try {
    const { data } = await axios.get(url);
    return dispatch({ type: FETCH_POSTS_SUCCESS, data });
  } catch (error) {
    return dispatch({ type: FETCH_POSTS_ERROR, error });
  }
}

/**
 * CREATE POST
 */
export const CREATE_POST = 'posts/CREATE_POST';
export const CREATE_POST_SUCCESS = 'posts/CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'posts/CREATE_POST_ERROR';

export const createPost = args => async dispatch => {
  dispatch({ type: CREATE_POST });

  try {
    const { data } = await axios.post(url, args);
    return dispatch({ type: CREATE_POST_SUCCESS, data });
  } catch (error) {
    return dispatch({ type: CREATE_POST_ERROR, error });
  }
}