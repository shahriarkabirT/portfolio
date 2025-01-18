'use client'
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            I am a passionate developer with expertise in building scalable web
            applications. Let’s create something amazing together!
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
