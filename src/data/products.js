export const PRODUCTS = [
  {
    id: "ac-5100",
    name: "Backup Camera",
    model: "AC-5100",
    category: "Cameras",
    price: 129.99,
    rating: 4.8,
    reviewsCount: 124,
    description: "High-definition rear view camera with wide-angle lens for safer driving.",
    features: [
      { id: "angle", label: "170° View", detail: "Ultra-wide viewing angle" },
      { id: "night", label: "Night Vision", detail: "Low-lux 0.1 infrared sensor" },
      { id: "waterproof", label: "Waterproof", detail: "IP68 rugged aluminum rating" }
    ],
    inStock: true,
    isFeatured: true,
    badge: "Bestseller",
    specs: {
      resolution: "1080p Full HD",
      voltage: "12V - 24V DC",
      connector: "RCA 4-Pin Aviation",
      housing: "Die-cast Aluminum Alloy"
    },
    // Stylized SVG thumbnail type
    type: "camera"
  },
  {
    id: "ac-7200",
    name: "7\" LCD Monitor",
    model: "AC-7200",
    category: "Monitors",
    price: 199.99,
    rating: 4.9,
    reviewsCount: 88,
    description: "Ultra-clear 7-inch TFT LCD monitor with dual video input and dash/windshield mount.",
    features: [
      { id: "screen", label: "7\" HD Display", detail: "1024x600 resolution" },
      { id: "inputs", label: "Dual Input", detail: "V1/V2 Auto-switch on reverse" },
      { id: "anti-glare", label: "Anti-Glare", detail: "Sunshade hood included" }
    ],
    inStock: true,
    isFeatured: true,
    badge: "Popular",
    specs: {
      display: "7-inch Active Matrix TFT",
      inputs: "2 Composite RCA Channels",
      brightness: "450 cd/m² High Brightness",
      aspectRatio: "16:9 / 4:3 Widescreen"
    },
    type: "monitor"
  },
  {
    id: "ac-8200",
    name: "LED Light Bar",
    model: "AC-8200",
    category: "Lighting",
    price: 149.99,
    rating: 4.7,
    reviewsCount: 95,
    description: "High-intensity waterproof LED light bar designed for harsh automotive and off-road environments.",
    features: [
      { id: "lumens", label: "12,000 LM", detail: "High-output Cree LEDs" },
      { id: "beam", label: "Combo Beam", detail: "Spot & flood combo pattern" },
      { id: "rugged", label: "IP67 Armor", detail: "Shockproof polycarbonate lens" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Heavy Duty",
    specs: {
      power: "180W Total Output",
      colorTemp: "6000K Pure White",
      dimensions: "22\" Sleek Profile",
      cooling: "Aviation Aluminum Heat Sinks"
    },
    type: "lightbar"
  },
  {
    id: "ac-9400",
    name: "Parking Sensors",
    model: "AC-9400",
    category: "Sensors",
    price: 89.99,
    rating: 4.6,
    reviewsCount: 64,
    description: "4-sensor ultrasonic rear parking assist system with progressive audio beeper and obstacle detection.",
    features: [
      { id: "sensors", label: "4 Sensors", detail: "Paintable flush bumper mount" },
      { id: "range", label: "0.3m - 2.5m", detail: "Accurate obstacle detection" },
      { id: "buzzer", label: "Audio Alerts", detail: "3-stage variable beeping buzzer" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Safety Assist",
    specs: {
      frequency: "40 KHz Ultrasonic",
      holeSaw: "22mm Drill Bit Included",
      operatingTemp: "-30°C to +80°C",
      detectionAngle: "Horizontal 120°, Vertical 60°"
    },
    type: "sensors"
  },
  {
    id: "rvm-dvr900k",
    name: "10\" Touchscreen Mirror DVR",
    model: "RVMDVR900K",
    category: "Monitors",
    price: 249.99,
    rating: 4.9,
    reviewsCount: 142,
    description: "OEM replacement full-screen rear view mirror with 4K front dashcam and 1080p backup camera.",
    features: [
      { id: "4k", label: "4K + 1080p", detail: "Dual recording dashcam" },
      { id: "touch", label: "Touch Display", detail: "Full screen streaming mirror" },
      { id: "gps", label: "GPS Logging", detail: "Speed & route metadata" }
    ],
    inStock: true,
    isFeatured: true,
    badge: "New Gen",
    specs: {
      screenSize: "9.66\" Full IPS Touch",
      frontCam: "4K UHD 3840x2160 @30fps",
      rearCam: "1080p AHD Water-resistant",
      storage: "Supports up to 256GB MicroSD"
    },
    type: "mirror"
  },
  {
    id: "rvc-180ctd",
    name: "ADAS Object Detection Camera",
    model: "RVC180CTD",
    category: "Cameras",
    price: 179.99,
    rating: 4.8,
    reviewsCount: 51,
    description: "Smart 180° moving object recognition camera with instant driver warning on pedestrians or cross-traffic.",
    features: [
      { id: "ai", label: "AI Detection", detail: "Smart pedestrian & vehicle tracking" },
      { id: "fov", label: "180° Super Wide", detail: "Eliminates all blind spots" },
      { id: "overlay", label: "Dynamic Box", detail: "Visual bounding box alert" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "AI Powered",
    specs: {
      sensor: "Sony Starvis IMX307",
      interface: "Standard RCA Video Output",
      guidelines: "Selectable On / Off",
      certification: "Automotive Grade AEC-Q100"
    },
    type: "camera"
  }
]

export const CATEGORIES = [
  { id: "All", label: "All" },
  { id: "Cameras", label: "Cameras" },
  { id: "Monitors", label: "Monitors" },
  { id: "Lighting", label: "Lighting" },
  { id: "Sensors", label: "Sensors" },
]
