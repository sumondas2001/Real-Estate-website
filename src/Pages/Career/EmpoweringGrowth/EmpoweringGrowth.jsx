
const EmpoweringGrowth = () => {

     const info = {
          title: "Empowering Growth &  Nurturing Talent",
          description: "At Real Estate Pvt Ltd, we believe that our most valuable asset is our people. Our human resources philosophy is rooted in the principles of growth, opportunity, and excellence. We strive to create an environment that fosters professional development, encourages innovative thinking, and values diversity. We recognize that the success of our company is directly linked to the personal and professional success of our employees.Thus, we offer a multitude of opportunities for learning and advancement, enabling each team member to reach their full potential."
     }
     return (
          <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="bg-secondaryColor relative mt-20">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto">
                    <div
                         data-aos="fade-up"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"
                         className="text-center py-28 space-y-10  text-white  ">
                         <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold lg:w-[800px] md:w-[500px]  mx-auto">{info.title}</h1>
                         <p className=" font-normal text-sm lg:text-base md:text-base lg:w-3/4 mx-auto  text-justify">{
                              info.description.slice(0, 561)
                         }</p>
                    </div>
                    <div className="flex justify-between">
                         <div
                              data-aos="fade-right"
                              data-aos-offset="100"
                              data-aos-delay="1000"
                              data-aos-duration="2000"
                              data-aos-easing="ease-out-cubic"
                              className="absolute top-9 -left-20 ">
                              <img className="blur-sm lg:size-48  size-36" src="https://sheltech-bd.com/images/static/flower.png" alt="" />
                         </div>
                         <div
                              data-aos="fade-left"
                              data-aos-offset="100"
                              data-aos-delay="1000"
                              data-aos-duration="2000"
                              data-aos-easing="ease-out-cubic"
                              className="absolute lg:bottom-9 bottom-1 -right-20">
                              <img className="blur-sm lg:size-48  size-36" src="https://sheltech-bd.com/images/static/flower.png" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default EmpoweringGrowth;