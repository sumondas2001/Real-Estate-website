import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./SherdTextEditor.css"
const AboutSection = () => {
     const [value, setValue] = useState(""); // To store ReactQuill content
     const [titleData, setTitleData] = useState({ title: "", subTitle: "" }); // To 
     console.log(titleData);
     // store title data
     const [formData, setFormData] = useState(null); // To store combined form data for UI display

     // Define the modules object for ReactQuill
     const modules = {
          toolbar: [
               ["bold", "italic", "underline", "strike"], // Text formatting buttons
               ["blockquote", "code-block"],
               [{ header: 1 }, { header: 2 }], // Headers
               [{ list: "ordered" }, { list: "bullet" }],
               [{ script: "sub" }, { script: "super" }], // Superscript/subscript
               [{ indent: "-1" }, { indent: "+1" }], // Indentation
               [{ direction: "rtl" }], // Text direction
               [{ size: ["small", false, "large", "huge"] }], // Font sizes
               [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header dropdown
               [{ color: [] }, { background: [] }], // Color and background
               [{ font: [] }], // Font family
               [{ align: [] }], // Text alignment
               ["link", "image", "video", "formula"], // Multimedia options
               ["clean"], // Clear formatting
          ],
     };

     // Handle form submission
     const handleAboutForm = (e) => {
          e.preventDefault();
          const form = e.target;
          const title = form.title.value;
          const subTitle = form.subTitle.value;

          // Update title data
          const updatedTitleData = { title, subTitle };
          setTitleData(updatedTitleData);

          // Combine form data
          setFormData({ ...updatedTitleData, description: value });
     };

     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium  text-center">About Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleAboutForm} className="pb-10 pt-6 space-y-6">
                         {/* About Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        About Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        name="title"
                                        required
                                        placeholder="About Title"
                                   />
                              </div>
                         </div>

                         {/* Sub Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Sub Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        name="subTitle"
                                        required
                                        placeholder="Sub Title"
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
                                   <div className="rounded-md border border-neutral-300">
                                        {/* Fixed Toolbar */}
                                        <div className="quill-toolbar-wrapper ">
                                             <ReactQuill
                                                  theme="snow"
                                                  modules={modules} // Pass the modules here
                                                  value={value}
                                                  onChange={setValue}
                                                  style={{
                                                       height: "300px", // Set editor height
                                                       overflow: "auto", // Enable scrolling
                                                  }}
                                                  className="editor-with-toolbar"
                                             />
                                        </div>
                                   </div>
                              </div>


                         </div>

                         {/* Save Button */}
                         <div className="flex justify-center ">
                              <button
                                   type="submit"
                                   className="py-2 px-10  bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
                              >
                                   Save
                              </button>
                         </div>
                    </form>
               </div>

               {/* Render the rich text content */}
               {formData && (
                    <div className="mt-8">
                         <h2 className="text-lg font-medium">Preview</h2>
                         <h3 className="text-xl font-semibold">{formData.title}</h3>
                         <h4 className="text-lg text-gray-600">{formData.subTitle}</h4>
                         <div
                              className="bg-gray-100 p-4 rounded-md border"
                              dangerouslySetInnerHTML={{ __html: formData.description }}
                         ></div>
                    </div>
               )}
          </div>
     );
};

export default AboutSection;
