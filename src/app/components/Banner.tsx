import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-800 to-gray-700 font-sans px-6 py-16 sm:py-24 mb-8">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/banner.jpg"
          alt="banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-white sm:text-6xl text-4xl font-extrabold mb-4 leading-tight tracking-wider drop-shadow-lg">
          Discover Our Menu
        </h1>
        <h2 className="text-white text-lg sm:text-xl text-center mb-6 max-w-xl font-medium tracking-wide drop-shadow-md">
          Shop Now For Exclusive Discounts and Offers
        </h2>
        <button
          className="bg-cyan-400 text-white text-sm font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-cyan-500 transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
          type="button"
        >
          Exciting Deals
        </button>
      </div>
    </div>
  );
};

export default Banner;
