import {
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    ALL_BLOG_FAIL,
    CLEAR_ERRORS
} from '../constants/blogConstant'
import {axiosInstance} from '../../configuration/api'

export const getBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BLOG_REQUEST });
        const {data} = await axiosInstance.get("/all");
        dispatch({
            type: ALL_BLOG_SUCCESS,
            payload: {data}
        })
      
    } catch (error) {
        dispatch({
            type: ALL_BLOG_FAIL,
            payload: error,
        });
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};