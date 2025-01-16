import PropTypes from "prop-types";

const PropertyDetailsLocation = ({ mapLink }) => {
     return (
          <div>
               <div className="  ">
                    <iframe
                         className="w-full lg:h-[400px] md:h-[350px] h-80"
                         src={mapLink}
                         frameBorder="0"
                         allowFullScreen
                         aria-hidden="false"
                         tabIndex="0"
                    />


               </div>
          </div>
     );
};

export default PropertyDetailsLocation;

PropertyDetailsLocation.propTypes = {

     mapLink: PropTypes.string,
}