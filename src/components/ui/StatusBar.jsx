import React, { useState, useEffect } from 'react'
import { Wifi } from 'lucide-react'

export function StatusBar({ dark = false }) {
  const [currentTime, setCurrentTime] = useState('9:41')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      hours = hours % 12 || 12
      setCurrentTime(`${hours}:${minutes}`)
    }
    updateTime()
    const timer = setInterval(updateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`w-full h-11 shrink-0 select-none z-30 ${
      dark ? 'text-white bg-slate-900' : 'text-slate-800 bg-white'
    }`}>
      <div className="max-w-5xl mx-auto h-full px-7 pt-2 flex items-center justify-between">
        {/* Time */}
        <div className="w-16 flex items-center pl-0.5">
          <span className="text-[13px] font-bold tracking-tight">
            {currentTime}
          </span>
        </div>

        {/* Spacer for Dynamic Island / Camera */}
        <div className="w-28 h-6 pointer-events-none shrink-0" />

        {/* Right icons: Cellular bars, WiFi, Battery */}
        <div className="w-16 flex items-center justify-end gap-1.5 pr-0.5 shrink-0 overflow-hidden">
          {/* Cellular Signal Bars */}
          <div className="flex items-end gap-[1.5px] h-3">
            <span className={`w-[2.5px] h-1 rounded-xs ${dark ? 'bg-white' : 'bg-slate-800'}`}></span>
            <span className={`w-[2.5px] h-1.5 rounded-xs ${dark ? 'bg-white' : 'bg-slate-800'}`}></span>
            <span className={`w-[2.5px] h-2 rounded-xs ${dark ? 'bg-white' : 'bg-slate-800'}`}></span>
            <span className={`w-[2.5px] h-3 rounded-xs ${dark ? 'bg-white' : 'bg-slate-800'}`}></span>
          </div>

          {/* Wifi Icon */}
          <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />

          {/* Battery Icon */}
          <div className="flex items-center">
            <div className={`w-5 h-2.5 rounded-[3px] border ${dark ? 'border-white' : 'border-slate-800'} p-[1px] flex items-center`}>
              <div className={`w-full h-full rounded-[1.5px] ${dark ? 'bg-white' : 'bg-slate-800'}`}></div>
            </div>
            <div className={`w-[1px] h-1 rounded-r-xs ${dark ? 'bg-white' : 'bg-slate-800'}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StatusBar
