import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
     const { id, blogImg, blogTitle } = blog;
     return (
          <div className="space-y-5 transition">
               <div>
                    <img className="w-full h-96 object-cover" src={blogImg} alt="" />
               </div>

               <div className="flex-grow flex flex-col">
                    <h1 className="text-base font-medium">{blogTitle}</h1>

                    <Link className="btn btn-secondary">Explore</Link>
               </div>
          </div>
     );
};

export default BlogCard;