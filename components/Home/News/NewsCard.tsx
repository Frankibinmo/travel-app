import Image from 'next/image';
import React from 'react'

type Props = {
  image: string;
  tittle: string;
  Date: string;
};

const NewsCard = ({image,tittle,Date}:Props) => {

   
  return <div>
    {/* images here */}
    <div className='h-[300px]'>
        <Image src={image} alt={tittle} 
        width={300} 
        height={300}
         className='w-full h-full object-cover rounded-lg'/> 
    </div>
    {/* text content */}
    <h1 className='mt-6 text-lg text-gray-600 font-semibold
     hover:text-blue-900 transition-all duration-300 cursor-pointer'>{tittle}</h1>
    <p className='text-sm text-gray-600 mt-4'>{Date}</p>
  </div>
}

export default NewsCard
