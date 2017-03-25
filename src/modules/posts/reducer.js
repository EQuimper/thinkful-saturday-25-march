import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR
} from './actions';

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
    case CREATE_POST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case CREATE_POST_ERROR:
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.data]
      };
    default:
      return state;
  }
};