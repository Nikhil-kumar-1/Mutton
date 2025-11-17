import React from "react";

const About = () => {
  const milestones = [
    {
      year: "2025",
      event: "Hamara Pattal Founded",
      description:
        "Started with a vision to revive traditional food experiences",
    },
    {
      year: "2026",
      event: "First Kitchen Setup",
      description: "Established our flagship kitchen in Noida",
    },
    {
      year: "2027",
      event: "Quality Certification",
      description: "Received premium quality certification for our processes",
    },
    {
      year: "2028",
      event: "Customer Milestone",
      description: "Served over 10,000 happy customers",
    },
  ];

  const visionPoints = [
    {
      icon: "🌱",
      title: "Traditional Recipes",
      description:
        "Preserving authentic family recipes passed through generations",
    },
    {
      icon: "⚡",
      title: "Fresh Preparation",
      description: "Daily prepared in small batches for maximum freshness",
    },
    {
      icon: "🏆",
      title: "Quality Excellence",
      description: "Setting new benchmarks in taste and authenticity",
    },
    {
      icon: "🤝",
      title: "Community First",
      description: "Building lasting relationships with our customers",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#6B8E23]/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#6B8E23] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#964B00] rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#006400] to-[#6B8E23] px-4 py-2 rounded-full shadow-lg">
                <div className="w-1.5 h-1.5 bg-[#F5F5DC] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Since 2025
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#452B1F] leading-tight">
                The Taste of
                <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent mt-2">
                  Home
                </span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg text-[#452B1F] leading-relaxed">
                  Welcome to{" "}
                  <strong className="text-[#006400]">Hamara Pattal</strong>. we
                  believe the best meals are the ones that bring people
                  together. Our journey began with a simple thought — to revive
                  India’s age-old tradition of sharing food on pattals, where
                  families and friends sat together, shared stories, and created
                  memories over warm, comforting meals.
                </p>

                <p className="text-[#452B1F] leading-relaxed">
                  That feeling of home, belonging, and togetherness is at the
                  heart of everything we do. We specialize in authentic mutton
                  and chicken dishes, made using:
                </p>

                <ul className="list-disc list-inside text-[#452B1F] space-y-1 ml-4">
                  <li>Fresh, selective Khasi mutton</li>
                  <li>Uniquely sourced, in-house spices</li>
                  <li>
                    Slow cooking in small batches for unmatched flavor and
                    freshness
                  </li>
                </ul>

                <p className="text-[#452B1F] leading-relaxed">
                  Every dish is crafted to carry the warmth of homemade food —
                  rich in taste, rooted in tradition, and created with genuine
                  care. Whether you’re enjoying your meal at home, at work, or
                  with friends, our flavors are designed to make you feel
                  connected, comforted, and satisfied.
                </p>

                <div className="bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] p-4 rounded-xl border-l-4 border-[#006400]">
                  <p className="text-[#006400] font-semibold italic text-sm">
                    "From our kitchen to your pattal, we’re here to bring not
                    just food, but moments — because some stories aren’t told,
                    they’re served. "
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#D2B48C] bg-white/50 rounded-xl">
                {[
                  { number: "50+", label: "Traditional Recipes" },
                  { number: "10K+", label: "Happy Families" },
                  { number: "5+", label: "Cities Served" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-[#006400] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[#452B1F] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  <span>Explore Our Menu</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button className="bg-transparent text-[#006400] font-semibold py-3 px-6 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Our Story</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-[#D2B48C] p-4 shadow-xl">
                <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1000&q=80"
                    alt="Hamara Pattal - Traditional Indian food served with love"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                {/* Quality Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Since</div>
                    <div className="text-lg font-black">2025</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-lg border border-[#D2B48C] shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-[#006400] font-semibold">
                      Authentic Taste
                    </div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      Homemade <span className="text-[#964B00]">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              We Serve Across NCR
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              "Noida",
              "Noida Extension",
              "Delhi",
              "Delhi NCR",
              "Ghaziabad",
            ].map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-full flex items-center justify-center text-white mx-auto mb-2">
                  📍
                </div>
                <h3 className="font-bold text-[#452B1F]">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              Bringing back the warmth of traditional home-cooked meals, one
              pattal at a time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-xl">
                  👁️
                </div>
                <h3 className="text-2xl font-black text-[#452B1F]">
                  Our Vision
                </h3>
              </div>
              <p className="text-[#452B1F] leading-relaxed mb-4">
                To make Hamara Pattal a trusted name in Noida, Noida Extension, Delhi, Delhi NCR, and Ghaziabad — a place where people reconnect with the joy of shared meals.
We envision a community where every order carries the warmth of tradition, the comfort of homestyle food, and the happiness of togetherness — keeping alive the Indian spirit of serving not just meals, but memories.
              </p>
              <div className="bg-white/80 rounded-xl p-3 border border-[#D2B48C]">
                <p className="text-[#006400] font-semibold text-sm">
                  "Recreating the magic of family gatherings with every meal we
                  serve"
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <h3 className="text-2xl font-black text-[#452B1F]">
                  Our Mission
                </h3>
              </div>
              <p className="text-[#452B1F] leading-relaxed mb-4">
                To serve food that feels like home — cooked with fresh ingredients, selective Khasi mutton, and in-house spices, prepared in small batches for authentic taste and warmth.
We aim to bring back India’s traditional way of eating together on a pattal, where food is shared with love, conversations flow easily, and every meal creates a sense of belonging.
              </p>
              <div className="bg-white/80 rounded-xl p-3 border border-[#D2B48C]">
                <p className="text-[#006400] font-semibold text-sm">
                  "Dedicated to bringing joy to families through exceptional
                  food experiences"
                </p>
              </div>
            </div>
          </div>

          {/* Vision Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{point.icon}</div>
                <h4 className="text-lg font-black text-[#452B1F] mb-2">
                  {point.title}
                </h4>
                <p className="text-[#452B1F] leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
            Ready to Taste the Difference?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Hamara Pattal for
            authentic homemade taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-semibold py-3 px-8 rounded-lg hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-lg flex items-center gap-2">
              <span>Order Now</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            <button className="bg-white text-[#006400] font-semibold py-3 px-8 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center gap-2">
              <span>Call: +91 XXXXX XXXXX</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "100% Fresh Daily", icon: "🌿" },
              { text: "Traditional Recipes", icon: "👨‍🍳" },
              { text: "Quality Guarantee", icon: "⭐" },
              { text: "Family Owned", icon: "❤️" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-[#D2B48C] shadow-sm"
              >
                <span className="text-sm">{badge.icon}</span>
                <span className="text-xs font-semibold text-[#006400]">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
