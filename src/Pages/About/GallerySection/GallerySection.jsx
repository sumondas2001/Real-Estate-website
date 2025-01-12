import axios from "axios";
import { useEffect, useState } from "react";

const GallerySection = () => {
     const [galleryImg, setGalleryImg] = useState([]);
     console.log(galleryImg);
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
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1 lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] justify-between mx-auto mb-20">
               {
                    galleryImg.map(img => <div className="image-container" key={img.id}>
                         <img className="h-[550px] object-cover  w-full" src={img.img} alt="" />

                    </div>)
               }
          </div>
     );
};

export default GallerySection;