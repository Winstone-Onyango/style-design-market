
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { clothesProducts, shoesProducts } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-market-dark">
      <Navbar />
      <Hero />
      <ProductSection 
        id="clothes"
        title="Stylish Clothes" 
        subtitle="Discover unique and stylish clothing items from our sellers. From casual wear to designer pieces, we have something for everyone."
        products={clothesProducts}
      />
      <ProductSection 
        id="shoes"
        title="Designer Shoes" 
        subtitle="Step up your game with our collection of designer shoes. From casual sneakers to elegant evening wear."
        products={shoesProducts}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
