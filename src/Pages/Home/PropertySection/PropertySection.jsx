import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCary from "../../../Shared/PropertyCard/PropertyCard";

const PropertySection = () => {
     const [allProperties, setAllProperties] = useState([]);
     useEffect(() => {
          axios.get('/allProperty.json')
               .then(res => {
                    setAllProperties(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     return (
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16 mb-20 mt-20">
               <div className="space-y-6 mt-10">
                    <h1 className="text-3xl font-medium text-primaryColor">OurPerfections</h1>
                    <p className="text-lg font-normal">Real Estate Sapphire Series represents our most luxurious and iconic projects in the most popular and sought-after locations. Experience elegance and comfort with our bold designs, top-tier construction, and premium finishes.</p>
               </div>

               {
                    allProperties?.slice(0, 5).map(property =>

                         <PropertyCary
                              property={property}
                              key={property.id}
                         >

                         </PropertyCary>)
               }
          </div>
     );
};

export default PropertySection;