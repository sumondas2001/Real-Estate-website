const CustomerFrom = () => {
     return (
          <div className="py-16 bg-black p-10 ">
               <h1 className="text-xl mb-4 text-primaryColor">Give your details here</h1>
               <form className="space-y-9">
                    <div className="flex gap-6">
                         <input
                              type="text"
                              className="py-2 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Your Name" name="name"
                         />
                         <input
                              type="email"
                              className="py-2 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Your Email" name="email"
                         />
                    </div>
                    <div className="flex gap-6">
                         <input
                              type="text"
                              className="py-2 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Your Contacts Number" name="contactsNumber"
                         />
                         <input
                              type="email"
                              className="py-2 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Preferred size in sqft" name="size"
                         />
                    </div>
                    <div className="space-y-8" >
                         <input
                              type="text"
                              className="py-2 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Your Preferred Location" name="location"
                         />
                         <input
                              type="email"
                              className="py-16 w-full px-6 border bg-black text-white rounded-md"
                              placeholder="Your messages" name="messages"
                         />
                    </div>
                    <button type="submit" className="btn  w-full text-base font-bold bg-secondaryColor">Submit</button>
               </form>
          </div>
     );
};

export default CustomerFrom;
