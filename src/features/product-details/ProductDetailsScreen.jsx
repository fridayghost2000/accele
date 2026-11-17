import React, { useState } from 'react'
import { 
  ChevronLeft, 
  Heart, 
  Share2, 
  Star, 
  Eye, 
  Moon, 
  Droplets,
  Check
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { ProductGraphic } from '@/components/common/ProductGraphic'
import { useApp } from '@/context/AppContext'

export function ProductDetailsScreen() {
  const { 
    goBack, 
    navigateTo, 
    selectedProduct, 
    addToCart, 
    wishlist, 
    toggleWishlist 
  } = useApp()

  const [addedToast, setAddedToast] = useState(false)
  const isWishlisted = wishlist.includes(selectedProduct.id)

  const handleAddToCart = () => {
    addToCart(selectedProduct, 1)
    setAddedToast(true)
    setTimeout(() => setAddedToast(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(selectedProduct, 1)
    navigateTo('cart')
  }

  return (
    <div className="h-full flex flex-col bg-white text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Header */}
      <div className="border-b border-slate-100 shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <button 
            onClick={goBack}
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              className="p-1 text-slate-700 hover:text-[#D92228] rounded-lg active:scale-95 cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? 'fill-[#D92228] text-[#D92228]' : 'text-slate-600'
                }`}
              />
            </button>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: selectedProduct.name, url: window.location.href })
                }
              }}
              className="p-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 no-scrollbar">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Large Product Showcase */}
          <div className="w-full h-52 sm:h-72 md:h-80 flex items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 relative overflow-hidden border border-slate-100">
            <ProductGraphic type={selectedProduct.type} className="w-4/5 h-4/5 object-contain drop-shadow-lg" />
            {selectedProduct.badge && (
              <span className="absolute top-3 left-3 bg-[#D92228] text-white text-[9px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                {selectedProduct.badge}
              </span>
            )}
          </div>

          {/* Product Information & Actions */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {selectedProduct.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                {selectedProduct.model}
              </p>

              {/* Rating Row */}
              <div className="flex items-center gap-1.5 pt-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {selectedProduct.rating}
                </span>
                <span className="text-xs sm:text-sm text-slate-400">
                  ({selectedProduct.reviewsCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="pt-2">
                <span className="text-2xl sm:text-3xl font-black text-[#D92228] tracking-tight">
                  ${selectedProduct.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                {selectedProduct.description}
              </p>
            </div>

            {/* 3 Circular Feature Badges Row */}
            <div className="grid grid-cols-3 gap-3 py-2 border-y border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 mb-1.5 shadow-2xs">
                  <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-slate-700 stroke-[1.8]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                  170° View
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 mb-1.5 shadow-2xs">
                  <Moon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-700 stroke-[1.8]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                  Night Vision
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 mb-1.5 shadow-2xs">
                  <Droplets className="w-5 sm:w-6 h-5 sm:h-6 text-slate-700 stroke-[1.8]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                  Waterproof
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#D92228] hover:bg-red-700 text-white font-bold py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide shadow-md shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    Added to Cart!
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide border border-slate-300 active:scale-[0.98] transition-all cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="catalog" />
    </div>
  )
}
export default ProductDetailsScreen
