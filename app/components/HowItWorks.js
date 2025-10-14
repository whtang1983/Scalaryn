'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Free Consultation',
      description: 'Get in touch with us to discuss your project requirements and objectives. We will listen closely to understand your vision and goals.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Scoping & Proposal',
      description: 'Based on our consultation, we will provide a detailed proposal outlining the scope of work, timeline, and budget tailored to your needs.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Project Kickoff',
      description: 'With the agreement in place, we will schedule a kickoff meeting to introduce you to our team and discuss the project plan in detail.',
    },
  ];

  return (
    <section id="howitworks" className="relative py-12 bg-gradient-to-b from-purple-950/10 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            3 Easy Steps to{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures a smooth journey from initial consultation to successful project delivery.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[72px] top-[140px] w-0.5 h-32 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
              )}

              <div className="flex flex-col md:flex-row gap-8 mb-12 md:mb-20">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="text-white" size={48} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-black border-2 border-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-indigo-400 font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 pt-0 md:pt-6">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Satisfaction Guarantee</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Unlimited Revisions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}