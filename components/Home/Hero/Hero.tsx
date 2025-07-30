import React from 'react'
import SearchBox from '../Helper/SearchBox';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="reative w-full h-[120vh] sm:h-[100vh]">
      {/* this is our background video overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70">
        {/* the backround video play */}
        <video
          src="/images/hero1.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      {/* this is the center text */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center w-full flex-col h-full">
          
            <h1
              className="uppercase text-center  text-[25px] mb-4 md:mb-0 
                md:text-[35px] lg:text-[45px] 
                tracking-[0.7rem] text-white
                font-bold"
            >
              Lets Enjoy Nature in ogonokom
            </h1>

          <div>
            <p
              className="  md:text-base text-center text-large text-white
                [word-spacing:5px] font-bold mb-0"
            >
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
          {/* serachbox  */}
          <SearchBox />
          {/* search button */}
          <Link href='#' className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden
           group bg-rose-600 relative hover:bg-gradient-to-r hover:from-green-500
            hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-300 transition-all ease-out duration-300'>
          <span className='absolute right-0 w-8 h-34 -mt-12 transition-all
           duration-100 transform translate-x-12 bg-white opacity-10 rotate-12
            group-hover:-translate-x-40 ease-out'></span>
          <span className='relative font-bold'>Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
