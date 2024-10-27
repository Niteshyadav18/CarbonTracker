import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="font-bold text-2xl">EcoTrack</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-bold text-lg hover:text-green-200">
              Home
            </Link>
            <Link to="/about" className="font-bold text-lg hover:text-green-200">
              About
            </Link>
            <Link to="/news" className="font-bold text-lg hover:text-green-200">
              News
            </Link>
            <Link to="/calculations" className="font-bold text-lg hover:text-green-200">
              Calculations
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="font-bold text-lg hover:text-green-200"
              >
                Logout
              </button>
            ) : null /* Remove Login and Sign Up links from desktop view if not authenticated */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 font-bold text-lg hover:bg-green-500 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 font-bold text-lg hover:bg-green-500 rounded-md"
              >
                About
              </Link>
              <Link
                to="/news"
                className="block px-3 py-2 font-bold text-lg hover:bg-green-500 rounded-md"
              >
                News
              </Link>
              <Link
                to="/calculations"
                className="block px-3 py-2 font-bold text-lg hover:bg-green-500 rounded-md"
              >
                Calculations
              </Link>
              {/* Conditional rendering based on authentication status */}
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 font-bold text-lg hover:bg-green-500 rounded-md"
                >
                  Logout
                </button>
              ) : null /* Remove Login and Sign Up links from mobile view if not authenticated */ }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
