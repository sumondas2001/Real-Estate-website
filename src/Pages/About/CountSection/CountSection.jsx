import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';
import PropTypes from "prop-types";

const CountSection = ({ count }) => {
     const { title, number } = count;
     const [counterState, setCounterState] = useState(false)

     return (
          <div>
               <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}
               >

                    <div className="border-l-2 ">
                         <div className="ml-6">
                              <h1 className="lg:text-6xl text-4xl font-medium text-primaryColor">
                                   {counterState &&
                                        <CountUp
                                             start={0}
                                             end={number}
                                             duration={3.75}
                                        >
                                        </CountUp>
                                   }
                              </h1>
                              <h1 className=" text-base font-medium mt-4  text-white">{title}</h1>
                         </div>
                    </div>

               </ScrollTrigger>
          </div>
     );
};

export default CountSection;


CountSection.propTypes = {

     count: PropTypes.object,
}