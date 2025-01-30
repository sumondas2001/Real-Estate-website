import { NavLink } from "react-router-dom";

const ProjectsNavBar = () => {
     return (
          <div className="space-y-6  py-10">

               <div className="flex justify-start text-white lg:gap-10 md:gap-6 gap-3 ">
                    <NavLink
                         to={'/property/all-projects'}
                         end
                         className={({ isActive }) =>
                              isActive
                                   ? 'border-2 border-black py-2 px-3 bg-primaryColor text-secondaryColor font-medium lg:text-base md:text-base text-sm'
                                   : 'border-2 px-3 py-2 hover:text-primaryColor hover:border-primaryColor lg:text-base md:text-base text-sm'
                         }
                    >
                         ALL
                    </NavLink>
                    <NavLink
                         to={'/property/up-coming-projects'}

                         className={({ isActive }) =>
                              isActive
                                   ? 'border-2 border-black py-2 px-3 bg-primaryColor lg:text-base md:text-base text-sm text-secondaryColor font-medium'
                                   : 'border-2 px-3 py-2 hover:text-primaryColor hover:border-primaryColor lg:text-base md:text-base text-sm'
                         }
                    >
                         UPCOMING
                    </NavLink>
                    <NavLink
                         to={'/property/completed'}

                         className={({ isActive }) =>
                              isActive
                                   ? 'border-2 border-black py-2 px-3 bg-primaryColor lg:text-base md:text-base text-sm text-secondaryColor font-medium'
                                   : 'border-2 px-3 py-2 hover:text-primaryColor hover:border-primaryColor lg:text-base md:text-base text-sm'
                         }
                    >
                         COMPLETED
                    </NavLink>
               </div>


          </div>
     );
};

export default ProjectsNavBar;