"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  const projects = [
    { name: "Skyline Apartments", image: "/projects/skyline.jpg" },
    { name: "Greenfield Mall", image: "/projects/greenfield.jpg" },
    { name: "Sunset Villas", image: "/projects/sunset.jpg" }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded shadow p-4">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={192}
                className="rounded mb-2 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
