
const Video = () => {
     return (

          <div >
               <h1 className="md:text-2xl text-lg text-primaryColor font-medium text-center my-10"> Explore Our Landmark Projects</h1>
               <iframe
                    className="aspect-video w-[89%] mx-auto"
                    src="https://www.youtube.com/embed/kqq0JTjrXlM?si=PNhStg3GdGhiofZJ&controls=1&mute=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
               ></iframe>
          </div>




     );
};

export default Video;