import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";

const Career = () => {
     const CoverImg = 'https://i.ibb.co.com/tDwRrT4/point3d-commercial-imaging-ltd-f-3-Xo-WAE-CQ-unsplash.jpg';
     const title = 'CAREER'
     const description = 'Take the next big step with Career';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>

               <PagesTitle title={"Career"}></PagesTitle>


               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
          </div>
     );
};

export default Career;