import React from 'react'

export function AcceleLogo({ size = "md", className = "" }) {
  const isSmall = size === "sm"
  const isLarge = size === "lg"

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <div className="flex items-center gap-1">
        {/* Speed stripes / chevron accent */}
        <div className="flex -space-x-1 italic font-black">
          <span className="text-amber-500 font-extrabold text-[15px] italic -rotate-12 translate-y-0.5">//</span>
        </div>
        <span className={`font-black italic tracking-tighter text-[#D92228] uppercase leading-none font-sans ${
          isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg'
        }`}>
          ACCELE
        </span>
      </div>
      <span className={`font-bold tracking-widest text-slate-700 uppercase -mt-0.5 leading-none ${
        isSmall ? 'text-[7px]' : isLarge ? 'text-[9px]' : 'text-[8px]'
      }`}>
        ELECTRONICS, INC.
      </span>
    </div>
  )
}
export default AcceleLogo
