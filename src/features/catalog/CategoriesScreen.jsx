import React, { useState } from 'react'
import { 
  ChevronLeft, 
  Search, 
  X,
  Camera, 
  Tv, 
  RectangleHorizontal, 
  Radio, 
  Lightbulb, 
  Video, 
  Armchair, 
  Truck, 
  ShieldAlert, 
  Gauge, 
  Flame, 
  Bus, 
  Layers, 
  Cable, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Share2, 
  Wrench,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { BottomNav } from '@/components/common/BottomNav'
import { useApp } from '@/context/AppContext'
import { OFFICIAL_CATEGORIES, PRODUCTS } from '@/data/products'

// Icon mapper for dynamic category icons
const ICON_MAP = {
  Camera,
  Tv,
  RectangleHorizontal,
  Radio,
  Lightbulb,
  Video,
  Armchair,
  Truck,
  ShieldAlert,
  Gauge,
  Flame,
  Bus,
  Layers,
  Cable,
  Cpu,
  Zap,
  ShieldCheck,
  Share2,
  Wrench
}

export function CategoriesScreen() {
  const { goBack, navigateTo, setSelectedCategory } = useApp()
  const [search, setSearch] = useState('')

  const filteredCategories = OFFICIAL_CATEGORIES.filter((cat) => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      cat.label.toLowerCase().includes(q) ||
      cat.shortLabel.toLowerCase().includes(q) ||
      cat.subcategories.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q)
    )
  })

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId)
    navigateTo('catalog')
  }

  // Count live products matching each category
  const getProductCount = (catId) => {
    const count = PRODUCTS.filter((p) => p.category === catId).length
    return count
  }

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none relative font-sans">
      {/* Top Header */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-slate-100 shrink-0">
        <button 
          onClick={goBack} 
          className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
          All Categories
        </h1>

        <div className="w-6" /> {/* Balance spacer */}
      </div>

      {/* Search Input */}
      <div className="p-3 bg-white border-b border-slate-100 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search categories (e.g. camera, sensor, mirror)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-800 placeholder-slate-400 border border-slate-200/80 focus:outline-none focus:border-red-500"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Categories List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 no-scrollbar pb-6">
        {/* Minimalist Premium Banner Card */}
        <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-r from-[#12141C] via-[#1A1F2D] to-[#12141C] border border-slate-800/80 shadow-md text-white flex items-center justify-between">
          {/* Subtle Ambient Automotive Accent Glow */}
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-600/15 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-base font-black text-white tracking-tight leading-tight">
              All Categories
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-1">
              19 Official Collections
            </p>
          </div>

          <button
            onClick={() => handleSelectCategory('All')}
            className="relative z-10 bg-[#D92228] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-md shadow-red-950/50 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Categories Grid (2 Columns, strictly 2 columns) */}
        {filteredCategories.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            <p className="text-xs">No matching categories found.</p>
            <button 
              onClick={() => setSearch('')}
              className="mt-2 text-xs font-semibold text-[#D92228] cursor-pointer"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5">
            {filteredCategories.map((cat) => {
              const Icon = ICON_MAP[cat.icon] || Camera
              const count = getProductCount(cat.id)

              return (
                <div
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Top row: Icon + Count Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-red-50 group-hover:text-[#D92228] transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      {count > 0 ? (
                        <span className="text-[9px] font-bold bg-red-50 text-[#D92228] px-2 py-0.5 rounded-full">
                          {count} {count === 1 ? 'item' : 'items'}
                        </span>
                      ) : (
                        <span className="text-[9px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                          Browse
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xs font-bold text-slate-900 mt-2.5 leading-snug group-hover:text-[#D92228] transition-colors line-clamp-1">
                      {cat.label}
                    </h3>

                    {/* Subcategories */}
                    <p className="text-[9px] text-slate-400 font-medium mt-1 line-clamp-2 leading-relaxed">
                      {cat.subcategories}
                    </p>
                  </div>

                  {/* Bottom explore link */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[10px] font-bold text-slate-500 group-hover:text-[#D92228] transition-colors">
                    <span>View Products</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
export default CategoriesScreen
