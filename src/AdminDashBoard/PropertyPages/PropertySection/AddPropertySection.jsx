import { useForm } from "react-hook-form";

const AddPropertySection = () => {
     const {
          handleSubmit,
          register,
          formState: { errors, isSubmitting },
     } = useForm();

     const onSubmit = (data) => {
          console.log(data);
     };

     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium text-center mb-4">Add Property  Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Property Name Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Property Name <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('propertyName', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Property Name"
                                   />
                                   {errors.propertyName && <p className='text-sm text-red-400'>Property Name is required</p>}
                              </div>

                              {/* Location Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Location <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('location', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Location"
                                   />
                                   {errors.location && <p className='text-sm text-red-400'>Location is required</p>}
                              </div>

                              {/* Title Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Title <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('title', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Title"
                                   />
                                   {errors.title && <p className='text-sm text-red-400'>Title is required</p>}
                              </div>

                              {/* Types Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Types <span className="text-red-600">*</span>
                                   </label>
                                   <select className="w-full py-2 text-sm  px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"  {...register('types', { required: true })}>
                                        <option value=""> Select Types</option>
                                        <option value="Completed"> Completed</option>
                                        <option value="Up Coming"> Up Coming</option>
                                   </select>
                                   {errors.types && <p className='text-sm text-red-400'>Types is required</p>}
                              </div>

                              {/* Land Area Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Land Area <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('landArea', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Land Area"
                                   />
                                   {errors.landArea && <p className='text-sm text-red-400'>Land Area is required</p>}
                              </div>

                              {/* Orientation Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Orientation <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('orientation', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Orientation"
                                   />
                                   {errors.orientation && <p className='text-sm text-red-400'>Orientation is required</p>}
                              </div>

                              {/* Front Road Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Front Road <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('frontRoad', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Front Road"
                                   />
                                   {errors.frontRoad && <p className='text-sm text-red-400'>Front Road is required</p>}
                              </div>

                              {/* Apartment Size A Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Apartment Size A <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('apartmentSizeA', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Apartment Size A"
                                   />
                                   {errors.apartmentSizeA && <p className='text-sm text-red-400'>Apartment Size A is required</p>}
                              </div>

                              {/* Apartment Size B Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Apartment Size B <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('apartmentSizeB', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Apartment Size B"
                                   />
                                   {errors.apartmentSizeB && <p className='text-sm text-red-400'>Apartment Size B is required</p>}
                              </div>

                              {/* Residential Floors Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Residential Floors <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('residentialFloors', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Residential Floors"
                                   />
                                   {errors.residentialFloors && <p className='text-sm text-red-400'>Residential Floors are required</p>}
                              </div>

                              {/* Number Of Parking Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Number Of Parking <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('numberOfParking', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Number Of Parking"
                                   />
                                   {errors.numberOfParking && <p className='text-sm text-red-400'>Number Of Parking is required</p>}
                              </div>

                              {/* Number Of Elevator Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Number Of Elevator <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('numberOfElevator', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="number"
                                        placeholder="Number Of Elevator"
                                   />
                                   {errors.numberOfElevator && <p className='text-sm text-red-400'>Number Of Elevator is required</p>}
                              </div>

                              {/* Hand Over Date Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Hand Over Date
                                   </label>
                                   <input
                                        {...register('handoverDate')}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="date"
                                        placeholder="Hand Over Date"
                                   />
                              </div>

                              {/* Google Map Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Google Map
                                   </label>
                                   <input
                                        {...register('locationMap', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        placeholder="Google Map"
                                   />
                              </div>
                              {/* Image Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Property Image <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('propertyImg', { required: true })}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="file"
                                        placeholder="Property Img"
                                   />
                                   {errors.propertyImg && <p className='text-sm text-red-400'>Property Image filed must be is required</p>}
                              </div>
                              {/*property gallery  Image Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Gallery Image
                                   </label>
                                   <input
                                        {...register('galleryImg')}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="file"
                                        multiple
                                        placeholder="Gallery Img"
                                   />

                              </div>
                              {/*property details pages cover  Image Field */}
                              <div>
                                   <label className="text-sm font-medium block mb-1">
                                        Property Details Cover Image <span className="text-red-600">*</span>
                                   </label>
                                   <input
                                        {...register('galleryImg')}
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="file"

                                        placeholder="Gallery Img"
                                   />
                                   {errors.propertyImg && <p className='text-sm text-red-400'>Property Image filed must be is required</p>}

                              </div>

                         </div>

                         {/* Submit Button */}
                         <div className="flex justify-end mt-6">
                              <button
                                   disabled={isSubmitting}
                                   type="submit"
                                   className="py-2 px-10 bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none"
                              >
                                   {isSubmitting ? "Submitting..." : "Submit"}
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddPropertySection;
