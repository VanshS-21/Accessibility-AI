"use client"
import React from "react";
import { SymphonyLogo } from "@/components/symphony-logo";

export default function Footer() {
  return (
    <footer className="pt-12 relative bg-black/20 backdrop-blur-sm">
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5">
        <div className="h-full w-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/50 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0 blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Side: Logo and Copyright */}
          <div className="md:col-span-2 text-center md:text-left">
            <a href="#" className="inline-flex items-center space-x-3 mb-4">
              <SymphonyLogo className="w-8 h-8 text-white" />
              <span className="font-bold text-xl text-white">Symphony</span>
            </a>
            <div className="text-gray-400 text-sm mb-4 max-w-xs mx-auto md:mx-0">
              © 2025 Symphony Inc. All rights reserved. <br />
              Where every voice is heard.
            </div>
          </div>

          {/* Right Side: Navigation and Socials */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#cta" className="text-gray-400 hover:text-white transition-colors">Analyze</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <a
              href="https://github.com/your-username/accessibility-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-2 -ml-2 rounded-lg"
              aria-label="View project on GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
