import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP, FaPhone, FaWhatsapp, FaTwitter,FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const products = [
    { name: "Fresh Mutton", path: "/products" },
    { name: "Fresh Chicken", path: "/products" },
    
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Return Policy", path: "/return-policy" },
  ];

  const contactInfo = [
    { icon: "📞", text: "+91 98765 43210" },
    { icon: "📧", text: "hamarapattal@gmail.com" },
    { icon: "📍", text: "SHOP NO 23,24 NAMBARDAR PLAZA SECTOR 1 GREATER NOIDA WEST,BISHRAKH , DADRI TEHSIL -2, Gautam Buddha Nagar , Uttar Pradesh-201306" },
    { icon: "🕒", text: "7:00 AM - 9:00 PM (Daily)" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.open('tel:+919319071784');
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919319071784";
    const message = "Hello! I'd like to know more about Hamara Pattal products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-[#452B1F] to-[#392F1D] text-[#F5F5DC]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🥩
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  Hamara Pattal
                </h3>
                <p className="text-[#D2B48C] text-sm">Since 2025</p>
              </div>
            </div>
            <p className="text-[#F5F5DC] mb-6 leading-relaxed">
              Your trusted partner for premium quality mutton and authentic
              handmade masalas. Serving generations with traditional recipes and
              modern hygiene standards.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hamarapattal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] transition-all duration-300 group"
              >
                <FaInstagram className="text-lg text-[#F5F5DC] group-hover:text-white transition-colors" />
              </a>
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583947162968"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300 group"
              >
                <FaFacebookF className="text-lg text-[#F5F5DC] group-hover:text-white transition-colors" />
              </a>
              
              {/* Pinterest */}
              <a
                href="#"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#BD081C] transition-colors duration-300 group"
              >
                <FaPinterestP className="text-lg text-[#F5F5DC] group-hover:text-white transition-colors" />
              </a>
              
              {/* Twitter */}
              <a
                href="https://x.com/HamaraPattal"
                className="w-10 h-10 bg-[#392F1D] rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors duration-300 group"
              >
                <FaTwitter className="text-lg text-[#F5F5DC] group-hover:text-white transition-colors" />
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
                  <Link
                    to={link.path}
                    className="text-[#F5F5DC] hover:text-[#D2B48C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full group-hover:bg-[#D2B48C] transition-colors"></span>
                    {link.name}
                  </Link>
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
                  <Link
                    to={product.path}
                    className="text-[#F5F5DC] hover:text-[#D2B48C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#006400] rounded-full group-hover:bg-[#D2B48C] transition-colors"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#D2B48C]">
              Contact Info
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#D2B48C] mt-1 text-lg">{item.icon}</span>
                  <span className="text-[#F5F5DC] text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
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

      {/* Legal Links & Bottom Bar */}
      <div className="border-t border-[#D2B48C]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-[#D2B48C] hover:text-[#F5F5DC] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-[#D2B48C] text-sm">
                © 2025 Hamara Pattal. All rights reserved. | Made with ❤️ in
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          onClick={handleCall}
          className="w-14 h-14 bg-[#006400] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#6B8E23] transition-colors duration-300 transform hover:scale-110 group"
        >
          <FaPhone className="text-xl group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-[#6B8E23] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#964B00] transition-colors duration-300 transform hover:scale-110 group"
        >
          <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={scrollToTop}
          className="w-14 h-14 bg-[#964B00] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#452B1F] transition-colors duration-300 transform hover:scale-110 group"
        >
          <FaArrowUp className="text-xl group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;