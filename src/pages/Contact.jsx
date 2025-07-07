import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-xl bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Contact Us</h1>
        <p className="text-lg text-amber-800 mb-8">
          Need expert assistance? Reach out to Owen Chare for all your coffee machine repair needs.
        </p>

        <div className="space-y-6 text-amber-900 text-lg">
          <div className="flex items-center gap-3">
            <User className="text-amber-600" size={24} />
            <span><strong>Expert:</strong> Owen Chare</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-amber-600" size={24} />
            <span><strong>Phone:</strong> 071 334 4739 </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-amber-600" size={24} />
            <span>
              <strong>Email:</strong>{' '}
              <a href="mailto:owenchare@gmail.com" className="underline hover:text-amber-400">
                owenchare@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
