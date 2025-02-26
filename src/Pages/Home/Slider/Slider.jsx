import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './slider.css';
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';


const Slider = () => {
     const [slidersData, setSlidersData] = useState([]);



     useEffect(() => {
          axios.get('/slider.json')
               .then(res => {
                    // console.log(res.data);
                    setSlidersData(res.data)
               })
               .catch(error => {
                    console.log(error);
                    toast.error("Failed to load slider data.");

               })
     }, [])

     return (
          <div>
               <Swiper
                    spaceBetween={3}
                    centeredSlides={true}

                    speed={3000}
                    loop={true}
                    autoplay={{
                         delay: 6000,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={{
                         nextEl: '.custom-next',
                         prevEl: '.custom-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
               >

                    {
                         slidersData.map(slider => (
                              <SwiperSlide key={slider.id} slider={slider} >
                                   <div className='relative '>

                                        <img

                                             src={slider.image}
                                             alt={`Slide ${slider.id}`}
                                        />

                                        <div



                                             className="absolute inset-0 flex items-center justify-start lg:left-20 md:left-8 left-7 text-primaryColor">
                                             <h1
                                                  className="lg:text-7xl md:text-5xl text-2xl  font-medium opacity-70">{slider?.title}</h1>
                                        </div>
                                   </div>
                              </SwiperSlide>

                         ))
                    }



                    {/* Custom Navigation Buttons */}
                    <div className="custom-prev hover:text-primaryColor md:right-[100px] right-20">
                         <BsArrowLeft className='font-thin lg:text-4xl md:text-3xl text-3xl' />
                    </div>
                    <div className="custom-next hover:text-primaryColor md:right-[40px] right-8">
                         <BsArrowRight className='font-thin lg:text-4xl md:text-3xl text-3xl' />
                    </div>
               </Swiper>



          </div>
     );
};

export default Slider;
