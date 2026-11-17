import React, { useState, useRef } from 'react'
import { 
  ShoppingCart, 
  Search, 
  Camera, 
  Tv, 
  Lightbulb, 
  Radio, 
  ArrowRight,
  ChevronRight,
  Wrench,
  FileDown,
  Building2,
  X,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react'
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

  const [showCatalogModal, setShowCatalogModal] = useState(false)
  const [showDealerModal, setShowDealerModal] = useState(false)
  const [dealerSubmitted, setDealerSubmitted] = useState(false)
  const [dealerForm, setDealerForm] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Professional 12V Installer'
  })

  const categories = [
    { id: 'Cameras', label: 'Cameras', icon: Camera },
    { id: 'Monitors', label: 'Monitors', icon: Tv },
    { id: 'Lighting', label: 'Lighting', icon: Lightbulb },
    { id: 'Sensors', label: 'Sensors', icon: Radio },
  ]

  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4)

  const BRANDS = [
    {
      id: 'beuler',
      name: 'Beuler',
      category: 'Relays',
      tagline: '12V Relays',
      logo: '/brands/beuler.png',
    },
    {
      id: 'accelevision',
      name: 'AcceleVision',
      category: 'Monitors',
      tagline: 'In-Car Video',
      logo: '/brands/accelevision.png',
    },
    {
      id: 'optix',
      name: 'Optix',
      category: 'Cameras',
      tagline: 'HD Cameras',
      logo: '/brands/optix.png',
    },
    {
      id: 'littworks',
      name: 'Littworks',
      category: 'Lighting',
      tagline: 'LED Lighting',
      logo: '/brands/littworks.png',
    },
    {
      id: 'zicom',
      name: 'Zicom',
      category: 'Security',
      tagline: 'Vehicle Security',
      logo: '/brands/zicom.png',
    },
    {
      id: 'usapro',
      name: 'USA Pro',
      category: 'Wiring',
      tagline: 'Wiring & Tools',
      logo: '/brands/usapro.png',
    },
  ]

  const HUB_ITEMS = [
    {
      id: 'guides',
      title: 'Wiring & Install Guides',
      subtitle: 'Technical schematics & pinout manuals',
      icon: Wrench,
      action: () => navigateTo('support'),
    },
    {
      id: 'catalog-pdf',
      title: '2026 Master Product Catalog',
      subtitle: 'High-res downloadable PDF catalog',
      icon: FileDown,
      action: () => setShowCatalogModal(true),
    },
    {
      id: 'dealer',
      title: 'Dealer & Wholesale Portal',
      subtitle: 'Commercial tier pricing & volume orders',
      icon: Building2,
      action: () => setShowDealerModal(true),
    },
  ]

  const sliderRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)
  const hasMoved = useRef(false)

  const onMouseDown = (e) => {
    isDown.current = true
    hasMoved.current = false
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeftPos.current = sliderRef.current.scrollLeft
  }

  const onMouseMove = (e) => {
    if (!isDown.current) return
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX.current) * 1.4
    if (Math.abs(walk) > 5) {
      hasMoved.current = true
    }
    sliderRef.current.scrollLeft = scrollLeftPos.current - walk
  }

  const onMouseUp = () => {
    isDown.current = false
  }

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId)
    navigateTo('catalog')
  }

  const handleBrandClick = (catId) => {
    setSelectedCategory(catId)
    navigateTo('catalog')
  }

  const handleDealerSubmit = (e) => {
    e.preventDefault()
    setDealerSubmitted(true)
    setTimeout(() => {
      setDealerSubmitted(false)
      setShowDealerModal(false)
      setDealerForm({
        businessName: '',
        contactName: '',
        phone: '',
        email: '',
        businessType: 'Professional 12V Installer'
      })
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none relative">
      {/* Top Header */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-slate-100 shrink-0">
        {/* Left: Official Accele Logo */}
        <div className="flex items-center">
          <AcceleLogo size="md" />
        </div>

        {/* Right: Cart Icon with Badge */}
        <button 
          onClick={() => navigateTo('cart')}
          className="p-1.5 -mr-1 text-slate-700 hover:text-slate-900 relative rounded-lg active:scale-95 cursor-pointer"
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
              className="mt-3 inline-flex items-center gap-1 bg-[#D92228] hover:bg-red-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md shadow-red-900/30 active:scale-95 transition-all cursor-pointer"
            >
              Explore Products
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Car Graphic */}
          <div className="absolute right-1 bottom-1 w-32 h-20 pointer-events-none">
            <svg viewBox="0 0 160 90" fill="none" className="w-full h-full drop-shadow-xl">
              <ellipse cx="80" cy="78" rx="70" ry="8" fill="#000000" opacity="0.6" />
              <path d="M15 62 Q25 45 45 42 L65 30 Q90 24 115 30 L135 44 Q155 48 158 64 C158 68 150 72 140 72 L25 72 C18 72 15 68 15 62 Z" fill="#E2E8F0" />
              <path d="M66 33 L112 33 L126 44 L54 44 Z" fill="#1E293B" />
              <path d="M14 62 L32 58 L32 64 Z" fill="#F8FAFC" />
              <circle cx="28" cy="61" r="3" fill="#38BDF8" />
              <path d="M148 62 L132 58 L132 64 Z" fill="#F8FAFC" />
              <circle cx="138" cy="61" r="3" fill="#38BDF8" />
              <circle cx="42" cy="70" r="10" fill="#0F172A" />
              <circle cx="42" cy="70" r="6" fill="#64748B" />
              <circle cx="125" cy="70" r="10" fill="#0F172A" />
              <circle cx="125" cy="70" r="6" fill="#64748B" />
              <rect x="70" y="56" width="28" height="8" rx="2" fill="#0F172A" />
              <path d="M72 60 H96" stroke="#D92228" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-xs font-bold text-slate-900 tracking-tight">
              Categories
            </h3>
            <button
              onClick={() => navigateTo('categories')}
              className="text-[11px] font-bold text-[#D92228] hover:text-red-700 inline-flex items-center gap-0.5 active:scale-95 cursor-pointer"
            >
              See All
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="flex flex-col items-center group active:scale-95 transition-transform cursor-pointer"
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
              className="text-[11px] font-bold text-[#D92228] hover:text-red-700 inline-flex items-center gap-0.5 active:scale-95 cursor-pointer"
            >
              See All
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Featured Products Horizontal Slider */}
          <div
            ref={sliderRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 pt-0.5 -mr-4 pr-4 cursor-grab active:cursor-grabbing select-none"
          >
            {featured.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  if (hasMoved.current) return
                  navigateTo('product-details', prod)
                }}
                className="w-[148px] min-w-[148px] shrink-0 snap-start bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="h-24 w-full flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden p-1">
                  <ProductGraphic type={prod.type} image={prod.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="min-w-0 pr-1">
                    <h4 className="text-[11px] font-bold text-slate-900 leading-tight truncate">
                      {prod.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {prod.model}
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#D92228] group-hover:text-white transition-colors shrink-0">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            ))}
            <div className="w-4 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* SECTION 1: Our Brands (Accele Sub-Brands Portfolio) - Minimalist */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                Our Brands
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                Proprietary Automotive Electronics Brands
              </p>
            </div>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              6 Brands
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.category)}
                className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-2xs hover:border-red-300 hover:shadow-xs transition-all flex flex-col items-center justify-center text-center group active:scale-95 cursor-pointer"
              >
                <div className="h-9 w-full flex items-center justify-center mb-1">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-7 max-w-[76px] object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10.5px] font-bold text-slate-900 leading-tight group-hover:text-[#D92228] transition-colors truncate w-full">
                  {brand.name}
                </span>
                <span className="text-[9px] text-slate-400 font-medium truncate w-full mt-0.5">
                  {brand.tagline}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 2: Installer & Dealer Quick Hub - Minimalist & High Utility */}
        <div className="pt-2 pb-2">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                Installer & Dealer Hub
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                Professional 12V Resources & Tools
              </p>
            </div>
            <span className="text-[9.5px] font-bold text-[#D92228] bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
              PRO 12V
            </span>
          </div>

          <div className="space-y-2">
            {HUB_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full bg-white rounded-2xl p-3 border border-slate-200/80 shadow-2xs flex items-center justify-between text-left active:scale-[0.99] transition-all hover:border-red-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-[#D92228] group-hover:bg-red-50 group-hover:border-red-100 transition-colors shrink-0">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11.5px] font-bold text-slate-900 group-hover:text-[#D92228] transition-colors truncate">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#D92228] group-hover:bg-red-50 transition-colors shrink-0">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Catalog PDF Download Modal */}
      {showCatalogModal && (
        <div className="absolute inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D92228] flex items-center justify-center">
                <FileDown className="w-5 h-5 stroke-[2]" />
              </div>
              <button 
                onClick={() => setShowCatalogModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Accele 2026 Master Catalog
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Download the official comprehensive product catalog covering all 19 automotive categories, technical specs, and wiring harnesses.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <span className="font-semibold text-slate-700">Accele_Catalog_2026.pdf</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">18.4 MB</span>
            </div>

            <div className="flex gap-2.5 pt-1">
              <button
                onClick={() => setShowCatalogModal(false)}
                className="flex-1 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="https://accele.com/product-catalog/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowCatalogModal(false)}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-[#D92228] hover:bg-red-700 rounded-xl inline-flex items-center justify-center gap-1.5 shadow-md shadow-red-900/20 transition-all cursor-pointer"
              >
                Download PDF
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Dealer & Wholesale Inquiry Modal */}
      {showDealerModal && (
        <div className="absolute inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-2xl bg-red-50 text-[#D92228] flex items-center justify-center">
                  <Building2 className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    Dealer & Wholesale Portal
                  </h3>
                  <p className="text-[10px] text-slate-400">Accele Electronics B2B</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setShowDealerModal(false)
                  setDealerSubmitted(false)
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {dealerSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Application Received!</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed px-4">
                  Thank you! An Accele representative will review your business credentials and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDealerSubmit} className="space-y-2.5">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Business / Shop Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex 12V Audio & Customs"
                    value={dealerForm.businessName}
                    onChange={(e) => setDealerForm({ ...dealerForm, businessName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={dealerForm.contactName}
                      onChange={(e) => setDealerForm({ ...dealerForm, contactName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={dealerForm.phone}
                      onChange={(e) => setDealerForm({ ...dealerForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dealer@company.com"
                    value={dealerForm.email}
                    onChange={(e) => setDealerForm({ ...dealerForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Account Type
                  </label>
                  <select
                    value={dealerForm.businessType}
                    onChange={(e) => setDealerForm({ ...dealerForm, businessType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-red-500"
                  >
                    <option value="Professional 12V Installer">Professional 12V Installer</option>
                    <option value="Auto Dealership / Restyler">Auto Dealership / Restyler</option>
                    <option value="Commercial Fleet Operator">Commercial Fleet Operator</option>
                    <option value="Online / Brick Retailer">Online / Brick Retailer</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-bold text-white bg-[#D92228] hover:bg-red-700 rounded-xl shadow-md shadow-red-900/20 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Submit Dealer Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <BottomNav activeScreen="home" />
    </div>
  )
}
export default HomeScreen
