import React from 'react'
import SectionHeading from '../Helper/SectionHeading';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return <div className='pt-20 pb-20'>
    {/* heading section */}
    <SectionHeading heading='Exploring Popular Destination'/>
    {/* content section */}
    <div className='mt-14 w-[80%] mx-auto'>
        {/* slider part */}
        <DestinationSlider/>

    </div>
    </div>;
}

export default Destination