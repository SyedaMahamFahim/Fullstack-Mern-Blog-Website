import React, { Fragment, useEffect } from 'react';
import Header from "../components/Header";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import { useDispatch, useSelector } from "react-redux";
import {
    getBlogs,
    clearErrors,
} from "../store/actions/blogActions";
const PageBlog = () => {
    const dispatch = useDispatch();
    const {loading, blogs, error } = useSelector(
        (state) => state.blogs
    );

    
if(loading){
    console.log("Loading")
}else{
    console.log("this is all blogs", blogs )
}

    useEffect(() => {
        if (error) {
          dispatch(clearErrors());
        }
        else{
            dispatch(getBlogs())
        }
      }, [dispatch,error]);

    return (
        <Fragment>
            <Header />
            <BlogPage blog_type={'list'} sidebar={true} sidebar_position={'left'} />
            <CallToAction />
            <Footer />
            <LoginRegister />
            <MobileMenu />
        </Fragment>
    );
};

export default PageBlog;