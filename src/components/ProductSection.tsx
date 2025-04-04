
import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    sellerName: string;
  }[];
  id: string;
}

const ProductSection = ({ title, subtitle, products, id }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              sellerName={product.sellerName}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-market-accent text-market-accent hover:bg-market-accent/10">
            View All {title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
