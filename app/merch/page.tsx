"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const merchItems = [
  {
    id: 1,
    name: "Classic Logo Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Tour Hoodie 2024",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Debut Album Vinyl",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=500&h=500&fit=crop",
    category: "Music"
  },
  {
    id: 4,
    name: "Guitar Pick Set",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500&h=500&fit=crop",
    category: "Accessories"
  }
];

export default function Merch() {
  return (
    <div className="pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-12">Merchandise</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {merchItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-500 mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">${item.price}</span>
                    <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}