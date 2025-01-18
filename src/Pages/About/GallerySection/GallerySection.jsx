import axios from "axios";
import { useEffect, useState } from "react";

const GallerySection = () => {
     const [galleryImg, setGalleryImg] = useState([]);

     useEffect(() => {
          axios.get('/galleryImg.json')
               .then(res => {
                    setGalleryImg(res.data)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [])
     return (
          <div

               className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1 lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] justify-between mx-auto mb-20">
               {
                    galleryImg?.map(img => <div
                         data-aos="fade-up"
                         data-aos-offset="100"
                         data-aos-delay="0"
                         data-aos-duration="2000"
                         data-aos-easing="ease-out-cubic"
                         className="image-container" key={img.id}>
                         <img className="h-[550px] object-cover  w-full" src={img.img} alt="" />

                    </div>)
               }
          </div>
     );
};

export default GallerySection;