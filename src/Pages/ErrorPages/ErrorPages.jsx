import { Link } from "react-router-dom";

const ErrorPages = () => {

     return (
          <div className="h-screen  bg-[url('https://i.ibb.co.com/9tMpFB1/rb-7870.png')] bg-cover  bg-center bg-no-repeat flex flex-col justify-center items-center text-center space-y-10">
               <h1 className="text-4xl font-medium text-white">
                    Page Not <span className="text-primaryColor">Found</span>
               </h1>
               <div className="flex flex-col space-y-10 justify-center items-center">
                    <p className="text-xl font-medium lg:w-[600px] md:w-[500px] w-[400px] text-white">
                         The page you are looking for has either been removed or does not exist. You can go back or try to navigate again from our home page.
                    </p>
                    <Link to={'/'}>
                         <button className="mt-auto hover:bg-primaryColor font-medium text-white border hover:border-none px-8 py-2 hover:text-black">
                              Visit Home
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default ErrorPages;
