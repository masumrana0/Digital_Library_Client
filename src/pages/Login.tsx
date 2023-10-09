import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-20 rounded-lg shadow-md w-full sm:w-96 md:w-2/3 lg:w-1/3">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-3 px-4 border rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full py-3 px-4 border rounded-md"
              placeholder="Your Password"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
