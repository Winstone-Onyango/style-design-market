
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          <span className="typing-container inline-block">
            Welcome to Market O'clock
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the perfect blend of style and design. Connect directly with sellers for unique fashion pieces and custom shoes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-market-accent hover:bg-market-accentHover text-white px-8 py-6 text-lg">
            Shop Clothes
          </Button>
          <Button variant="outline" className="border-market-accent text-market-accent hover:bg-market-accent/10 px-8 py-6 text-lg">
            Explore Shoes
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
