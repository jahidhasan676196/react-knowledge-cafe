import { useState } from "react";
import Blog from "./Blog/Blog";
import { useEffect } from "react";
import propTypes from "prop-types";


const Blogs = ({handleClick,handleMarkRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3 border space-y-8">
            {
                blogs.map(blog=><Blog key={blog.id} 
                     blog={blog}
                     handleClick={handleClick}
                     handleMarkRead={handleMarkRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleClick:propTypes.func,
    handleMarkRead:propTypes.func
}
export default Blogs;