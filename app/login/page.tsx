"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lock, Mail } from 'lucide-react';

export default function Login() {
  return (
    <div className="pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[calc(100vh-4rem)] py-20 bg-gradient-to-b from-black to-gray-900 flex items-center"
      >
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-red-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link href="#" className="text-sm text-red-500 hover:text-red-400">
                Forgot your password?
              </Link>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link href="#" className="text-red-500 hover:text-red-400">
                Sign up
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}