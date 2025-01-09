import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Address from "./Address";

const AddressSection = () => {

     const [address, setAddress] = useState([]);
     useEffect(() => {
          axios.get('/addressSection.json')
               .then(res => {
                    setAddress(res.data)
               })
               .catch(error => {
                    console.log(error);
               })

     }, [])
     return (
          <div className="my-10 ">
               <h1 className="text-4xl font-medium text-center text-primaryColor mb-10">OFFICE ADDRESS</h1>

               <div className="  border-b-[1px] border-t-[1px] border-gray-700">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-0 gap-10">


                         {
                              address.map(address => <Address address={address} key={address.id}></Address>)
                         }


                    </div>
               </div>
          </div>
     );
};

export default AddressSection;