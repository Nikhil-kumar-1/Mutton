import React from 'react';

const ProductCategoryFull = () => {
  const categories = [
    {
      id: 1,
      name: "Meat & Meat Products",
      icon: "🥩",
      description: "Premium quality meat including poultry and game",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      items: "Fresh Mutton, Chicken & Game",
      featured: true,
      code: "08"
    },
    {
      id: 2,
      name: "Eggs & Egg Products",
      icon: "🥚",
      description: "Fresh eggs and egg-based products",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "Farm Fresh Eggs & Products",
      featured: false,
      code: "10"
    },
    {
      id: 3,
      name: "Fish & Seafood",
      icon: "🐟",
      description: "Fresh fish, molluscs, crustaceans, and echinoderms",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "Variety of Fish & Seafood",
      featured: false,
      code: "09"
    },
    {
      id: 4,
      name: "Indian Sweets",
      icon: "🍬",
      description: "Traditional Indian sweets and desserts",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "20+ Traditional Sweets",
      featured: false,
      code: "18"
    },
    {
      id: 5,
      name: "Indian Snacks & Savouries",
      icon: "🥨",
      description: "Authentic Indian snacks and savoury items",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "15+ Snack Varieties",
      featured: false,
      code: "18"
    },
    {
      id: 6,
      name: "Poultry Products",
      icon: "🍗",
      description: "Fresh chicken and poultry items",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      items: "Chicken & Poultry Range",
      featured: false,
      code: "08"
    }
  ];

  const features = [
    { icon: "⭐", text: "Premium Quality", color: "text-[#006400]" },
    { icon: "🌿", text: "100% Natural", color: "text-[#006400]" },
    { icon: "🏠", text: "Traditional Recipes", color: "text-[#006400]" },
    { icon: "🚚", text: "Fresh Delivery", color: "text-[#006400]" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#6B8E23]/20">
      {/* Header Section */}
      <section className="pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-full mx-auto">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6 border border-[#6B8E23]/20">
              <div className="w-2 h-2 bg-[#006400] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#006400] uppercase tracking-widest">Food Categories</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#452B1F] mb-6 leading-tight">
              Our Premium
              <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent">
                Food Range
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-[#452B1F] mb-5 max-w-full mx-auto leading-relaxed">
              Explore our diverse range of premium food products, carefully categorized for your convenience
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
                  
                  {/* Category Code */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#006400] font-bold text-sm">Code: {category.code}</span>
                  </div>
                  
                  {/* Items Count */}
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-2 rounded-xl">
                    <span className="font-bold text-sm">{category.items}</span>
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

                  {/* Information Only - No Buttons */}
                  <div className="bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] p-4 rounded-xl border-l-4 border-[#006400]">
                    <p className="text-[#006400] font-semibold text-sm text-center">
                      Premium Quality • Traditional Taste
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#D2B48C]">
            <h2 className="text-3xl font-black text-[#452B1F] text-center mb-6">
              About Our Food Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#006400]">Our Standards</h3>
                <ul className="space-y-2 text-[#452B1F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#006400]">✓</span>
                    Premium quality ingredients
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#006400]">✓</span>
                    Traditional preparation methods
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#006400]">✓</span>
                    Fresh and natural products
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#006400]">Categories Include</h3>
                <ul className="space-y-2 text-[#452B1F]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#964B00]">•</span>
                    Meat & Poultry Products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#964B00]">•</span>
                    Fish & Seafood
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#964B00]">•</span>
                    Traditional Sweets & Snacks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategoryFull;