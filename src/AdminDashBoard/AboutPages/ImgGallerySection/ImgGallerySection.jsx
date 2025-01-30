import { useFieldArray, useForm } from "react-hook-form";
import { CiCirclePlus, CiTrash } from "react-icons/ci";

const ImgGallerySection = () => {
     const {

          handleSubmit,
          control,
          setValue,
          watch,
          formState: { errors, isSubmitting },
     } = useForm({
          defaultValues: { file: [{ imgFile: "" }] },
     });

     const { fields, append, remove } = useFieldArray({ control, name: "file" });

     const watchFiles = watch("file"); // Watch changes to update previews

     // Handle Image Upload and Generate Preview
     const handleImageUpload = (index, event) => {
          const file = event.target.files[0];
          if (file) {
               const previewURL = URL.createObjectURL(file);
               setValue(`file.${index}.imgFile`, file); // Store File Object
               setValue(`file.${index}.previewURL`, previewURL); // Store Image Preview URL
          }
     };

     const onSubmit = (data) => {
          console.log("Form Submitted:", data);
     };

     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium text-center">Images Gallery Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">
                         {/* Image Upload Section */}
                         <div className="flex items-center justify-center">
                              <div className="space-y-6">
                                   {fields.map((item, index) => (
                                        <div key={item.id} className="flex gap-6 items-center border-b pb-4">
                                             {/* Label */}
                                             <div className="lg:w-1/6 w-1/3">
                                                  <label className="text-sm font-medium text-left block">
                                                       Image <span className="text-red-600">*</span>
                                                  </label>
                                             </div>

                                             {/* File Input */}
                                             <div>
                                                  <input
                                                       className="file-input file-input-accent w-full max-w-xs"
                                                       type="file"
                                                       accept="image/*"
                                                       required
                                                       onChange={(e) => handleImageUpload(index, e)}
                                                  />
                                                  {errors.file && (
                                                       <p className="text-sm font-extralight text-red-400">
                                                            Image field is required
                                                       </p>
                                                  )}

                                                  {/* Image Preview */}
                                                  {watchFiles[index]?.previewURL && (
                                                       <div className="relative w-40 mt-2">
                                                            <img
                                                                 src={watchFiles[index].previewURL}
                                                                 alt="Preview"
                                                                 className="w-40 h-24 object-cover rounded-md border"
                                                            />
                                                            <button
                                                                 type="button"
                                                                 className="absolute top-0 right-0 text-red-500 bg-white rounded-full p-1 shadow-md"
                                                                 onClick={() => {
                                                                      setValue(`file.${index}.previewURL`, ""); // Clear preview
                                                                      setValue(`file.${index}.imgFile`, ""); // Clear file input
                                                                 }}
                                                            >
                                                                 <CiTrash />
                                                            </button>
                                                       </div>
                                                  )}
                                             </div>

                                             {/* Remove Button */}
                                             <button type="button" onClick={() => remove(index)}>
                                                  <CiTrash className="text-red-500 size-5" />
                                             </button>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Add New Image Button */}
                         <div className="flex justify-center">
                              <button
                                   type="button"
                                   onClick={() => append({ imgFile: "", previewURL: "" })}
                                   className="flex items-center gap-2 border-2 px-6 py-2 text-lg"
                              >
                                   <CiCirclePlus className="text-green-500 text-2xl" />
                                   ADD NEW
                              </button>
                         </div>

                         {/* Submit Button */}
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

export default ImgGallerySection;
