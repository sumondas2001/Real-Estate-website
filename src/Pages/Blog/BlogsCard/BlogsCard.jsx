import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";

const BlogsCard = () => {
     const [blogs, setBlogs] = useState([])
     useEffect(() => {
          axios.get('/Blogs.json')
               .then(res => {
                    setBlogs(res.data)
               })
               .catch(error => {
                    console.log(error);
               })

     }, [])
     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
               {
                    blogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
               }
          </div>
     );
};

export default BlogsCard;