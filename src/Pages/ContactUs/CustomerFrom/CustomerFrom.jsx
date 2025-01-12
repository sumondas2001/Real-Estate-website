import toast from "react-hot-toast";

const CustomerFrom = () => {
     const handelCustomerFrom = (event) => {
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const email = from.email.value;
          const contactsNumber = from.contactsNumber.value;
          const size = from.size.value;
          const location = from.location.value;
          const messages = from.messages.value;
          console.log(name, email, contactsNumber, size, location, messages);
          toast.success('Your Messages Submit Successfully');
          from.reset();
     }
     return (
          <div className="py-16 bg-black p-10 ">
               <h1 className="text-xl mb-4 text-primaryColor">Give your details here</h1>
               <form onSubmit={handelCustomerFrom} className="space-y-9">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                         <input
                              type="text"
                              className="py-2 w-full px-6 border focus:outline-none focus:border-primaryColor bg-black text-white rounded-md"
                              placeholder="Your Name"
                              required
                              name="name"
                         />
                         <input
                              type="email"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Your Email"
                              name="email"
                         />
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6">
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Your Contacts Number" required name="contactsNumber"
                         />
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Preferred size in sqft" required name="size"
                         />
                    </div>
                    <div className="space-y-8" >
                         <input
                              type="text"
                              className="py-2 w-full focus:outline-none focus:border-primaryColor px-6 border bg-black text-white rounded-md"
                              placeholder="Your Preferred Location" required name="location"
                         />
                         <textarea
                              type="email"
                              className=" w-full focus:outline-none focus:border-primaryColor  border bg-black text-white rounded-md  px-4 pt-8 pb-20"
                              placeholder="Your messages" name="messages"
                         />
                    </div>
                    <button type="submit" className=" px-10  py-3 text-base font-semibold bg-primaryColor text-black hover:bg-secondaryColor hover:text-primaryColor ">Submit</button>
               </form>
          </div>
     );
};

export default CustomerFrom;
