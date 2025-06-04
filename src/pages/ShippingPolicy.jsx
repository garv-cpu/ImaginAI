import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="p-6 text-gray-200 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Shipping Policy</h1>
      <p className="mb-4">
        Since our service is entirely digital, no physical shipping is involved.
        Upon successful payment, credits are instantly added to your account.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>All purchases are delivered instantly as credits to your user account.</li>
        <li>If you do not see credits reflected, please contact support within 24 hours.</li>
      </ul>
    </div>
  );
};

export default ShippingPolicy;