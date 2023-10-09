import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-16 rounded-lg shadow-md w-full sm:w-96 lg:w-1/3">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">
              PhotoUrl
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="PhotoUrl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
