import { useEffect, useState } from "react";
import CountSection from "../CountSection/CountSection";
import axios from "axios";

const AchievementsCounts = () => {

     const [achievementsCounts, setAchievementsCount] = useState([]);


     useEffect(() => {
          axios.get('/achievements.json')
               .then(res => {

                    setAchievementsCount(res.data)
               })
               .catch(error => {
                    alert.error(error)
               })
     }, [])
     return (

          <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="bg-secondaryColor ">

               <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 py-20 lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] justify-between mx-auto mt-20 mb-20">
                    {
                         achievementsCounts?.map(count => <CountSection key={count.id} count={count}></CountSection>

                         )
                    }
               </div>
          </div>
     );
};

export default AchievementsCounts;