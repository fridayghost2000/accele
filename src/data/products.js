export const PRODUCTS = [
  // --- CAMERAS ---
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
    type: "camera"
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
  },
  {
    id: "rvc-200ahd",
    name: "Commercial Heavy Duty Camera",
    model: "RVC200AHD",
    category: "Cameras",
    price: 149.99,
    rating: 4.9,
    reviewsCount: 73,
    description: "Heavy duty commercial backup camera with integrated 18 IR night-vision LEDs and weatherproof sun-shield for trucks and RVs.",
    features: [
      { id: "night-ir", label: "18 IR LEDs", detail: "50ft night illumination" },
      { id: "ip69k", label: "IP69K Rated", detail: "High-pressure washer safe" },
      { id: "audio", label: "Built-in Mic", detail: "Direct audio feedback" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Commercial",
    specs: {
      resolution: "1080P AHD / CVBS Switchable",
      shockRating: "10G Vibration Resistant",
      operatingTemp: "-40°C to +85°C",
      connector: "GX12 4-Pin Aviation"
    },
    type: "camera"
  },
  {
    id: "rvc-910w",
    name: "Digital Wireless Backup Camera Kit",
    model: "RVC910W",
    category: "Cameras",
    price: 189.99,
    rating: 4.7,
    reviewsCount: 42,
    description: "Zero-latency 2.4GHz digital wireless camera kit with magnetic base for hassle-free installation on trailers, RVs, and fleets.",
    features: [
      { id: "range", label: "100ft Range", detail: "Encrypted zero-lag signal" },
      { id: "magnetic", label: "Magnetic Base", detail: "Instant attachment" },
      { id: "battery", label: "Rechargeable", detail: "15hr continuous battery" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Wireless",
    specs: {
      frequency: "2.4GHz Digital FHSS",
      batteryCapacity: "6700mAh Lithium-ion",
      waterproof: "IP68 Submersible",
      mount: "Super Neodymium Magnetic"
    },
    type: "camera"
  },

  // --- MONITORS ---
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
    id: "axfd-102",
    name: "10.2\" Overhead Flip-Down Monitor",
    model: "AXFD102",
    category: "Monitors",
    price: 229.99,
    rating: 4.8,
    reviewsCount: 37,
    description: "Slim roof-mount entertainment monitor with Full HD 1080P display, HDMI input, built-in dome lights, and IR headphone transmitter.",
    features: [
      { id: "hdmi", label: "HDMI / USB", detail: "Direct smartphone streaming" },
      { id: "slim", label: "Ultra Slim", detail: "Folds flush to headliner" },
      { id: "dome", label: "LED Dome", detail: "Integrated ambient cabin lights" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Entertainment",
    specs: {
      panel: "10.2\" IPS LED Backlit",
      resolution: "1920x1080 Full HD",
      audio: "Built-in FM & IR Transmitter",
      inputs: "HDMI, USB, RCA AV In/Out"
    },
    type: "overhead"
  },
  {
    id: "lcd-500",
    name: "5\" High-Resolution Dash Monitor",
    model: "LCD500",
    category: "Monitors",
    price: 119.99,
    rating: 4.6,
    reviewsCount: 61,
    description: "Compact 5-inch dashboard display with dual video auto-switching, adhesive pedestal, and anti-glare sun visor.",
    features: [
      { id: "compact", label: "Compact 5\"", detail: "Zero windshield obstruction" },
      { id: "auto", label: "Auto Trigger", detail: "Switches instantly on reverse" },
      { id: "bracket", label: "Pedestal Mount", detail: "360° multi-angle swivel" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Compact",
    specs: {
      display: "5-inch Digital TFT LCD",
      resolution: "800x480 RGB",
      brightness: "350 cd/m²",
      power: "12V DC"
    },
    type: "monitor"
  },

  // --- LIGHTING ---
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
    isFeatured: true,
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
    id: "rvc-led20",
    name: "Security Floodlight LED Bar",
    model: "RVC-LED20",
    category: "Lighting",
    price: 89.99,
    rating: 4.8,
    reviewsCount: 46,
    description: "Ultra-bright auxiliary LED floodlight bar engineered for rear reverse assistance, utility vans, and perimeter security.",
    features: [
      { id: "flood", label: "120° Flood", detail: "Wide work area coverage" },
      { id: "low-draw", label: "Low Draw", detail: "Only 1.5A energy consumption" },
      { id: "weather", label: "IP68 Seal", detail: "All-weather corrosion proof" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Floodlight",
    specs: {
      lumens: "2,400 Lumens",
      wattage: "24W High-Flux OSRAM LEDs",
      voltage: "10V - 30V Multi-Voltage",
      hardware: "Stainless Steel 304 Brackets"
    },
    type: "lightbar"
  },
  {
    id: "rgb-strip60",
    name: "Underbody Multi-Color LED Kit",
    model: "RGB60",
    category: "Lighting",
    price: 109.99,
    rating: 4.7,
    reviewsCount: 82,
    description: "App-controlled multi-color vehicle underglow lighting kit with music sync and customizable chase patterns.",
    features: [
      { id: "rgb", label: "16M Colors", detail: "Full spectrum RGB+W" },
      { id: "bluetooth", label: "App Control", detail: "iOS & Android smartphone app" },
      { id: "sync", label: "Music Sync", detail: "Pulses to vehicle audio beat" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "RGB App",
    specs: {
      strips: "4 Flexible IP68 Silicone Tubes",
      length: "2x 36\" + 2x 48\" Strips",
      controller: "Smart Bluetooth 5.0 Module",
      fuse: "In-line 10A Waterproof Fuse"
    },
    type: "lightbar"
  },

  // --- SENSORS ---
  {
    id: "bss-200",
    name: "Microwave Radar Blind Spot System",
    model: "BSS200",
    category: "Sensors",
    price: 279.99,
    rating: 4.9,
    reviewsCount: 110,
    description: "Advanced 77GHz microwave radar blind spot detection system with pillar LED warning lights and speed-activated GPS buzzer.",
    features: [
      { id: "radar", label: "77GHz Radar", detail: "Sees through plastic bumpers" },
      { id: "range-bs", label: "50ft Range", detail: "Early overtaking alert" },
      { id: "gps-speed", label: "GPS Speed", detail: "Mutes buzzer at idle or stops" }
    ],
    inStock: true,
    isFeatured: true,
    badge: "Radar Tech",
    specs: {
      frequency: "77GHz Millimeter Wave",
      detectionZone: "Left & Right Blind Zones up to 15m",
      indicators: "Dual A-Pillar Amber/Red LEDs",
      speedThreshold: "Selectable 10mph / 15mph / 20mph"
    },
    type: "blindspot"
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
    id: "fpr-400",
    name: "Front & Rear 8-Sensor Dual Radar System",
    model: "FPR400",
    category: "Sensors",
    price: 159.99,
    rating: 4.8,
    reviewsCount: 58,
    description: "Comprehensive 8-sensor front and rear parking guidance system with compact dash-mount LED numeric distance display.",
    features: [
      { id: "dual-zone", label: "8 Sensors", detail: "4 Front + 4 Rear ultrasonic heads" },
      { id: "display", label: "LED Gauge", detail: "Digital meter & zone indicator" },
      { id: "brake", label: "Brake Trigger", detail: "Activates front sensors on braking" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Dual Radar",
    specs: {
      coverage: "Front 0.3-1.0m / Rear 0.3-2.5m",
      displayType: "Color LED Bar Display with Buzzer",
      voltage: "12V DC",
      sensors: "8x OEM Style Waterproof Discs"
    },
    type: "sensors"
  }
]

export const CATEGORIES = [
  { id: "All", label: "All" },
  { id: "Cameras", label: "Cameras" },
  { id: "Monitors", label: "Monitors" },
  { id: "Lighting", label: "Lighting" },
  { id: "Sensors", label: "Sensors" },
]
