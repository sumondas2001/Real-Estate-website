import { useState } from "react";

const PortfolioSecond = () => {
     const [titleData, setTitleData] = useState({ title: "", subTitle: "", imgURL: "" });
     console.log(titleData);
     // Handle form submission
     const handlePortfolioForm = (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.title.value;
          const description = form.description.value;
          const imgFile = form.imgInput.files[0]; // Get the selected file

          setTitleData({ title, description, imgFile });

     };
     return (
          <div>
               <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
                    <h1 className="text-xl font-medium text-center">Portfolio Information -2</h1>
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                         <form onSubmit={handlePortfolioForm} className="pb-10 pt-6 space-y-6">
                              {/* Title Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Title <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <input
                                             className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="text"
                                             name="title"
                                             required
                                             placeholder="Title"
                                        />
                                   </div>
                              </div>

                              {/* Description Field */}
                              <div className="flex  justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Description <span className="text-red-600">*</span>
                                        </label>
                                   </div>
                                   <div className="lg:w-3/5 w-full">
                                        <textarea
                                             className="w-full py-2 h-40 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                             type="text"
                                             name="description"
                                             required
                                             placeholder="Description"
                                        />
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
          </div>
     );
};

export default PortfolioSecond;