// src/pages/OrderSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Order Placed!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for ordering. Your food is on its way!
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
