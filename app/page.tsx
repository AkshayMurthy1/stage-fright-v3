"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Curtains */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-red-600"
          style={{ transformOrigin: 'left' }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
            Stage Fright
          </h1>
          <Link
            href="/tour"
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-100 transition-colors duration-300"
          >
            View Tour Dates
            <ChevronRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Latest Merch Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Merch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-700" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Limited Edition Tee</h3>
                  <p className="text-gray-400 mb-4">$29.99</p>
                  <Link
                    href="/merch"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Band Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">The Band</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the raw energy and powerful sound that has made Stage Fright
            one of the most exciting new bands in the scene.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center border-2 border-red-600 text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Learn More
            <ChevronRight className="ml-2" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}