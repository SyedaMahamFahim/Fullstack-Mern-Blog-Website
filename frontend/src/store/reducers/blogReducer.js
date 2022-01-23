import {
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    ALL_BLOG_FAIL,
    CLEAR_ERRORS
} from '../constants/blogConstant'

const initialState = {
  blogs:[],
  loading:true
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ALL_BLOG_REQUEST:
        return {
            loading: true,
            blogs: [],
          };
      case ALL_BLOG_SUCCESS:
        return {
          loading: false,
          blogs: action.payload.data.blogPosts,
        };
  
      case ALL_BLOG_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };