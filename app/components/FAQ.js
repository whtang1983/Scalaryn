'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why wouldn't I just hire a full-time specialist?",
      answer: "Hiring a full-time specialist means significant overhead costs including salary, benefits, training, and equipment. Our service provides you with an entire team of experts at a fraction of the cost, with the flexibility to scale up or down based on your needs. You get enterprise-level expertise without the enterprise-level expense.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer: "No limits! Once subscribed, you can add as many system implementation requests to your queue as you'd like. We'll work through them one by one, ensuring each receives the attention and quality it deserves. This gives you the flexibility to tackle multiple business challenges without worrying about additional costs.",
    },
    {
      question: "How does the process work?",
      answer: "Our process is simple and transparent. After your free consultation, we'll provide a detailed proposal. Once approved, we kick off with a planning session, then move into implementation phases with regular check-ins. You'll have full visibility throughout, with access to project dashboards and direct communication with your team.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is our priority. We offer unlimited revisions on all deliverables to ensure everything meets your expectations. If you're ever unhappy, we'll work with you to make it right. Our goal is a long-term partnership, not just a one-time project.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple system implementations might take 2-4 weeks, while comprehensive multi-system integrations could take 2-3 months. During your consultation, we'll provide a detailed timeline specific to your needs.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer: "Absolutely! We provide comprehensive training for your team on all implemented systems, including documentation and video tutorials. Post-launch, we offer ongoing support packages to ensure your systems continue running smoothly and evolve with your business needs.",
    },
  ];

  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions we receive.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-indigo-400" size={24} />
                    ) : (
                      <Plus className="text-indigo-400" size={24} />
                    )}
                  </div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}