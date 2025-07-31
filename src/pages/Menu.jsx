import React, { useState } from "react";
import foodItems from "../data/foodItems";
import FoodCard from "../components/FoodCard";

const getUniqueCategories = (items) => [
  "All",
  ...new Set(items.map((item) => item.category)),
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = getUniqueCategories(foodItems);

  const filteredItems = foodItems.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Explore Our Menu
      </h2>

      {/* Search bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food cards */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No food items found matching your criteria.
        </p>
      )}
    </div>
  );
}
