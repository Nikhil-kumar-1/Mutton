import React from 'react';

const ProductCategoryFull = () => {
  const categories = [
    {
      id: 1,
      name: "Premium Mutton Cuts",
      icon: "🥩",
      description: "Hand-selected premium cuts",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      items: "15+ Varieties",
      featured: true,
      priceRange: "₹450 - ₹850/kg"
    },
    {
      id: 2,
      name: "Traditional Curry Cuts",
      icon: "🍛",
      description: "Perfect for traditional dishes",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "12+ Varieties",
      featured: false,
      priceRange: "₹380 - ₹650/kg"
    },
    {
      id: 3,
      name: "Boneless Special",
      icon: "🍖",
      description: "100% boneless pieces",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "8+ Varieties",
      featured: false,
      priceRange: "₹550 - ₹900/kg"
    },
    {
      id: 4,
      name: "Family Packs",
      icon: "👨‍👩‍👧‍👦",
      description: "Economical family packs",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "6+ Packs",
      featured: false,
      priceRange: "₹299 - ₹999/pack"
    },
    {
      id: 5,
      name: "Marinated Ready",
      icon: "🧂",
      description: "Pre-marinated for instant cooking",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "10+ Flavors",
      featured: false,
      priceRange: "₹500 - ₹950/kg"
    },
    {
      id: 6,
      name: "Special Occasion",
      icon: "🎉",
      description: "Premium cuts for special events",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "5+ Specials",
      featured: false,
      priceRange: "₹600 - ₹1200/kg"
    }
  ];

  const features = [
    { icon: "⭐", text: "Premium Quality", color: "text-[#006400]" },
    { icon: "🔪", text: "Expertly Cut", color: "text-[#006400]" },
    { icon: "🚚", text: "Same Day Delivery", color: "text-[#006400]" },
    { icon: "🌿", text: "100% Natural", color: "text-[#006400]" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#6B8E23]/20">
      {/* Header Section */}
      <section className="pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-full mx-auto">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6 border border-[#6B8E23]/20">
              <div className="w-2 h-2 bg-[#006400] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#006400] uppercase tracking-widest">Premium Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#452B1F] mb-6 leading-tight">
              Premium Mutton
              <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-[#452B1F] mb-5 max-w-full mx-auto leading-relaxed">
              Discover our exquisite range of mutton cuts, expertly prepared by master butchers with over two decades of tradition and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#D2B48C] hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className={`font-semibold ${feature.color}`}>{feature.text}</div>
              </div>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-3 ${
                  category.featured ? 'border-[#006400]' : 'border-[#D2B48C]'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Item Count */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#006400] font-bold text-sm">{category.items}</span>
                  </div>
                  
                  {/* Price Range */}
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-2 rounded-xl">
                    <span className="font-bold text-sm">{category.priceRange}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-[#452B1F] mb-1">
                        {category.name}
                      </h3>
                      <p className="text-[#964B00] font-medium text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-semibold py-3 px-4 rounded-xl hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 text-sm">
                      View Cuts
                    </button>
                    <button className="flex-1 bg-white text-[#452B1F] font-semibold py-3 px-4 border-2 border-[#D2B48C] rounded-xl hover:border-[#006400] hover:text-[#006400] transition-all duration-300 text-sm">
                      Quick Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategoryFull;