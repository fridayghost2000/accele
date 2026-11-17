import React from 'react'
import { Home, LayoutGrid, ShoppingCart, Package, User, MoreHorizontal } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export function BottomNav({ activeScreen, isMoreActive = false }) {
  const { navigateTo, cartCount } = useApp()

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
    },
    {
      id: 'catalog',
      label: 'Products',
      icon: LayoutGrid,
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingCart,
      badge: cartCount > 0 ? cartCount : null,
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: Package,
    },
    {
      id: isMoreActive ? 'menu' : 'account',
      label: isMoreActive ? 'More' : 'Account',
      icon: isMoreActive ? MoreHorizontal : User,
    },
  ]

  return (
    <div className="w-full bg-white border-t border-slate-100 shrink-0 z-30 select-none pb-1">
      <div className="flex items-center justify-around py-1.5 px-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = 
            (item.id === 'home' && activeScreen === 'home') ||
            (item.id === 'catalog' && (activeScreen === 'catalog' || activeScreen === 'product-details')) ||
            (item.id === 'cart' && (activeScreen === 'cart' || activeScreen === 'checkout')) ||
            (item.id === 'orders' && activeScreen === 'orders') ||
            (item.id === 'account' && (activeScreen === 'account' || activeScreen === 'support' || activeScreen === 'notifications')) ||
            (item.id === 'menu' && activeScreen === 'menu')

          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="flex flex-col items-center justify-center py-0.5 px-2.5 relative transition-colors group cursor-pointer"
            >
              <div className="relative">
                <Icon
                  className={`w-[19px] h-[19px] transition-transform duration-150 ${
                    isActive ? 'text-[#D92228] stroke-[2.4]' : 'text-slate-400 group-hover:text-slate-600 stroke-[1.8]'
                  }`}
                />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 bg-[#D92228] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[9.5px] mt-0.5 tracking-tight transition-colors ${
                  isActive ? 'text-[#D92228] font-bold' : 'text-slate-400 group-hover:text-slate-600 font-medium'
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="flex justify-center pb-0.5">
        <div className="w-28 h-1 bg-slate-900/80 rounded-full"></div>
      </div>
    </div>
  )
}
export default BottomNav
