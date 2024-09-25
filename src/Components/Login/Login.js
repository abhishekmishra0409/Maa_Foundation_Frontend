import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error('Email and Password are required!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setIsLoading(true);

    try {
      // const res = await axios.post('', loginData);
      // const data = await res.json();
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));

      toast.success('Logged In Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    } catch (error) {
      toast.error('Login Failed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    } finally {
      setIsLoading(false);
    }
  };

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
          <Link
            to="/"
            className="group absolute top-4 left-4 p-2 text-white transition-colors py-2 px-6 border backdrop-blur-sm border-primary-base hover:bg-primary-base hover:text-white text-sm font-bold rounded-xl no-underline"
          >
            <span className="underline text-primary-base group-hover:text-white">
              Home
            </span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-primary">Login</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                className="input-field-primary"
                required
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="input-field-primary"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                className="btn-primary w-full md:w-2/3 text-lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm">
            Create an account |{" "}
            <Link className="text-primary-base hover:underline" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
