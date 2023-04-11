import React from 'react'

const Contact = () => {
  return (
    <div 
    name="contact" 
    className=" w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="mt-40 flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Me</p>
                <p className="py-6">Submit Form Below To Get In Touch!</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/0ce36e04-bd63-41a9-85df-4a00ba77f784" 
            method="POST"
            className="flex flex-col w-full md:w-1/2">
              <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
              />
              <input 
               type="text"
               name="email" 
               placeholder="Enter your email" 
               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
              />
              <textarea 
              name="message" 
              rows="10" 
              placeholder="Your thoughts here!"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
              </textarea>

              <button className="text-white bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer  mx-auto flex items-center rounded-md hover:scale-110 duration-300 px-6 py-3">Let's Connect!</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
