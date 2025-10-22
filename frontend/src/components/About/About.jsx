import React from "react";

const About = () => {
  const milestones = [
    { year: "2025", event: "Mutton Master Founded", description: "Started with a vision to revolutionize mutton quality" },
    { year: "2026", event: "First Retail Shop", description: "Opened our flagship store in the heart of the city" },
    { year: "2027", event: "Quality Certification", description: "Received premium quality certification for our processes" },
    { year: "2028", event: "Customer Milestone", description: "Served over 10,000 happy customers" }
  ];

  const visionPoints = [
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      description: "Partnering with local farms for ethically raised livestock"
    },
    {
      icon: "⚡",
      title: "Modern Butchery",
      description: "Combining traditional skills with modern hygiene standards"
    },
    {
      icon: "🏆",
      title: "Quality Excellence",
      description: "Setting new benchmarks in mutton quality and taste"
    },
    {
      icon: "🤝",
      title: "Community First",
      description: "Building lasting relationships with our customers"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-poppins">
      {/* Preload critical image */}
      <link rel="preload" href="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" as="image" />
      
      {/* Hero Section - Optimized for LCP */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 overflow-hidden">
        {/* Simplified Background - Better Performance */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        {/* Main Content - Better Layout */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Text Content - Improved Typography */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-900 to-orange-900 px-4 py-2 rounded-full shadow-lg">
                <div className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Since 2025
                </span>
              </div>

              {/* Main Heading - Better LCP */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                The Art of
                <span className="block bg-gradient-to-r from-rose-900 to-orange-900 bg-clip-text text-transparent mt-2">
                  Perfect Mutton
                </span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-rose-900 to-orange-900 rounded-full"></div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to <strong className="text-rose-900">Mutton Master</strong>, where 
                  centuries-old butchery traditions meet modern excellence. We've redefined 
                  what premium mutton should taste like.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our journey began with a simple belief: every family deserves access to the 
                  finest quality mutton through meticulous selection and expert cutting.
                </p>

                <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-4 rounded-xl border-l-4 border-rose-900">
                  <p className="text-rose-900 font-semibold italic text-sm">
                    "We don't just sell mutton; we deliver an experience that transforms your meals."
                  </p>
                </div>
              </div>

              {/* Stats - Better Layout */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-rose-200 bg-white/50 rounded-xl">
                {[
                  { number: "20+", label: "Master Butchers" },
                  { number: "10K+", label: "Happy Families" },
                  { number: "50+", label: "Premium Cuts" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-rose-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-rose-900 to-orange-900 text-white font-semibold py-3 px-6 rounded-lg hover:from-rose-800 hover:to-orange-800 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  <span>Explore Our Story</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="bg-transparent text-rose-900 font-semibold py-3 px-6 rounded-lg border-2 border-rose-900 hover:bg-rose-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Watch Story</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Content - Optimized for LCP */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-rose-200 p-4 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mutton Master Butchery - Premium quality meat selection"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                  loading="eager"
                  width={1000}
                  height={600}
                />
                
                {/* Quality Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-900 to-orange-900 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Since</div>
                    <div className="text-lg font-black">2025</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-lg border border-amber-400 shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-amber-900 font-semibold">Award Winning</div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      Quality <span className="text-yellow-500">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Better Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-900 to-orange-900 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Transforming how India experiences mutton, one perfect cut at a time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 border border-rose-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-900 to-orange-900 rounded-xl flex items-center justify-center text-white text-xl">
                  👁️
                </div>
                <h3 className="text-2xl font-black text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To become India's most trusted name in premium mutton, setting new standards 
                in quality, hygiene, and customer experience while preserving rich butchery traditions.
              </p>
              <div className="bg-white/80 rounded-xl p-3 border border-rose-200">
                <p className="text-rose-900 font-semibold text-sm">
                  "Envisioning a future where every mutton lover experiences the perfect blend of tradition and quality"
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-900 to-rose-900 rounded-xl flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <h3 className="text-2xl font-black text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To consistently deliver the finest quality mutton through expert craftsmanship, 
                modern hygiene practices, and unparalleled customer service.
              </p>
              <div className="bg-white/80 rounded-xl p-3 border border-orange-200">
                <p className="text-orange-900 font-semibold text-sm">
                  "Dedicated to bringing joy to families through exceptional mutton experiences"
                </p>
              </div>
            </div>
          </div>

          {/* Vision Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-rose-100 hover:border-rose-900/30 transition-all duration-300">
                <div className="text-3xl mb-3">
                  {point.icon}
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-900 to-orange-900 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Mutton Master for premium quality mutton.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-rose-900 to-orange-900 text-white font-semibold py-3 px-8 rounded-lg hover:from-rose-800 hover:to-orange-800 transition-all duration-300 shadow-lg flex items-center gap-2">
              <span>Visit Our Shop</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="bg-white text-rose-900 font-semibold py-3 px-8 rounded-lg border-2 border-rose-900 hover:bg-rose-900 hover:text-white transition-all duration-300 flex items-center gap-2">
              <span>Call: (555) 123-4567</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "100% Fresh Daily", icon: "🌿" },
              { text: "Expert Butchers", icon: "🔪" },
              { text: "Quality Guarantee", icon: "⭐" },
              { text: "Family Owned", icon: "❤️" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 bg-rose-50 px-3 py-2 rounded-full border border-rose-200">
                <span className="text-sm">{badge.icon}</span>
                <span className="text-xs font-semibold text-rose-900">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;