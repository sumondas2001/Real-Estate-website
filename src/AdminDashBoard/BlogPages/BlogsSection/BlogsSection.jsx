import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
const BlogsSection = () => {
     const { register,
          handleSubmit,
          setValue,
          formState: { errors, isSubmitting }
     } = useForm();
     const onSubmit = (data) => {

          console.log(data);
     }

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
               ["link",], // Multimedia options
               ["clean"], // Clear formatting
          ],
     };
     // Track the ReactQuill editor content
     const [editorContent, setEditorContent] = useState("");

     // ReactQuill Change Handler
     const handleEditorChange = (content) => {
          setEditorContent(content);
          setValue("description", content, { shouldValidate: true }); // Register with react-hook-form
     };
     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               <h1 className="text-xl font-medium  text-center">Add Blogs Section Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">
                         {/* About Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Blogs Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"

                                        {...register('title', { required: true })}
                                        placeholder="Our Blog Title"
                                   />
                                   {
                                        errors.title && <p className='text-sm font-extralight text-red-400'>title field is must be required</p>
                                   }
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
                                                  value={editorContent}
                                                  onChange={handleEditorChange}

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
                         {/* File Input Field */}
                         <div className="flex items-center justify-center">
                              <div className="lg:w-1/6 w-1/3">
                                   <label className="text-sm font-medium text-left block">
                                        Upload Image size <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="lg:w-3/5 w-full">
                                   <div >

                                        <input type="file"
                                             {...register("imgField", { required: "image Field is must be required" })}

                                             className="file-input  file-input-accent  w-full max-w-xs"
                                        />

                                        {errors.imgField && <p className="text-sm text-red-400">{errors.imgField.message}</p>}
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


export default BlogsSection;