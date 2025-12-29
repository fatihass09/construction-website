"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Welcome to ConstructionCo</h1>
        <p className="text-lg mb-6">
          We provide professional construction services for residential, commercial, and industrial projects.
        </p>
      </main>
      <Footer />
    </>
  );
}
