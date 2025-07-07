import { Coffee, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
       <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-8 h-8 text-amber-200" />
              <span className="text-2xl font-bold">Coffee Machine Services</span>
            </div>
            <p className="text-amber-200 mb-4 text-left">
              Bringing life back to your coffee machines with African warmth and expertise. 
              Professional repair and maintenance services across Johannesburg.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200">+27 71 334 4739</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200">Owenchare@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200">Johannesburg, Gauteng</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-200 hover:text-amber-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-amber-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Machine Repair</li>
              <li>Maintenance</li>
              <li>Installation</li>
              <li>Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-6 mt-8 text-center">
          <p className="text-amber-300">
            © 2025 Coffee Machine Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}