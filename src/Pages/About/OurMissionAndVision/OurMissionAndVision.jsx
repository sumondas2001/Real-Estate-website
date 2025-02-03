import axios from "axios";
import { useEffect, useState } from "react";

const OurMissionAndVision = () => {
     const [ourMission, setOurMission] = useState(null);
     // console.log(ourMission.id);
     const [ourVision, setOurVision] = useState(null);
     // our Mission section
     useEffect(() => {
          axios.get('/OurMission.json')
               .then(res => {
                    // console.log(res.data);
                    setOurMission(res.data)
               })

               .catch(error => {
                    console.log(error);
               })

     }, [])

     // our vision section

     useEffect(() => {
          axios.get('/OurVision.json')
               .then(res => {

                    setOurVision(res.data)
               })

               .catch(error => {
                    console.log(error);
               })

     }, [])
     return (
          <div className="lg:max-w-[1200px] z-10 md:max-w-[700px] max-w-[360px] mx-auto relative lg:mb-32 md:mb-28 mb-20">
               <div
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"

                    className="flex lg:flex-row flex-col-reverse  lg:gap-32 lg:text-center relative">
                    {/* Our Mission Section */}
                    <div className="lg:w-3/5  lg:relative lg:z-10">
                         <img className="lg:h-96 md:h-80 h-72  w-full object-cover" src={ourMission?.img} alt="" />
                    </div>
                    <div className="lg:w-2/5 text-white lg:space-y-10 space-y-8 md:mb-14 lg:mb-0 mb-10">
                         <h1 className="lg:text-4xl md:text-3xl text-primaryColor text-3xl font-medium ">{ourMission?.title}</h1>
                         <p className="lg:text-lg text-base font-normal lg:w-96 lg:mx-auto">{ourMission?.description}</p>
                    </div>
               </div>
               <div
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                    className="flex lg:gap-32 lg:flex-row-reverse flex-col-reverse">
                    {/* Our Vision Section */}
                    <div className="lg:w-3/5 lg:bottom-4 lg:relative">
                         <img
                              className=" lg:absolute lg:-top-24 lg:h-96 md:h-80 object-cover h-72 w-full lg:right-14 lg:z-50"
                              src={ourVision?.img}
                              alt=""
                         />
                    </div>
                    <div className="flex flex-col md:mb-14 lg:mb-0 mb-10 lg:justify-end  mt-20 lg:w-2/5 lg:space-y-10 space-y-8 text-white  ">
                         <h1 className="lg:text-4xl text-primaryColor md:text-3xl text-3xl font-medium">{ourVision?.title}</h1>
                         <p className="lg:text-lg text-base font-normal lg:w-96">{ourVision?.description}</p>
                    </div>
               </div>
          </div>




     );
};

export default OurMissionAndVision;