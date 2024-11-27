

import { useState } from 'react'
import {  Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-white">$</span>
              </div>
              <span className="text-2xl font-semibold text-gray-800 tracking-wide">
                University
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <Link
              to="/cards"
              className="py-2 px-4 font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Services
            </Link>
            <a
              href="#"
              className="py-2 px-4 font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 px-4 font-medium text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg py-4 px-6">
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 font-medium hover:bg-blue-100 rounded-md transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 font-medium hover:bg-blue-100 rounded-md transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 font-medium hover:bg-blue-100 rounded-md transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 font-medium hover:bg-blue-100 rounded-md transition duration-300"
          >
            Contact
          </a>
          <div className="mt-4 space-y-2">
            <button className="block w-full py-2 text-center border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition duration-300">
              Login
            </button>
            <button className="block w-full py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
