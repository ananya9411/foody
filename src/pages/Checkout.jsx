// src/pages/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState(cart);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    flat: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const instantOrder = sessionStorage.getItem("instantOrder");
    if (instantOrder) {
      const item = JSON.parse(instantOrder);
      setOrderItems([{ ...item }]);
      sessionStorage.removeItem("instantOrder");
    }
  }, []);

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const gst = subtotal * 0.12;
  const delivery = 30;
  const total = subtotal + gst + delivery;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handlePlaceOrder = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    clearCart();
    navigate("/success", { replace: true });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
          <div className="space-y-4">
            {[
              { name: "fullName", placeholder: "Full Name" },
              { name: "phone", placeholder: "Phone Number" },
              {
                name: "flat",
                placeholder: "Flat, House no., Building, Company, Apartment",
              },
              { name: "area", placeholder: "Area, Street, Sector, Village" },
              { name: "landmark", placeholder: "Landmark" },
              { name: "pincode", placeholder: "Pincode" },
              { name: "city", placeholder: "Town/City" },
              { name: "state", placeholder: "State" },
            ].map(({ name, placeholder }) => (
              <div key={name}>
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 ${
                    errors[name] ? "border-red-500" : ""
                  }`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-2">
            {orderItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{item.name}</span>
                <span>
                  ₹{item.price} × {item.quantity || 1}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (12%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
