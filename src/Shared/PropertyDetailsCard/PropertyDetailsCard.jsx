import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import PagesTitle from "../PagesTitle/PagesTitle";
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";

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
     }
     return (
          <div>
               <PagesTitle title={'PROPERTY DETAILS'}></PagesTitle>
               <PagesCoverImg info={info}></PagesCoverImg>


               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto">
                    <div className="flex justify-between">
                         <div className="flex flex-col items-start justify-center space-y-4">
                              <h1 className="text-lg font-bold">Project Name:  <span className="ml-2 text-lg font-normal">{allProperties?.propertyname}</span> </h1>
                              <p className="text-lg font-bold">Location :  <span className="ml-2 text-lg font-normal">{allProperties?.location}</span> </p>
                              <p className="text-lg font-bold">landArea :  <span className="ml-2 text-lg font-normal">{allProperties?.landArea}</span></p>
                              <p className="text-lg font-bold">Title :  <span className="ml-2 text-lg font-normal"> {allProperties?.title}</span></p>
                              <p className="text-lg font-bold">Size : <span className="ml-2 text-lg font-normal">{allProperties?.landArea}</span></p>
                              <p className="text-lg font-bold">Orientation : <span className="ml-2 text-lg font-normal">{allProperties?.orientation}</span></p>
                              <p className="text-lg font-bold">Front Road : <span className="ml-2 text-lg font-normal">{allProperties?.frontRoad}</span></p>
                              <p className="text-lg font-bold">Car Parking : <span className="ml-2 text-lg font-normal">{allProperties?.numberOfParking}</span></p>
                              <p className="text-lg font-bold">Elevator : <span className="ml-2 text-lg font-normal">{allProperties?.numberOfElevator}</span></p>
                              <p className="text-lg font-bold">HandoverDate : <span className="ml-2 text-lg font-normal">{allProperties?.handoverDate}</span></p>
                              <p className="text-lg font-bold">Residential Floors : <span className="ml-2 text-lg font-normal">{allProperties?.residentialFloors}</span></p>
                              {/* <p>Apartment Size A : <span>{allProperties?.apartmentSize.A}</span></p>
                              <p>Apartment Size B : <span>{allProperties?.apartmentSize.B}</span></p> */}
                         </div>
                         <div>
                              <img className="object-cover" src={allProperties.img} alt="" />
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default PropertyDetailsCard;



