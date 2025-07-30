import Image from 'next/image'
import React from 'react'

type Props ={
    image :string
    tittle:string
}

const WhyChooseCard = ({image,tittle}:Props) => {
  return <div>
    {/* images  */}
    <Image src={image} width={70}
     height={70}
      alt="image" className='mx-auto'/>
      {/* content */}
      <h1 className='mt-6 text-center text-gray-800 font-medium text-lg'>{tittle}</h1>
      <p className='mt-2 text-center text-xs font-medium text-gray-500'>we offer you affordable houses any time, any day!</p>
  </div>;
}

export default WhyChooseCard
