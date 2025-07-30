import React from 'react'
import SectionHeading from '../Helper/SectionHeading';
import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
  return (
    <div className="pt-15 pb-24">
      {/* section heading here */}
      <SectionHeading heading="WhyChoose Us" />
      <div
        className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     gap-16 items-center mt-20"
      >
        {/* why choose us */}
        <div>
          <WhyChooseCard image="images/c1.svg" tittle="Best Price Guarantee" />
        </div>
        <div>
          <WhyChooseCard image="images/c2.svg" tittle="Easy & Quick Booking" />
        </div>
        <div>
          <WhyChooseCard image="images/c3.svg" tittle="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
