"use client";
import React from "react";
import { FaBars, FaBolt, FaSearch, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      {/* Top Header (Logo, Search, Order Info) */}
      <div className="py-3 px-3 lg:px-10 bg-gradient-to-l from-black to-gray-800 border-b">
        <div className="flex justify-between items-center">
          {/* Logo and Search */}
          <div className="flex justify-center items-center gap-4">
            <Image
              className="rounded-full object-cover"
              src="/logo.jpg"
              alt="logo"
              height={50}
              width={50}
            />
            {/* Search Bar */}
            <div className="relative">
              <input
                className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                placeholder="Search here..."
              />
              <FaSearch className="w-5 h-5 text-lime-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
            </div>
          </div>

          {/* Order Info (Bolt Icon and Text) */}
          <div className="hidden lg:flex justify-center items-center gap-4 text-white text-lg">
            <FaBolt className="w-6 h-6 text-yellow-200 hover:text-yellow-400" />
            <p className="text-sm">
              Order now and get it within <span className="text-amber-400">15 minutes!</span>
            </p>
            {/* Cart Icon */}
            <div className="relative">
              <FaShoppingCart className="w-8 h-8 text-lime-200 relative hover:text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Home, Menu, About, Contact) */}
      <div className="py-2 px-3 lg:px-10 bg-black">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex justify-center items-center gap-8 text-lg text-white">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/Menu" className="hover:text-yellow-400">Menu</a>
            <a href="/About" className="hover:text-yellow-400">About</a>
            <a href="/Contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Menu Hamburger Icon */}
          <div className="lg:hidden">
            <button className="text-white">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="absolute top-0 left-0 bg-black bg-opacity-90 w-full h-screen flex flex-col items-center justify-center gap-4 lg:hidden p-5">
        <a href="/" className="text-white text-lg hover:text-yellow-400">
          Home
        </a>
        <a href="/Menu" className="text-white text-lg hover:text-yellow-400">
          Menu
        </a>
        <a href="/About" className="text-white text-lg hover:text-yellow-400">
          About
        </a>
        <a href="/Contact" className="text-white text-lg hover:text-yellow-400">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
