import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">EcoTrack</span>
            </div>
            <p className="text-green-200">
              Making carbon footprint calculation accessible and actionable for
              everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="text-green-200 hover:text-white"
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-green-200 hover:text-white">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>
            &copy; {new Date().getFullYear()} EcoTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
