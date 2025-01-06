import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";

const About = () => {
     const CoverImg = 'https://sheltech.com.bd/CMS/admin/uploads/page/about-us/1707390568PpFJs.jpg';
     const title = 'ABOUT'
     const description = 'Take the next big step with Real State';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>


               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
          </div>
     );
};

export default About;