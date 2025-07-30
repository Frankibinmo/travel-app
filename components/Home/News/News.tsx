import React from 'react'
import SectionHeading from '../Helper/SectionHeading';
import NewsCard from './NewsCard';

const News = () => {
  return (
    <div className="pt-16 pb-16 ">
      {/* section heading */}
      <SectionHeading heading="Travel News for your comfort" />
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20"
      >
        <div>
          <NewsCard
            image="/images/n1.jpg"
            tittle="Top 10 places to visit in Africa And the rest of the world"
            Date="07 october 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n2.jpg"
            tittle="Top 10 places to visit in Europe And the rest of the world"
            Date="15 AUgust 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n3.jpg"
            tittle="Top 10 places to visit in America And the rest of the world"
            Date="12 June 2025"
          />
        </div>
        <div>
          <NewsCard
            image="/images/n4.jpg"
            tittle="Top 10 places to visit in Australia And the rest of the world"
            Date="30th July 2025"
          />
        </div>
      </div>
    </div>
  );
}

export default News
