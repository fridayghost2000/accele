import React from 'react'
import { 
  ChevronLeft, 
  Bell, 
  Heart, 
  Star, 
  MessageSquare,
  PackageCheck
} from 'lucide-react'
import { BottomNav } from '@/components/common/BottomNav'
import { useApp } from '@/context/AppContext'

export function NotificationsScreen() {
  const { goBack, notifications, markAllAsRead } = useApp()

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order':
        return <Bell className="w-4 h-4 text-slate-800" />
      case 'product':
        return <Heart className="w-4 h-4 text-slate-800" />
      case 'offer':
        return <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
      case 'support':
        return <MessageSquare className="w-4 h-4 text-slate-800" />
      default:
        return <Bell className="w-4 h-4 text-slate-800" />
    }
  }

  return (
    <div className="h-full flex flex-col bg-white text-slate-800 select-none relative">
      {/* Top Header */}
      <div className="border-b border-slate-100 shrink-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <button 
            onClick={goBack} 
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Notifications
          </h1>

          <button
            onClick={markAllAsRead}
            className="text-[11px] sm:text-xs font-bold text-[#D92228] hover:text-red-700 active:scale-95 cursor-pointer"
          >
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-2 divide-y divide-slate-100 no-scrollbar">
        <div className="max-w-2xl mx-auto">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`py-3.5 sm:py-4 flex items-start gap-3.5 transition-colors ${
                notif.read ? 'opacity-80' : 'bg-red-50/20 -mx-4 px-4 rounded-xl'
              }`}
            >
              {/* Round Icon Badge */}
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                {getNotificationIcon(notif.type)}
              </div>

              {/* Content Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {notif.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium shrink-0">
                    {notif.time}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">
                  {notif.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeScreen="account" />
    </div>
  )
}
export default NotificationsScreen
