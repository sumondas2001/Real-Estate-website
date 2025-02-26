import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import PagesTitle from "../PagesTitle/PagesTitle";
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";
import { IoLocation } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsTextareaResize } from "react-icons/bs";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";

import { VscLayoutPanelCenter } from "react-icons/vsc";
import PropertyDetailsFeatures from "../PropertyDetailsFeatures/PropertyDetailsFeatures";
import PropertyDetailsGallery from "../PropertyDetailsGallery/PropertyDetailsGallery";
import PropertyDetailsLocation from "../PropertyDetailsLocation/PropertyDetailsLocation";


const PropertyDetailsCard = () => {
     // property id
     const { id } = useParams();

     // all Property load for data based and set state
     const [allProperties, setAllProperties] = useState([]);



     // all Property load for data based
     useEffect(() => {
          axios.get('/allProperty.json')
               .then(res => {
                    // single Property find for all data and set state
                    const propertyDetails = res.data?.find(property => property.id === parseInt(id));
                    setAllProperties(propertyDetails);

               })
               .catch(error => {
                    console.log(error);
                    toast.error('Property Details Not Load')
               })
     }, [id]);


     const info = {
          CoverImg: 'https://anwarlandmark.com/admin/uploads/product/anwar-landmark-rosetta/2050x1152/1729403553EMBsg_m.jpg',
          title: allProperties?.propertyname,
          description: allProperties?.location
     };


     const mapLink = allProperties?.locationMap || "default_embed_url_here";
     return (
          <div >
               <PagesTitle title={'PROPERTY DETAILS'}></PagesTitle>
               <PagesCoverImg info={info}></PagesCoverImg>


               <div className=" lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto flex lg:flex-row flex-col lg:gap-32  gap-10  justify-between ">

                    <div
                         data-aos="fade-right"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"

                         className="flex flex-col lg:items-start items-center mt-16 lg:w-1/2">
                         <div className=" w-full mb-10">
                              <h1 className="lg:text-3xl md:text-3xl text-2xl   font-bold text-primaryColor mb-2">{allProperties?.propertyname}</h1>
                         </div>
                         <div className="flex  lg:gap-28 md:gap-16 gap-6 ">

                              <div className="lg:space-y-8 space-y-4 text-primaryColor">
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <IoLocation className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-xs">Location </h5>
                                             <p className="lg:text-lg text-white  md:text-lg text-base font-semibold"> {allProperties?.location} </p>
                                        </div>
                                   </div>
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <BsTextareaResize className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">land Area </h5>

                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.landArea}</p>
                                        </div>
                                   </div>

                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <BsFillBuildingsFill className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Type </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.title}</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <SlSizeFullscreen className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Size </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.landArea}</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <FaRoad className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Front Road </h5>

                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.frontRoad}</p>
                                        </div>
                                   </div>
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        < AiOutlineBorderOuter className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Orientation </h5>

                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.orientation}</p>
                                        </div>
                                   </div >
                              </div>
                              <div className="lg:space-y-8 space-y-4 text-primaryColor">
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        < IoCarSportSharp className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Car Parking </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold"> {allProperties?.numberOfParking}</p>
                                        </div>
                                   </div >
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <GiElevator className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Elevator </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.numberOfElevator}</p>
                                        </div >
                                   </div >
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <GiHouseKeys className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Hand Over Date  </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">{allProperties?.handoverDate}</p>
                                        </div >
                                   </div >
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <PiBuildingApartmentDuotone className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="" >
                                             <h5 className="font-extralight text-sm">Residential Floors </h5>

                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold"> {allProperties?.residentialFloors}</p>
                                        </div >
                                   </div >
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">

                                        <VscLayoutPanelCenter className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="">
                                             <h5 className="font-extralight text-sm">Apartment Size A</h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold">  {allProperties?.apartmentSize?.A}</p>
                                        </div >
                                   </div >
                                   <div className="flex items-center lg:gap-7 md:gap-6 gap-4 ">
                                        <VscLayoutPanelCenter className="lg:size-8 md:size-7 size-5 text-primaryColor" />
                                        <div className="" >
                                             <h5 className="font-extralight text-sm">Apartment Size B </h5>
                                             <p className="lg:text-lg text-white md:text-lg text-base font-semibold"> {allProperties?.apartmentSize?.B}</p>
                                        </div >
                                   </div >
                              </div>
                         </div>
                    </div >
                    <div

                         data-aos="fade-left"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"

                         className="relative overflow-hidden lg:w-1/2">
                         <img
                              className="object-cover lg:h-[700px]  w-full md:h-[400px] h-[300px] transition-transform duration-[0.80s] ease-in-out hover:scale-110"
                              src={allProperties?.img}
                              alt=""
                         />
                    </div>



               </div >
               {/* features card */}
               <PropertyDetailsFeatures></PropertyDetailsFeatures>

               {/* gallery img  */}


               <div className=" lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto space-y-10 lg:mt-20 mb-20">
                    <h1 className="lg:text-3xl md:text-2xl text-xl  font-semibold text-primaryColor ">PROPERTY  GALLERY</h1>
                    <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4">



                         {
                              allProperties?.gallery?.map((img, index) => (
                                   <PropertyDetailsGallery

                                        img={img} key={index}></PropertyDetailsGallery>
                              ))
                         }

                    </div>
                    <PropertyDetailsLocation mapLink={mapLink}></PropertyDetailsLocation>
               </div>


          </div >
     );
};

export default PropertyDetailsCard;



