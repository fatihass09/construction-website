"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      &copy; {new Date().getFullYear()} ConstructionCo. All rights reserved.
    </footer>
  );
}
