import React from "react";

const CancellationRefunds = () => {
  return (
    <div className="p-6 text-gray-200 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Cancellation & Refund Policy</h1>
      <p className="mb-4">
        As our services are digital and delivered instantly, cancellations are
        generally not applicable.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>All credit purchases are final and non-refundable.</li>
        <li>In rare cases of duplicate payments or technical errors, contact support for resolution.</li>
        <li>Refund requests must be made within 24 hours of the transaction.</li>
      </ul>
    </div>
  );
};

export default CancellationRefunds;