import React from 'react'
import { Wifi } from 'lucide-react'

export function StatusBar({ dark = false }) {
  return (
    <div className={`pt-3.5 px-7 pb-2 flex items-center justify-between text-[13px] font-semibold tracking-tight select-none z-30 ${dark ? 'text-white' : 'text-slate-900'}`}>
      <span className="font-semibold text-xs tracking-tight">9:41</span>
      
      {/* Right icons: Cellular bars, WiFi, Battery */}
      <div className="flex items-center gap-1.5">
        {/* Cellular Signal Bars */}
        <div className="flex items-end gap-[1.5px] h-3">
          <span className={`w-[2.5px] h-1 rounded-sm ${dark ? 'bg-white' : 'bg-slate-900'}`}></span>
          <span className={`w-[2.5px] h-1.5 rounded-sm ${dark ? 'bg-white' : 'bg-slate-900'}`}></span>
          <span className={`w-[2.5px] h-2 rounded-sm ${dark ? 'bg-white' : 'bg-slate-900'}`}></span>
          <span className={`w-[2.5px] h-3 rounded-sm ${dark ? 'bg-white' : 'bg-slate-900'}`}></span>
        </div>

        {/* Wifi Icon */}
        <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />

        {/* Battery Icon */}
        <div className="flex items-center">
          <div className={`w-5 h-2.5 rounded-[4px] border ${dark ? 'border-white' : 'border-slate-900'} p-[1px] flex items-center`}>
            <div className={`w-full h-full rounded-[2px] ${dark ? 'bg-white' : 'bg-slate-900'}`}></div>
          </div>
          <div className={`w-[1px] h-1 rounded-r-xs ${dark ? 'bg-white' : 'bg-slate-900'}`}></div>
        </div>
      </div>
    </div>
  )
}
export default StatusBar
