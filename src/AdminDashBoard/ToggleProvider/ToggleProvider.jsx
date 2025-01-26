import PropTypes from "prop-types";
import { createContext, useState } from "react";


export const ToggleSideBarContext = createContext(null);

const ToggleProvider = ({ children }) => {
     const [isOpen, setIsOpen] = useState(true);

     const handelToggleSidebar = () => {
          setIsOpen(!isOpen);
     };

     return (
          <ToggleSideBarContext.Provider value={{ handelToggleSidebar, isOpen }}>
               {children}
          </ToggleSideBarContext.Provider>
     );
};

export default ToggleProvider;


ToggleProvider.propTypes = {

     children: PropTypes.node
}
