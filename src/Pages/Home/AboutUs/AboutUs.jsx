const AboutUs = () => {
     return (
          <div>
               <div
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"


                    className=" ">
                    <div className="flex lg:flex-row md:flex-col justify-between flex-col mt-20  lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] lg:py-20 py-16  px-0 mx-auto lg:space-y-0 space-y-6">
                         <div
                              data-aos="fade-right"
                              data-aos-offset="100"
                              data-aos-delay="50"
                              data-aos-duration="2000"
                              data-aos-easing="ease-out-cubic"



                              className="lg:w-1/2 w-full lg:text-start text-center  lg:space-y-0 space-y-6">
                              <div className="flex lg:justify-start justify-center items-center gap-4">
                                   <hr className='w-20 md:hidden hidden lg:block  border-[1px] border-primaryColor' />
                                   <h1 className="lg:text-xl  font-normal text-primaryColor">The Highest Horizon Of Luxury</h1>
                              </div>
                              <h1 className="lg:text-4xl md:text-3xl text-xl text-white font-medium">The Highest Horizon Of Luxury</h1>
                         </div>
                         <div

                              data-aos="fade-left"
                              data-aos-offset="100"
                              data-aos-delay="50"
                              data-aos-duration="2000"
                              data-aos-easing="ease-out-cubic"


                              className="lg:w-1/2 w-full lg:text-start text-justify">
                              <p className="lg:text-base md:text-base text-justify text-sm font-medium text-white">REAL STATE Developments provides exclusive commercial and residential spaces in response to the growing need for contemporary, high quality, and high-end delivery of architectural design in the metropolitan city of Dhaka.

                                   Our services expand towards multi-tiered real estate solutions that fully address all design and lifestyle parameters from the initial planning stages to consultation up to interior design and furnishing. Our expertise encompasses bespoke designs incorporated into restaurants, car dealerships, showrooms, cafés, bakeries, hotels, corporate offices, and private homes.</p>
                         </div>

                    </div>

               </div>
               <div
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"

                    className="lg:mt-20 mt-16">

                    <img className="w-full lg:h-96 md:h-72 h-64 object-cover" src="https://rancondevelopments.com/media/images/family_Living_nVBZsP4.2e16d0ba.fill-1920x1080-c100.jpg" alt="" />
               </div>
          </div>
     );
};

export default AboutUs;