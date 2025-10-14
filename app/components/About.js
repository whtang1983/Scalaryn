'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Target, value: '200+', label: 'Projects Delivered' },
    { icon: Star, value: '4.9', label: 'Trustpilot Rating' },
  ];

  // Add your image path here, or set to null for default gradient box
  const aboutImage = null; // Change to '/images/about-team.jpg' to use an image

  return (
    <section id="about" className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              {aboutImage ? (
                <img 
                  src={aboutImage} 
                  alt="About Scalaryn"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl opacity-60"></div>
                  </div>
                </>
              )}
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-6 rounded-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
                About us —
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Based in the vibrant heart of{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                Sydney, Australia
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Scalaryn Agency is not just a digital agency; we're your partners in transformation. Our mission is to turn your business vision into reality, one system at a time.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With a diverse team of strategists, developers, and innovators, we're constantly pushing the boundaries of what's possible in business automation and systems integration.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}