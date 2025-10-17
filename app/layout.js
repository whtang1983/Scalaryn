import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CalendlyBadge from './components/CalendlyBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Scalaryn Agency - Business Systems Solutions',
  description: 'Transform your business with powerful systems for sales, marketing, project management, and finance.',
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