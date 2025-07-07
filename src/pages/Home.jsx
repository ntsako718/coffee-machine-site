import React, { useState } from 'react';
import { Coffee, Wrench, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import repairMan from '../assets/repair_man.jpeg';

export default function Home() {
  const [activeService, setActiveService] = useState('repair');

  const services = [
    {
      id: 'repair',
      title: 'Machine Repair',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Professional coffee machine repair and maintenance',
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      icon: <Shield className="w-6 h-6" />,
      description: 'Regular servicing to keep your machine running smoothly',
    },
    {
      id: 'Emergency calls',
      title: 'Emergency calls',
      icon: <Coffee className="w-6 h-6" />,
      description: 'Call an expert immediately to attend urgent issues onsite.',
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-5xl font-bold text-amber-900 mb-6">
                Your Coffee Machine
                <span className="block text-orange-800">Deserves Expert Care</span>
                </h2>
                <p className="text-xl text-amber-800 mb-8 max-w-2xl lg:max-w-none">
                Professional coffee machine repair and maintenance services with African warmth and European precision
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                    to="/contact"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg"
                >
                    Get Quick Quote
                </Link>
                <Link
                    to="/services"
                    className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all"
                >
                    Learn More
                </Link>
                </div>
            </div>
            
            {/* Image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <img 
                src={repairMan} 
                alt="Professional coffee machine repair technician working on an espresso machine"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
            </div>
            </div>
        </div>
        </section>

      {/* Services Preview */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Services</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl ${
                  activeService === service.id 
                    ? 'bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-500' 
                    : 'bg-white hover:bg-amber-50'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="text-amber-700 mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-amber-900 mb-3">{service.title}</h4>
                <p className="text-amber-700 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Why Choose Coffee Machine Services?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-300" />
                    <span>10+ Years Experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-300" />
                    <span>Certified Technicians</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-300" />
                    <span>Same-Day Service Available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-300" />
                    <span>Genuine Parts Guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-full inline-block mb-4">
                  <Coffee className="w-16 h-16 text-amber-200" />
                </div>
                <p className="text-amber-200 text-lg">
                   We believe in humanity through technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-6">Ready to Fix Your Coffee Machine?</h3>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Don't let a broken coffee machine ruin your day. Get professional service today.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg inline-block"
          >
            Book Service Now
          </Link>
        </div>
      </section>
    </div>
  );
}