'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, FolderKanban, DollarSign, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sales Systems',
      description:
        'Book more qualified demos and close faster. Automate prospecting enrichment, instant lead routing, proposal + invoice flows, and follow-ups fully synced to your CRM.',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Lead enrichment & scoring',
        'Automated proposal generation',
        'CRM sync & pipeline tracking',
        'Follow-up sequences',
      ],
      blueprintId: 'lead-to-proposal',
      blueprintTitle: 'Lead → Proposal Flow',
    },
    {
      icon: Megaphone,
      title: 'Marketing Systems',
      description:
        'Personalized outreach at scale. AI-written icebreakers, multi-channel campaigns, tracking & attribution, and dashboards that show which campaigns print revenue.',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'AI-powered personalization',
        'Multi-channel campaign automation',
        'Attribution & ROI tracking',
        'Lead nurturing workflows',
      ],
      blueprintId: 'ai-outreach-engine',
      blueprintTitle: 'AI Outreach Engine',
    },
    {
      icon: FolderKanban,
      title: 'Project Management',
      description:
        'Zero-chaos delivery. Intake → scoped tasks, SLAs, client portals, automated status updates, and clean handoffs so projects ship on time without heroics.',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Automated project setup',
        'Client portals & status updates',
        'Task automation & SLA tracking',
        'Team collaboration workflows',
      ],
      blueprintId: 'client-onboarding-automation',
      blueprintTitle: 'Client Onboarding',
    },
    {
      icon: DollarSign,
      title: 'Finance Systems',
      description:
        'Cash in faster. Click-to-sign proposals trigger auto-invoice & payment, dunning & reminders, expense sync, and MRR/COGS dashboards for better decisions.',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Automated invoicing & payment',
        'Payment reminders & tracking',
        'Expense management sync',
        'Financial dashboards & reporting',
      ],
      blueprintId: 'auto-invoice-payment',
      blueprintTitle: 'Invoice & Payment',
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
              <div className="glass p-8 rounded-2xl h-full flex flex-col">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="text-indigo-400 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Blueprint Link */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <Link href={`/blueprints/${service.blueprintId}`}>
                    <div className="flex items-center justify-between text-indigo-400 hover:text-indigo-300 transition-colors group/link">
                      <span className="font-medium">
                        See example: {service.blueprintTitle}
                      </span>
                      <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}