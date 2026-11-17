import React from 'react'
import { 
  ChevronLeft, 
  Settings, 
  Package, 
  MapPin, 
  CreditCard, 
  MessageSquare, 
  Bell, 
  LogOut,
  ChevronRight
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { useApp } from '@/context/AppContext'

export function AccountScreen() {
  const { goBack, navigateTo } = useApp()

  const menuItems = [
    { id: 'orders', label: 'My Orders', icon: Package, screen: 'orders' },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'support', label: 'Support Tickets', icon: MessageSquare, screen: 'support' },
    { id: 'notifications', label: 'Notifications', icon: Bell, screen: 'notifications' },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Log Out', icon: LogOut, danger: true },
  ]

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Header */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-slate-100">
        <button 
          onClick={goBack} 
          className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
          My Account
        </h1>

        <button 
          className="p-1 -mr-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5 stroke-[2]" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 no-scrollbar">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center gap-3.5">
          {/* Initials Avatar */}
          <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-base text-slate-800 tracking-tight shrink-0 shadow-inner">
            JD
          </div>

          {/* User Details */}
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-black text-slate-900 tracking-tight leading-snug">
              John Doe
            </h2>
            <p className="text-[11px] text-slate-500 font-medium truncate">
              john@accele.com
            </p>
            <button 
              className="text-[11px] font-bold text-[#D92228] hover:text-red-700 mt-0.5 active:scale-95 inline-block"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs divide-y divide-slate-100 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.screen) {
                    navigateTo(item.screen)
                  }
                }}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors text-left group active:bg-slate-100"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 stroke-[2] ${
                      item.danger
                        ? 'text-slate-500 group-hover:text-red-600'
                        : 'text-slate-600 group-hover:text-slate-900'
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      item.danger
                        ? 'text-slate-700 group-hover:text-red-600'
                        : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </button>
            )
          })}
        </div>
      </div>

      <BottomNav activeScreen="account" />
    </div>
  )
}
export default AccountScreen
