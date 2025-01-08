
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
          <div className="text-white py-20">
               <div>
                    <h1 className="text-4xl font-semibold text-center">Apply for the position</h1>
               </div>
               <div className=" w-full  ">
                    <form onSubmit={handelJobFrom} className="space-y-16">


                         <div className="flex lg:flex-row md:flex-row flex-col gap-10">

                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="name" name="name" className="input border-[2px] rounded-none w-full  border-b-primaryColor" required />
                              </div>
                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="number" name="number" className="input border-[2px] rounded-none w-full  border-b-primaryColor" required />
                              </div>
                         </div>

                         <div className="flex lg:flex-row md:flex-row flex-col gap-10">

                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="email" placeholder="email" name="email" className="input border-[2px] rounded-none w-full  border-b-primaryColor" required />
                              </div>
                              <div className="lg:w-1/2 md:w-1/2 w-full">
                                   <input type="text" placeholder="address" name="address" className="input border-[2px] rounded-none w-full  border-b-primaryColor" />
                              </div>
                         </div>
                         <div>
                              <div className="w-full">
                                   <input type="text" placeholder="cover letter" name="coverLetter" className="input border-[2px] rounded-none w-full  border-b-primaryColor" />
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
                         <div className="form-control mt-6">
                              <button className="btn bg-secondaryColor ">Login</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default JobFrom;