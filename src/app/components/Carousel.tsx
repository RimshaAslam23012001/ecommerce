import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-slate-800">
        <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">

            {/* Item 1 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out hover:shadow-lg">
              <Link href={""} className="relative flex flex-col overflow-hidden rounded-lg">
                <Image
                  src="/hero3.jpg"
                  alt="Classic Bite"
                  height={300}
                  width={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
                <h3 className="z-10 text-3xl font-bold text-yellow-400 absolute bottom-4 left-4 p-4 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:scale-110">
                  Classic Bite
                </h3>
              </Link>
            </div>

            {/* Item 2 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out hover:shadow-lg">
              <Link href={""} className="relative flex flex-col overflow-hidden rounded-lg">
                <Image
                  src="/hero2.jpg"
                  alt="Veggie Tacos"
                  height={300}
                  width={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
                <h3 className="z-10 text-3xl font-bold text-green-400 absolute bottom-4 left-4 p-4 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:scale-110">
                  Veggie Tacos
                </h3>
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* Item 3 */}
                <Link href={""} className="group relative flex flex-col overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-700 ease-in-out hover:shadow-lg">
                  <Image
                    src="/hero5.jpg"
                    alt="Spicy Chips"
                    height={200}
                    width={300}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
                  <h3 className="z-10 text-2xl font-bold text-red-400 absolute bottom-4 left-4 p-4 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:scale-110">
                    Spicy Chips
                  </h3>
                </Link>

                {/* Item 4 */}
                <Link href={""} className="group relative flex flex-col overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-700 ease-in-out hover:shadow-lg">
                  <Image
                    src="/hero4.jpg"
                    alt="Chicken Wings"
                    height={200}
                    width={300}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
                  <h3 className="z-10 text-2xl font-bold text-orange-400 absolute bottom-4 left-4 p-4 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:scale-110">
                    Chicken Wings
                  </h3>
                </Link>
              </div>
            </div>

            {/* Item 5 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out hover:shadow-lg">
              <Link href={""} className="relative flex flex-col overflow-hidden rounded-lg">
                <Image
                  src="/hero1.jpg"
                  alt="Gourmet Grills"
                  height={300}
                  width={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
                <h3 className="z-10 text-3xl font-bold text-blue-400 absolute bottom-4 left-4 p-4 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:scale-110">
                  Gourmet Grills
                </h3>
              </Link>e
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
