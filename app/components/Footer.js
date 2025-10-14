'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="text-white font-bold text-2xl">Scalaryn</span>
            </Link>
          </div>

          {/* Tagline Section - Middle Column */}
          <div className="flex items-start">
            <p className="text-gray-400 text-lg">
              Transform your business with powerful systems that drive growth and efficiency.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-indigo-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:benjamin.tang@scalaryn.com" className="text-white hover:text-indigo-400 transition-colors">
                    benjamin.tang@scalaryn.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-indigo-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Amsterdam, The Netherlands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Scalaryn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}