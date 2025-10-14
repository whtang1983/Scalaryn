'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass p-12 md:p-16 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6"
              >
                <Sparkles className="text-white" size={32} />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get started today with a{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                  free systems consultation
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business operations with our expert guidance. Book your free consultation and discover how the right systems can accelerate your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center font-semibold"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </motion.button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}