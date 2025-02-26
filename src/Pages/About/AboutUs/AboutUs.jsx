
const AboutUs = () => {
     const description = 'Real Estate (Pvt.) Ltd., established in 1988, is one of the pioneers in the Real Estate and Housing Industry of Bangladesh and one of the founding members of the Real Estate & Housing Association of Bangladesh (REHAB). During its 36 years journey, Real Estate has constructed over 4110 apartments (Residential & Commercial) all around Dhaka city and has become a household name for real estate. All Real Estate buildings are designed according to the guidelines stated in the Bangladesh National Building Code(BNBC).As such, Real Estate was the first developer to be awarded the ISO 9001: 2015 certificate, in recognition of our quality construction and management practices in the real estate development sector.  At Real Estate, we believe that our most important achievement to date has been earning the trust and confidence of our clients and patrons.We would like to take this opportunity to thank you for giving us the opportunity to build the home of your dreams.'

     const img = 'https://sheltech.com.bd/CMS/admin/uploads/page/about-us/170739096928XF2.jpg'
     return (
          <div

               className="bg-secondaryColor relative">
               <div className="flex  lg:flex-row md:flex-col flex-col lg:gap-32 md:gap-20 gap-16 py-24 lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] justify-between  px-0 mx-auto">
                    <div
                         data-aos="fade-right"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"

                         className="lg:w-1/2 md:w-full w-full space-y-10">
                         <h1 className="lg:text-5xl md:text-3xl text-2xl lg:text-start text-center font-medium text-primaryColor">A Legacy Written in Concrete</h1>
                         <p className="text-base text-justify lg:text-justify font-normal text-white">
                              {
                                   description.slice(0, 970)
                              }
                         </p>
                    </div>

                    <div
                         data-aos="fade-left"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"

                         className="lg:w-1/2 md:w-full w-full relative">
                         <div

                              className="flex justify-end">
                              <img className="object-cover w-full h-[550px] lg:h-[600px]" src={img} alt="" />
                         </div>
                         <div


                              className="absolute bottom-8 -left-20 ">
                              <img src="https://sheltech-bd.com/images/static/flower.png" alt="" />
                         </div>
                    </div>

               </div>
               <div


                    className="absolute top-14 -left-20">
                    <img src="https://sheltech-bd.com/images/static/flower.png" alt="" />
               </div>
          </div>
     );
};

export default AboutUs;