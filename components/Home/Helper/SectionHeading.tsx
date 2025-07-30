import React from 'react'
type Props ={
    heading:string
}

const SectionHeading = ({heading}:Props) => {
  return <div className='w-[80%] mx-auto'>
    <h1 className='text-xl sm:text-3xl text-blue-900 font-bold'>{heading}</h1>
    <p className='mt-2 text-gray-400 sm:text-base text-sm font-medium'>this is the destination you have been waiting for</p>
  </div>;
}

export default SectionHeading
