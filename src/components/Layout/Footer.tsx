
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-restaurant-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Perth Quay</h3>
            <p className="text-sm italic mb-4">The Tasty House</p>
            <p className="mb-4">
              Traditional British cuisine with a modern twist, serving quality fast food since 2015.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4 flex items-center">
              <Clock size={20} className="mr-2" />
              Opening Hours
            </h4>
            <p className="mb-2">Every day:</p>
            <p className="text-restaurant-orange font-bold">1:00 PM to 11:00 PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Stirling Arcade, Stirling, Stirlingshire, FK8 1AX</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+441786475000" className="hover:text-restaurant-orange transition-colors">
                  01786 475 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@perthquay.com" className="hover:text-restaurant-orange transition-colors">
                  contact@perthquay.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-restaurant-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-restaurant-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-restaurant-orange transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/hours" className="hover:text-restaurant-orange transition-colors">
                  Opening Hours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-restaurant-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {currentYear} Perth Quay - The Tasty House. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Trading since February 2015
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
