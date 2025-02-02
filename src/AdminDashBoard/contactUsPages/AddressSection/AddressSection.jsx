import { useForm } from "react-hook-form";

const AddressSection = () => {
     const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
     const onSubmit = (data) => {
          console.log(data);
     }
     return (
          <div>


               <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
                    <h1 className="text-xl font-medium text-center">Address Section Information </h1>
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                         <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">
                              {/* Office Name Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Office Name <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="text"
                                             name="officeName"
                                             {...register('officeName', { required: 'Office Name Filed must be required' })}
                                             placeholder="Office Name"
                                        />
                                        {errors.officeName && <p className="text-sm text-red-400">{errors.officeName.message}</p>}
                                   </div>
                              </div>
                              {/* Office Name Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Email <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="email"

                                             {...register('email', { required: 'Email must be required' })}
                                             placeholder="Email"
                                        />
                                        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
                                   </div>
                              </div>
                              {/* Office Phone Number Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Number <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="number"

                                             {...register('number', { required: 'Number Filed must be required' })}
                                             placeholder=" Number"
                                        />
                                        {errors.number && <p className="text-sm text-red-400">{errors.number.message}</p>}
                                   </div>
                              </div>
                              {/* Office Address Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Office Address <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="text"
                                             name="officeAddress"
                                             {...register('officeAddress', { required: 'Office Address Filed must be required' })}
                                             placeholder="Office Address"
                                        />
                                        {errors.officeAddress && <p className="text-sm text-red-400">{errors.officeAddress.message}</p>}
                                   </div>
                              </div>
                              {/* Office google map link  Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Google Map Link <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="text"

                                             {...register('googleMapLink', { required: 'google Map Link Filed must be required' })}
                                             placeholder="Google Map Link"
                                        />
                                        {errors.googleMapLink && <p className="text-sm text-red-400">{errors.googleMapLink.message}</p>}
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

export default AddressSection;