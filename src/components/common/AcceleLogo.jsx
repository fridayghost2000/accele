import React from 'react'
import logoImg from '@/assets/accele-logo.png'

export function AcceleLogo({ size = "md", className = "" }) {
  // Height sizing based on prop
  const heightClass = size === "sm" ? "h-5" : size === "lg" ? "h-9" : "h-6 sm:h-7"

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Accele Electronics, Inc."
        className={`${heightClass} w-auto object-contain object-left`}
        loading="eager"
      />
    </div>
  )
}
export default AcceleLogo
