import axios from "axios";
import { useEffect, useState } from "react";

const OurMissionAndVision = () => {
     const [ourMission, setOurMission] = useState([]);
     console.log(ourMission.id);
     const [ourVision, setOurVision] = useState([]);

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
     useEffect(() => {
          axios.get('/OurVision.json')
               .then(res => {
                    console.log(res.data);
                    setOurVision(res.data)
               })

               .catch(error => {
                    console.log(error);
               })

     }, [])
     return (
          <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto relative ">
               <div className="flex text-center relative">
                    {/* Our Mission Section */}
                    <div className="w-1/2">
                         <img className="relative z-10" src={ourMission?.img} alt="" />
                    </div>
                    <div className="w-1/2 text-white space-y-10">
                         <h1 className="text-4xl font-medium">{ourMission?.title}</h1>
                         <p className="text-lg font-normal w-96 mx-auto">{ourMission?.description}</p>
                    </div>
               </div>
               <div className="flex flex-row-reverse relative">
                    {/* Our Vision Section */}
                    <div className="w-1/2 bottom-4 relative">
                         <img
                              className="absolute -top-32 right-32 z-20"
                              src={ourVision?.img}
                              alt=""
                         />
                    </div>
                    <div className="flex flex-col justify-end w-1/2 space-y-10 text-white relative z-10">
                         <h1 className="text-4xl font-medium">{ourVision?.title}</h1>
                         <p className="text-lg font-normal w-96">{ourVision?.description}</p>
                    </div>
               </div>
          </div>




     );
};

export default OurMissionAndVision;