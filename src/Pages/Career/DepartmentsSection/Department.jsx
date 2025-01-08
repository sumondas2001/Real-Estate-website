
const Department = ({ department }) => {
     const { title, img } = department;
     return (
          <div className=" text-center space-y-2 text-white">
               <img className=" mx-auto hover:bg-secondaryColor p-3" src={img} alt={title} />
               <h1>{title}</h1>
          </div>
     );
};

export default Department;