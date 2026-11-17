import React, { useState } from 'react'
import { 
  ChevronLeft, 
  Search, 
  BookOpen, 
  Wrench, 
  HelpCircle, 
  Headphones,
  CheckCircle2
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { useApp } from '@/context/AppContext'

export function SupportScreen() {
  const { goBack } = useApp()
  const [supportRequested, setSupportRequested] = useState(false)
  const [query, setQuery] = useState('')

  const supportTiles = [
    { id: 'manuals', title: 'Product\nManuals', icon: BookOpen },
    { id: 'guides', title: 'Installation\nGuides', icon: Wrench },
    { id: 'faqs', title: 'FAQs\n& Help', icon: HelpCircle },
    { id: 'contact', title: 'Contact\nSupport', icon: Headphones },
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
          Support
        </h1>

        <div className="w-6"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 no-scrollbar">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 border border-slate-200 shadow-2xs focus:outline-none focus:border-red-500"
          />
        </div>

        {/* 4 Quick Action Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {supportTiles.map((tile) => {
            const Icon = tile.icon
            return (
              <button
                key={tile.id}
                onClick={() => alert(`Opening Accele ${tile.id.toUpperCase()} resources...`)}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col items-center justify-center text-center hover:border-red-300 hover:shadow-md transition-all active:scale-95 group h-28"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:text-[#D92228] group-hover:bg-red-50 transition-colors mb-2">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-slate-800 whitespace-pre-line leading-tight">
                  {tile.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Need Help? Banner Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
              <Headphones className="w-6 h-6 stroke-[1.8]" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-black text-slate-900 tracking-tight">
                Need Help?
              </h3>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                Our support team is here to assist you.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setSupportRequested(true)
              setTimeout(() => setSupportRequested(false), 3000)
            }}
            className="w-full bg-[#D92228] hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs tracking-wide shadow-md shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
          >
            {supportRequested ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Ticket Submitted!
              </>
            ) : (
              "Contact Us"
            )}
          </button>
        </div>
      </div>

      <BottomNav activeScreen="account" />
    </div>
  )
}
export default SupportScreen
