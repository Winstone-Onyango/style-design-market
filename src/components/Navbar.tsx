
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-market-dark/90 backdrop-blur-md z-50 border-b border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-white">Market O'clock</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
            <a href="#clothes" className="text-gray-300 hover:text-white px-3 py-2">Clothes</a>
            <a href="#shoes" className="text-gray-300 hover:text-white px-3 py-2">Shoes</a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <ShoppingBag size={20} />
            </Button>
            <Button className="bg-market-accent hover:bg-market-accentHover text-white">
              Sign In
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-market-dark border-b border-market-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
            <a href="#clothes" className="block px-3 py-2 text-gray-300 hover:text-white">Clothes</a>
            <a href="#shoes" className="block px-3 py-2 text-gray-300 hover:text-white">Shoes</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            <div className="flex space-x-2 mt-4 px-3">
              <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
              <Button className="flex-1 bg-market-accent hover:bg-market-accentHover">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
