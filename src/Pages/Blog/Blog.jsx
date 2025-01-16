import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import BlogsCard from "./BlogsCard/BlogsCard";

const Blog = () => {
     const CoverImg = 'https://i.ibb.co.com/K9HLZZF/daria-nepriakhina-nw-Mx-Sz-GFB68-unsplash.jpg';
     const title = 'BLOG'
     const description = 'Insights from the inside of Real State';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>
               <PagesTitle title={"Blog"}></PagesTitle>


               <PagesCoverImg info={info} ></PagesCoverImg>

               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto mt-20 mb-20">
                    <BlogsCard></BlogsCard>
               </div>

          </div>
     );
};

export default Blog;