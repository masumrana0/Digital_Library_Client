import React, { FormEvent } from "react";

import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import {
  useGetUserCredentialQuery,
  useLoginUserMutation,
} from "../redux/api/userSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [loginfo, { isSuccess, data }] = useLoginUserMutation();

  // set accessToken in localStorage
  if (isSuccess && data) {
    localStorage.setItem("accessToken", data.data.accessToken);
  }
  const accessToken = localStorage.getItem("accessToken");

  // get User Credential
  const { data: credential, isLoading } =
    useGetUserCredentialQuery(accessToken);

  // set user Credetnial localStorage and redux store both
  if (credential && !isLoading) {
    localStorage.setItem("userCredential", JSON.stringify(credential.data));
    dispatch(login(credential.data));
  }

  // hadnle login function
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const passoword = form.password.value;

    const loginData = {
      email: email,
      password: passoword,
    };
    loginfo(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-20 rounded-lg shadow-md w-full sm:w-96 md:w-2/3 lg:w-1/3">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
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
