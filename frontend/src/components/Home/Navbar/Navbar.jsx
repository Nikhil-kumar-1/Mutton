import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GiMeat, 
  GiHamburgerMenu, 
  GiCrossedBones 
} from 'react-icons/gi';
import { 
  FaWhatsapp,
  FaPhone, 
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaCalendarCheck
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // WhatsApp booking function
  const handleWhatsAppBooking = () => {
    const phoneNumber = "919876543210"; // Replace with your actual number
    const message = "Hello! I'd like to book mutton meat from your website. Please provide me with more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome className="text-lg" /> },
    { name: 'Products', path: '/products', icon: <GiMeat className="text-lg" /> },
    { name: 'Recipes', path: '/recipes', icon: <FaUtensils className="text-lg" /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="text-lg" /> },
    { name: 'Contact', path: '/contact', icon: <FaPhone className="text-lg" /> },
  ];

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white  shadow-lg border-b border-red-100' 
            : 'bg-gradient-to-r from-red-800 to-red-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link to="/" className="flex items-center space-x-2">
                <GiMeat className={`text-3xl ${scrolled ? 'text-red-700' : 'text-white'}`} />
                <span className={`text-xl font-bold ${scrolled ? 'text-red-800' : 'text-white'}`}>
                  Premium Mutton
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-md font-medium transition-all duration-200 flex items-center space-x-1 ${
                        location.pathname === item.path
                          ? scrolled
                            ? 'bg-red-100 text-red-800'
                            : 'bg-white/20 text-white'
                          : scrolled
                          ? 'text-gray-700 hover:text-red-700 hover:bg-red-50'
                          : 'text-red-100 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp Booking Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleWhatsAppBooking}
                className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200 shadow-lg"
              >
                <FaWhatsapp className="text-lg " />
                <span>Book on WhatsApp</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-2 rounded-md ${
                scrolled 
                  ? 'text-gray-700 hover:bg-red-50' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <GiCrossedBones className="text-xl" /> : <GiHamburgerMenu className="text-xl" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-800 to-red-900 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <GiMeat className="text-2xl text-white" />
                        <span className="text-white font-bold">Premium Mutton</span>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-1"
                      >
                        <GiCrossedBones className="text-xl" />
                      </button>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 p-4 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                            location.pathname === item.path
                              ? 'bg-red-100 text-red-800'
                              : 'text-gray-700 hover:bg-red-50 hover:text-red-700'
                          }`}
                        >
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* WhatsApp Booking Button - Mobile */}
                  <div className="p-4 border-t border-gray-200">
                    <motion.button
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: 0.5 }}
                      onClick={handleWhatsAppBooking}
                      className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors duration-200 shadow-lg"
                    >
                      <FaWhatsapp className="text-xl " />
                      <span>Book on WhatsApp</span>
                    </motion.button>

                    {/* Contact Info */}
                    <motion.div
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: 0.6 }}
                      className="mt-4 text-center text-sm text-gray-600"
                    >
                      <p>Quick booking available</p>
                      <p className="text-xs mt-1">24/7 Service</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating WhatsApp Button for Mobile */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={handleWhatsAppBooking}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-600/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.button>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;