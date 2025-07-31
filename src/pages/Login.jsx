import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password && (isSignup ? form.name : true)) {
      alert(`${isSignup ? "Signup" : "Login"} successful!`);
      navigate("/");
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Create Account" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600 hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
