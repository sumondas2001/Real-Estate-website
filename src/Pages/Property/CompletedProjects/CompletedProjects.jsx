import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCary from "../../../Shared/PropertyCard/PropertyCard";

const CompletedProjects = () => {
     const [upComingProperty, setupComingProperty] = useState([]);
     const [allProperties, setAllProperties] = useState([]);
     // console.log(upComingProperty);
     useEffect(() => {
          axios.get('/allProperty.json')
               .then(res => {
                    console.log(res.data);
                    setAllProperties(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
     }, []);

     useEffect(() => {
          const upComing = allProperties.filter(property => property.types == "completed");
          setupComingProperty(upComing);
     }, [allProperties])
     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16 mb-20">
               {
                    upComingProperty?.map(property =>
                         <PropertyCary
                              property={property}
                              key={property.id}
                         >

                         </PropertyCary>)
               }
          </div>
     );
};

export default CompletedProjects;