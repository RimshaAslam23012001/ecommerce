import React from 'react';

const Reservation = () => {
  return (
    <section className='bg-gradient-to-r from-black via-gray-800 to-gray-900 py-10'>
      <div className='container mx-auto text-center px-4'>
        <h2 className='text-4xl font-bold text-white mb-8'>
          Make a Reservation
        </h2>
        <form className='max-w-lg mx-auto p-6 rounded-lg shadow-lg'>
          <div className='mb-4'>
            <input
              type='text'
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='tel'
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Your Phone Number'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='date'
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Date'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='time'
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Time'
              required
            />
          </div>
          <div className='mb-6'>
            <textarea
              className='w-full p-4 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Additional Requirements'
            />
          </div>
          <button className='w-full p-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200'>
            Make Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
