import React from 'react';
import { Wrench, Shield, Coffee, Clock, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
    {
      id: 'repair',
      title: 'Coffee Machine Repair',
      icon: <Wrench className="w-8 h-8" />,
      description: 'Expert repair services for all coffee machine brands and models',
      features: [
        'Diagnostic testing',
        'Component replacement',
        'Performance optimization',
        'Quality guarantee',
      ],
    },
    {
      id: 'maintenance',
      title: 'Preventive Maintenance',
      icon: <Shield className="w-8 h-8" />,
      description: 'Regular servicing to prevent breakdowns and extend machine life',
      features: [
        'Deep cleaning',
        'Descaling',
        'Filter replacement',
        'Performance check',
      ],
    },
    {
      id: 'advice',
      title: 'Coffee Machine Advice',
      icon: <Coffee className="w-8 h-8" />,
      description: 'Personalized guidance to help you choose, use, and care for your coffee machines',
      features: [
        'Machine selection support',
        'Usage best practices',
        'Troubleshooting tips',
        'Maintenance planning',
      ],
    },
    {
      id: 'emergency',
      title: 'Emergency Service',
      icon: <Clock className="w-8 h-8" />,
      description: 'Urgent repairs for businesses that can\'t afford downtime',
      features: [
        'Same-day service',
        '24/7 availability',
        'Priority support',
        'Temporary replacements',
      ],
    },
  ];


  return (
    <div className="py-12">
      {/* Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-6">Our Services</h1>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Professional coffee machine services designed to keep your equipment running perfectly
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-amber-700 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{service.title}</h3>
                <p className="text-amber-700 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-orange-600 mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-amber-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all inline-block"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-100 to-orange-100">
        <div className="container mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Emergency Service</h3>
            <p className="text-amber-800 mb-6">
              Coffee machine broken? Need urgent repairs? Call us now for same-day service!
            </p>
            <div className="space-y-4">
              <a
                href="tel:+2713344739"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Call Now: +27 71 334 4739
              </a>
              <p className="text-sm text-amber-700">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}