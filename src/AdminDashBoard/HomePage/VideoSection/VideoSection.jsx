import { useState } from "react";

const VideoSection = () => {
     const [titleData, setTitleData] = useState({ title: "", subTitle: "", imgURL: "" });
     // console.log(titleData);
     // Handle form submission
     const handleAboutForm = (e) => {
          e.preventDefault();
          const form = e.target;

          const imgFile = form.imgInput.files[0]; // Get the selected file

          setTitleData({ imgFile });

     };
     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium text-center">Video Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleAboutForm} className="pb-10 pt-6 space-y-6">


                         {/* File Input Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Upload Video <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <div >

                                        <input type="file"
                                             name="imgInput"
                                             accept="image/*"
                                             className="file-input  file-input-accent w-full max-w-xs"
                                        />


                                   </div>

                              </div>
                         </div>



                         {/* Save Button */}
                         <div className="flex justify-center">
                              <button
                                   type="submit"
                                   className="py-2 px-10  bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
                              >
                                   Save
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default VideoSection;