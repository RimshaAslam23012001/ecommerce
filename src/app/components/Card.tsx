import Image from "next/image";
import React from "react";

// Floating image content block
const Card = () => {
  return (
    <section className="container mx-auto py-10 px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Delicious Food Awaits
        </h2>
        <p className="text-white mb-4">
          Indulge in the finest flavors and experience culinary perfection.
        </p>
        <button className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 text-white">
          Coming Soon: Our Exciting New Food Launches
        </h3>
        <ul className="list-disc pl-5 text-white mt-4 space-y-2">
          <li>
            <strong>Spicy Chips:</strong> A bold, fiery snack for spice lovers!
          </li>
          <li>
            <strong>Cheesy Fries:</strong> Crispy fries topped with melted
            cheese and savory seasonings.
          </li>
          <li>
            <strong>BBQ Chicken Wings:</strong> Tender wings glazed with our
            signature smoky BBQ sauce.
          </li>
          <li>
            <strong>Vegan Burger:</strong> A plant-based burger with all the
            delicious fixings.
          </li>
          <li>
            <strong>Fruit Smoothies:</strong> Refreshing and healthy, made with
            fresh seasonal fruits.
          </li>
        </ul>
      </div>
      <div className="flex md:w-1/2 justify-center">
        <Image
          src="https://img.freepik.com/free-vector/fast-food-seamless-pattern_1284-10646.jpg?ga=GA1.1.1955477534.1725112092"
          alt="Delicious food pattern"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Card;
