import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";

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


               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
          </div>
     );
};

export default Blog;