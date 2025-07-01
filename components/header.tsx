'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    return `font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
      isActive(path) 
        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
        : 'text-gray-700 hover:text-qpi-green hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:shadow-md'
    }`;
  };

  const getMobileLinkClasses = (path: string) => {
    return `font-medium transition-all duration-300 px-4 py-3 rounded-lg block ${
      isActive(path) 
        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
        : 'text-gray-700 hover:text-qpi-green hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50'
    }`;
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-qpi-navy text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@qpitechnical.com</span>
            </div>
          </div>
          <div className="text-xs hidden md:block">
            Emergency Service Available 24/7
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/qpi_llc_logo-127x91.png" 
                alt="QPI Technical Services LLC Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-qpi-navy">QPI Technical Services LLC</h1>
                <p className="text-xs text-qpi-navy-light">AC Cleaning Specialists</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link href="/" className={getLinkClasses('/')}>
                Home
              </Link>
              <Link href="/services" className={getLinkClasses('/services')}>
                Services
              </Link>
              <Link href="/about" className={getLinkClasses('/about')}>
                About
              </Link>
              <Link href="/contact" className={getLinkClasses('/contact')}>
                Contact
              </Link>
              <div className="ml-4">
                <Button className="bg-qpi-green hover:bg-qpi-green-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Free Quote
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className={getMobileLinkClasses('/')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className={getMobileLinkClasses('/services')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className={getMobileLinkClasses('/about')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className={getMobileLinkClasses('/contact')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2">
                  <Button className="bg-qpi-green hover:bg-qpi-green-dark text-white w-full shadow-lg">
                    Get Free Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}