import Link from 'next/link';
import React from 'react'
import { FaDribbble, FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div
        className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2
     grid md:grid-cols-3 lg:grid-cols-4 gap-9"
      >
        {/* first part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            About Us
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Careers
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Gift Cards
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Blogs
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Magazine
          </p>
        </div>

        {/* second part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support </h1>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Contact
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Legal Notice
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Privacy Plicy
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Terms & Conditions
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            SiteMap
          </p>
        </div>
        {/* Thired  part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support </h1>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Contact
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Legal Notice
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Privacy Plicy
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            Terms & Conditions
          </p>
          <p className="text-gray-600 font-bold cursor-pointer text-sm hover:text-green-300">
            SiteMap
          </p>
        </div>
        {/* fourth part */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-7">
            <h1 className="text-sm text-gray-600">Our Mobile Numbe</h1>
            <h2 className="text-base font-bold text-green-700">
              +01234 7062144661
            </h2>
            <h2 className="text-base font-bold text-yellow-400">
              +01234 7056135034
            </h2>
          </div>
          <div className="mt-7">
            <h1 className="text-sm text-gray-600">Email Us</h1>
            <h2 className="text-base font-bold text-red-600">
              hodtravels@gmail.com
            </h2>
          </div>
        </div>
      </div>
      {/* buttom section after the footer */}
      <div
        className="w-[80%] mx-auto mt-8 border-t-orange-500 pt-7 flex flex-col md:flex-row justify-between
      items-center text-green-500 text-sm"
      >
        <span className="text-center md:text-left">
          Copyright *2025 Hod.devweb. All rights Reserved
        </span>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Special:</span>
          <Link href="#" className="text-gray-400 hover:text-blue-800">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-800">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-800">
            <FaDribbble />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
