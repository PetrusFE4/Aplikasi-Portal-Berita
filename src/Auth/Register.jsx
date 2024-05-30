import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl w-full">
          <form className="md:max-w-md w-full">
            <h3 className="text-2xl font-extrabold mb-10">Registration</h3>
            <div className="space-y-6">
              <div>
                <label className="text-sm mb-2 block" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="/"
                    className="text-blue-500 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="py-4 px-6 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <div className="text-sm mt-6 flex">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:underline ml-1"
              >
                Login Here
              </Link>
            </div>
          </form>
          <div className="h-full max-md:mt-10">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
