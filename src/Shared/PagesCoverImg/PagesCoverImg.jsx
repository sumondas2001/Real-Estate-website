import PropTypes from "prop-types";


const PagesCoverImg = ({ info }) => {
     const { CoverImg } = info;
     return (
          <div
               className="relative ">
               {/* Gradient and image container */}
               <div className="relative ">
                    <img className=" w-full lg:h-[500px] opacity-80  md:h-[390px] h-[350px] object-cover" src={CoverImg} alt="Cover Img" />

               </div>


               {/* Title */}

               <div
                    data-aos="fade-up"
                    data-aos-offset="120"
                    data-aos-delay="0"
                    data-aos-duration="2500"
                    data-aos-easing="ease-in-out"

                    className="top-1/2    lg:left-20 left-7 md:left-9   -translate-y-1/2   absolute space-y-4 " >
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-normal text-primaryColor">{info?.title}</h1>
                    <p className="lg:text-4xl md:text-3xl text-xl font-normal text-primaryColor">{info?.description}</p>
               </div >

          </div >
     );
};

export default PagesCoverImg;

PagesCoverImg.propTypes = {

     info: PropTypes.object,

}