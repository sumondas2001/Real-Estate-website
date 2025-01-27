import PropTypes from "prop-types";

const DashBoardLayOut = ({ icon, label, subLabel }) => {
     // console.log(typeof icon, typeof label, typeof subLabel);
     return (
          <div className="">
               <div className="space-y-4 shadow-2xl uppercase rounded-xl flex px-6 md:py-3 lg:py-5 py-6  justify-around gap-10   flex-row-reverse   w-full">
                    <div className="flex items-center ">
                         <span >{icon}</span>
                    </div>

                    <div className=" space-y-2">
                         <h3 className="md:text-3xl  lg:text-4xl text-2xl font-medium">{subLabel}</h3>
                         <h1 className="text-lg  text-center">{label}</h1>
                    </div>

               </div>

          </div>
     );
};

export default DashBoardLayOut;


DashBoardLayOut.propTypes = {

     icon: PropTypes.object,
     label: PropTypes.string,
     subLabel: PropTypes.string,
}