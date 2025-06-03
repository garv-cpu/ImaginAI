import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src="/ChatGPT Image Jun 3, 2025, 12_34_31 PM.png" alt="ImaginAI Logo" width={100} className="rounded-full" />

      <p className="flex-1 border-l pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @ImaginAI | All right reserved
      </p>
    </div>
  );
};

export default Footer;
