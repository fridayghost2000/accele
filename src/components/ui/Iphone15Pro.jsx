import React from "react"
import { cn } from "@/lib/utils"

const PHONE_WIDTH = 433
const PHONE_HEIGHT = 882
const SCREEN_X = 21.25
const SCREEN_Y = 19.25
const SCREEN_WIDTH = 389.5
const SCREEN_HEIGHT = 843.5
const SCREEN_RADIUS = 54

// Calculated percentages for pixel-perfect placement
const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100

export function Iphone15Pro({
  src,
  videoSrc,
  children,
  className,
  style,
  ...props
}) {
  const hasVideo = !!videoSrc

  return (
    <div
      className={cn(
        "relative inline-block select-none align-middle drop-shadow-[0_30px_70px_rgba(0,0,0,0.8)] transition-all",
        className
      )}
      style={{
        aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}`,
        ...style,
      }}
      {...props}
    >
      {/* 1. Outer Titanium Chassis Frame & Physical Buttons (Base Layer) */}
      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 size-full z-0"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Outer Titanium Rim */}
        <rect
          x="4"
          y="4"
          width="425"
          height="874"
          rx="70"
          className="fill-[#1A1A1E] stroke-[#2E2E34] stroke-[3]"
        />

        {/* Action Button (Left side) */}
        <path
          d="M0 171C0 170.448 0.447715 170 1 170H4V204H1C0.447715 204 0 203.552 0 203V171Z"
          className="fill-[#2B2B30]"
        />
        {/* Volume Up */}
        <path
          d="M1 234C1 233.448 1.44772 233 2 233H4V300H2C1.44772 300 1 299.552 1 299V234Z"
          className="fill-[#2B2B30]"
        />
        {/* Volume Down */}
        <path
          d="M1 319C1 318.448 1.44772 318 2 318H4V385H2C1.44772 385 1 384.552 1 384V319Z"
          className="fill-[#2B2B30]"
        />
        {/* Power Button (Right side) */}
        <path
          d="M429 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H429V279Z"
          className="fill-[#2B2B30]"
        />

        {/* Top Speaker Earpiece Slit */}
        <rect
          x="180"
          y="7"
          width="73"
          height="3.5"
          rx="1.75"
          className="fill-[#38383D]"
        />
      </svg>

      {/* 2. Interactive Phone Screen Container (Layer 10 - 100% Visible & Unobstructed) */}
      <div
        className="absolute z-10 overflow-hidden bg-[#F8F9FA] text-slate-800 shadow-inner"
        style={{
          left: `${LEFT_PCT}%`,
          top: `${TOP_PCT}%`,
          width: `${WIDTH_PCT}%`,
          height: `${HEIGHT_PCT}%`,
          borderRadius: "48px",
        }}
      >
        {children ? (
          <div className="relative h-full w-full overflow-hidden flex flex-col font-sans bg-[#F8F9FA]">
            {children}
          </div>
        ) : hasVideo ? (
          <video
            className="block size-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : src ? (
          <img
            src={src}
            alt="Screen Content"
            className="block size-full object-cover object-top"
          />
        ) : null}
      </div>

      {/* 3. Screen Edge Bezel & Dynamic Island (Layer 20 - Non-blocking Overlay) */}
      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 size-full z-20"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Subtle Screen Bezel Border */}
        <rect
          x={SCREEN_X}
          y={SCREEN_Y}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          rx={SCREEN_RADIUS}
          fill="none"
          stroke="#000000"
          strokeWidth="3.5"
          className="opacity-90"
        />

        {/* Dynamic Island Pill */}
        <g>
          {/* Dynamic Island Capsule */}
          <rect
            x="166"
            y="29"
            width="101"
            height="29"
            rx="14.5"
            className="fill-[#000000]"
          />
          {/* Front Camera Lens Glass Reflection */}
          <circle cx="251" cy="43.5" r="4.8" className="fill-[#08080C]" />
          <circle cx="252" cy="42.5" r="1.6" className="fill-[#1E293B] opacity-70" />
          {/* Proximity / Sensor Dot */}
          <circle cx="182" cy="43.5" r="3.2" className="fill-[#050508]" />
        </g>
      </svg>
    </div>
  )
}
export default Iphone15Pro
