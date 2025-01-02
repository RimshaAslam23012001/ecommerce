import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      {/* First Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center">
          <div className="flex flex-col md:w-1/2 items-center md:items-start">
            <Image
              className="object-cover object-center w-full h-auto rounded-lg"
              alt="Fast Food"
              src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBwaWN0dXJlJTIwZm9yJTIwYWJvdXQlMjBzZWN0aW9ufGVufDB8fDB8fHww"
              width={500}
              height={500}
            />
          </div>

          {/* Text Content and Buttons */}
          <div className="md:w-1/2 lg:pl-24 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-cyan-400 italic">
              Welcome to Our Fast Food World
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Fast Food That Brings You Joy
            </p>
            <p className="mb-8 leading-relaxed mt-4 text-[#333333]">
              We provide delicious and quick meals made with the freshest ingredients. From burgers to fries, and milkshakes to pizzas – we have something to satisfy your cravings! Indulge in mouth-watering fast food that’s quick, tasty, and always on time.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="inline-flex text-white bg-cyan-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Why Choose Us */}
      <section className="text-white body-font">
        <div className="container mx-auto flex flex-col items-center px-5 py-24">
          <h1 className="text-black text-3xl font-bold text-center">Why Choose Us?</h1>
          <p className="text-black text-center mt-2">
            Quality ingredients, fast service, and mouth-watering flavors – here’s why we’re the best choice for your next meal!
          </p>
          {/* Fixed Image in the section */}
          <div className="relative w-full mt-10">
            <Image
              className="object-cover object-center w-full h-auto rounded-lg"
              alt="Fresh Ingredients"
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBwaWN0dXJlJTIwZm9yJTIwYWJvdXQlMjBzZWN0aW9ufGVufDB8fDB8fHww"
              width={1320}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Third Section: Features/Benefits */}
      <section className="text-white body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden shadow-md p-6 text-center">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold">
                  Best Chefs in Town
                </h1>
                <p className="leading-relaxed mb-3 text-black">
                  Our skilled chefs prepare food with love, ensuring every bite is flavorful and satisfying.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-md p-6 text-center">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold">
                  120+ Menu Items
                </h1>
                <p className="leading-relaxed mb-3 text-black">
                  Choose from a wide variety of fast food options, including burgers, fries, shakes, and more!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="h-full border-2 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-md p-6 text-center">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold">
                  Clean & Hygienic
                </h1>
                <p className="leading-relaxed mb-3 text-black">
                  We prioritize cleanliness and hygiene in every step of our food preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
