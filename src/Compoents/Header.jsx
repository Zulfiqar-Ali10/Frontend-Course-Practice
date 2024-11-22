'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-indigo-500">L</span>
              </div>
              <span className="text-2xl font-semibold tracking-wide">BrandName</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300 font-medium tracking-wide"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300 font-medium tracking-wide"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300 font-medium tracking-wide"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300 font-medium tracking-wide"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 border border-white rounded-full font-medium hover:bg-white hover:text-indigo-500 transition duration-300 shadow-md">
              Login
            </button>
            <button className="px-6 py-2 bg-yellow-300 text-indigo-900 font-medium rounded-full hover:bg-yellow-400 transition duration-300 shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="outline-none focus:ring-2 focus:ring-yellow-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-8 w-8 text-white" />
              ) : (
                <Menu className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-500 text-white shadow-lg rounded-lg py-4 px-6">
          <a
            href="#"
            className="block py-2 px-4 text-base font-medium hover:bg-indigo-400 rounded-md transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-base font-medium hover:bg-indigo-400 rounded-md transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-base font-medium hover:bg-indigo-400 rounded-md transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-base font-medium hover:bg-indigo-400 rounded-md transition duration-300"
          >
            Contact
          </a>
          <div className="mt-4 space-y-2">
            <button className="block w-full py-2 text-center border border-white rounded-full font-medium hover:bg-white hover:text-indigo-500 transition duration-300">
              Login
            </button>
            <button className="block w-full py-2 bg-yellow-300 text-indigo-900 rounded-full font-medium hover:bg-yellow-400 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
