'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SelectedBlueprints() {
  const blueprints = [
    {
      id: 'lead-to-proposal',
      title: 'Automated Lead → Proposal Flow',
      category: 'Sales System',
      image: null,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'ai-outreach-engine',
      title: 'AI-Powered Cold Outreach Engine',
      category: 'Marketing System',
      image: null,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'client-onboarding-automation',
      title: 'Client Onboarding Automation',
      category: 'Project Management',
      image: null,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'auto-invoice-payment',
      title: 'Auto-Invoice & Payment Workflow',
      category: 'Finance System',
      image: null,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            System Blueprints
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            See What's{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Possible
            </span>
          </h2>

          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Real automation systems we've built. These blueprints show what we can achieve with your existing tools and processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blueprints.map((blueprint, index) => (
            <motion.div
              key={blueprint.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blueprints/${blueprint.id}`}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className={`absolute inset-0 bg-gradient-to-br ${blueprint.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-indigo-300 text-sm font-medium mb-2 block">
                          {blueprint.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                          {blueprint.title}
                        </h3>
                        <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                          <span className="font-medium">View Blueprint</span>
                          <span className="ml-2">→</span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 transition-colors duration-500 rounded-2xl" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}