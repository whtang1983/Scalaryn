'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // Add your image path here, or set to null for default gradient box
  const heroImage = null; // Change to '/images/hero-image.jpg' to use an image

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Systems That Scale
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bring your vision to life with{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                modern & innovative
              </span>{' '}
              touch.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Transform your business operations with powerful systems for sales, marketing, project management, and finance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="glass text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                View Services
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl opacity-50"></div>
                  </div>
                </>
              )}
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass p-4 rounded-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg"></div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 glass p-4 rounded-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}