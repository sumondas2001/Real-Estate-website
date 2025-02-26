import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCary from "../../../Shared/PropertyCard/PropertyCard";

const AllProjects = () => {
     const [allProperties, setAllProperties] = useState([]);
     useEffect(() => {
          axios.get('/allProperty.json')
               .then(res => {
                    // console.log(res.data);
                    setAllProperties(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16 mb-20">
               {
                    allProperties?.map(property =>

                         <PropertyCary
                              property={property}
                              key={property.id}
                         >

                         </PropertyCary>)
               }
          </div>
     );
};

export default AllProjects;