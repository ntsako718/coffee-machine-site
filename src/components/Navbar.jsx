import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white shadow-2xl sticky top-0 z-50">
        <div className="w-full px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-amber-200 p-3 rounded-full">
                <Coffee className="w-8 h-8 text-amber-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Coffee Machine Services</h1>
                <p className="text-amber-200 text-sm">Expert Coffee Machine Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white hover:text-amber-200 transition-colors ${
                    isActive(link.path)
                      ? "text-amber-200 font-semibold border-b-2 border-amber-200 pb-1"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              className="hidden md:block bg-amber-200 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-300 transition-colors"
              onClick={() => setShowBookingModal(true)}
            >
              Book Service
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-white hover:text-amber-200 transition-colors ${
                      isActive(link.path) ? "text-amber-200 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  className="bg-amber-200 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-300 transition-colors text-left"
                  onClick={() => {
                    setShowBookingModal(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Book Service
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-amber-900">Book a Service</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const email = e.target.email.value;
                const details = e.target.details.value;

                const subject = encodeURIComponent("Service Booking Request");
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nDetails: ${details}`
                );

                window.location.href = `mailto:owenchare@gmail.com?subject=${subject}&body=${body}`;

                setShowBookingModal(false);
              }}
            >
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <textarea
                name="details"
                placeholder="Service details (optional)"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-amber-200 text-amber-900 hover:bg-amber-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
