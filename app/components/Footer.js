'use client';

import Link from 'next/link';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/benjamin-tang-scalaryn/30min'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + Micro-CTA */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="text-white font-bold text-2xl">Scalaryn</span>
            </Link>

            <p className="text-gray-400 text-lg max-w-xs">
              We build automation systems that create time, reduce costs, and drive measurable revenue growth.
            </p>

            <button
              onClick={openCalendly}
              className="inline-block text-left text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-pointer"
            >
              → Start your 7-day Blueprint Pilot
            </button>
          </div>

          {/* Quick Links / Confidence Boost */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-xl mb-6">What We Build</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Sales Systems – lead→proposal→invoice
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Marketing Systems – outreach & analytics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Project Automation – onboarding & delivery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Finance Systems – instant invoicing & reporting
                </a>
              </li>
            </ul>

            <div className="mt-6 text-sm text-gray-500">
              Enterprise-grade systems • GDPR Compliant • Operating globally from the Netherlands
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Contact</h3>
            <div className="space-y-5 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail className="text-indigo-400 mt-1" size={20} />
                <div>
                  <p className="text-sm">Email</p>
                  <a
                    href="mailto:benjamin.tang@scalaryn.com"
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    benjamin.tang@scalaryn.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-indigo-400 mt-1" size={20} />
                <div>
                  <p className="text-sm">Location</p>
                  <p className="text-white">Amsterdam, The Netherlands</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-indigo-400 mt-1" size={20} />
                <div>
                  <p className="text-sm">Availability</p>
                  <p className="text-white">Mon–Fri · 9:00–18:00 CET</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Scalaryn. All rights reserved. | Enterprise-grade automation for growing teams.
          </p>
        </div>
      </div>
    </footer>
  );
}