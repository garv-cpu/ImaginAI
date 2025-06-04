import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3">
      {/* Logo and Policy Links */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <Link to="/">
          <img
            src="/ChatGPT Image Jun 3, 2025, 12_34_31 PM.png"
            alt="Logo"
            className="w-14 sm:w-20 lg:w-30 rounded-full"
          />
        </Link>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-white">
          <Link to="/contact">Contact Us</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/terms-and-conditions">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/cancellation-refunds">Refunds</Link>
        </div>
      </div>

      {/* User Area */}
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="credit" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left : {credit}
              </p>
            </button>
            <p className="text-white max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile icon"
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-white rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li onClick={logout} className="text-black py-1 px-2 cursor-pointer pr-10">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer text-white"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="text-white bg-zinc-800 px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
