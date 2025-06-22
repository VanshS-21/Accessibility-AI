"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import React from "react"
import { SymphonyLogo } from "@/components/symphony-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center space-x-2">
              <SymphonyLogo className="h-8 w-8 text-white" />
              <span className="text-xl font-semibold text-white whitespace-nowrap">Symphony</span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center space-x-8">
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); scrollToSection("how-it-works"); }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium px-3 py-2 rounded-md"
              >
                How It Works
              </a>

              <a
                href="#features"
                onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium px-3 py-2 rounded-md"
              >
                Features
              </a>

              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); scrollToSection("pricing"); }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-[15px] font-medium px-3 py-2 rounded-md"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons - Fixed Width */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100 transition-colors duration-200 text-[15px] font-medium">
              Sign in
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-[15px] font-medium px-6 py-2 rounded-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-1 flex justify-end">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-950 border-t border-gray-800/50">
          <div className="space-y-1">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white block px-3 py-2 text-[15px] font-medium w-full text-left transition-colors duration-200 rounded-lg hover:bg-gray-800/30"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-300 hover:text-white block px-3 py-2 text-[15px] font-medium w-full text-left transition-colors duration-200 rounded-lg hover:bg-gray-800/30"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white block px-3 py-2 text-[15px] font-medium w-full text-left transition-colors duration-200 rounded-lg hover:bg-gray-800/30"
            >
              Pricing
            </button>
          </div>

          <div className="pt-4 pb-2 space-y-2 border-t border-gray-800/50">
            <button className="text-gray-300 hover:text-gray-100 block px-3 py-2 text-[15px] font-medium w-full text-left transition-colors duration-200 rounded-lg hover:bg-gray-800/30">
              Sign in
            </button>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-[15px] font-medium w-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
