import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";

const ContactUs = () => {
     const CoverImg = 'https://i.ibb.co.com/N9GN1Cw/pyx-photography-n-UOi3-Nh4-L9w-unsplash.jpg';
     const title = 'CONTACTS'
     const description = 'CONTACT OUR TEAM OF PROFESSIONALS FOR SUPPORT';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>
               <PagesTitle title={"ContactUs"}></PagesTitle>


               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
          </div>
     );
};

export default ContactUs;