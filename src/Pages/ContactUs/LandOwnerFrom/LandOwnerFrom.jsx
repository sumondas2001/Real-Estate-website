import toast from "react-hot-toast";

const LandOwnerFrom = () => {
     const handelLandOwnerFrom = (event) => {
          event.preventDefault();
          const from = event.target;
          const landOwnerName = from.landOwnerName.value;
          const contactPerson = from.contactPerson.value;
          const contactNumber = from.contactNumber.value;
          const email = from.email.value;
          const landSize = from.landSize.value;
          const landLocation = from.landLocation.value;
          const messages = from.messages.value;
          console.log(landOwnerName, email, contactNumber, contactPerson, landSize, landLocation, messages);

          toast.success('Your Messages Submit Successfully');
          from.reset();
     }
     return (
          <div
               data-aos="zoom-in"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"

               className="py-16 bg-black p-10 ">
               <h1 className="text-xl mb-4 text-primaryColor">Give your details here</h1>
               <form onSubmit={handelLandOwnerFrom} className="space-y-9">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                         <input
                              type="text"
                              className="py-2 w-full px-6 border focus:outline-none focus:border-primaryColor bg-black text-white rounded-md"
                              placeholder="Name fo land owner's"
                              required
                              name="landOwnerName"
                         />
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Name fo contact person"
                              name="contactPerson"
                         />
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Contact Number" required name="contactNumber"
                         />
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Your email" required name="email"
                         />
                    </div>
                    <div className="space-y-8" >
                         <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                              <input
                                   type="text"
                                   className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                                   placeholder="Land size (in katha)" required name="landSize"
                              />
                              <input
                                   type="text"
                                   className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                                   placeholder="Location fo the land" required name="landLocation"
                              />
                         </div>
                         <textarea
                              type="text"
                              className=" w-full focus:outline-none focus:border-primaryColor  border bg-black text-white rounded-md  px-4 pt-8 pb-20"
                              placeholder="Your messages" name="messages"
                         />
                    </div>
                    <button type="submit" className=" px-10  py-3 text-base font-semibold bg-primaryColor text-black hover:bg-secondaryColor hover:text-primaryColor ">Submit</button>
               </form>
          </div>
     );
};

export default LandOwnerFrom;