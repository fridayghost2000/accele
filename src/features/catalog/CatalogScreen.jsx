import React, { useState } from 'react'
import { 
  ChevronLeft, 
  Search, 
  SlidersHorizontal, 
  Heart, 
  Star,
  ChevronDown,
  X
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { ProductGraphic } from '@/components/common/ProductGraphic'
import { useApp } from '@/context/AppContext'
import { PRODUCTS, CATEGORIES } from '@/data/products'

export function CatalogScreen() {
  const { 
    goBack, 
    navigateTo, 
    selectedCategory, 
    setSelectedCategory,
    sortBy,
    setSortBy,
    wishlist,
    toggleWishlist,
    searchQuery,
    setSearchQuery
  } = useApp()

  const [showSearch, setShowSearch] = useState(false)
  const [filterModalOpen, setFilterModalOpen] = useState(false)

  // Filter & Sort logic
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.model.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return b.reviewsCount - a.reviewsCount // popularity default
  })

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-slate-100">
        <button 
          onClick={goBack} 
          className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
          Products
        </h1>

        <button 
          onClick={() => setShowSearch(!showSearch)} 
          className="p-1 -mr-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95"
          aria-label="Search"
        >
          <Search className="w-5 h-5 stroke-[2]" />
        </button>
      </div>

      {/* Conditional Quick Search Input */}
      {showSearch && (
        <div className="p-3 bg-white border-b border-slate-100 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Filter by name or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 rounded-lg pl-9 pr-8 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Category Pills Bar */}
      <div className="px-4 pt-3 pb-2 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all shrink-0 active:scale-95 ${
                isSelected
                  ? 'bg-[#D92228] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Filter & Sort Controls Row */}
      <div className="px-4 py-1.5 flex items-center justify-between text-xs text-slate-600 shrink-0">
        <button
          onClick={() => setFilterModalOpen(!filterModalOpen)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-medium text-slate-700 hover:bg-slate-50 active:scale-95 shadow-2xs"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#D92228]" />
          <span>Filter</span>
        </button>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent pr-5 text-[11px] font-medium text-slate-600 cursor-pointer focus:outline-none"
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="rating">Sort by: Highest Rated</option>
            <option value="price-low">Sort by: Price: Low to High</option>
            <option value="price-high">Sort by: Price: High to Low</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 2-Column Product Grid */}
      <div className="flex-1 overflow-y-auto px-4 py-2 no-scrollbar">
        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            <p className="text-xs">No products found in this category.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-[#D92228]"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 pb-3">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => navigateTo('product-details', product)}
                  className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between relative group"
                >
                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleWishlist(product.id)
                    }}
                    className="absolute top-2.5 right-2.5 z-10 p-1 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-[#D92228] transition-colors"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isWishlisted ? 'fill-[#D92228] text-[#D92228]' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Product Thumbnail */}
                  <div className="h-28 w-full flex items-center justify-center p-1 rounded-xl bg-slate-50/50">
                    <ProductGraphic
                      type={product.type}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-2.5">
                    <h3 className="text-xs font-bold text-slate-900 leading-tight line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {product.model}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <BottomNav activeScreen="catalog" />
    </div>
  )
}
export default CatalogScreen
