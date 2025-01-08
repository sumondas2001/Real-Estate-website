import { NavLink } from "react-router-dom";

const ContactFromNavbar = () => {
     return (
          <div className="space-y-6 mt-20 bg-slate-950 py-10">
               <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
               <div className="flex justify-center gap-10">
                    <NavLink
                         to={'customerFrom'}
                         className={({ isActive }) =>
                              isActive ? 'border-2 border-black py-2  px-3 bg-primaryColor text-secondaryColor font-medium' : 'border-2 px-3 py-2 '
                         }
                    >
                         Customer
                    </NavLink>
                    <NavLink
                         to={'landOwnerFrom'}
                         className={({ isActive }) =>
                              isActive ? 'border-2 border-black py-2  px-3 bg-primaryColor text-secondaryColor font-medium' : 'border-2 px-3 py-2 '
                         }
                    >
                         Land Owner
                    </NavLink>
               </div>

          </div>
     );
};

export default ContactFromNavbar;
