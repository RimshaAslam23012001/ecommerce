"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Productcard from "./Productcard";
import { Product } from "@/pages/type";
import Image from "next/image";

const Menuitem = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/product"); // Ensure correct endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data); // Check the data
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goTOCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6 bg-gradient-to-r from-black to-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 animate-background"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/014/469/007/non_2x/vintage-fast-food-seamless-pattern-hand-drawn-monochrome-junk-food-illustration-with-pizza-burger-french-fries-and-hot-dog-great-for-menu-poster-or-restaurant-background-free-vector.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8 px-4">
          <h1 className="text-4xl sm:text-5xl text-white font-extrabold mb-4">
            Delicious Food In Our Menu
          </h1>
          <p className="text-lg sm:text-xl text-white font-medium">Explore our wide selection</p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.length > 0 ? (
            products.map((product) => (
              <Productcard key={product.id} {...product} onAddToCart={addToCart} />
            ))
          ) : (
            <p className="text-lg text-white">No products available at the moment</p> // Message if no products are loaded
          )}
        </div>

        <div className="max-w-6xl mx-auto mt-8 px-4">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-out transform w-full sm:w-auto"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-700">Your Cart</h2>
              {cart.length > 0 ? (
                <div>
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between mb-6 transform transition-all duration-300"
                    >
                      <Image
                        src={product.image} // Ensure this is a valid URL
                        alt={product.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-cover rounded-md transform transition-all duration-300 hover:scale-105"
                      />
                      <span className="ml-4 text-lg font-medium text-slate-600">{product.name}</span>
                      <span className="text-lg text-slate-600">${product.price}</span>
                    </li>
                  ))}
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div className="flex gap-4">
                      <button
                        onClick={clearCart}
                        className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-out transform w-full sm:w-auto"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={goTOCheckout}
                        className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-out transform w-full sm:w-auto"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-800">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        {isCheckout && (
          <div className="max-w-6xl mx-auto mt-8 px-4 bg-white">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
              <p className="text-lg text-gray-700 mb-4">Please confirm your order before proceeding</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span className="font-semibold text-lg">{product.name}</span>
                      <span className="font-semibold text-lg">${product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-6 text-black">
                  <span className="font-semibold text-xl">
                    Total: ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                  <button
                    onClick={() => alert ('Order Confirm .. Will Deliver At Your Door Step!' )}
                    className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-out transform w-full sm:w-auto"
                  >Confirm Order
                  </button>
                </div>
              </div>

              <button
                onClick={() => setIsCheckout(false)} className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-out transform w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menuitem;
