
const JobFrom = () => {

     const handelJobFrom = (event) => {
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const number = from.number.value;
          const email = from.email.value;
          const address = from.address.value;
          const coverLetter = from.coverLetter.value;
          // const cv = from.cv.value;

          console.log(name, number, email, address, coverLetter);
     }
     return (
          <div

               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="text-white py-20">
               <div>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center">Apply for the position</h1>
               </div>
               <div className=" w-full  lg:mt-14 md:mt-10 mt-6">
                    <form onSubmit={handelJobFrom} className="space-y-16">


                         <div className="flex lg:flex-row md:flex-row flex-col gap-10">

                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="name" name="name" className="py-3 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white" required />
                              </div>
                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="number" name="number" className="py-3 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white" required />
                              </div>
                         </div>

                         <div className="flex lg:flex-row md:flex-row flex-col gap-10">

                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="email" placeholder="email" name="email" className="py-3 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white" required />
                              </div>
                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="address" name="address" className="py-3 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white" />
                              </div>
                         </div>
                         <div>
                              <div className="w-full ">
                                   <textarea type="text" placeholder="cover letter" name="coverLetter" className="py-3 w-full focus:outline-none px-4 pt-8 pb-20  focus:border-primaryColor  border bg-black text-white" />
                              </div>

                         </div>


                         <div>


                              <label for="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                   </svg>

                                   <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">UPLOAD CV</h2>

                                   <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                   <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                         </div>

                         <button type="submit" className=" px-10  py-3 text-base font-semibold bg-primaryColor text-black hover:bg-secondaryColor hover:text-primaryColor ">Submit</button>


                    </form>
               </div>
          </div>
     );
};

export default JobFrom;