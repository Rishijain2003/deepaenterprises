import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useApp } from '../Context/AppContext';
import { categories } from '../data/products';

export function Header() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const cartItemsCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#003366] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DE</span>
            </div>
            <span className="text-xl font-bold text-[#003366]">Deepa Enterprises</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-[#003366]"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/products" className="text-gray-700 hover:text-[#003366] transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#003366] transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#003366] transition-colors">
                Contact
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              {state.isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-[#003366] transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden sm:block">{state.user?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Orders
                      </Link>
                      {state.user?.isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#003366] transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block">Login</span>
                </Link>
              )}

              <Link
                to="/wishlist"
                className="flex items-center space-x-1 text-gray-700 hover:text-[#003366] transition-colors"
              >
                <Heart className="w-5 h-5" />
                {state.wishlist.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="flex items-center space-x-1 text-gray-700 hover:text-[#003366] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="bg-[#003366] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="hidden md:block border-t border-gray-200">
          <nav className="flex items-center space-x-8 py-3">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#003366] transition-colors">
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <div key={category.name} className="px-4 py-2">
                    <Link
                      to={category.name === 'Kitchen Appliances' ? '/kitchen-appliances' :
                          category.name === 'Audio & Video' ? '/audio-video' :
                          category.name === 'Miscellaneous Electronics' ? '/miscellaneous-electronics' :
                          `/products?category=${encodeURIComponent(category.name)}`}
                      className="font-medium text-[#003366] hover:underline block mb-1"
                    >
                      {category.name}
                    </Link>
                    <div className="space-y-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm text-gray-600 hover:text-[#003366] block pl-2"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link
              to="/kitchen-appliances"
              className="text-gray-700 hover:text-[#003366] transition-colors whitespace-nowrap"
            >
              Kitchen Appliances
            </Link>
            <Link
              to="/audio-video"
              className="text-gray-700 hover:text-[#003366] transition-colors whitespace-nowrap"
            >
              Audio & Video
            </Link>
            <Link
              to="/miscellaneous-electronics"
              className="text-gray-700 hover:text-[#003366] transition-colors whitespace-nowrap"
            >
              Miscellaneous Electronics
            </Link>
            <Link
              to="/products?category=Home%20Appliances"
              className="text-gray-700 hover:text-[#003366] transition-colors whitespace-nowrap"
            >
              Home Appliances
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-[#003366]"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                to="/products"
                className="block py-2 text-gray-700 hover:text-[#003366] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-[#003366] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-[#003366] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Categories */}
              <div className="pt-2 border-t border-gray-200">
                <h3 className="font-medium text-[#003366] mb-2">Categories</h3>
                {categories.map((category) => (
                  <div key={category.name} className="mb-3">
                    <Link
                      to={category.name === 'Kitchen Appliances' ? '/kitchen-appliances' :
                          category.name === 'Audio & Video' ? '/audio-video' :
                          category.name === 'Miscellaneous Electronics' ? '/miscellaneous-electronics' :
                          `/products?category=${encodeURIComponent(category.name)}`}
                      className="block font-medium text-gray-700 hover:text-[#003366] mb-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="space-y-1 pl-4">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-600 hover:text-[#003366]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}