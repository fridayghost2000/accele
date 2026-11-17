import React, { useState, useEffect } from 'react'
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

const getDeviceMode = () => {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  const h = window.innerHeight
  const ua = navigator.userAgent || ''
  const isTablet = 
    /iPad|Tablet|Android(?!.*Mobile)|CrKey|SmartDisplay/i.test(ua) || 
    (navigator.maxTouchPoints > 1 && w >= 640 && w <= 1366)
  
  return w < 640 
    ? 'mobile' 
    : (w >= 640 && w <= 1280) || (w <= 1366 && h <= 850) || isTablet 
    ? 'tablet' 
    : 'desktop'
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

  // 1. MOBILE VIEW (Viewport < 640px): Fullscreen native mobile experience
  if (deviceMode === 'mobile') {
    return (
      <div className="fixed inset-0 w-full h-full flex flex-col overflow-hidden bg-[#F8F9FA] select-none font-sans">
        <ActiveComponent />
      </div>
    )
  }

  // 2. TABLET VIEW (640px - 1024px / Touch Tablets): Centered mobile app container
  if (deviceMode === 'tablet') {
    return (
      <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-[#080d1a] overflow-hidden select-none font-sans">
        <div className="w-full max-w-md h-full flex flex-col overflow-hidden bg-[#F8F9FA] shadow-2xl">
          <ActiveComponent />
        </div>
      </div>
    )
  }

  // 3. DESKTOP VIEW (Replicating https://upic-labs-app.friday-ghost2000.workers.dev/):
  // Clean, focused #080d1a dark background with no external content,
  // and the iPhone 15 Pro frame centered in the viewport.
  return (
    <div className="min-h-screen w-full bg-[#080d1a] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden font-sans">
      <div className="relative h-[min(850px,calc(100vh-28px))] aspect-[433/882] drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone15Pro className="size-full">
          <div className="flex-1 w-full overflow-hidden relative flex flex-col">
            <ActiveComponent />
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
