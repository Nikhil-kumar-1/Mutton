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
    { icon: "📍", text: "123 Premium Street, Meat Market, Delhi - 110006" },
    { icon: "🕒", text: "7:00 AM - 9:00 PM (Daily)" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#452B1F] to-[#392F1D] text-[#F5F5DC]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🥩
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F5DC]">Mutton Master</h3>
                <p className="text-[#D2B48C] text-sm">Since 2025</p>
              </div>
            </div>
            <p className="text-[#F5F5DC] mb-6 leading-relaxed">
              Your trusted partner for premium quality mutton and authentic
              handmade masalas. Serving generations with traditional recipes and
              modern hygiene standards.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#006400] transition-colors duration-300"
              >
                <span className="text-lg">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#006400] transition-colors duration-300"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#006400] transition-colors duration-300"
              >
                <span className="text-lg">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#006400] transition-colors duration-300"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D2B48C]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#F5F5DC] hover:text-[#D2B48C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full group-hover:bg-[#D2B48C] transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D2B48C]">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-[#F5F5DC] hover:text-[#D2B48C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#006400] rounded-full group-hover:bg-[#D2B48C] transition-colors"></span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D2B48C]">
              Contact Info
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#D2B48C] mt-1">{item.icon}</span>
                  <span className="text-[#F5F5DC] text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-[#392F1D] rounded-xl p-4 border border-[#D2B48C]">
              <h4 className="font-bold mb-3 text-[#D2B48C]">Newsletter</h4>
              <p className="text-[#F5F5DC] text-sm mb-3">
                Get recipes, offers, and cooking tips delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-[#452B1F] border border-[#D2B48C] rounded-lg text-[#F5F5DC] placeholder-[#D2B48C] focus:outline-none focus:border-[#006400] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white py-2 rounded-lg font-semibold hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links & Bottom Bar */}
      <div className="border-t border-[#D2B48C]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#D2B48C] hover:text-[#F5F5DC] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-[#D2B48C] text-sm">
                © 2024 Mutton Master. All rights reserved. | Made with ❤️ in
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button className="w-14 h-14 bg-[#006400] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#6B8E23] transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">📞</span>
        </button>
        <button className="w-14 h-14 bg-[#6B8E23] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#964B00] transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">💬</span>
        </button>
        <button className="w-14 h-14 bg-[#964B00] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#452B1F] transition-colors duration-300 transform hover:scale-110">
          <span className="text-2xl">⬆️</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;