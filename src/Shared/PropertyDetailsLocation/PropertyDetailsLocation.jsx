import PropTypes from "prop-types";

const PropertyDetailsLocation = ({ mapLink }) => {
     return (
          <div>
               <div className="  ">
                    <iframe
                         className="w-full lg:h-[400px] md:h-[350px] h-80"
                         src={mapLink}


                         allowFullScreen=""
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
               </div>
          </div>
     );
};

export default PropertyDetailsLocation;

PropertyDetailsLocation.propTypes = {

     mapLink: PropTypes.string,
}