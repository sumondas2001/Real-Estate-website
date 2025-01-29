import { useState } from "react";

const VideoSectionAndBannerSection = () => {
     const [bannerImgData, setBannerImgData] = useState({ imgURL: "" });
     const [videoData, setVideoData] = useState({ imgURL: "" });

     // Handle form submission
     const handleVideoForm = (e) => {
          e.preventDefault();
          const form = e.target;

          const videoLink = form.videoLink.value;

          setVideoData(videoLink);

     };
     const handleBannerForm = (e) => {
          e.preventDefault();
          const form = e.target;

          const imgFile = form.imgInput.files[0]; // Get the selected file

          setBannerImgData({ imgFile });

     };
     return (
          <div>
               {/* video section */}
               <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
                    <h1 className="text-xl font-medium text-center">Video Information</h1>
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                         <form onSubmit={handleVideoForm} className="pb-10 pt-6 space-y-6">


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
                                                  name="videoLink"
                                                  required
                                                  placeholder="video Link"
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
               {/* banner section */}
               <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
                    <h1 className="text-xl font-medium text-center">Banner Information</h1>
                    <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                         <form onSubmit={handleBannerForm} className="pb-10 pt-6 space-y-6">


                              {/* File Input Field */}
                              <div className="flex items-center justify-center">
                                   <div className="lg:w-1/6 w-1/3">
                                        <label className="text-sm font-medium text-left block">
                                             Upload Img <span className="text-red-600">*</span>
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

export default VideoSectionAndBannerSection;