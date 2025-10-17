'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

const faqs = [
  {
    question: "How fast will I see a return?",
    answer:
      "Within 2–4 weeks. Our first automations usually reclaim 5–10 hours/week and shorten deal cycles by 30%+. Real metrics, not guesses.",
  },
  {
    question: "What does working with you look like?",
    answer:
      "Simple: Discovery → Blueprint → Build → Optimize. You approve one combined proposal + agreement + invoice. We build, test, and track ROI in dashboards you can see live.",
  },
  {
    question: "Why not just hire a developer or VA?",
    answer:
      "Hiring = salary + training + management + risk. Scalaryn gives you a senior automation partner who delivers measurable impact in weeks, not months—and you pay only for outcomes.",
  },
  {
    question: "What kind of ROI do clients get?",
    answer:
      "Typical pilots pay for themselves in 30 days—automated follow-ups lift close rates 10–20%, instant invoicing improves cash flow 25%, and time-saved compounds monthly.",
  },
  {
    question: "Do you force us to switch tools?",
    answer:
      "Never. We automate inside your current stack—HubSpot, Salesforce, ClickUp, Notion, Slack, Stripe, QuickBooks—then plug in AI or Make/n8n where it multiplies ROI.",
  },
  {
    question: "How do you keep projects on budget?",
    answer:
      "Every build has fixed scope, fixed price, and clear success metrics. No scope-creep surprises—just milestones tied to outcomes.",
  },
  {
    question: "What if we’ve tried automation before and it failed?",
    answer:
      "We diagnose first. Most failures come from automating noise. We target the 20 % of tasks that drive 80% of revenue and prove it with numbers.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You own everything—tools, data, and SOPs. We provide Loom hand-offs, dashboards, and optional retainers for ongoing optimization so ROI keeps climbing.",
  },
  {
    question: "Is our data secure?",
    answer:
      "Yes. Least-privilege access, GDPR-compliant handling, and credentials stay inside your accounts. Security is built-in, not bolted on.",
  },
  {
    question: "What’s the minimum to get started?",
    answer:
      "A 30-minute call. If we can’t identify three measurable wins worth automating, we’ll tell you upfront. If we can, we map them in a 7-day Blueprint Pilot.",
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