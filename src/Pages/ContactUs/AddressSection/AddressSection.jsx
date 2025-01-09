import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Address from "./Address";

const AddressSection = () => {

     const [address, setAddress] = useState([]);
     useEffect(() => {
          axios.get('/addressSection.json'
               .then(res => {
                    setAddress(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
          )
     }, [])
     return (
          <div>
               <h1 className="text-4xl font-medium text-center text-primaryColor">OFFICE ADDRESS</h1>

               <div>
                    {
                         address.map(address => <Address address={address} key={address.id}></Address>)
                    }
               </div>
          </div>
     );
};

export default AddressSection;