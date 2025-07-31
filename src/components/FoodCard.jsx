// src/components/FoodCard.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function FoodCard({ item }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const instantOrder = { ...item, quantity: 1 };
    sessionStorage.setItem("instantOrder", JSON.stringify(instantOrder));
    navigate("/checkout");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-orange-600">
            ₹{item.price}
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(item)}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
