import React from 'react'
import { 
  Menu, 
  ShoppingCart, 
  Search, 
  Camera, 
  Tv, 
  Lightbulb, 
  Radio, 
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { AcceleLogo } from '@/components/common/AcceleLogo'
import { ProductGraphic } from '@/components/common/ProductGraphic'
import { useApp } from '@/context/AppContext'
import { PRODUCTS } from '@/data/products'

export function HomeScreen() {
  const { 
    navigateTo, 
    cartCount, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery 
  } = useApp()

  const categories = [
    { id: 'Cameras', label: 'Cameras', icon: Camera },
    { id: 'Monitors', label: 'Monitors', icon: Tv },
    { id: 'Lighting', label: 'Lighting', icon: Lightbulb },
    { id: 'Sensors', label: 'Sensors', icon: Radio },
  ]

  const featured = PRODUCTS.slice(0, 2)

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId)
    navigateTo('catalog')
  }

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none">
      <StatusBar />

      {/* Top Header */}
      <div className="px-4 py-2 flex items-center justify-between bg-white border-b border-slate-100">
        <button 
          onClick={() => navigateTo('menu')}
          className="p-1.5 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95"
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5 stroke-[2.2]" />
        </button>

        <AcceleLogo size="md" />

        <button 
          onClick={() => navigateTo('cart')}
          className="p-1.5 -mr-1 text-slate-700 hover:text-slate-900 relative rounded-lg active:scale-95"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="w-5 h-5 stroke-[2.2]" />
          {cartCount > 0 && (
            <span className="absolute 0 top-0.5 right-0.5 bg-[#D92228] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 no-scrollbar">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigateTo('catalog')
            }}
            className="w-full bg-white rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 border border-slate-200 shadow-2xs focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Hero Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#12141C] via-[#1E2330] to-[#12141C] text-white p-4 shadow-md border border-slate-800/50">
          {/* Dynamic Background Automotive Swoosh Lines */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-90 overflow-hidden">
            <svg viewBox="0 0 200 120" fill="none" className="w-full h-full object-cover">
              <path d="M70 120 C110 90 140 40 200 10 L200 120 Z" fill="#D92228" opacity="0.3" />
              <path d="M100 120 C130 95 155 55 200 30" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
              <path d="M85 120 C120 90 145 45 195 15" stroke="#D92228" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[62%]">
            <h2 className="text-lg font-black tracking-tight text-white leading-tight">
              Driving<br />Innovation
            </h2>
            <p className="text-[10px] text-slate-300 mt-1 font-medium leading-relaxed">
              Automotive Electronics<br />for a Smarter Drive
            </p>
            <button
              onClick={() => navigateTo('catalog')}
              className="mt-3 inline-flex items-center gap-1 bg-[#D92228] hover:bg-red-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md shadow-red-900/30 active:scale-95 transition-all"
            >
              Explore Products
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Car Graphic / Photo simulation */}
          <div className="absolute right-1 bottom-1 w-32 h-20 pointer-events-none">
            <svg viewBox="0 0 160 90" fill="none" className="w-full h-full drop-shadow-xl">
              {/* Car body silhouette with headlights */}
              <ellipse cx="80" cy="78" rx="70" ry="8" fill="#000000" opacity="0.6" />
              <path d="M15 62 Q25 45 45 42 L65 30 Q90 24 115 30 L135 44 Q155 48 158 64 C158 68 150 72 140 72 L25 72 C18 72 15 68 15 62 Z" fill="#E2E8F0" />
              {/* Windshield & Windows */}
              <path d="M66 33 L112 33 L126 44 L54 44 Z" fill="#1E293B" />
              {/* Headlights beam */}
              <path d="M14 62 L32 58 L32 64 Z" fill="#F8FAFC" />
              <circle cx="28" cy="61" r="3" fill="#38BDF8" />
              <path d="M148 62 L132 58 L132 64 Z" fill="#F8FAFC" />
              <circle cx="138" cy="61" r="3" fill="#38BDF8" />
              {/* Wheels */}
              <circle cx="42" cy="70" r="10" fill="#0F172A" />
              <circle cx="42" cy="70" r="6" fill="#64748B" />
              <circle cx="125" cy="70" r="10" fill="#0F172A" />
              <circle cx="125" cy="70" r="6" fill="#64748B" />
              {/* Front grill */}
              <rect x="70" y="56" width="28" height="8" rx="2" fill="#0F172A" />
              <path d="M72 60 H96" stroke="#D92228" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <div className="grid grid-cols-4 gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="flex flex-col items-center group active:scale-95 transition-transform"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-700 group-hover:border-red-400 group-hover:text-[#D92228] transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700 mt-1.5 tracking-tight">
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Products Header */}
        <div className="pt-1">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-xs font-bold text-slate-900 tracking-tight">
              Featured Products
            </h3>
            <button
              onClick={() => navigateTo('catalog')}
              className="text-[11px] font-bold text-[#D92228] hover:text-red-700 inline-flex items-center gap-0.5 active:scale-95"
            >
              See All
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-2 gap-3">
            {featured.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigateTo('product-details', prod)}
                className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="h-24 w-full flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden p-1">
                  <ProductGraphic type={prod.type} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-900 leading-tight line-clamp-1">
                      {prod.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {prod.model}
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#D92228] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeScreen="home" />
    </div>
  )
}
export default HomeScreen
