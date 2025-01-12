import PropTypes from "prop-types";

import './propertyCard.css'

const PropertyCary = ({ property }) => {
     const { img, location, title, propertyname } = property;
     return (
          <div className="space-y-6">
               <div className="image-container">
                    <img
                         className="w-full h-[500px] object-cover"
                         src={img}
                         alt={propertyname}
                    />
               </div>
               <div className="space-y-2 text-center">
                    <h1 className="text-base font-light">{title.toUpperCase()}</h1>
                    <h3 className="text-xl font-medium text-primaryColor">
                         {propertyname.toUpperCase()}
                    </h3>
                    <p className="text-base font-light">{location.toUpperCase()}</p>
               </div>
          </div>
     );
};

export default PropertyCary;


PropertyCary.propTypes = {

     property: PropTypes.object,
}