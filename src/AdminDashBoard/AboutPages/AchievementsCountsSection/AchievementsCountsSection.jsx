import { useForm } from "react-hook-form";

const AchievementsCountsSection = () => {
     const {
          handleSubmit,
          register,
          formState: { errors, isSubmitting },

     } = useForm();
     const onSubmit = (data) => {

          console.log(data);
     }
     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium  text-center">Achievements  Section Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">
                         {/* About Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <input
                                        {...register('title', { required: true })}

                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"


                                        placeholder=" Title"
                                   />

                                   {
                                        errors.title && <p className='text-sm font-extralight text-red-400'>title field is must be required</p>
                                   }
                              </div>
                         </div>

                         {/* Sub Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Number <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <input
                                        {...register('number', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="number"


                                        placeholder="Number"
                                   />
                                   {
                                        errors.number && <p className='text-sm font-extralight text-red-400'>number field is must be required</p>
                                   }
                              </div>
                         </div>


                         {/* Save Button */}
                         <div className="flex justify-end mr-32">
                              <button
                                   disabled={isSubmitting}
                                   type="submit"
                                   className="py-2 px-10 bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none"
                              >
                                   {isSubmitting ? "Submitting" : "Submit"}
                              </button>
                         </div>
                    </form>
               </div>


          </div>
     );
};

export default AchievementsCountsSection;