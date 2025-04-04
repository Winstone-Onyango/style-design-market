
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-market-dark border-t border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Market O'clock</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop marketplace for stylish clothes and designer shoes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-market-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-market-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-market-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-market-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-market-accent">All Products</a></li>
              <li><a href="#clothes" className="hover:text-market-accent">Clothing</a></li>
              <li><a href="#shoes" className="hover:text-market-accent">Shoes</a></li>
              <li><a href="#" className="hover:text-market-accent">New Arrivals</a></li>
              <li><a href="#" className="hover:text-market-accent">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Sell</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-market-accent">Become a Seller</a></li>
              <li><a href="#" className="hover:text-market-accent">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-market-accent">Selling Guides</a></li>
              <li><a href="#" className="hover:text-market-accent">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-market-accent">FAQ</a></li>
              <li><a href="#" className="hover:text-market-accent">Shipping Info</a></li>
              <li><a href="#" className="hover:text-market-accent">Returns & Exchanges</a></li>
              <li><a href="#contact" className="hover:text-market-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-market-accent">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-market-border text-center md:flex md:justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Market O'clock. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-market-accent mx-2">Terms of Service</a>
            <a href="#" className="hover:text-market-accent mx-2">Privacy Policy</a>
            <a href="#" className="hover:text-market-accent mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
