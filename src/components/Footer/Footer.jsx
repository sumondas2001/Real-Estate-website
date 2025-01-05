import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Gold_Black_Modern_Real_Estate_Logo-removebg-preview.png';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
     return (
          <div style={{
               backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://i.ibb.co/bzpwwmp/clay-banks-yb-LSV7s-F7j8-unsplash.jpg")`,
               backgroundSize: "cover",
               backgroundPosition: "center",
          }}
               className='  object-cover py-10 mt-10 text-white '>


               <div className='flex justify-center items-center'>
                    <Link to={'/'}>
                         <img className='h-24 w-32' src={logo} alt="" />
                    </Link>
               </div>
               <div className='flex gap-6 mt-6 justify-center items-center'>
                    <Link to={'/'}> <FaFacebook className='text-xl hover:text-primaryColor' /></Link>
                    <Link to={'/'}>  <FaLinkedinIn className='text-xl hover:text-primaryColor' /></Link>
                    <Link to={'/'}> <FaInstagram className='text-xl hover:text-primaryColor' /></Link>
                    <Link to={'/'}> <FaYoutube className='text-xl hover:text-primaryColor' /></Link>
               </div>

               <div className='text-center flex justify-center mt-4'>

                    <a href={'https://maps.app.goo.gl/bkdn3ft5o6oHbFXd7'} target="_blank" className='text-base font-medium w-96  hover:text-primaryColor'>
                         Softtech Solution, Nikunja 2,House#9 Rd No.8, Dhaka 1229, Bangladesh
                    </a>
               </div>
               <div>
                    <ul className='md:flex lg:flex flex-row text-center justify-center lg:gap-20 md:gap-10  mt-8'>
                         <Link to={'/'}><li className='text-sm font-medium hover:text-primaryColor mb-1 '>HOME</li></Link>

                         <Link to={'/about'}><li className='text-sm font-medium hover:text-primaryColor mb-1'>ABOUT</li></Link>  <hr />
                         <Link to={'/property'}><li className='text-sm font-medium hover:text-primaryColor mb-1'>PROPERTY</li></Link>  <hr />
                         <Link to={'/blog'}><li className='text-sm font-medium hover:text-primaryColor mb-1'>BLOG</li></Link>  <hr />
                         <Link to={'/career'}><li className='text-sm font-medium hover:text-primaryColor mb-1'>CAREER</li></Link>  <hr />
                         <Link to={'/contactUs'}><li className='text-sm font-medium hover:text-primaryColor mb-1'>CONTACT US</li></Link>
                    </ul>
                    <hr className='mt-4' />
               </div>
               <div>
                    <p className='text-xs mt-2 text-center'>© 2025 Softtech Solution (Pvt.) Ltd. All Right Reserved</p>
               </div>
          </div>

     );
};

export default Footer;