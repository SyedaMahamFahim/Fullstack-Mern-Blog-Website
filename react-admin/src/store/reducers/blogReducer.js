import{
    ADMIN_BLOG_REQUEST,ADMIN_BLOG_SUCCESS,ADMIN_BLOG_FAIL
} from '../constants/blogConstants'

export const adminBlogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case ADMIN_BLOG_REQUEST:
        return {
          loading: true,
          blogs: [],
        };
      case ADMIN_BLOG_SUCCESS:
        return {
          loading: false,
          blogs: action.payload.BLOGs,
        };
      case ADMIN_BLOG_FAIL:
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