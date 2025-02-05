import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogsSection = () => {
     const [blogs, setBlogs] = useState([]);
     // total property 
     const [totalBlog, setTotalBlog] = useState(0);

     const [currentPages, setCurrentPages] = useState(0);

     // property par pages show
     const [itemsPerPages, setItemsPerPages] = useState(10);

     const numberOfPerPages = Math.ceil(totalBlog / itemsPerPages);

     const pages = [...Array(numberOfPerPages).keys()];

     // console.log(pages);

     useEffect(() => {
          axios.get('/Blogs.json')
               .then(res => {
                    setBlogs(res.data);
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     useEffect(() => {
          axios.get('/Blogs.json')
               .then(res => {

                    setTotalBlog(res.data.length)
               })
               .catch(error => {
                    console.log(error);
               })
     }, []);
     // useEffect(() => {
     //      axios.get('/allProperty.json?item=${currentPages},size=${itemsPerPages}')
     //           .then(res => {

     //                 setProperties(res.data);
     //           })
     //           .catch(error => {
     //                console.log(error);
     //           })
     // }, []);


     const handelPerPagesShow = (e) => {
          const value = parseInt(e.target.value);
          setItemsPerPages(value)
          setCurrentPages(0)
          console.log(value);

     };
     const handelPrevious = () => {
          if (currentPages > 0) {
               setCurrentPages(currentPages - 1)
          }
     };
     const handelNext = () => {
          if (currentPages < pages.length - 1) {
               setCurrentPages(currentPages + 1)
          }
     };

     return (
          <div className="2xl:max-w-screen-2xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[360px] mx-auto py-4">
               {/* Add Property Button */}
               <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">All Blogs Information</h1>
                    <Link to={'/admin-dashBoard/add-blog'}>
                         <button className="py-2 px-6 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none">
                              ADD BLOG
                         </button>
                    </Link>
               </div>
               <div className="flex justify-around mb-4">

                    <div>
                         <label className="mr-4">Items per Pages</label>
                         <select value={itemsPerPages} onChange={handelPerPagesShow} className="py-2 text-sm  px-3 border border-neutral-400 focus:outline-none focus:border-blue-400 rounded-md"  >

                              <option value="10"> 10</option>
                              <option value="20"> 20</option>
                              <option value="30"> 30</option>
                              <option value="50"> 50</option>
                         </select>
                    </div>
                    <input type="search" name="" id="" placeholder="Search hare.." className="py-2  px-4 border focus:outline-none focus:border-primaryColor  text-white rounded-md" />
               </div>

               {/* Property Table */}
               <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full bg-white border border-gray-200">
                         <thead className="bg-gray-100">
                              <tr>
                                   <th className="py-3 px-4 text-left border-b">#</th>
                                   <th className="py-3 px-4 text-left border-b">Blog Img</th>
                                   <th className="py-3 px-4 text-left border-b">Blog Title</th>

                                   <th className="py-3 px-4 text-center border-b">Options</th>
                              </tr>
                         </thead>

                         <tbody>
                              {

                                   blogs.map((blog, index) => (
                                        <tr key={blog.id} className="text-sm">
                                             <td className="py-2 px-4 border-b">{index + 1}</td>
                                             <td className="py-2 px-4 border-b">
                                                  <img className="w-16 h-16  object-cover" src={blog.blogImg} alt="" />
                                             </td>
                                             <td className="py-2 px-4 border-b font-medium">
                                                  {blog.blogTitle}
                                             </td>


                                             <td>
                                                  <div className="flex items-center justify-center gap-3">
                                                       <Link to={`/blog`}>
                                                            <FaEye className="text-blue-500 hover:text-blue-700 cursor-pointer" title="View" />
                                                       </Link>
                                                       <Link to={`/admin-dashBoard/blog-edit/${blog.id}`}>
                                                            <FaEdit className="text-green-500 hover:text-green-700 cursor-pointer" title="Edit" />
                                                       </Link>
                                                       <Link to={`/admin-dashBoard/blog/${blog.id}`}>
                                                            <FaTrash className="text-red-500 hover:text-red-700 cursor-pointer" title="Delete" />
                                                       </Link>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))

                              }
                         </tbody>
                    </table>

                    <div className="flex mt-10 justify-center">
                         <button
                              onClick={handelPrevious}
                              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                              Previous
                         </button>
                         {
                              pages.map(page => (
                                   <button
                                        key={page}
                                        onClick={() => setCurrentPages(page)}
                                        className={`px-4 py-2 mx-1 rounded-md transition-colors duration-300 transform ${currentPages === page
                                             ? 'bg-blue-500 text-white'   // Active page styling
                                             : 'bg-gray-700 text-white hover:bg-blue-500 hover:text-white'
                                             }`}
                                   >
                                        {page + 1}
                                   </button>

                              ))
                         }




                         <button
                              onClick={handelNext}
                              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                              Next
                         </button>
                    </div>
               </div>
          </div >
     );
};

// Placeholder delete handler (replace with real logic)



export default AllBlogsSection;