import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Products", href: "#" },
    { name: "Recipes", href: "#" },
    { name: "Shop Location", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const products = [
    { name: "Fresh Mutton", href: "#" },
    { name: "Mutton Masalas", href: "#" },
    { name: "Marinated Mutton", href: "#" },
    { name: "Mutton Curry Cuts", href: "#" },
    { name: "Mutton Biryani Pack", href: "#" },
    { name: "Specialty Cuts", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Shipping Policy", href: "#" },
    { name: "Quality Standards", href: "#" },
  ];

  const contactInfo = [
    { icon: "📞", text: "+91 98765 43210" },
    { icon: "📧", text: "info@muttonmaster.com" },
    { icon: "📍", text: "123 Butcher Street, Meat Market, Delhi - 110006" },
    { icon: "🕒", text: "7:00 AM - 9:00 PM (Daily)" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-900 to-amber-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🥩
              </div>
              <div>
                <h3 className="text-xl font-bold">Mutton Master</h3>
                <p className="text-amber-200 text-sm">Since 2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium quality mutton and authentic
              handmade masalas. Serving generations with traditional recipes and
              modern hygiene standards.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors duration-300"
              >
                <span className="text-lg">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors duration-300"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors duration-300"
              >
                <span className="text-lg">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors duration-300"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-amber-900 rounded-full group-hover:bg-amber-200 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-200">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-rose-900 rounded-full group-hover:bg-amber-200 transition-colors"></span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-200">
              Contact Info
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-amber-200 mt-1">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="font-bold mb-3 text-amber-200">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get recipes, offers, and cooking tips delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-900 to-amber-900 text-white py-2 rounded-lg font-semibold hover:from-rose-800 hover:to-amber-800 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links & Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-200 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Mutton Master. All rights reserved. | Made with ❤️ in
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">📞</span>
        </button>
        <button className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-amber-700 transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">💬</span>
        </button>
        <button className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-rose-700 transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">⬆️</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
