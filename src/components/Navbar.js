import React, { useState } from 'react';
import logo from '../Images/asin_salon_logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo-img" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">About us</Link>
          <Link to="/" className="hover:text-blue-500">Services</Link>
          <Link to="/" className="hover:text-blue-500">Memberships</Link>
          <Link to="/" className="hover:text-blue-500">Franchise</Link>
          <Link to="/" className="hover:text-blue-500">E-Shop</Link>
          <Link to="/" className="hover:text-blue-500">Academy</Link>
          <Link to="/" className="hover:text-blue-500">Workshop</Link>
          <Link to="/" className="hover:text-blue-500">Contact us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>

        {/* Book Appointment Button */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          BOOK APPOINTMENT
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-blue-500">About us</Link>
            <Link to="/" className="hover:text-blue-500">Services</Link>
            <Link to="/" className="hover:text-blue-500">Memberships</Link>
            <Link to="/" className="hover:text-blue-500">Franchise</Link>
            <Link to="/" className="hover:text-blue-500">E-Shop</Link>
            <Link to="/" className="hover:text-blue-500">Academy</Link>
            <Link to="/" className="hover:text-blue-500">Workshop</Link>
            <Link to="/" className="hover:text-blue-500">Contact us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
