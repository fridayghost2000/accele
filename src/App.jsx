import React, { useState, useEffect } from 'react'
import { AppProvider, useApp } from '@/context/AppContext'
import { Iphone15Pro } from '@/components/ui/Iphone15Pro'
import { StatusBar } from '@/components/ui/StatusBar'
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

// Screen Registry
const SCREENS = {
  'home': HomeScreen,
  'catalog': CatalogScreen,
  'product-details': ProductDetailsScreen,
  'cart': CartScreen,
  'checkout': CheckoutScreen,
  'orders': OrdersScreen,
  'account': AccountScreen,
  'support': SupportScreen,
  'notifications': NotificationsScreen,
  'menu': MoreMenuScreen,
}

// Device detection matching native device emulation (iPad Mini, iPad Pro, Surface Pro, Mobile, Desktop)
const getDeviceMode = () => {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  const h = window.innerHeight
  const ua = navigator.userAgent || ''
  
  // Detect touch emulation or mobile/tablet user agent
  const isTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window
  const isTabletUA = /iPad|Tablet|PlayBook|Silk|Kindle|(Android(?!.*Mobile))/i.test(ua)
  const isMobileUA = /Mobile|iPhone|iPod|Android.*Mobile|BlackBerry|IEMobile/i.test(ua)
  
  // 1. Mobile devices (width < 640px or mobile phone user agent)
  if (w < 640 || isMobileUA) return 'mobile'
  
  // 2. Tablets (iPad Mini, iPad Pro 13, Surface Pro 10, or viewport between 640px and 1376px with touch/tablet UA)
  if (isTabletUA || (isTouch && w <= 1376) || (w >= 640 && w <= 1024)) {
    return 'tablet'
  }
  
  // 3. Desktop (Wide monitors with mouse)
  return 'desktop'
}

function MainAppShell() {
  const { activeScreen } = useApp()
  const [deviceMode, setDeviceMode] = useState(getDeviceMode)

  useEffect(() => {
    const handleResize = () => {
      setDeviceMode(getDeviceMode())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const ActiveComponent = SCREENS[activeScreen] || HomeScreen

  // 1. MOBILE VIEW (e.g. iPhone, Pixel - Viewport < 640px): Fullscreen native mobile experience
  if (deviceMode === 'mobile') {
    return (
      <div className="fixed inset-0 w-full h-full flex flex-col overflow-hidden bg-[#F8F9FA] select-none font-sans">
        <ActiveComponent isTablet={false} />
      </div>
    )
  }

  // 2. TABLET VIEW (iPad Mini 768px, iPad Pro 1024px, Surface Pro 10 912px/1440px): Fullscreen native tablet experience
  if (deviceMode === 'tablet') {
    return (
      <div className="fixed inset-0 w-full h-full flex flex-col overflow-hidden bg-[#F8F9FA] select-none font-sans">
        <ActiveComponent isTablet={true} />
      </div>
    )
  }

  // 3. DESKTOP VIEW: Centered iPhone 15 Pro frame with clean, pitch #080d1a background and no external clutter
  return (
    <div className="min-h-screen w-full bg-[#080d1a] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden font-sans">
      <div className="relative h-[min(850px,calc(100vh-28px))] aspect-[433/882] drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone15Pro className="size-full">
          <StatusBar />
          <div className="flex-1 w-full overflow-hidden relative flex flex-col">
            <ActiveComponent isTablet={false} />
          </div>
        </Iphone15Pro>
      </div>
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
