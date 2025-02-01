import { useForm } from "react-hook-form";

const VideoSection = () => {


     const { register,
          handleSubmit,
          formState: { errors, isSubmitting }
     } = useForm();

     const onSubmit = (data) => {
          console.log(data);
     }

     return (
          <div>
               {/* video section */}
               <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
                    <h1 className="text-xl font-medium text-center">Video Information</h1>
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                         <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">


                              {/* File Input Field */}
                              <div className="flex items-center gap-10 justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Video Link (must be come from Youtube) <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <div >


                                             <input
                                                  className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                                  type="text"

                                                  {...register('videoLink', { required: 'video Link field must be required' })}
                                                  placeholder="video Link"
                                             />
                                             {errors.title && <p className="text-sm text-red-400">{errors.videoLink.message}</p>}

                                        </div>

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

          </div>
     );
};

export default VideoSection;