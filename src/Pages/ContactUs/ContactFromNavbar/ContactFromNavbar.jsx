import { NavLink } from "react-router-dom";

const ContactFromNavbar = () => {
     return (
          <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"

               className="space-y-6 mt-20 bg-secondaryColor py-10">
               <h1 className="text-3xl font-semibold text-white text-center">Contact Us</h1>
               <div className="flex justify-center gap-10">
                    <NavLink
                         to={'/contactUs/customerFrom'}
                         end
                         className={({ isActive }) =>
                              isActive
                                   ? 'border-2 border-black py-2 px-3 bg-primaryColor text-secondaryColor font-medium '
                                   : 'border-2 px-3 text-white py-2 hover:text-primaryColor hover:border-primaryColor'
                         }
                    >
                         Customer
                    </NavLink>
                    <NavLink
                         to={'/contactUs/landOwnerFrom'}

                         className={({ isActive }) =>
                              isActive
                                   ? 'border-2 border-black py-2 px-3 bg-primaryColor text-secondaryColor font-medium'
                                   : 'border-2 px-3 text-white py-2 hover:text-primaryColor hover:border-primaryColor'
                         }
                    >
                         Land Owner
                    </NavLink>
               </div>


          </div>
     );
};

export default ContactFromNavbar;
