import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendURL, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (state === "Sign up") {
      if (!isValidPhone(phone)) {
        toast.error("Phone number must be 10 digits.");
        return;
      }
      if (password.length < 4) {
        toast.error("Password must be at least 4 characters long.");
        return;
      }
    }

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message || "Invalid email or password.");
        }
      } else {
        const { data } = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
          phone,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message || "Signup failed. Try a different email.");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onsubmitHandler}
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
          <>
            <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
              <img src={assets.profile_icon} alt="profile" width={20} />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full name"
                required
                className="outline-none flex-1 text-sm"
              />
            </div>

            <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                placeholder="Phone number"
                required
                className="outline-none flex-1 text-sm"
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
              />
            </div>
          </>
        )}

        <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
          <img src={assets.email_icon} alt="email" width={20} height={30} />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email id"
            required
            className="outline-none flex-1 text-sm"
          />
        </div>

        <div className="border px-6 py-3 flex items-center gap-2 rounded-full mb-4">
          <img src={assets.lock_icon} alt="password" width={16} height={24} />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="outline-none flex-1 text-sm"
          />
        </div>

        <p className="text-sm text-gray-500 my-4 cursor-pointer">Forgot password?</p>

        <button className="bg-zinc-800 text-white w-full py-2 rounded-full">
          {state === "Login" ? "Login" : "Create account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("NAMASTE")}
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
