import React from "react";
import { motion } from "motion/react";

const Policies = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 py-10 text-white"
    >
      <h1 className="text-3xl font-bold mb-6">Policies</h1>

      {/* Terms and Conditions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
        <p className="text-gray-400 text-sm leading-6">
          By accessing and using our Text-to-Image Generator, you agree to
          comply with these Terms and Conditions. You must be a registered user
          to generate images. Our platform operates on a credit system; each
          image generation requires a certain number of credits, which can be
          purchased through our available payment gateways. Misuse of the
          system, such as attempting to generate harmful or illegal content,
          will result in immediate account suspension.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="text-gray-400 text-sm leading-6">
          We respect your privacy and are committed to protecting your personal
          information. We collect only necessary information such as your email
          and payment data to manage your account and credit purchases. We do
          not sell or share your data with third parties except where required
          by law or to process payments securely.
        </p>
      </section>

      {/* Shipping Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Shipping Policy</h2>
        <p className="text-gray-400 text-sm leading-6">
          As a digital service, we do not offer physical shipping. Credits are
          delivered to your account immediately after a successful payment. If
          you do not see your credits, please contact us within 24 hours of the
          transaction.
        </p>
      </section>

      {/* Cancellation and Refund Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Cancellation & Refunds</h2>
        <p className="text-gray-400 text-sm leading-6">
          All credit purchases are final and non-refundable. However, if you
          experience a technical issue and did not receive your credits, contact
          our support team within 24 hours. Refunds will only be considered in
          cases of accidental duplicate charges or platform malfunction, at our
          sole discretion.
        </p>
      </section>

      {/* Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-400 text-sm leading-6">
          For any inquiries or support, please email us at:{" "}
          <a
            href="mailto:support@yourdomain.com"
            className="text-blue-400 underline"
          >
            hibon.technologies@gmail.com
          </a>
          . We aim to respond within 1-2 business days.
        </p>
      </section>
    </motion.div>
  );
};

export default Policies;
