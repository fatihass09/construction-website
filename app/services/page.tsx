"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Project Management"
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <ul className="space-y-3 list-disc list-inside">
          {services.map((service) => (
            <li key={service} className="text-lg">
              {service}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
