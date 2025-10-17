import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CalendlyBadge from './components/CalendlyBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Scalaryn – AI-Powered Automation Consultancy for Smarter Growth',
  description:
    'Scalaryn helps ambitious businesses replace manual work with AI-powered automations that boost revenue, shorten sales cycles, and scale operations—without adding complexity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CalendlyBadge />
      </body>
    </html>
  );
}