'use client';
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true); // Show success message after submission
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Contact Form Section */}
      <section>
        <h1 className="text-2xl font-semibold text-center mb-4">Contact Us</h1>
        <p className="text-center mb-8">We&apos;d love to hear from you! Please send us a message.</p>

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
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-400 text-white p-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-green-500 text-center mt-4">Thank you! We&apos;ll get back to you soon.</p>
        )}
      </section>

      {/* Location Section */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-semibold">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14691.592680607555!2d-73.935242!3d40.730610!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae1ab1887b%3A0x5cb59d9535d44e8b!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1627585398707!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Location Map"
        ></iframe>
        <p className="mt-4">123 Fast Food Avenue, New York, NY 10001</p>
        <p className="mt-2">Call us: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p className="mt-2">Email: <a href="mailto:contact@fastfood.com">contact@fastfood.com</a></p>
      </section>
    </div>
  );
}
