import axios from 'axios'
import{
    ADMIN_BLOG_REQUEST,ADMIN_BLOG_SUCCESS,ADMIN_BLOG_FAIL
} from '../constants/blogConstants'

// Get All BLOGs For Admin
export const getAdminBlog = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BLOG_REQUEST });
  
      const { data } = await axios.get("api/v1/blogs/admin/blogs/all");
  
      dispatch({
        type: ADMIN_BLOG_SUCCESS,
        payload: data.BLOGs,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  