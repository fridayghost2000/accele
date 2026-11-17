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
import { 
  Compass, 
  ChevronRight, 
  ExternalLink
} from 'lucide-react'

// Screen Registry matching all 10 screens of reference Image 2
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

function PhoneViewport() {
  const { activeScreen, setActiveScreen } = useApp()
  const [showQuickNav, setShowQuickNav] = useState(false)

  const activeIndex = SCREENS.findIndex((s) => s.id === activeScreen)
  const ActiveComponent = SCREENS[activeIndex >= 0 ? activeIndex : 0].component

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0B0F19] flex flex-col items-center justify-between py-3 relative select-none font-sans">
      {/* Subtle Ambient Radial Glow behind Phone */}
      <div className="absolute w-[500px] h-[700px] bg-gradient-to-tr from-red-600/10 via-indigo-500/5 to-slate-800/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Floating Top Mini Bar */}
      <header className="w-full max-w-5xl z-40 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#D92228] animate-pulse"></div>
          <span className="text-xs font-black tracking-tight text-white/90 uppercase">
            Accele Electronics
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/60 font-mono">
            {SCREENS[activeIndex >= 0 ? activeIndex : 0].label} ({activeIndex + 1}/10)
          </span>
        </div>

        {/* Quick Screen Navigator Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowQuickNav(!showQuickNav)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:text-white shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#D92228]" />
            <span>Switch Screen</span>
          </button>
        </div>
      </header>

      {/* Drawer / Modal for Quick Screen Switcher (if toggled) */}
      {showQuickNav && (
        <div 
          onClick={() => setShowQuickNav(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-5 max-w-md w-full shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white">Jump to Screen</h3>
                <p className="text-[11px] text-slate-400">All 10 screens from reference Image 2</p>
              </div>
              <button
                onClick={() => setShowQuickNav(false)}
                className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded-lg bg-slate-800 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {SCREENS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveScreen(s.id)
                    setShowQuickNav(false)
                  }}
                  className={`text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    activeScreen === s.id
                      ? 'bg-[#D92228] text-white font-bold shadow-md'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span className="truncate">
                    <span className="opacity-60 text-[10px] mr-1.5 font-mono">{idx + 1}.</span>
                    {s.label}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>💡 You can also navigate naturally inside the phone!</span>
              <a 
                href="https://accele.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-white inline-flex items-center gap-1"
              >
                accele.com <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CENTERPIECE: MAGIC UI IPHONE 15 PRO (MATCHING IMAGE 1 REFERENCE) */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full min-h-0 py-1">
        <div className="h-full max-h-[820px] w-auto aspect-[433/882] flex items-center justify-center">
          <Iphone15Pro className="h-full w-full">
            <ActiveComponent />
          </Iphone15Pro>
        </div>
      </main>

      {/* Floating Bottom Indicator */}
      <footer className="w-full z-40 flex items-center justify-center shrink-0">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-1.5 rounded-full flex items-center gap-3 text-[11px] text-slate-400 shadow-lg">
          <span>Tap buttons, tabs & cards inside the iPhone to navigate</span>
          <span className="text-slate-600">•</span>
          <button
            onClick={() => setActiveScreen('home')}
            className="text-slate-300 hover:text-white font-medium hover:underline cursor-pointer"
          >
            Reset to Home
          </button>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <PhoneViewport />
    </AppProvider>
  )
}
