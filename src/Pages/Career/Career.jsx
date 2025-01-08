import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import DepartmentsSection from "./DepartmentsSection/DepartmentsSection";
import EmpoweringGrowth from "./EmpoweringGrowth/EmpoweringGrowth";
import JobFrom from "./JobFrom/JobFrom";

const Career = () => {
     const CoverImg = 'https://sheltech.com.bd/CMS/admin/uploads/page/career/1707390346Jc754.jpg';
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
               <EmpoweringGrowth></EmpoweringGrowth>

               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto" >
                    <JobFrom></JobFrom>
               </div>
               <DepartmentsSection></DepartmentsSection>
          </div>
     );
};

export default Career;