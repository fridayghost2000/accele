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

  // --- MIRRORS ---
  {
    id: "rvm-dvr900k",
    name: "10\" Touchscreen Mirror DVR",
    model: "RVMDVR900K",
    category: "Mirrors",
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
    id: "rvm-430a",
    name: "OEM 4.3\" Rear View Mirror Monitor",
    model: "RVM430A",
    category: "Mirrors",
    price: 159.99,
    rating: 4.7,
    reviewsCount: 48,
    description: "Factory OE style replacement mirror with hidden high-brightness 4.3\" LCD screen that appears automatically in reverse.",
    features: [
      { id: "hidden", label: "Hidden Display", detail: "Invisible when camera off" },
      { id: "auto-bright", label: "Auto-Bright", detail: "Adjusts to ambient light" },
      { id: "mount", label: "Universal Mount", detail: "Fits 95% of domestic & import" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "OEM Style",
    specs: {
      display: "4.3\" Ultra-High Brightness 1000 nits",
      glass: "Anti-Glare Tinted Safety Glass",
      inputs: "2 Auto-Switching Composite RCA"
    },
    type: "mirror"
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
    isFeatured: false,
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
  },

  // --- DVR & SECURITY ---
  {
    id: "dvr-4000",
    name: "4-Channel Commercial Mobile DVR",
    model: "DVR4000",
    category: "DVR",
    price: 349.99,
    rating: 4.9,
    reviewsCount: 31,
    description: "Full 1080P 4-channel lockable mobile DVR with GPS speed tracking and G-sensor crash file locking for commercial fleets.",
    features: [
      { id: "4ch", label: "4 AHD Channels", detail: "Simultaneous 1080P recording" },
      { id: "gps", label: "GPS Mapping", detail: "Location & speed stamp" },
      { id: "lock", label: "Locking Keybox", detail: "Tamper-proof SD storage" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Commercial Fleet",
    specs: {
      channels: "4x 4-Pin Aviation Inputs",
      storage: "Dual SD card slots up to 512GB",
      powerInput: "8V-36V Wide Voltage Range"
    },
    type: "monitor"
  },
  {
    id: "sec-5000",
    name: "2-Way LCD Remote Start & Alarm",
    model: "SEC5000",
    category: "Security",
    price: 219.99,
    rating: 4.8,
    reviewsCount: 44,
    description: "Long-range 2-way LCD pager alarm system with remote engine start, dual-stage shock sensor, and starter kill.",
    features: [
      { id: "pager", label: "3000ft Range", detail: "2-Way LCD confirmation" },
      { id: "remote", label: "Remote Start", detail: "Engine pre-warm & cool" },
      { id: "kill", label: "Starter Kill", detail: "Complete anti-theft relay" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Security",
    specs: {
      frequencies: "433.92MHz FSK Technology",
      siren: "6-Tone 120dB Multi-Tone Siren",
      remotes: "1x LCD Pager + 1x 4-Button Companion"
    },
    type: "sensors"
  },

  // --- HEADS UP DISPLAYS & COMFORT ---
  {
    id: "hud-800",
    name: "Universal Windshield HUD Display",
    model: "HUD800",
    category: "HUD",
    price: 99.99,
    rating: 4.6,
    reviewsCount: 39,
    description: "Multi-color head up display projecting vehicle speed, water temp, battery voltage, and RPM directly onto the windshield.",
    features: [
      { id: "dual-mode", label: "OBD2 + GPS", detail: "Compatible with all vehicles" },
      { id: "hud", label: "Windshield HUD", detail: "Zero-glare high contrast" },
      { id: "alarm", label: "Speed Warning", detail: "Audible overspeed chime" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "HUD Telemetry",
    specs: {
      displayMode: "High Reflectance Nano-Technology Screen",
      sensor: "Automatic Light Sensor Dimming"
    },
    type: "monitor"
  },
  {
    id: "sh-200",
    name: "Carbon Fiber Dual Seat Heater Kit",
    model: "SH200",
    category: "Comfort",
    price: 89.99,
    rating: 4.9,
    reviewsCount: 67,
    description: "Rapid heating carbon fiber seat warming kit for two seats with independent illuminated Hi/Low rocker switches.",
    features: [
      { id: "carbon", label: "Carbon Fiber", detail: "Can be trimmed to fit any seat" },
      { id: "dual", label: "2 Seats Heated", detail: "Cushion & backrest pads" },
      { id: "thermo", label: "Thermostat Safe", detail: "Built-in auto thermal cut-off" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Cabin Comfort",
    specs: {
      pads: "4 Pads (2 cushions + 2 backrests)",
      power: "45W - 55W per seat"
    },
    type: "sensors"
  },

  // --- BUS & COACH FLEET ---
  {
    id: "cmv-pa100",
    name: "Commercial Transit PA System & Mic",
    model: "CMVPA100",
    category: "BusCoach",
    price: 179.99,
    rating: 4.8,
    reviewsCount: 28,
    description: "Heavy-duty commercial transit public address amplifier with dynamic push-to-talk noise-cancelling gooseneck microphone.",
    features: [
      { id: "mic", label: "Noise Cancelling", detail: "Clear driver announcements" },
      { id: "amp", label: "60W PA Amp", detail: "Direct vehicle speaker link" },
      { id: "transit", label: "Transit Grade", detail: "Built for school & coach bus" }
    ],
    inStock: true,
    isFeatured: false,
    badge: "Bus & Coach",
    specs: {
      outputPower: "60 Watts RMS into 4/8 Ohms",
      compatibility: "Blue Bird, IC Bus, Thomas Built"
    },
    type: "sensors"
  }
]

// Official Categories from https://accele.com/category/
export const OFFICIAL_CATEGORIES = [
  {
    id: "Cameras",
    label: "Camera Solutions",
    shortLabel: "Cameras",
    subcategories: "Backup, Flush, License Plate, Bullet, OE Cameras",
    count: 4,
    icon: "Camera",
    description: "High-definition rear view, front, and blind spot cameras for passenger & commercial vehicles."
  },
  {
    id: "Monitors",
    label: "LCD Monitors & Video",
    shortLabel: "Monitors",
    subcategories: "DropDown, Visor, Dash, Metal/Plastic LCDs",
    count: 3,
    icon: "Tv",
    description: "Anti-glare high-resolution automotive screens from 5\" dash displays to 10.2\" overhead monitors."
  },
  {
    id: "Mirrors",
    label: "Mirror / Monitor Solutions",
    shortLabel: "Mirrors",
    subcategories: "Touchscreen DVR, OEM Replacement, Auto-Dimming",
    count: 2,
    icon: "RectangleHorizontal",
    description: "Factory-style replacement rear view mirrors with integrated video display and 4K dashcam streaming."
  },
  {
    id: "Sensors",
    label: "Drive & Park Sensors",
    shortLabel: "Sensors",
    subcategories: "Blind Spot Radar, 4/8 Sensor Ultrasonic, Dual Zone",
    count: 3,
    icon: "Radio",
    description: "Millimeter-wave radar blind spot detection and ultrasonic bumper parking assist systems."
  },
  {
    id: "Lighting",
    label: "Vehicle Lighting Solutions",
    shortLabel: "Lighting",
    subcategories: "LED Light Bars, Work Lights, Accent Underglow, Strobe",
    count: 3,
    icon: "Lightbulb",
    description: "High-intensity off-road LED bars, perimeter floodlights, and smart RGB underbody illumination."
  },
  {
    id: "DVR",
    label: "Digital Video Recording",
    shortLabel: "DVR Systems",
    subcategories: "Commercial DVRs, Dashcams, Splitters, GPS Tracking",
    count: 1,
    icon: "Video",
    description: "Continuous multi-channel commercial vehicle video recording with GPS time-stamping and tamper-proof storage."
  },
  {
    id: "Headrest",
    label: "Headrest Monitor Solutions",
    shortLabel: "Headrests",
    subcategories: "Universal Headrest Screens, IR Headphones, Media Players",
    count: 1,
    icon: "Armchair",
    description: "Passenger entertainment displays integrated seamlessly into vehicle seat headrests."
  },
  {
    id: "Commercial",
    label: "Commercial & RV Systems",
    shortLabel: "Commercial / RV",
    subcategories: "Heavy-Duty AHD, Multi-Camera Multiplexers, Trailer Kits",
    count: 2,
    icon: "Truck",
    description: "Vibration-proof IP69K camera and monitoring packages built for fleets, semi-trucks, and motorhomes."
  },
  {
    id: "Security",
    label: "Security Systems & Alarms",
    shortLabel: "Security",
    subcategories: "2-Way Remote Start, Keyless Entry, Shock Sensors, Siren",
    count: 1,
    icon: "ShieldAlert",
    description: "Advanced vehicle security, remote start systems, and anti-theft sensors."
  },
  {
    id: "HUD",
    label: "Heads Up Displays (HUD)",
    shortLabel: "HUDs",
    subcategories: "OBD2 / GPS Windshield Projection, Speed & RPM Telemetry",
    count: 1,
    icon: "Gauge",
    description: "Cockpit windshield projection units displaying real-time speed, navigation prompts, and vehicle diagnostics."
  },
  {
    id: "Comfort",
    label: "Comfort & Convenience",
    shortLabel: "Comfort",
    subcategories: "Carbon Fiber Seat Heaters, Power Inverters, USB Ports",
    count: 1,
    icon: "Flame",
    description: "Dual-temperature carbon fiber heated seat inserts and high-power pure sine wave inverters."
  },
  {
    id: "BusCoach",
    label: "Bus & Coach Fleet",
    shortLabel: "Bus & Coach",
    subcategories: "PA Systems, Microphones, External Speakers, Stop Request",
    count: 1,
    icon: "Bus",
    description: "Public address amplification, goose-neck microphones, and specialized transit equipment for Blue Bird, IC, and Thomas."
  },
  {
    id: "AVAccessories",
    label: "A/V Switchers & Quads",
    shortLabel: "A/V Switchers",
    subcategories: "4-Channel Quads, Video Splitters, Camera Trigger Modules",
    count: 1,
    icon: "Layers",
    description: "Automatic turn-signal video switchers and quad-view split-screen multiplexers."
  },
  {
    id: "USBHDMI",
    label: "USB & HDMI Accessories",
    shortLabel: "USB / HDMI",
    subcategories: "Fast Charge USB-C Ports, Dash Flush Mount Leads, Splitters",
    count: 1,
    icon: "Cable",
    description: "Automotive-grade flush-mount USB-C Power Delivery and HDMI integration ports."
  },
  {
    id: "Motorization",
    label: "Motorization & Actuators",
    shortLabel: "Actuators",
    subcategories: "Linear Actuators, Mounting Brackets, Remote Controllers",
    count: 1,
    icon: "Cpu",
    description: "Heavy-duty 12V motorized linear actuators for custom amp racks, tonneau covers, and trunk lids."
  },
  {
    id: "Relays",
    label: "Relays & Sockets",
    shortLabel: "Relays",
    subcategories: "30A/40A Bosch Style SPDT, Weatherproof Sockets, Timers",
    count: 1,
    icon: "Zap",
    description: "Heavy-duty sealed automotive relays and interlocking harnesses for high-current switching."
  },
  {
    id: "Fuses",
    label: "Fuse & Circuit Protection",
    shortLabel: "Fuse & Circuit",
    subcategories: "Maxi/ATC/Mini Fuses, Waterproof Holders, Circuit Breakers",
    count: 1,
    icon: "ShieldCheck",
    description: "OEM automotive blade fuses, in-line waterproof fuse holders, and manual reset breakers."
  },
  {
    id: "Wiring",
    label: "Wire & Wire Management",
    shortLabel: "Wiring",
    subcategories: "OFC Primary Wire, Speaker Cable, Split Loom, UV Zip Ties",
    count: 1,
    icon: "Share2",
    description: "High-strand copper primary wire, protective split loom tubing, and heavy-duty nylon zip ties."
  },
  {
    id: "Hardware",
    label: "Hardware & Fasteners",
    shortLabel: "Hardware",
    subcategories: "T-Taps, Heat Shrink, Speed Clips, Trim Fasteners",
    count: 1,
    icon: "Wrench",
    description: "Professional installation hardware, quick-splice connectors, and OEM style panel clips."
  }
]

export const CATEGORIES = [
  { id: "All", label: "All" },
  ...OFFICIAL_CATEGORIES.map(c => ({ id: c.id, label: c.shortLabel || c.label }))
]
