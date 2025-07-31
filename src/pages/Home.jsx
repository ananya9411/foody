import React from "react";
import { Link } from "react-router-dom";
import foodItems from "../data/foodItems";
import FoodCard from "../components/FoodCard";

export default function Home() {
  const popularItems = foodItems.slice(0, 4); // Display only 4 items

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://grub24s3.s3.eu-west-2.amazonaws.com/upload/1702561436-Pizza.jpg')",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Farmhouse Pizza Delight 🍕
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Indulge in the freshest veggies and gooey cheese straight from the
            oven.
          </p>
          <Link
            to="/menu"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Popular Items */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            🔥 Popular Picks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-700">
            Why Choose Foodie?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg text-orange-600 mb-2">
                Fresh Ingredients
              </h4>
              <p>
                Only the freshest produce and quality ingredients in every bite.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg text-orange-600 mb-2">
                Fast Delivery
              </h4>
              <p>Get your food hot and on time. Every single time.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold text-lg text-orange-600 mb-2">
                Loved by All
              </h4>
              <p>Thousands of happy customers. Join the Foodie family today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-orange-600 text-white text-center py-10 px-4">
        <h3 className="text-2xl font-semibold mb-2">
          Craving Something Delicious?
        </h3>
        <p className="mb-4">Explore our menu and order now!</p>
        <Link
          to="/menu"
          className="inline-block bg-white text-orange-600 font-medium px-6 py-2 rounded-full hover:bg-gray-100"
        >
          Explore Menu
        </Link>
      </section>
    </div>
  );
}
