import { Outlet } from "react-router-dom";
import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import ContactFromNavbar from "./ContactFromNavbar/ContactFromNavbar";
import AddressSection from "./AddressSection/AddressSection";

const ContactUs = () => {
     const CoverImg = 'https://i.ibb.co.com/N9GN1Cw/pyx-photography-n-UOi3-Nh4-L9w-unsplash.jpg';
     const title = 'CONTACTS';
     const description = 'CONTACT OUR TEAM OF PROFESSIONALS FOR SUPPORT';
     const info = {
          CoverImg,
          title,
          description
     };

     return (
          <div>
               <PagesTitle title={"ContactUs"} />
               <PagesCoverImg info={info} />

               <div className="lg:max-w-[1200px] md:max-w-[700px] mb-20 max-w-[360px] mx-auto">
                    <ContactFromNavbar></ContactFromNavbar>
                    <Outlet></Outlet>
               </div>
               <AddressSection></AddressSection>
          </div>
     );
};

export default ContactUs;
