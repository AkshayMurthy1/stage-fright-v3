"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const tourDates = [
  {
    date: "2024-04-15",
    city: "New York, NY",
    venue: "Madison Square Garden",
    time: "20:00",
    status: "On Sale"
  },
  {
    date: "2024-04-18",
    city: "Los Angeles, CA",
    venue: "The Forum",
    time: "19:30",
    status: "Almost Sold Out"
  },
  {
    date: "2024-04-22",
    city: "Chicago, IL",
    venue: "United Center",
    time: "20:00",
    status: "On Sale"
  },
  {
    date: "2024-04-25",
    city: "Toronto, ON",
    venue: "Scotiabank Arena",
    time: "19:00",
    status: "Selling Fast"
  }
];

export default function Tour() {
  return (
    <div className="pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-12">Tour Dates</h1>
          
          <div className="space-y-6">
            {tourDates.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <Calendar size={20} />
                    <span>{new Date(show.date).toLocaleDateString('en-US', { 
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-gray-400" />
                  <span>{show.venue}, {show.city}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-gray-400" />
                  <span>{show.time}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-yellow-500">{show.status}</span>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                    Get Tickets
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}