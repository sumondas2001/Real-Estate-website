import PropTypes from "prop-types";

import './PropertyDetailsGallery.css'
const PropertyDetailsGallery = ({ img }) => {

     return (
          <div className="image-container">
               <img className="w-full lg:h-[450px] md:h-[400px] h-[350px] object-cover " src={img} alt="" />
          </div>
     );
};

export default PropertyDetailsGallery;


PropertyDetailsGallery.propTypes = {
     // You can declare that a prop is a specific JS primitive. By default, these
     // are all optional.
     img: PropTypes.string,
}