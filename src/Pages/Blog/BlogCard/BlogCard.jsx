import { Link } from "react-router-dom";
import './BlogCard.css'
const BlogCard = ({ blog }) => {
     const { id, blogImg, blogTitle } = blog;
     return (
          <div className="space-y-6 pb-6  flex flex-col bg-secondaryColor shadow-2xl">
               <div className="image-container">
                    <img className="w-full h-[350px] object-cover" src={blogImg} alt="" />
               </div>


               <div className="px-4">

                    <h1 className="text-base font-medium">{blogTitle}</h1>
               </div>
               <div className=" flex flex-grow px-4">
                    <Link to={`/blog-details/${id}`} className="mt-auto hover:bg-primaryColor font-medium text-white border hover:border-none px-8 py-2  hover:text-black">Explore</Link>
               </div>

          </div>
     );
};

export default BlogCard;