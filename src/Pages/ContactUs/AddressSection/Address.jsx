import PropTypes from "prop-types";
import { FaPhone, FaEnvelopeOpen, FaLocationDot } from "react-icons/fa6";

const Address = ({ address }) => {
     const { office, number, email, location, mapLink } = address;

     return (


          <div className="relative  ">
               <div className="space-y-4 lg:py-36 py-24 px-10 text-white  hover:bg-transparent  bg-black hover:opacity-100  ">
                    <h1 className="text-xl font-bold text-primaryColor ">{office}</h1>

                    <div className="flex gap-3 items-center">
                         <FaPhone className="text-primaryColor text-xl" />
                         <p className="text-lg font-medium hover:text-primaryColor">
                              <a href={`tel:${number}`}>{number}</a>
                         </p>
                    </div>
                    <div className="flex gap-3 items-center">
                         <FaEnvelopeOpen className="text-primaryColor text-xl" />
                         <p className="text-lg font-medium hover:text-primaryColor">
                              <a href={`mailto:${email}`}>{email}</a>
                         </p>
                    </div>
                    <div className="flex gap-3 items-center">
                         <FaLocationDot className="text-primaryColor text-xl" />
                         <p className="text-lg font-medium hover:text-primaryColor">
                              {location}
                         </p>
                    </div>


               </div>
               {/* Map Integration with iframe */}
               <div


                    className=" absolute top-0 opacity-0 hover:opacity-40 z-10 ">
                    <iframe


                         className="lg:w-[400px] md:w-[350px] w-[360px] lg:h-[476px] h-[380px]"
                         src={mapLink}

                         style={{ border: 0, backgroundColor: "black" }}
                         allowFullScreen=""
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
               </div>



          </div>

     );
};

export default Address;


Address.propTypes = {

     address: PropTypes.object,

}