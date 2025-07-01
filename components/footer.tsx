import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-qpi-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/qpi_llc_logo-127x91.png" 
                alt="QPI Technical Services LLC Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">QPI Technical Services LLC</h3>
                <p className="text-sm text-gray-300">AC Cleaning Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for professional AC cleaning services. Clean air starts with a clean system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-qpi-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-qpi-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-qpi-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-qpi-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AC Deep Cleaning</li>
              <li>AC Installation</li>
              <li>Maintenance Plans</li>
              <li>Emergency Repairs</li>
              <li>Air Quality Testing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-qpi-green" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-qpi-green" />
                <span className="text-gray-300">info@qpitechnical.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-qpi-green" />
                <span className="text-gray-300">123 Service St, City, ST 12345</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-qpi-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-qpi-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-qpi-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-qpi-navy-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 QPI Technical Services LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-qpi-green text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-qpi-green text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}