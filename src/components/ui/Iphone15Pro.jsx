import React from "react"
import { cn } from "@/lib/utils"

const PHONE_WIDTH = 433
const PHONE_HEIGHT = 882
const SCREEN_X = 21.25
const SCREEN_Y = 19.25
const SCREEN_WIDTH = 389.5
const SCREEN_HEIGHT = 843.5
const SCREEN_RADIUS = 55.75

// Calculated percentages for pixel-perfect placement
const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100
const RADIUS_H = (SCREEN_RADIUS / SCREEN_WIDTH) * 100
const RADIUS_V = (SCREEN_RADIUS / SCREEN_HEIGHT) * 100

export function Iphone15Pro({
  src,
  videoSrc,
  children,
  className,
  style,
  theme = "light",
  ...props
}) {
  const hasVideo = !!videoSrc
  const hasMedia = hasVideo || !!src
  const hasChildren = !!children

  return (
    <div
      className={cn(
        "relative inline-block w-full max-w-[433px] select-none align-middle drop-shadow-2xl transition-all",
        className
      )}
      style={{
        aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}`,
        ...style,
      }}
      {...props}
    >
      {/* Phone Screen Container */}
      <div
        className="absolute z-10 overflow-hidden bg-white text-slate-900 shadow-inner"
        style={{
          left: `${LEFT_PCT}%`,
          top: `${TOP_PCT}%`,
          width: `${WIDTH_PCT}%`,
          height: `${HEIGHT_PCT}%`,
          borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
        }}
      >
        {children ? (
          <div className="relative h-full w-full overflow-hidden flex flex-col font-sans">
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

      {/* Magic UI Authentic iPhone 15 Pro Vector Frame */}
      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 size-full z-20"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Outer chassis and buttons */}
        <g>
          {/* Chassis Outer Rim */}
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            className="fill-[#2B2B2F] drop-shadow-md"
          />
          {/* Mute switch / Action button */}
          <path
            d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
            className="fill-[#1F1F23]"
          />
          {/* Volume Up */}
          <path
            d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
            className="fill-[#1F1F23]"
          />
          {/* Volume Down */}
          <path
            d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
            className="fill-[#1F1F23]"
          />
          {/* Power Button */}
          <path
            d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
            className="fill-[#1F1F23]"
          />
          {/* Inner Titanium Bezel Accent */}
          <path
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
            className="fill-[#1A1A1E]"
          />
        </g>

        {/* Top Speaker Earpiece Slit */}
        <path
          opacity="0.6"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
          className="fill-[#4A4A4F]"
        />

        {/* Screen Outline / Subtle inner edge */}
        <path
          d={`M${SCREEN_X} 75C${SCREEN_X} 44.2101 46.2101 ${SCREEN_Y} 77 ${SCREEN_Y}H355C385.79 ${SCREEN_Y} 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 ${SCREEN_X} 837.79 ${SCREEN_X} 807V75Z`}
          fill="none"
          stroke="#000000"
          strokeWidth="3.5"
          className="opacity-95"
        />

        {/* Dynamic Island Pill */}
        <g>
          {/* Dynamic Island Background */}
          <path
            d="M168 34.5C168 26.5 174.5 20 182.5 20H250.5C258.5 20 265 26.5 265 34.5C265 42.5 258.5 49 250.5 49H182.5C174.5 49 168 42.5 168 34.5Z"
            className="fill-[#050505]"
          />
          {/* Camera Lens Reflection */}
          <circle cx="248" cy="34.5" r="4.5" className="fill-[#111116]" />
          <circle cx="249" cy="33.5" r="1.5" className="fill-[#1E293B] opacity-80" />
          {/* Sensor Aperture */}
          <circle cx="186" cy="34.5" r="3.5" className="fill-[#0D0D12]" />
        </g>
      </svg>
    </div>
  )
}
export default Iphone15Pro
