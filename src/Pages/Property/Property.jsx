import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";

const Property = () => {
     const CoverImg = 'https://i.ibb.co.com/gZ19Px0/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg';
     const title = 'PROPERTY'
     const description = 'Crafting Your Dream Property';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>


               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
          </div>
     );
};


export default Property;