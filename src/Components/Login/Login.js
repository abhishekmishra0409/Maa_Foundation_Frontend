import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-cover bg-center relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image-login/hand.jpeg')",
        }}
      />
      <div className="w-full md:w-1/2 relative z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      <div className="w-full md:w-1/2 bg-white bg-opacity-90 md:bg-opacity-100 z-20 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-8">
          <Link to="/" className="group absolute top-4 left-4 p-2 text-white transition-colors py-2 px-6 border backdrop-blur-sm border-primary-base hover:bg-primary-base hover:text-white text-sm font-bold rounded-xl no-underline">
            <span className="underline text-primary-base group-hover:text-white">Home</span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-primary">Login</h1>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <input
                placeholder="Email"
                type="email"
                className="input-field-primary"
              />
              <input
                placeholder="Password"
                type="password"
                className="input-field-primary"
              />
            </div>

            <div className="flex justify-center">
              <button className="btn-primary w-full md:w-2/3 text-lg">
                Log In
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm">
            Create an account |{" "}
            <a className="text-primary-base hover:underline" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;