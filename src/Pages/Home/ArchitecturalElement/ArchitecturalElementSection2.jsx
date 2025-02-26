
const ArchitecturalElementSection2 = () => {
     return (
          <div
               data-aos="fade-left"
               data-aos-offset="100"
               data-aos-delay="50"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="flex lg:flex-row-reverse md:flex-col-reverse flex-col-reverse justify-between  mt-20">
               <div className=" lg:w-[820px] md:w-full w-full lg:h-[410px] md:h-56 h-44 flex justify-center items-center  ">
                    <img className="lg:w-[800px] md:w-full w-full lg:h-[390px] md:h-56 h-44  object-cover"

                         src="https://rancondevelopments.com/media/images/02.2e16d0ba.fill-1280x853-c100.jpg" alt="img" />
               </div>
               <div className="lg:w-2/5 md:w-full lg:pr-14 md:text-center text-center lg:text-start  md:mb-10 lg:mb-0 mb-10">
                    <div className='flex items-center justify-center gap-4'>
                         <hr className='w-20 md:hidden hidden lg:block  border-[1px] border-primaryColor' />
                         <h1 className="lg:text-4xl md:text-3xl text-2xl font-normal mb-6 text-primaryColor">Ambiance Of Urban Excellence</h1>
                    </div>
                    <p className="lg:text-base md:text-base text-sm lg:pl-[70px] text-justify text-white  font-normal">Our luxurious properties have always been developed with a meticulous and calculated consideration for the location and environmental traits of a given project.</p>
               </div>
          </div>
     );
};

export default ArchitecturalElementSection2;