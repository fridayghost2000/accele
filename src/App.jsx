import React, { useState } from 'react'
import { AppProvider, useApp } from '@/context/AppContext'
import { Iphone15Pro } from '@/components/ui/Iphone15Pro'
import { HomeScreen } from '@/features/home/HomeScreen'
import { CatalogScreen } from '@/features/catalog/CatalogScreen'
import { ProductDetailsScreen } from '@/features/product-details/ProductDetailsScreen'
import { CartScreen } from '@/features/cart/CartScreen'
import { CheckoutScreen } from '@/features/checkout/CheckoutScreen'
import { OrdersScreen } from '@/features/orders/OrdersScreen'
import { AccountScreen } from '@/features/account/AccountScreen'
import { SupportScreen } from '@/features/support/SupportScreen'
import { NotificationsScreen } from '@/features/notifications/NotificationsScreen'
import { MoreMenuScreen } from '@/features/menu/MoreMenuScreen'
import { AcceleLogo } from '@/components/common/AcceleLogo'
import { 
  Smartphone, 
  LayoutGrid, 
  Sparkles, 
  ExternalLink, 
  RotateCcw,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react'

// Screen Registry
const SCREENS = [
  { id: 'home', label: 'Home Screen', component: HomeScreen },
  { id: 'catalog', label: 'Product Catalog', component: CatalogScreen },
  { id: 'product-details', label: 'Product Details', component: ProductDetailsScreen },
  { id: 'cart', label: 'Shopping Cart', component: CartScreen },
  { id: 'checkout', label: 'Checkout', component: CheckoutScreen },
  { id: 'orders', label: 'My Orders', component: OrdersScreen },
  { id: 'account', label: 'Account', component: AccountScreen },
  { id: 'support', label: 'Support / Help', component: SupportScreen },
  { id: 'notifications', label: 'Notifications', component: NotificationsScreen },
  { id: 'menu', label: 'More / Menu', component: MoreMenuScreen },
]

function MainAppShell() {
  const { activeScreen, setActiveScreen, navigateTo, cartCount, total } = useApp()
  const [viewMode, setViewMode] = useState('simulator') // 'simulator' | 'gallery'
  const [scale, setScale] = useState(1)

  // Find active screen component
  const ActiveComponent = SCREENS.find((s) => s.id === activeScreen)?.component || HomeScreen

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-[#D92228] selection:text-white">
      {/* Top Application Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <AcceleLogo size="sm" className="bg-white px-2.5 py-1 rounded-lg" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white tracking-tight">
                  Mobile Web Experience
                </span>
                <span className="text-[10px] bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">
                  Accele.com
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Feature-based Architecture • React 19 • Tailwind CSS • Magic UI iPhone
              </p>
            </div>
          </div>

          {/* View Mode Switcher Toggle */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setViewMode('simulator')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'simulator'
                    ? 'bg-[#D92228] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Interactive Simulator</span>
              </button>

              <button
                onClick={() => setViewMode('gallery')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'gallery'
                    ? 'bg-[#D92228] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All 10 Screens (Image Match)</span>
              </button>
            </div>

            <a
              href="https://accele.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <span>accele.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Quick Screen Navigation Pills */}
        <div className="border-t border-slate-800/60 bg-slate-900/40 px-4 py-2 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Jump to Screen:
            </span>
            {SCREENS.map((screen, idx) => {
              const isActive = activeScreen === screen.id
              return (
                <button
                  key={screen.id}
                  onClick={() => {
                    setActiveScreen(screen.id)
                    if (viewMode === 'gallery') setViewMode('simulator')
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                    isActive && viewMode === 'simulator'
                      ? 'bg-white text-slate-950 shadow-md ring-2 ring-red-500'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <span className="opacity-50 text-[10px] mr-1">{idx + 1}.</span>
                  {screen.label}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        {viewMode === 'simulator' ? (
          /* ============================================================ */
          /* VIEW 1: SINGLE INTERACTIVE MAGIC UI IPHONE 15 PRO SIMULATOR */
          /* ============================================================ */
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
            {/* Left/Sidebar Panel: Interactive Navigation & State Monitor */}
            <div className="w-full lg:w-80 space-y-4 order-2 lg:order-1">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Interactive Device
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    iPhone 15 Pro
                  </span>
                </div>

                <div className="py-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Active Screen:</span>
                    <span className="font-bold text-white">
                      {SCREENS.find((s) => s.id === activeScreen)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Cart Count:</span>
                    <span className="font-bold text-white">{cartCount} items</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Cart Total:</span>
                    <span className="font-bold text-red-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    💡 Click around inside the iPhone! All navigation, buttons, cart quantities, and checkout steps are live and interactive.
                  </p>
                </div>
              </div>

              {/* Quick Screen Jump Grid */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Screens in Image
                </h4>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {SCREENS.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScreen(s.id)}
                      className={`text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all truncate ${
                        activeScreen === s.id
                          ? 'bg-[#D92228] text-white font-bold'
                          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {idx + 1}. {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: The Magic UI iPhone 15 Pro Component Container */}
            <div className="relative order-1 lg:order-2 flex flex-col items-center">
              {/* Soft Ambient Glow under iPhone */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-indigo-600/10 to-amber-600/20 rounded-full blur-3xl pointer-events-none opacity-50"></div>

              {/* Magic UI iPhone 15 Pro */}
              <div className="w-[360px] sm:w-[390px] md:w-[410px]">
                <Iphone15Pro className="w-full">
                  <ActiveComponent />
                </Iphone15Pro>
              </div>

              {/* Screen Label Tag */}
              <div className="mt-4 inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#D92228]"></span>
                {SCREENS.find((s) => s.id === activeScreen)?.label}
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* VIEW 2: ALL 10 SCREENS GALLERY (EXACT IMAGE REPLICA)       */
          /* ============================================================ */
          <div className="w-full max-w-[1700px] py-4">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#D92228] uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                Complete 10-Screen Suite
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                Full UI Showcase matching the Reference Design
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
                All 10 screens rendered side-by-side in authentic Magic UI iPhone frames. Click on any screen to launch it directly in the interactive simulator!
              </p>
            </div>

            {/* 10 Screens Grid (5 per row on desktop, matching image layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {SCREENS.map((screen, idx) => {
                const ScreenComponent = screen.component
                return (
                  <div
                    key={screen.id}
                    onClick={() => {
                      setActiveScreen(screen.id)
                      setViewMode('simulator')
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* iPhone Mockup Frame */}
                    <div className="w-full max-w-[280px] transition-transform duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_20px_35px_rgba(217,34,40,0.25)]">
                      <Iphone15Pro className="w-full">
                        <ScreenComponent />
                      </Iphone15Pro>
                    </div>

                    {/* Bottom Label exactly matching the provided image */}
                    <div className="mt-3 text-center">
                      <h4 className="text-xs font-bold text-white group-hover:text-[#D92228] transition-colors">
                        {screen.label}
                      </h4>
                      <span className="text-[10px] text-slate-500 group-hover:text-slate-400">
                        Screen {idx + 1} • Click to test
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/40 py-4 px-4 text-center text-xs text-slate-500">
        <p>
          Accele Electronics Mobile App • Built with React 19, Tailwind CSS & Magic UI iPhone component • Reference:{' '}
          <a href="https://accele.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white underline">
            accele.com
          </a>
        </p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <MainAppShell />
    </AppProvider>
  )
}
