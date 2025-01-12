import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const PropertyDetailsCard = () => {
     // all Property load for data based and set state
     const [allProperties, setAllProperties] = useState([]);
     // single Property find for all data and set state
     const [property, setProperty] = useState([]);
     const { id } = useParams();

     const { propertyname, location, title, types, landArea, orientation, frontRoad, apartmentSize, residentialFloors, numberOfParking, numberOfElevator, handoverDate, img, gallery } = property;

     // property id

     // single Property find for all data
     useEffect(() => {
          const propertyDetails = allProperties.find(property => property.id === parseInt(id));
          setProperty(propertyDetails)
     }, [allProperties, id])

     // all Property load for data based
     useEffect(() => {
          axios.get('/allProperty.json')
               .then(res => {
                    setAllProperties(res.data);

               })
               .catch(error => {
                    console.log(error);
                    toast.error('Property Details Not Load')
               })
     }, [])
     return (
          <div>
               {

               }
          </div>
     );
};

export default PropertyDetailsCard;