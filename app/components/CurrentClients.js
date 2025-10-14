'use client';

import { motion } from 'framer-motion';

export default function CurrentClients() {
  return (
    <section className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-6">Current Clients</p>
          <div className="flex flex-wrap gap-8 items-center justify-center opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-8 bg-white/10 rounded"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}