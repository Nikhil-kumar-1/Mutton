import React from 'react';

const GetInTouch = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5DC] via-white to-[#6B8E23]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#452B1F] mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#452B1F] max-w-2xl mx-auto">
            Have questions or ready to place an order? We'd love to hear from you. 
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D2B48C]">
              <h3 className="text-2xl font-black text-[#452B1F] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-[#F5F5DC] rounded-2xl hover:bg-[#D2B48C] transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F] mb-1">Call Us:</h4>
                    <p className="text-[#452B1F]">+91 93190 71784</p>
                    <h4 className="font-bold text-[#452B1F] mb-1">Email Us:</h4>
                    <p className="text-[#452B1F]">hamarapattal@gmail.com</p>
                    <p className="text-sm text-[#006400] font-medium mt-1">Available 12PM - 2AM</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-[#F5F5DC] rounded-2xl hover:bg-[#D2B48C] transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-lg">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F] mb-1">Visit Our Shop</h4>
                    <p className="text-[#452B1F]">SHOP NO 23,24 NAMBARDAR PLAZA SECTOR 1 GREATER NOIDA WEST,</p>
                    <p className="text-[#452B1F]">BISHRAKH , DADRI TEHSIL -2, Gautam Buddha Nagar , Uttar Pradesh-201306</p>
                    
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-[#F5F5DC] rounded-2xl hover:bg-[#D2B48C] transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-lg">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F] mb-1">Shop Hours</h4>
                    <p className="text-[#452B1F]">Monday - Saturday: 7:00 AM - 9:00 PM</p>
                    <p className="text-[#452B1F]">Sunday: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm text-[#006400] font-medium mt-1">Open all days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D2B48C]">
              <h3 className="text-2xl font-black text-[#452B1F] mb-6">Find Us</h3>

              {/* Google Map iframe */}
              <div className="rounded-2xl overflow-hidden h-64 border-2 border-dashed border-[#6B8E23]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019334237478!2d144.96305831531653!3d-37.81361197975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1e89f0b%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1697946012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  title="Our Location"
                ></iframe>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=123+Premium+Street,+Meat+District"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#F5F5DC] text-[#006400] font-semibold py-3 px-4 rounded-xl hover:bg-[#D2B48C] transition-colors duration-300 text-sm text-center"
                >
                  Get Directions
                </a>
                <a
                  href="https://www.google.com/maps/place/123+Premium+Street,+Meat+District"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#F5F5DC] text-[#006400] font-semibold py-3 px-4 rounded-xl hover:bg-[#D2B48C] transition-colors duration-300 text-sm text-center"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#D2B48C]">
            <h3 className="text-2xl font-black text-[#452B1F] mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#452B1F] font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-[#D2B48C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#452B1F] font-medium mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-[#D2B48C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#452B1F] font-medium mb-2" htmlFor="subject">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-[#D2B48C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="order">Place an Order</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#452B1F] font-medium mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-[#D2B48C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-bold py-4 px-6 rounded-xl hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>

              <p className="text-center text-[#452B1F] text-sm">
                We'll get back to you within 2 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;