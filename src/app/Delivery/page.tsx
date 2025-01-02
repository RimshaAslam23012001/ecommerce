'use client';

import { useState } from "react";

export default function DeliverySection() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    deliveryDate: "",
  });

  // Handle form input change
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent page reload on submit

    // Debugging logs
    console.log("Form submitted!");
    console.log("Form data:", formData);

    // Simple validation: Check if all fields are filled
    if (!formData.name || !formData.address || !formData.phone || !formData.deliveryDate) {
      console.error("All fields are required.");
      alert("Please fill out all fields.");
      return; // Stop submission if validation fails
    }

    // Normally, you'd send this data to an API here
    console.log("Delivery details submitted:", formData);

    // Success message after submission
    alert("Delivery request submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Delivery Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-4 text-black">Fast & Reliable Delivery</h2>
        <p className="text-center mb-8 text-gray-700">
          Get your favorite meals delivered straight to your door. Fill in your details below to schedule a delivery!
        </p>

        {/* Delivery Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Delivery Address"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-400 text-white p-2 rounded"
            >
              Schedule Delivery
            </button>
          </div>
        </form>
      </section>

      {/* Delivery Info Section */}
      <section className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Why Choose Our Delivery Service?</h3>
        <p className="mb-4 text-gray-700">
          We offer quick, reliable, and contactless delivery services to ensure your food arrives fresh and on time.
        </p>
        <ul className="list-none space-y-2 text-gray-700">
          <li>Fast Delivery - Get your meal in less than 30 minutes</li>
          <li>Reliable Service - Track your order in real-time</li>
          <li>Fresh & Hot Meals - Delivered with care</li>
        </ul>
      </section>
    </div>
  );
}
