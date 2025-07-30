import React from 'react'
import { FaStar } from 'react-icons/fa';
import ReviewsSlider from './ReviewsSlider';

const Reviews = () => {
  return (
    <div
      className="pt-20 pb-20 flex items-center
   justify-center flex-col bg-blue-400"
    >
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          {/* text content */}

          <h1 className="text-2xl font-semibold text-white">
            What Our Customers Are Saiying to Us!
          </h1>
          <p className="mt-6 text-white">
            It is possible to travel with us at cheaper rate and explore <br />{" "}
            nature in all part of the world, <br /> including all the enumerated
            countries above, you are all welcome
          </p>
          {/* ratings part here */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">8.55</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* slider part */}
        <div className="overflow-hidden">
          <ReviewsSlider />
        </div>
      </div>
    </div>
  );
}

export default Reviews
