"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          ConstructionCo has been delivering quality construction solutions for over 20 years. Our team of experts ensures each project is completed on time and within budget.
        </p>
      </main>
      <Footer />
    </>
  );
}

