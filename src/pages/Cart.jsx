import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const DELIVERY_FEE = 30;
const GST_RATE = 0.12;

const Cart = () => {
  const { cart, removeOneFromCart, removeFromCart } = useCart();

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = getSubtotal();
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst + DELIVERY_FEE;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-24 text-gray-600">
          <div className="text-7xl mb-4">🛍️</div>
          <h3 className="text-2xl font-semibold mb-2">Your cart is empty</h3>
          <p className="mb-6">Looks like you haven’t added anything yet.</p>
          <Link
            to="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                    <img
                      src={item.image || "https://via.placeholder.com/64"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                    <div className="mt-1 flex gap-2">
                      <button
                        onClick={() => removeOneFromCart(item.id)}
                        className="text-xs px-2 py-1 border rounded hover:bg-gray-100"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs px-2 py-1 border rounded text-red-500 hover:bg-red-100"
                      >
                        Remove All
                      </button>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-lg text-right">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Bill Summary */}
          <div className="mt-8 border-t pt-4 text-right space-y-2 text-gray-700">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>GST (12%): ₹{gst.toFixed(2)}</p>
            <p>Delivery Fee: ₹{DELIVERY_FEE.toFixed(2)}</p>
            <h3 className="text-xl font-bold text-black">
              Total: ₹{total.toFixed(2)}
            </h3>

            <Link
              to="/checkout"
              className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
