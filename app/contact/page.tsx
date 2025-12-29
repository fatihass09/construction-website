"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <form className="max-w-lg space-y-4 mb-8">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <iframe
            title="Company Location"
            className="w-full h-64 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086214728338!2d-122.41941518468183!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3f6d3b05%3A0x5a0f1c5d9c9a1a6b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698888888888!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}
