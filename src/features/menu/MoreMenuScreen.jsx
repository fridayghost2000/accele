import React from 'react'
import { 
  X, 
  Home, 
  LayoutGrid, 
  FileText, 
  Headphones, 
  Info, 
  Mail, 
  User,
  ArrowRight
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { AcceleLogo } from '@/components/common/AcceleLogo'
import { useApp } from '@/context/AppContext'

export function MoreMenuScreen() {
  const { goBack, navigateTo } = useApp()

  const links = [
    { id: 'home', label: 'Home', icon: Home, screen: 'home' },
    { id: 'products', label: 'Products', icon: LayoutGrid, screen: 'catalog' },
    { id: 'catalog', label: 'Product Catalog', icon: FileText, screen: 'catalog' },
    { id: 'support', label: 'Support', icon: Headphones, screen: 'support' },
    { id: 'about', label: 'About', icon: Info, screen: 'home' },
    { id: 'contact', label: 'Contact', icon: Mail, screen: 'support' },
    { id: 'account', label: 'My Account', icon: User, screen: 'account' },
  ]

  return (
    <div className="h-full flex flex-col bg-white text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Header */}
      <div className="border-b border-slate-100 shrink-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <AcceleLogo size="md" />

          <button 
            onClick={goBack} 
            className="p-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Menu Links List */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 space-y-5 no-scrollbar flex flex-col justify-between">
        <div className="max-w-2xl mx-auto w-full space-y-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <button
                key={link.id}
                onClick={() => navigateTo(link.screen)}
                className="w-full flex items-center gap-4 py-1.5 text-slate-700 hover:text-[#D92228] transition-colors group text-left cursor-pointer"
              >
                <Icon className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2] text-slate-600 group-hover:text-[#D92228] transition-colors" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {link.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Bottom Promotional Card */}
        <div className="max-w-2xl mx-auto w-full pt-4">
          <div 
            onClick={() => navigateTo('catalog')}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#12141C] via-[#1E2330] to-[#12141C] text-white p-4 sm:p-6 shadow-md border border-slate-800/50 cursor-pointer active:scale-95 transition-transform"
          >
            {/* Dynamic Background Automotive Swoosh */}
            <div className="absolute right-0 top-0 bottom-0 w-3/5 pointer-events-none opacity-90 overflow-hidden">
              <svg viewBox="0 0 200 120" fill="none" className="w-full h-full object-cover">
                <path d="M70 120 C110 90 140 40 200 10 L200 120 Z" fill="#D92228" opacity="0.3" />
                <path d="M100 120 C130 95 155 55 200 30" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
                <path d="M85 120 C120 90 145 45 195 15" stroke="#D92228" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[65%]">
              <h3 className="text-xs sm:text-sm font-black text-white tracking-tight">
                Driving Innovation
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium inline-flex items-center gap-1 mt-1 group">
                Explore Our Products
                <ArrowRight className="w-3 h-3" />
              </p>
            </div>

            {/* Car Graphic */}
            <div className="absolute right-1 sm:right-4 bottom-1 sm:bottom-2 w-24 sm:w-36 h-14 sm:h-20 pointer-events-none">
              <svg viewBox="0 0 160 90" fill="none" className="w-full h-full drop-shadow-md">
                <ellipse cx="80" cy="78" rx="65" ry="7" fill="#000000" opacity="0.6" />
                <path d="M15 62 Q25 45 45 42 L65 30 Q90 24 115 30 L135 44 Q155 48 158 64 C158 68 150 72 140 72 L25 72 C18 72 15 68 15 62 Z" fill="#CBD5E1" />
                <path d="M66 33 L112 33 L126 44 L54 44 Z" fill="#1E293B" />
                <circle cx="42" cy="70" r="9" fill="#0F172A" />
                <circle cx="125" cy="70" r="9" fill="#0F172A" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="menu" isMoreActive={true} />
    </div>
  )
}
export default MoreMenuScreen
