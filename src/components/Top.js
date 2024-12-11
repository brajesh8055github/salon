import React from 'react';
import { MdCall } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Top = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center px-4 py-2">
      {/* Location Section */}
      <div className="flex items-center space-x-2">
        <IoLocationSharp className="text-xl text-yellow-500" />
        <p className="text-sm md:text-base">Salon Finder</p>
      </div>

      {/* Contact Section */}
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        <MdCall className="text-xl text-yellow-500" />
        <p className="text-sm md:text-base">+91-9560337775</p>
      </div>
    </div>
  );
};

export default Top;
