import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 text-gray-200 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        We are committed to protecting your privacy. This policy outlines how we
        handle your data:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>We collect your name and email for authentication purposes only.</li>
        <li>All user data is stored securely and is never sold to third parties.</li>
        <li>Payment information is handled securely via Razorpay and is not stored on our servers.</li>
        <li>We may send transactional emails related to your purchases and activity.</li>
      </ul>
      <p>By using our platform, you consent to the terms in this Privacy Policy.</p>
    </div>
  );
};

export default PrivacyPolicy;