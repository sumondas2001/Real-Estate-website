import './Video.css';

const Video = () => {
     const url = 'https://www.youtube.com/embed/mgulkcaPMCY?si=CyrxnXDzlNgjZFjV';

     return (
          <div className="youtube-bg ">
               <div id="player-wrapper">
                    <iframe
                         id="player"
                         frameBorder="0"
                         allowFullScreen
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         referrerPolicy="strict-origin-when-cross-origin"
                         title="RiBANA | Natural Skin & Hair Care | 100% Organic"
                         src={`${url}&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&modestbranding=1&mute=1&enablejsapi=1`}
                    ></iframe>
               </div>
          </div>
     );
};

export default Video;
``
