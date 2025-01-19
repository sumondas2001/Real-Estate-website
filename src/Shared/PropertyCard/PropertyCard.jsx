import PropTypes from "prop-types";

import './propertyCard.css'
import { Link } from "react-router-dom";

const PropertyCary = ({ property }) => {
     const { img, location, title, propertyname, id } = property;
     return (
          <Link to={`/property-details/${id}`}>
               <div
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"


                    className="space-y-6 ">
                    <div className="image-container">
                         <img
                              className="w-full h-[500px] object-cover"
                              src={img}
                              alt={propertyname}
                         />
                    </div>
                    <div className="space-y-2 text-start">
                         <h1 className="text-base font-light">{title.toUpperCase()}</h1>
                         <h3 className="text-xl font-medium text-primaryColor">
                              {propertyname.toUpperCase()}
                         </h3>
                         <p className="text-base font-light">{location.toUpperCase()}</p>
                    </div>
               </div>
          </Link>
     );
};

export default PropertyCary;


PropertyCary.propTypes = {

     property: PropTypes.object,
}