import './Video.css';

const Video = () => {
     // Original YouTube video link
     const videoLink = 'https://www.youtube.com/watch?v=jPkBJY1KI_Q&ab_channel=EricDavidson';

     // Replace "watch?v=" with "embed/" to create the correct embed URL
     const embedUrl = videoLink.replace("watch?v=", "embed/").split("&")[0]; // Remove extra parameters like "&ab_channel"

     // Final URL with autoplay and loop parameters
     const url = `${embedUrl}?playlist=${embedUrl.split("/").pop()}&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&modestbranding=1&mute=1&enablejsapi=1`;

     return (
          <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"

               className="youtube-bg">
               <div id="player-wrapper">
                    <iframe
                         id="player"
                         frameBorder="0"
                         allowFullScreen
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         referrerPolicy="strict-origin-when-cross-origin"
                         title="YouTube Video Player"
                         src={url}
                    ></iframe>
               </div>
          </div>
     );
};

export default Video;
