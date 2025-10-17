'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, FolderKanban, DollarSign } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sales Systems',
      description:
        'Book more qualified demos and close faster. Automate prospecting enrichment, instant lead routing, proposal + invoice flows, and follow-ups fully synced to your CRM.',
      gradient: 'from-blue-500 to-cyan-500',
      previewImage: null, // sales-preview.jpg - e.g. pipeline view / proposal flow
    },
    {
      icon: Megaphone,
      title: 'Marketing Systems',
      description:
        'Personalized outreach at scale. AI-written icebreakers, multi-channel campaigns, tracking & attribution, and dashboards that show which campaigns print revenue.',
      gradient: 'from-purple-500 to-pink-500',
      previewImage: null, // marketing-preview.jpg - e.g. outreach sequence / UTM report
    },
    {
      icon: FolderKanban,
      title: 'Project Management',
      description:
        'Zero-chaos delivery. Intake → scoped tasks, SLAs, client portals, automated status updates, and clean handoffs so projects ship on time without heroics.',
      gradient: 'from-orange-500 to-red-500',
      previewImage: null, // project-preview.jpg - e.g. kanban + client portal mock
    },
    {
      icon: DollarSign,
      title: 'Finance Systems',
      description:
        'Cash in faster. Click-to-sign proposals trigger auto-invoice & payment, dunning & reminders, expense sync, and MRR/COGS dashboards for better decisions.',
      gradient: 'from-green-500 to-emerald-500',
      previewImage: null, // finance-preview.jpg - e.g. Stripe/PandaDoc → dashboard
    },
  ];

  return (
    <section id="services" className="relative py-16 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Powerful Systems for{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transform your operations with our comprehensive suite of business systems designed to drive growth and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <service.icon className="text-white" size={32} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Preview Image or Gradient Box */}
                {service.previewImage ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={service.previewImage} 
                      alt={`${service.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                  </div>
                )}

                <div className="mt-6">
                  <span className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors inline-flex items-center">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
