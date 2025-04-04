
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sellerName: string;
}

const ProductCard = ({ id, name, price, image, category, sellerName }: ProductCardProps) => {
  return (
    <div className="group bg-market-muted rounded-lg overflow-hidden border border-market-border transition-all duration-300 hover:shadow-xl hover:shadow-market-accent/10 hover:border-market-accent/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm w-8 h-8"
          >
            <Heart size={16} />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Button className="w-full bg-market-accent hover:bg-market-accentHover gap-2">
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg text-white mb-1 line-clamp-1">{name}</h3>
            <p className="text-sm text-gray-400">by {sellerName}</p>
          </div>
          <span className="text-market-accent font-semibold">${price.toFixed(2)}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs px-2 py-1 bg-market-accent/20 text-market-accent rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
