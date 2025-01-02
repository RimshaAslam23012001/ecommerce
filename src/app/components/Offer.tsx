"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const Offer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hours",
      description: "Enjoy 2-for-1 drinks and appetizers from 5-7 PM",
    },
    {
      title: "Cocktail Special",
      description: "10% Off on Cocktails",
    },
    {
      title: "Weekend Offers",
      description: "Buy 1 get 1 free on Saturdays and Sundays",
    },
    {
      title: "Kids Meal",
      description: "Buy 2 kids meals for $10.00 each",
    },
    {
      title: "Free Delivery",
      description: "Order over $100.00 and receive free delivery",
    },
    {
      title: "Limited Time Offer",
      description: "Buy 10-20 meals and get a 15% discount",
    },
  ];

  const handelOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offer&apos;s</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            return (
              <button
                key={index}
                onClick={() => handelOfferClick(offer.description)}
                className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-red-800 mb-2">{offer.title}</h3>
                <p className="text-slate-800 mt-3">{offer.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
