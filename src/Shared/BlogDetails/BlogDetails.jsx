import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";
import PagesTitle from "../PagesTitle/PagesTitle";

const BlogDetails = () => {
     const { id } = useParams();
     const [blogDetails, setBlogDetails] = useState([]);

     const { blogDescription, blogTitle, blogImg } = blogDetails;
     console.log(blogDetails);


     useEffect(() => {
          axios.get('/Blogs.json')
               .then(res => {
                    const blogDetailsData = res?.data.find(blog => blog.id === parseInt(id));
                    setBlogDetails(blogDetailsData)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [id]);


     const info = {
          CoverImg: blogImg,
          title: "Blog Details",
          description: blogTitle,

     };
     return (
          <div>
               <PagesTitle title={'Blog-Details'} />
               <PagesCoverImg info={info} />


               <div


                    className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] space-y-10  mx-auto  mt-20 mb-10">
                    <h1
                         data-aos="fade-up"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"


                         className="md:text-2xl lg:text-3xl text-xl text-primaryColor font-semibold">{blogTitle}</h1>
                    <p
                         data-aos="fade-up"
                         data-aos-offset="100"
                         data-aos-delay="150"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"

                         className="text-lg font-light text-white text-justify leading-8">{blogDescription}</p>
               </div>
          </div>
     );
};

export default BlogDetails;