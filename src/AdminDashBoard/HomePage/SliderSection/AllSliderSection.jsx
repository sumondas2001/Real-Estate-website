import { useReducer, useRef } from "react";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const sliderReducer = (state, action) => {


     switch (action.type) {

          case "REMOVE":
               return state.filter((_, index) => index !== action.index);
          case "REMOVE_IMAGE":
               return state.map((slider, index) =>
                    index === action.index ? { ...slider, imgURL: "" } : slider
               );
          case "UPDATE":
               return state.map((slider, index) =>
                    index === action.index ? { ...slider, [action.name]: action.value } : slider
               );
          case "UPLOAD":
               return state.map((slider, index) =>
                    index === action.index ? { ...slider, imgURL: URL.createObjectURL(action.file) } : slider
               );
          default:
               return state;
     }
};

const AllSliderSection = () => {
     const [sliders, dispatch] = useReducer(sliderReducer, [{ title: "", imgURL: "" }]);
     const fileInputRefs = useRef([]);

     const handleInputChange = (index, event) => {
          const { name, value, files } = event.target;
          if (name === "imgFile" && files.length > 0) {
               dispatch({ type: "UPLOAD", index, file: files[0] });
          } else {
               dispatch({ type: "UPDATE", index, name, value });
          }
     };

     const handleRemoveImage = (index) => {
          dispatch({ type: "REMOVE_IMAGE", index });
          if (fileInputRefs.current[index]) {
               fileInputRefs.current[index].value = ""; // Reset file input value
          }
     };

     //  Check if all sliders have an image
     const isSaveDisabled = sliders.some(slider => !slider.imgURL);

     //  Send Data to Backend
     const handleSave = () => {
          if (isSaveDisabled) {
               alert("Please upload an image for all sliders before saving.");
               return;
          }
          console.log("Saving Sliders Data:", sliders);
     };

     return (
          <div className="max-w-2xl mx-auto ">
               <div className="text-end mb-6">
                    <Link to={'/admin-dashBoard/home-add-slider'}> <button className="py-2 px-10 bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none">ADD SLIDER</button></Link>
               </div>
               <h1 className="text-xl font-medium text-center">Slider Information</h1>

               <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-6 p-6">
                    <form className="space-y-6">
                         {sliders.map((slider, index) => (
                              <div key={index} className="border-b pb-6 space-y-4 relative">
                                   {/*  Title Input (Aligned Properly) */}
                                   <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium w-1/4">
                                             Slider Title <span className="text-red-600">*</span>
                                        </label>
                                        <div className="relative flex-1">
                                             <input
                                                  className="w-full py-2 px-3 border border-gray-400 rounded-md focus:border-green-500"
                                                  type="text"
                                                  name="title"
                                                  value={slider.title}
                                                  onChange={(e) => handleInputChange(index, e)}
                                                  required
                                                  placeholder="Enter Slider Title"
                                             />
                                             {/* Remove Slider Button */}
                                             {sliders.length > 1 && (
                                                  <button
                                                       type="button"
                                                       className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500 text-2xl"
                                                       onClick={() => dispatch({ type: "REMOVE", index })}
                                                  >
                                                       <CiTrash />
                                                  </button>
                                             )}
                                        </div>
                                   </div>

                                   {/*  File Upload */}
                                   <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium w-1/4">
                                             Upload Image <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                             type="file"
                                             name="imgFile"
                                             accept="image/*"
                                             ref={(el) => (fileInputRefs.current[index] = el)}
                                             onChange={(e) => handleInputChange(index, e)}
                                             className="file-input file-input-accent w-full max-w-xs"
                                        />
                                   </div>

                                   {/*  Image Preview & Remove Button */}
                                   {slider.imgURL && (
                                        <div className="relative mx-auto w-40">
                                             <img
                                                  src={slider.imgURL}
                                                  alt="Slider Preview"
                                                  className="w-40 h-24 object-cover rounded-md border"
                                             />
                                             <button
                                                  type="button"
                                                  className="absolute top-0 right-0 text-red-500 bg-white rounded-full p-1 shadow-md"
                                                  onClick={() => handleRemoveImage(index)}
                                             >
                                                  <CiTrash />
                                             </button>
                                        </div>
                                   )}
                              </div>
                         ))}



                         {/*  Save Button (Disabled If Any Image is Missing) */}
                         <div className="flex justify-end mt-4">
                              <button
                                   type="button"
                                   onClick={handleSave}
                                   disabled={isSaveDisabled}
                                   className={`px-6 py-2 rounded-lg shadow-md ${isSaveDisabled
                                        ? "py-2 px-10 bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none cursor-not-allowed"
                                        : "py-2 px-10 bg-blue-600 text-white font-medium rounded-md shadow-md focus:outline-none"
                                        }`}
                              >
                                   Save
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AllSliderSection;
