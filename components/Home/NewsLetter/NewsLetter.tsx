import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs';

const NewsLetter = () => {
  return (
    <div
      className="bg-black pt-15 pb-15 flex items-center
   justify-center w-full flex-col"
    >
      <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your travel Journey Starts here, take advatage of it
      </h1>
      <p className="mt-3 text-white text-sm">
        Sign Up and we will send the best deals to your door step
      </p>
      {/* subscription inpute and buttons */}
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-7 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] 
        rounded-lg mx-auto outline-none flex items-center justify-center "
          placeholder="Email"
        />
        <button
          className="px-6 py-3.5 bg-blue-600 hover:bg-amber-300 text-black mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] 
        rounded-lg mx-auto outline-none flex items-center justify-center "
        >
          Subscribe Here
        </button>
      </div>
    </div>
  );
}

export default NewsLetter
