import './ArchitecturalElement.css'



const ArchitecturalElementSection1 = () => {



     return (
          <div
               data-aos="fade-right"
               data-aos-offset="100"
               data-aos-delay="50"
               data-aos-duration="2500"
               data-aos-easing="ease-out-cubic"


               className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between  mt-20">
               <div className=''>

                    <img className="lg:w-[800px] class p-2 md:w-full w-full lg:h-[400px] md:h-56 h-44  object-cover"

                         src="https://rancondevelopments.com/media/images/rdl_website_home-3_9R0Glhr.2e16d0ba.fill-1280x853-c100.jpg" alt="" />
               </div>
               <div className="lg:w-2/5 md:w-full lg:pl-14 md:text-center text-center lg:text-start  md:mb-10 lg:mb-0 mb-10">
                    <div className='flex items-center justify-center gap-4'>
                         <hr className='w-20 md:hidden hidden lg:block  border-[1px] border-primaryColor' />
                         <h1 className="lg:text-4xl md:text-3xl text-2xl font-normal mb-6 text-primaryColor">Architectural  Elegance</h1>
                    </div>
                    <p className="lg:text-base md:text-base text-sm lg:pl-[70px] text-justify  text-white  font-normal">Our intuitive understanding of architectural, interior, and real estate design touches the core philosophy of space and matter, creating a natural balance.</p>
               </div>
          </div>
     );
};

export default ArchitecturalElementSection1;