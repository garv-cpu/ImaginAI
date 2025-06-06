import React, { useContext } from "react";
import { plans } from "../assets/assets";
import { AppContext } from "./../context/AppContext";
import { motion } from "framer-motion";
import { Sparkles, AlarmClock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

/* global Cashfree */

const BuyCredit = () => {
  const { user, backendURL, loadCreditData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();

  const launchStartDate = new Date("2025-06-04");
  const now = new Date();
  const diffTime = Math.max(
    0,
    10 - Math.floor((now - launchStartDate) / (1000 * 60 * 60 * 24))
  );

  const isLaunchActive = diffTime > 0;

  const paymentCashfree = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
  
      const { data } = await axios.post(
        `${backendURL}/api/user/pay-razor`,
        { planId },
        { headers: { token } }
      );
  
      if (data.success && data.paymentSessionId) {
        const cashfree = Cashfree({ mode: "production" }); // Use "sandbox" for testing
        const checkoutOptions = {
          paymentSessionId: data.paymentSessionId,
          redirectTarget: "_self", // Opens in the same tab
        };
        cashfree.checkout(checkoutOptions);
      } else {
        toast.error("Unable to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Payment failed.");
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="border border-gray-500 px-10 py-2 rounded-full mb-6 text-white">
        Our Plans
      </button>

      <h1 className="text-center text-3xl font-medium mb-2 text-gray-400">
        Choose the plan
      </h1>

      {isLaunchActive && (
        <p className="text-sm text-yellow-400 mb-6 flex items-center justify-center gap-2">
          <AlarmClock size={16} /> Launch Offer ends in{" "}
          <span className="font-semibold">
            {diffTime} day{diffTime > 1 ? "s" : ""}
          </span>
          !
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-black drop-shadow-sm border rounded-lg py-12 px-8 text-gray-300 hover:scale-105 transition-all duration-500"
          >
            <img
              src="/ChatGPT Image Jun 3, 2025, 12_34_31 PM.png"
              alt=""
              width={40}
            />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">{item.price} INR </span> /{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentCashfree(item.id)}
              className="w-full bg-zinc-800 mt-8 text-sm rounded-md py-2.5 min-w-52 text-white cursor-pointer"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <Sparkles className="inline mr-1 text-yellow-400" />
        Refer a friend
      </div>
    </motion.div>
  );
};

export default BuyCredit;
