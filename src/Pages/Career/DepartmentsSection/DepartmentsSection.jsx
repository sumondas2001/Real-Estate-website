import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Department from "./Department";



const DepartmentsSection = () => {
     const [departments, setDepartments] = useState([])
     useEffect(() => {
          axios.get('/DepartmentsSection.json')
               .then(res => {
                    // console.log(res.data);
                    setDepartments(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     return (
          <div

               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="py-20 bg-secondaryColor mb-20">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto space-y-16">
                    <div>
                         <h1 className=" lg:text-4xl md:text-3xl text-2xl font-semibold text-center text-white">DEPARTMENTS</h1>
                    </div>
                    <div className="grid lg:grid-cols-4 lg:gap-14 md:gap-12 gap-8 md:grid-cols-3 grid-cols-2">
                         {
                              departments?.map(department =>
                                   <Department department={department} key={department.id}>

                                   </Department>)
                         }
                    </div>




               </div>
          </div>
     );
};

export default DepartmentsSection;