import React from 'react'

export function ProductGraphic({ type, image, className = "w-full h-full" }) {
  if (image) {
    return (
      <img
        src={image}
        alt="Product"
        className={`${className} object-contain transition-transform`}
        loading="lazy"
        onError={(e) => {
          // If image fails, fallback to rendering the SVG
          e.target.style.display = 'none'
        }}
      />
    )
  }

  if (type === "camera") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="bodyGrad" x1="40" y1="30" x2="160" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2D34" />
            <stop offset="0.6" stopColor="#1B1C20" />
            <stop offset="1" stopColor="#0F1012" />
          </linearGradient>
          <radialGradient id="lensRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="40%" stopColor="#1C2541" />
            <stop offset="70%" stopColor="#3A506B" />
            <stop offset="85%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#050814" />
          </radialGradient>
          <radialGradient id="lensGlare" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#1E3A8A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="100" cy="142" rx="65" ry="10" fill="#000000" opacity="0.25" />

        {/* Mounting Bracket */}
        <path d="M42 65 C42 45 48 35 60 35 L75 35 L75 43 L64 43 C56 43 52 48 52 62 L52 110 C52 122 56 128 64 128 L75 128 L75 136 L60 136 C48 136 42 126 42 110 Z" fill="#374151" />
        <circle cx="48" cy="85" r="4" fill="#9CA3AF" />
        <circle cx="48" cy="85" r="2" fill="#4B5563" />

        {/* Main Camera Cube Body */}
        <rect x="68" y="42" width="76" height="76" rx="14" fill="url(#bodyGrad)" stroke="#374151" strokeWidth="1.5" />
        
        {/* Front Bezel Chamfer */}
        <rect x="74" y="48" width="64" height="64" rx="10" fill="#18191D" stroke="#23272F" strokeWidth="1" />

        {/* Lens Rings */}
        <circle cx="106" cy="80" r="26" fill="url(#lensRing)" stroke="#4B5563" strokeWidth="1.5" />
        <circle cx="106" cy="80" r="21" fill="#0A0E1A" stroke="#1E293B" strokeWidth="1" />
        <circle cx="106" cy="80" r="16" fill="url(#lensGlare)" />
        <circle cx="103" cy="76" r="4.5" fill="#FFFFFF" opacity="0.4" />
        <circle cx="108" cy="82" r="2" fill="#FFFFFF" opacity="0.25" />

        {/* Auxiliary side sensor */}
        <rect x="48" y="70" width="16" height="26" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="1" />
        <circle cx="56" cy="83" r="4" fill="#0F172A" />
      </svg>
    )
  }

  if (type === "monitor") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="monScreen" x1="30" y1="20" x2="170" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="0.51" stopColor="#15803D" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Base / Stand */}
        <ellipse cx="100" cy="144" rx="45" ry="8" fill="#000000" opacity="0.25" />
        <rect x="94" y="112" width="12" height="28" rx="2" fill="#1F2937" stroke="#374151" strokeWidth="1" />
        <ellipse cx="100" cy="140" rx="30" ry="6" fill="#111827" stroke="#374151" strokeWidth="1" />
        
        {/* Monitor Frame */}
        <rect x="25" y="24" width="150" height="96" rx="8" fill="#111827" stroke="#374151" strokeWidth="2" />
        <rect x="33" y="32" width="134" height="80" rx="4" fill="url(#monScreen)" />
        
        {/* Road & Parking guide lines */}
        <path d="M33 72 Q100 68 167 72 L167 112 L33 112 Z" fill="#334155" opacity="0.85" />
        <path d="M70 110 L88 78" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="3 2" />
        <path d="M130 110 L112 78" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="3 2" />
        <path d="M78 98 L122 98" stroke="#F59E0B" strokeWidth="2" />
        <path d="M84 86 L116 86" stroke="#10B981" strokeWidth="2" />
        <rect x="90" y="114" width="20" height="2" rx="1" fill="#DC2626" />
      </svg>
    )
  }

  if (type === "lightbar") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="115" rx="80" ry="8" fill="#000000" opacity="0.2" />
        {/* Mount brackets */}
        <rect x="18" y="68" width="8" height="32" rx="2" fill="#1F2937" stroke="#374151" />
        <rect x="174" y="68" width="8" height="32" rx="2" fill="#1F2937" stroke="#374151" />
        {/* Main Lightbar */}
        <rect x="22" y="62" width="156" height="36" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5" />
        <rect x="26" y="66" width="148" height="28" rx="4" fill="#0F172A" />
        {/* LEDs */}
        {[34, 48, 62, 76, 90, 104, 118, 132, 146, 160].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="75" r="4.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="0.8" />
            <circle cx={x} cy="85" r="4.5" fill="#FDE047" stroke="#CA8A04" strokeWidth="0.8" />
            <circle cx={x} cy="75" r="2" fill="#FEF08A" />
            <circle cx={x} cy="85" r="2" fill="#FEF08A" />
          </g>
        ))}
      </svg>
    )
  }

  if (type === "sensors") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="122" rx="70" ry="9" fill="#000000" opacity="0.2" />
        {[
          { cx: 46, cy: 84, r: 18 },
          { cx: 82, cy: 82, r: 19 },
          { cx: 118, cy: 82, r: 19 },
          { cx: 154, cy: 84, r: 18 }
        ].map((s, idx) => (
          <g key={idx}>
            <circle cx={s.cx} cy={s.cy} r={s.r} fill="#1E293B" stroke="#475569" strokeWidth="2" />
            <circle cx={s.cx} cy={s.cy} r={s.r - 4} fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <circle cx={s.cx} cy={s.cy} r={s.r - 9} fill="#020617" />
            <circle cx={s.cx - 3} cy={s.cy - 3} r={2.5} fill="#94A3B8" opacity="0.4" />
          </g>
        ))}
        <path d="M72 52 A 32 32 0 0 1 128 52" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      </svg>
    )
  }

  if (type === "mirror") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="120" rx="75" ry="8" fill="#000000" opacity="0.2" />
        <rect x="20" y="55" width="160" height="50" rx="12" fill="#111827" stroke="#374151" strokeWidth="2" />
        <rect x="25" y="60" width="150" height="40" rx="8" fill="#1E293B" />
        <path d="M25 60 L140 60 L100 100 L25 100 Z" fill="#3B82F6" opacity="0.2" />
        <circle cx="36" cy="70" r="3" fill="#EF4444" />
        <text x="43" y="73" fill="#FFFFFF" fontSize="7" fontWeight="bold">REC 4K</text>
      </svg>
    )
  }

  if (type === "blindspot") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="125" rx="65" ry="8" fill="#000000" opacity="0.2" />
        {/* Radar Master ECU Module */}
        <rect x="45" y="48" width="70" height="64" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        <rect x="52" y="55" width="56" height="50" rx="4" fill="#0F172A" />
        <circle cx="80" cy="80" r="14" fill="#1E3A8A" opacity="0.6" />
        <circle cx="80" cy="80" r="8" fill="#3B82F6" />
        <text x="58" y="100" fill="#94A3B8" fontSize="7" fontWeight="bold">77GHz RADAR</text>
        {/* Pillar Warning LED Indicators */}
        <rect x="130" y="52" width="22" height="38" rx="6" fill="#111827" stroke="#374151" />
        <circle cx="141" cy="71" r="6" fill="#F59E0B" />
        <circle cx="141" cy="71" r="3" fill="#FEF08A" />
        {/* Warning Icon Waves */}
        <path d="M156 65 Q164 71 156 77" stroke="#F59E0B" strokeWidth="2" fill="none" />
      </svg>
    )
  }

  if (type === "overhead") {
    return (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <ellipse cx="100" cy="135" rx="60" ry="7" fill="#000000" opacity="0.2" />
        {/* Ceiling Housing Bracket */}
        <rect x="35" y="30" width="130" height="24" rx="6" fill="#1F2937" stroke="#374151" />
        <circle cx="50" cy="42" r="5" fill="#E2E8F0" opacity="0.8" />
        <circle cx="150" cy="42" r="5" fill="#E2E8F0" opacity="0.8" />
        {/* Flipped Down Screen Display */}
        <rect x="45" y="54" width="110" height="72" rx="6" fill="#111827" stroke="#475569" strokeWidth="1.5" />
        <rect x="50" y="59" width="100" height="62" rx="3" fill="#1E3A8A" />
        <polygon points="90,75 118,90 90,105" fill="#FFFFFF" opacity="0.9" />
      </svg>
    )
  }

  // Fallback
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="100" cy="120" rx="70" ry="8" fill="#000000" opacity="0.2" />
      <rect x="40" y="45" width="120" height="70" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <circle cx="100" cy="80" r="22" fill="#D92228" opacity="0.8" />
      <text x="80" y="85" fill="#FFFFFF" fontSize="12" fontWeight="bold">ACCELE</text>
    </svg>
  )
}
export default ProductGraphic
