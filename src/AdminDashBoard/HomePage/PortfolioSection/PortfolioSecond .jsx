import { useForm } from "react-hook-form";

const PortfolioSecond = () => {
     const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting }
     } = useForm({
          defaultValues: { file: [{ imgFile: "" }] },
     });


     const onSubmit = (data) => console.log("Submitted Data:", data);

     return (
          <div className="max-w-2xl mx-auto py-4">
               <h1 className="text-xl font-medium text-center">Portfolio Information -2</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">

                         {/* Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="w-1/3">
                                   <label className="text-sm font-medium">
                                        Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        {...register("title", { required: "Title is required" })}
                                        placeholder="Title"
                                   />
                                   {errors.title && <p className="text-sm text-red-400">{errors.title.message}</p>}
                              </div>
                         </div>

                         {/* Description Field */}
                         <div className="flex justify-center">
                              <div className="w-1/3">
                                   <label className="text-sm font-medium">
                                        Description <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="w-full">
                                   <textarea
                                        className="w-full py-2 h-40 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        {...register("description", { required: "Description is required" })}
                                        placeholder="Description"
                                   />
                                   {errors.description && <p className="text-sm text-red-400">{errors.description.message}</p>}
                              </div>
                         </div>

                         {/* File Input Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Upload Image <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <div >

                                        <input type="file"
                                             {...register("imgInput", { required: 'image is required' })}

                                             className="file-input  file-input-accent w-full max-w-xs"
                                        />
                                        {errors.description && <p className="text-sm  text-red-400">{errors.title.message}</p>}

                                        <div className="mt-1">
                                             <span className="text-xs font-normal">Image Size Must be (800*400)</span>
                                        </div>

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
     );
};

export default PortfolioSecond;
