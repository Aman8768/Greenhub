import React, { useState } from 'react';
import { Search, Menu, X, Phone, User, ShoppingCart } from 'lucide-react';

const navigationItems = [
  { name: 'Gardening', hasDropdown: true },
  { name: 'Plants', hasDropdown: true },
  { name: 'Seeds', hasDropdown: true },
  { name: 'Bulbs', hasDropdown: true },
  { name: 'Planters', hasDropdown: true },
  { name: 'Soil & Fertilizer', hasDropdown: true },
  { name: 'Gifts', hasDropdown: true },
  { name: 'Pebbles', hasDropdown: true },
  { name: 'Accessories', hasDropdown: true },
  { name: 'Corporate Gifting', hasDropdown: true },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="mr-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="text-2xl font-bold text-green-700 flex items-center">
              <span className="text-green-600">green</span>
              <span className="text-green-800">hub</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop Nav Icons */}
          <div className="flex items-center space-x-4">
            <a href="/support" className="hidden md:flex items-center text-sm text-gray-700 hover:text-green-600">
              <Phone size={20} className="mr-1" />
              <span className="hidden lg:inline">24/7 Expert Support</span>
            </a>
            <a href="/login" className="text-gray-700 hover:text-green-600">
              <User size={24} />
            </a>
            <a href="/cart" className="text-gray-700 hover:text-green-600 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block py-2 border-t border-gray-100">
          <ul className="flex flex-wrap items-center justify-start space-x-6">
            {navigationItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-gray-700 hover:text-green-600 py-2 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Category 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Category 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Category 3
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-2 border-t border-gray-100">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;