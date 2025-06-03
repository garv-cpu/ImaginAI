import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md shadow-lg"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium mb-2">
          {state}
        </h1>
        <p className="text-black text-sm text-center mb-6">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create a new account to get started"}
        </p>

        {state !== "Login" && (
          <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
            <img src={assets.profile_icon} alt="profile" width={20} />
            <input
              type="text"
              placeholder="Full name"
              required
              className="outline-none flex-1 text-sm"
            />
          </div>
        )}

        <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
          <img src={assets.email_icon} alt="email" width={20} height={30} />
          <input
            type="email"
            placeholder="Email id"
            required
            className="outline-none flex-1 text-sm"
          />
        </div>

        <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
          <img src={assets.lock_icon} alt="password" width={16} height={24} />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none flex-1 text-sm"
          />
        </div>

        <p className="text-sm text-gray-500 my-4 cursor-pointer">
          Forgot password?
        </p>

        <button className="bg-zinc-800 text-white w-full py-2 rounded-full">
          {state === "Login" ? "Login" : "Create account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign up")}
              className="text-gray-800 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-gray-800 cursor-pointer underline"
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="cross"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
