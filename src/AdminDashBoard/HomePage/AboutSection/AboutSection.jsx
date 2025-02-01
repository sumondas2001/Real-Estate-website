import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

import './SherdTextEditor.css'

const AboutSection = () => {
     // Define ReactQuill Toolbar
     const modules = {
          toolbar: [
               ["bold", "italic", "underline", "strike"],
               ["blockquote", "code-block"],
               [{ header: 1 }, { header: 2 }],
               [{ list: "ordered" }, { list: "bullet" }],
               [{ script: "sub" }, { script: "super" }],
               [{ indent: "-1" }, { indent: "+1" }],
               [{ direction: "rtl" }],
               [{ size: ["small", false, "large", "huge"] }],
               [{ header: [1, 2, 3, 4, 5, 6, false] }],
               [{ color: [] }, { background: [] }],
               [{ font: [] }],
               [{ align: [] }],
               ["link", "image", "video", "formula"],
               ["clean"],
          ],
     };

     // Track the ReactQuill editor content
     const [editorContent, setEditorContent] = useState("");

     // react-hook-form setup
     const {
          register,
          handleSubmit,
          setValue, // Needed to manually update ReactQuill value
          formState: { errors, isSubmitting },
     } = useForm();

     // ReactQuill Change Handler
     const handleEditorChange = (content) => {
          setEditorContent(content);
          setValue("description", content, { shouldValidate: true }); // Register with react-hook-form
     };

     // Form Submission
     const onSubmit = (data) => {
          console.log("Form Submitted:", data);
     };

     return (
          <div className="max-w-2xl mx-auto py-4">
               <h1 className="text-xl font-medium text-center">About Information</h1>
               <div className="bg-white border border-slate-200 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-10 pt-6 space-y-6">

                         {/* About Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="w-1/3">
                                   <label className="text-sm font-medium">
                                        About Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        {...register("title", { required: "Title is required" })}
                                        placeholder="About Title"
                                   />
                                   {errors.title && <p className="text-sm text-red-400">{errors.title.message}</p>}
                              </div>
                         </div>

                         {/* Sub Title Field */}
                         <div className="flex items-center justify-center">
                              <div className="w-1/3">
                                   <label className="text-sm font-medium">
                                        Sub Title <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="w-full">
                                   <input
                                        className="w-full py-2 px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"
                                        type="text"
                                        {...register("subTitle", { required: "Sub Title is required" })}
                                        placeholder="Sub Title"
                                   />
                                   {errors.subTitle && <p className="text-sm text-red-400">{errors.subTitle.message}</p>}
                              </div>
                         </div>

                         {/* Description Field (ReactQuill) */}
                         <div className="flex justify-center">
                              <div className="w-1/3">
                                   <label className="text-sm font-medium">
                                        Description <span className="text-red-600">*</span>
                                   </label>
                              </div>
                              <div className="w-full">
                                   <div className="editor-with-toolbar rounded-md border border-neutral-300">
                                        <ReactQuill

                                             theme="snow"
                                             value={editorContent}
                                             onChange={handleEditorChange}
                                             modules={modules}
                                             style={{ height: "300px", overflow: "auto" }}
                                             className="editor-with-toolbar"
                                        />
                                   </div>
                                   {/* Display Error Message if Validation Fails */}
                                   {errors.description && (
                                        <p className="text-sm text-red-400">Description is required</p>
                                   )}
                              </div>
                         </div>

                         {/* Save Button */}
                         <div className="flex justify-center">
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

export default AboutSection;
