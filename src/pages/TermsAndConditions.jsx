import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 text-gray-200 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to our Text-to-Image Generator platform. By using our services,
        you agree to abide by the following terms:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>You must be logged in to access image generation features.</li>
        <li>Our credit system allows you to purchase and consume credits for each image generation.</li>
        <li>Credits are non-transferable and non-refundable except in outlined refund cases.</li>
        <li>Use of generated images must comply with copyright laws and our ethical use policy.</li>
      </ul>
      <p>If you do not agree to these terms, please discontinue use of our services.</p>
    </div>
  );
};

export default TermsAndConditions;