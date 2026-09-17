
export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  yearsExperience: number;
  headOffice: {
    address: string;
    city: string;
    statePin: string;
  };
  manufactureUnit: {
    address: string;
    area: string;
    cityState: string;
  };
  manufacturingUnit: string;
  emails: string[];
  phones: string[];
  landlines: string[];
  website: string;
  socialLinks: {
    linkedin: string;
    youtube: string;
  };
  certifications: string[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "GRACE ELECTRICAL & CONTRACTORS PVT. LTD.",
  legalName: "Grace Electrical & Contractors Pvt. Ltd.",
  tagline: "ENGINEERING EXCELLENCE BUILT ON TRUST",
  establishedYear: 2008,
  yearsExperience: 18,
  headOffice: {
    address: "A-60, Sector 65",
    city: "Noida",
    statePin: "G.B Nagar, U.P-201301"
  },
  manufactureUnit: {
    address: "N-20, Surajpur Industrial Area",
    area: "Site-5, UPSIDA",
    cityState: "Greater Noida, G.B Nagar"
  },
  manufacturingUnit: "N-20, Surajpur Industrial Area, Site-5, UPSIDA, Greater Noida G.B Nagar",
  emails: ["info@gracemep.com", "nk@gracemep.com"],
  phones: ["+91-9990095954", "+91-9891280077"],
  landlines: ["0120-3511739", "0120-3512647"],
  website: "www.gracemep.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/grace-electrical-contractors",
    youtube: "https://www.youtube.com/@gracemep"
  },
  certifications: [
    "ISO 9001:2015 Certified",
    "Government Approved Class-A Electrical Contractor",
    "Indian & International Standards Compliance",
    "RDSO / Railway Norms Compliant"
  ],
  stats: [
    { label: "Years of Trust", value: "18+", description: "Captured Electrical Field in India Since 2008" },
    { label: "Substation Voltage", value: "33 KV", description: "Outdoor / Indoor Sub-Stations up to 33 KV" },
    { label: "PCC Panel Rating", value: "6300A", description: "Fixed & Draw-out Power Control Centers" },
    { label: "Dedicated Team", value: "50+", description: "Highly Skilled Professionals Across India" }
  ]
};

export const classNameAboutInfo = {
  aboutText1: "Grace is a professional Electrical contracting company. Since its inception in the year 2008, Grace Group has captured the field of Electrical in India. It has become a giant in this industry acquiring vast knowledge and experience and has generated strong customer base in different industries. Grace Group is established company based at Noida.",
  aboutText2: "Grace has carried out designing, Detailed Engineering, Supply, Fabrication, Erection, Installation, Testing and Commissioning of the Electrical, Plumbing, CCTV, PAS/BMS, Fire Fighting work and Mechanical System as per norms of Indian & International Standards. Grace Group is a leading provider of comprehensive electrical Panels offering innovative solutions to meet the diverse needs of residential, commercial, and industrial clients.",
  aboutText3: "Grace is a trusted manufacturer and supplier of all type panel including Main LT Panel, MCC, APFC, PLC and control Panel. Their range of panels includes custom-made designs for various industrial applications, ensuring the optimal performance of electrical system.",
  vision: "Our vision is to establish Grace as the premier trading house across India. To be a leading provider of innovative and reliable electrical control solutions, empowering industries worldwide with cutting-edge technology, superior quality, and unmatched service. We strive to enhance the efficiency and safety of electrical systems through continuous improvement and customer-focused designs.",
  mission: "Our mission is to hold your dream as ours. Our mission is to make your place a safe and comfortable environment to work and live in. Our dedication extends beyond mere transactions; we strive to build lasting relationships with our clients by being a reliable partner in achieving your goals.",
  values: "We Strive to maintain the highest quality and efficiency in our work through the constant pursuit of improvement of our team and our processes in order to surpass the expectations of our customers.",
  qualityPolicy: "GRACE ELECTRICAL & CONTRACTORS PVT LTD. Dedicates itself to Total Quality. We shall constantly strive to Exult our Customer By Anticipating and Exceeding Their Expectations. Continuous Improvement, Teamwork, Commitment, Integrity and Excellence Shall be our Guiding values.",
  safetyPolicy: "GRACE ELECTRICAL & CONTRACTORS PVT LTD. Electrical Contractor are committed to respect for human life and safety of the employees. Our Safety policy aims at: Complying with all relevant Safety legislation and other requirement; Disseminating with all relevant Safety legislation; Providing adequate training awareness on safety aspects; Providing safe Working Environment by continuously addressing and eliminating the risks through Safety Patrol all Round; Reduction of workplace accidents.",
  environmentPolicy: "GRACE ELECTRICALS AND CONTRACTORS is committed to demonstrate excellence in: Elimination or minimization of environmental impacts of processes, activities and services; Meeting or exceeding compliance with legal & other requirements; Conservation of resources like oil, water, Electrical energy, packing material, and paper; Infusing awareness among employees for maintaining a pollution free environment; Enhancement of environmental awareness amongst group companies, business associates, suppliers and contractors.",
  energyEfficiency: "We consider all projects in the context of energy conservation; this means our recommendations and quotes are based upon the most energy efficient options. All installations – new build or refit/remedial works – are undertaken in line with current Government regulations in this area. We can advise on Carbon Trust schemes including pay-back and interest free self financing loans.",
  sustainableDevelopment: "GRACE recognizes that our activities and the activities of our supply chain have a global impact. Integrating sustainable development into our growth strategy, we have made it our priority to ensure safe working conditions and basic health coverage for all our employees."
};

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  spec: string;
  description: string;
  image: string;
  imageOptions?: string[];
}

export const electricalServices: ServiceItem[] = [
  {
    id: "s1",
    category: "electrical",
    title: "Switchyard (Up to 33 KV)",
    spec: "Up to 33 KV",
    description: "Turnkey contracts for design, engineering, supply, erection, testing & commissioning of outdoor switchyards up to 33 KV.",
    image: "/services/switchyard-33kv-1.jpg",
    imageOptions: [
      "/services/switchyard-33kv-1.jpg",
      "/services/switchyard-33kv-2.jpg",
      "https://www.iitr.ac.in/estateworks/css/images/recent/substation1.jpg"
    ]
  },
  {
    id: "s2",
    category: "electrical",
    title: "Outdoor/Indoor Sub-Station (Up to 33 KV)",
    spec: "33/11 KV Grid",
    description: "Complete turnkey development, execution, up-gradation & renovation of outdoor and indoor substations up to 33 KV.",
    image: "/services/substation-33kv-1.jpg",
    imageOptions: [
      "/services/substation-33kv-1.jpg",
      "/services/substation-33kv-2.jpg",
      "https://www.powertechindia.org/assets/img/epc-projects/33-kv-substation.jpg"
    ]
  },
  {
    id: "s3",
    category: "electrical",
    title: "H.T./ LT Transformers (Up to 10MVA)",
    spec: "Up to 10MVA",
    description: "Supply, installation, testing and commissioning of heavy HT and LT power transformers up to 10MVA capacity.",
    image: "/services/transformer-10mva-1.jpg",
    imageOptions: [
      "/services/transformer-10mva-1.jpg",
      "/services/transformer-10mva-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Substation_Power_Transformer_1.jpg"
    ]
  },
  {
    id: "s4",
    category: "electrical",
    title: "Ladder Type / Perforated Cable Trays & Raceways",
    spec: "Industrial Trays",
    description: "Manufacturing and laying of heavy-duty ladder type and perforated cable trays, raceways, and support structures.",
    image: "/services/cable-trays-1.jpg",
    imageOptions: [
      "/services/cable-trays-1.jpg",
      "/services/cable-trays-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/OrganizedElectricalWiring.jpg"
    ]
  },
  {
    id: "s5",
    category: "electrical",
    title: "TPN Bus-duct and Trenching",
    spec: "TPN Bus-Duct",
    description: "Supplying of TPN Bus-duct systems, trenching, busbar connection, and distribution cabling.",
    image: "/services/busduct-tpn-1.jpg",
    imageOptions: [
      "/services/busduct-tpn-1.jpg",
      "/services/busduct-tpn-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Sample_busbar_trunking_system.jpg"
    ]
  },
  {
    id: "s6",
    category: "electrical",
    title: "High Mast / Road Lighting",
    spec: "High Mast Towers",
    description: "Turnkey high mast illumination towers, stadium lighting, and commercial road lighting infrastructure.",
    image: "/services/high-mast-lighting-1.jpg",
    imageOptions: [
      "/services/high-mast-lighting-1.jpg",
      "/services/high-mast-lighting-2.jpg",
      "/services/high-mast-lighting-3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/High-mast_Lighting.jpg"
    ]
  },
  {
    id: "s7",
    category: "electrical",
    title: "33/11 KV Substation Underground Line",
    spec: "Underground Lines",
    description: "Laying, jointing, testing and commissioning of 33/11 KV HT underground cable networks.",
    image: "/services/underground-cables-1.jpg",
    imageOptions: [
      "/services/underground-cables-1.jpg",
      "/services/underground-cables-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Cable_Laying_Services.jpg"
    ]
  },
  {
    id: "s8",
    category: "electrical",
    title: "33/11 KV Overhead Line",
    spec: "Overhead Lines",
    description: "Erection of HT overhead transmission pole lines, insulators, and conductor stringing.",
    image: "/services/overhead-lines-1.jpg",
    imageOptions: [
      "/services/overhead-lines-1.jpg",
      "/services/overhead-lines-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Insulator_on_an_overhead_powerline.jpg"
    ]
  },
  {
    id: "s9",
    category: "electrical",
    title: "Earthing Protection Systems",
    spec: "Plate / Pipe / Chemical Electrode",
    description: "Complete earthing protection systems utilizing maintenance-free chemical electrodes, copper plate, and pipe electrodes.",
    image: "/services/earthing-systems-1.jpg",
    imageOptions: [
      "/services/earthing-systems-1.jpg",
      "/services/earthing-systems-2.jpg",
      "https://lathearthing.com/wp-content/uploads/2025/02/PURE-COPPER-ELECTRODE.webp"
    ]
  }
];

export const mepfServices: ServiceItem[] = [
  {
    id: "m1",
    category: "mepf",
    title: "Fire Fighting Solutions",
    spec: "Turnkey FF Systems",
    description: "Sprinkler networks, fire hydrant systems, diesel & motor fire pumps, and fire protection contracting.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageOptions: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ]
  },
  {
    id: "m2",
    category: "mepf",
    title: "Plumbing Systems",
    spec: "Sanitary & Piping",
    description: "Industrial and commercial water supply piping, drainage systems, pumps, and water treatment integration.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    imageOptions: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
    ]
  },
  {
    id: "m3",
    category: "mepf",
    title: "HVAC & Ventilation System",
    spec: "Climate & Air Handling",
    description: "Chilled water systems, ducting, AHU units, industrial ventilation, and cleanroom air handling.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageOptions: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ]
  },
  {
    id: "m4",
    category: "mepf",
    title: "Industrial Installation",
    spec: "Machines, Motors & Pumps",
    description: "Turnkey erection and electrical wiring of all industrial machines, heavy motors, and centrifugal pump sets.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    imageOptions: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    ]
  },
  {
    id: "m5",
    category: "mepf",
    title: "PAS, Security and Fire Alarm System",
    spec: "CCTV, PAS/BMS Integration",
    description: "Public address systems, building management systems (BMS), CCTV surveillance, and intelligent fire alarm panels.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    imageOptions: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    ]
  },
  {
    id: "m6",
    category: "mepf",
    title: "Lighting System",
    spec: "Industrial & Commercial",
    description: "Energy-efficient LED lighting design, busbar trunking lighting, emergency lighting, and architectural fixtures.",
    image: "/services/high-mast-lighting-2.jpg",
    imageOptions: [
      "/services/high-mast-lighting-2.jpg",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ]
  }
];

export interface PanelItem {
  id: string;
  name: string;
  rating: string;
  detail: string;
  category: string;
  type: string;
  features: string[];
  description: string;
  image: string;
  imageOptions?: string[];
}

export const productRangeCategory: { category: string; items: PanelItem[] }[] = [
  {
    category: "1. Electrical Panels & Power Distribution Systems",
    items: [
      {
        id: "p1",
        name: "Power Control Center (PCC Panels)",
        rating: "Up to 6300A",
        detail: "Fixed and Draw-out type up to 6300A",
        category: "Main Distribution",
        type: "Fixed & Draw-out",
        features: ["Double Busbar Option", "IP-55 Enclosure Protection", "Form 4b Separation", "Air Circuit Breakers (ACB)"],
        description: "Robust Main LT Panels designed for high current power distribution in manufacturing plants, commercial malls, and high-rise complexes.",
        image: "/services/pcc-panel-1.jpg",
        imageOptions: [
          "/services/pcc-panel-1.jpg",
          "/services/pcc-panel-2.jpg",
          "https://www.panelelectro.com/images/pcc_panel.jpeg"
        ]
      },
      {
        id: "p2",
        name: "Motor Control Centres (MCC Panels)",
        rating: "Up to 1600A",
        detail: "Fixed and Draw-out type up to 1600A",
        category: "Motor Control",
        type: "IMCC / Fixed / Draw-out",
        features: ["Intelligent Motor Controller", "VFD & Soft Starter Modules", "Thermal Overload Protection", "Short Circuit Withstand 50kA"],
        description: "Centralized motor control panels engineered for precise motor management in heavy industrial plants and HVAC pump systems.",
        image: "/services/mcc-panel-1.jpg",
        imageOptions: [
          "/services/mcc-panel-1.jpg",
          "/services/mcc-panel-2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/ea/Motor_control_center_%28MCC%29.jpg"
        ]
      },
      {
        id: "p3",
        name: "Double Bus Bar Power Panels",
        rating: "Up to 6300A",
        detail: "Heavy-duty double busbar power panels up to 6300A",
        category: "Power Panel",
        type: "Double Busbar",
        features: ["6300A Double Busbar", "Dual Supply Source Interlock", "IP-55 Protection"],
        description: "Double busbar main power panels for uninterrupted dual power source switching.",
        image: "/services/double-busbar-1.jpg",
        imageOptions: [
          "/services/double-busbar-1.jpg",
          "/services/double-busbar-2.jpg",
          "https://rpsswitchgear.com/wp-content/uploads/2026/07/LMVP-Switchgear-Range.jpg"
        ]
      },
      {
        id: "p4",
        name: "Control & Relay Mimic Panels",
        rating: "Up to 132 kV",
        detail: "Substation control and relay mimic protection panels up to 132 kV",
        category: "Substation Control",
        type: "Mimic Control",
        features: ["Up to 132 kV Rating", "Mimic Single Line Diagram", "Protection Relays"],
        description: "Substation control and relay mimic protection panels up to 132 kV.",
        image: "/services/pcc-panel-2.jpg",
        imageOptions: [
          "/services/pcc-panel-2.jpg",
          "/services/pcc-panel-1.jpg"
        ]
      },
      {
        id: "p5",
        name: "Automatic Power Factor Correction (APFC) Panels",
        rating: "Up to 1500 KVAR",
        detail: "Microprocessor-based automatic power factor panels up to 1500 KVAR",
        category: "Power Factor",
        type: "Automatic APFC",
        features: ["Harmonic Detuned Reactors", "Heavy Duty Capacitors", "Thyristor Switching Option", "Real-time cos φ Monitoring"],
        description: "Eliminate low power factor penalties and optimize energy efficiency for commercial and industrial electrical grids.",
        image: "/services/pcc-panel-2.jpg",
        imageOptions: [
          "/services/pcc-panel-2.jpg",
          "/services/mcc-panel-2.jpg"
        ]
      },
      {
        id: "p6",
        name: "Feeder Pillars",
        rating: "Up to 3200A",
        detail: "Outdoor distribution feeder pillars up to 3200A",
        category: "Outdoor Distribution",
        type: "Weatherproof IP-65",
        features: ["Up to 3200A Rating", "Aluminum / Copper Busbars", "Feeder Switches"],
        description: "Outdoor distribution feeder pillars built for street lighting and outdoor power grids.",
        image: "/services/pcc-panel-2.jpg",
        imageOptions: [
          "/services/pcc-panel-2.jpg"
        ]
      }
    ]
  },
  {
    category: "2. Automation & Control Systems",
    items: [
      {
        id: "p7",
        name: "PLC-Based Auto Load Management Systems",
        rating: "Automated Control",
        detail: "Programmable logic controller auto load shedding and management",
        category: "Automation",
        type: "PLC System",
        features: ["Auto Load Shedding", "PLC Logic Control", "Touchscreen HMI"],
        description: "Programmable logic controller auto load shedding and management.",
        image: "/services/pcc-panel-2.jpg",
        imageOptions: ["/services/pcc-panel-2.jpg"]
      },
      {
        id: "p8",
        name: "PLC & Drive-Based HVAC Control Panels",
        rating: "Up to 100 Drives",
        detail: "VFD & PLC automated panels controlling up to 100 HVAC drives",
        category: "HVAC Automation",
        type: "VFD Drive Control",
        features: ["Up to 100 Drives Control", "VFD Speed Regulation", "BMS Integration"],
        description: "VFD & PLC automated panels controlling up to 100 HVAC drives.",
        image: "/services/mcc-panel-2.jpg",
        imageOptions: ["/services/mcc-panel-2.jpg"]
      },
      {
        id: "p9",
        name: "Power Management Systems (SCADA-Based PLC Panels)",
        rating: "SCADA Integrated",
        detail: "For real-time power monitoring, telemetry, and energy management",
        category: "SCADA",
        type: "Power Monitoring",
        features: ["SCADA Telemetry", "Energy Metering", "Modbus RTU Communication"],
        description: "For real-time power monitoring, telemetry, and energy management.",
        image: "/services/pcc-panel-1.jpg",
        imageOptions: ["/services/pcc-panel-1.jpg"]
      },
      {
        id: "p10",
        name: "Auto / Manual Synchronizing Panels",
        rating: "Genset Sync",
        detail: "Auto and manual DG set synchronization panels",
        category: "DG Synchronization",
        type: "Genset Control",
        features: ["Auto / Manual Mode", "Genset Protection", "Bus Coupler Control"],
        description: "Auto and manual DG set synchronization panels.",
        image: "/services/pcc-panel-2.jpg",
        imageOptions: ["/services/pcc-panel-2.jpg"]
      },
      {
        id: "p11",
        name: "Auto Synchronizing Load Sharing & Management Panels",
        rating: "Up to 8 DG Sets",
        detail: "Automatic load sharing between up to 8 DG sets",
        category: "Load Sharing",
        type: "Parallel DG Control",
        features: ["Up to 8 DG Sets", "Equal Load Distribution", "Peak Shaving Logic"],
        description: "Automatic load sharing between up to 8 DG sets.",
        image: "/services/pcc-panel-1.jpg",
        imageOptions: ["/services/pcc-panel-1.jpg"]
      }
    ]
  },
  {
    category: "3. Busbar & Power Distribution Systems",
    items: [
      {
        id: "p12",
        name: "Bus Trunking Systems",
        rating: "Up to 5000A",
        detail: "Segregated / Compact Type bus trunking up to 5000A",
        category: "Busbar Transmission",
        type: "Compact / Segregated",
        features: ["Up to 5000A Rating", "Copper / Aluminum Conductor", "Low Voltage Drop"],
        description: "Segregated / Compact Type bus trunking up to 5000A.",
        image: "/services/busduct-tpn-1.jpg",
        imageOptions: [
          "/services/busduct-tpn-1.jpg",
          "/services/busduct-tpn-2.jpg"
        ]
      },
      {
        id: "p13",
        name: "Rising Mains",
        rating: "Up to 5000A",
        detail: "Segregated / Compact Type vertical rising mains up to 5000A",
        category: "Vertical Distribution",
        type: "Rising Main",
        features: ["Up to 5000A Capacity", "Tap-off Boxes", "Fire Barrier Seals"],
        description: "Segregated / Compact Type vertical rising mains up to 5000A.",
        image: "/services/busduct-tpn-2.jpg",
        imageOptions: [
          "/services/busduct-tpn-2.jpg",
          "/services/busduct-tpn-1.jpg"
        ]
      }
    ]
  },
  {
    category: "4. Railway Products",
    items: [
      { id: "p14", name: "Retention Tanks for Railway Coaches", rating: "SS-316 Stainless Steel", detail: "Bio-retention tanks manufactured for Indian Railways passenger coaches", category: "Railway Coach", type: "SS-316 Fabrication", features: ["SS-316 Grade Stainless Steel", "RDSO Approved Specification", "Leak Proof TIG Weld"], description: "Bio-retention tanks manufactured for Indian Railways passenger coaches.", image: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80", imageOptions: ["https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=800&q=80"] },
      { id: "p15", name: "Railway Electrical Fuse Boxes", rating: "Vibration Resistant", detail: "Locomotive and coach underframe electrical fuse boxes", category: "Locomotive Stock", type: "Vibration Resistant", features: ["Vibration Resistant Design", "IP-66 Enclosure", "High Voltage Insulation"], description: "Locomotive and coach underframe electrical fuse boxes.", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80", imageOptions: ["https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80"] },
      { id: "p16", name: "Custom Fabricated Railway Electrical Enclosures", rating: "IP-66 Enclosure", detail: "Specialized metal enclosures for railway electrical stock", category: "Railway Enclosure", type: "Custom Metal Box", features: ["IP-66 Powder Coated", "CNC Laser Cut Body", "RDSO Norms"], description: "Specialized metal enclosures for railway electrical stock.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80", imageOptions: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"] }
    ]
  }
];

export const servicesData = [...electricalServices, ...mepfServices];
export const productPanels = productRangeCategory[0].items;

export const machineryStrengthList = [
  "1. CNC Fiber Laser Cutting Machine – 1.5 KW",
  "2. Drill Machine",
  "3. TIG Welding Machine (200–300A)",
  "4. Argon Gas Shielding Setup",
  "5. Hand Grinder Machine (4 inch)",
  "6. Stainless Steel Hand Grinder",
  "7. Burr Removal Tools",
  "8. Radial Drill Machine",
  "9. Stand Type Drill Machine",
  "10. CNC Bending Machine (40–100 Ton / 16 mm)",
  "11. Cutter Grinder",
  "12. Angle Grinder",
  "13. Hydraulic Goods Lift (500–5000 kg)",
  "14. Welding Machine Auto MIG 350 S (350A)",
  "15. MIG 330U Welding Machine (330A)",
  "16. Welding Machine Arc 280 (280A)",
  "17. Hydraulic Busbar Processor (12 mm / 120 mm – 30 Ton)",
  "18. Manual Sheet Cutting Machine",
  "19. Powder Coating Oven (200–250°C)",
  "20. Powder Coating Booth",
  "21. Powder Coating Machine (100 kV)",
  "22. Weighing Machine (100–200 kg)",
  "23. Screw Air Compressor (20 HP)",
  "24. Busbar Rack",
  "25. Sheet Rack",
  "26. Electrical Distribution Panel (160A)",
  "27. Electrical Meter Panel (250A)",
  "28. Ferrule Printing Machine",
  "29. Bandsaw Cutting Machine",
  "30. Pipe Bending Machine",
  "31. GCO 220 Cut-off Machine (14 inch)",
  "32. PUG Cutter"
];

export const machineryStrength = machineryStrengthList.map((m, idx) => ({
  id: `m-${idx}`,
  name: m,
  capacity: "Industrial Grade",
  category: "cnc",
  description: "In-house manufacturing equipment at Greater Noida Plant."
}));

export const testingStrengthList = [
  "• High Voltage Test Set 2.5/5 KV. Automatic Multi Meter (Fluke, Rushall) Automatic Clamp Meter",
  "• With flexible CT up to 4000A",
  "• Secondary injection— COA.2 class Multi-function meter (Analyser)",
  "• ACB Release Test Kit",
  "• IR Tester 200 m ohm 5kv Multi Testing Bench Phase Sequence Tester Thermal Imager",
  "• Digital Vernier Callipers (0–300 mm)",
  "• Micrometres (0–25 mm)",
  "• Profile Gauges",
  "• Surface Flatness Measuring Tools",
  "• GO & NO-GO Gauges",
  "• Pressure Indicator (0–10 bar)",
  "• Dye Penetration Testing Kit",
  "• Measuring Scale – 3 meter",
  "• Measuring Tape – 3 m / 5 m"
];

export const projectProcessingFlowchart = [
  { step: "01", stage: "Customer Marketing / Tender Collection", desc: "Tender acquisition & preliminary requirement gathering" },
  { step: "02", stage: "Costing Tender Submission", desc: "Detailed technical costing and formal bid submission" },
  { step: "03", stage: "Order Finalisation", desc: "Contract finalization and client approval" },
  { step: "04", stage: "Engineering Planning & Designing", desc: "Detailed CAD drawing & engineering design" },
  { step: "05", stage: "Site Inspection and Discussion", desc: "Joint customer site inspection & technical alignment" },
  { step: "06", stage: "Finance and Administration", desc: "Commercial approval & resource allocation" },
  { step: "07", stage: "Manpower Deployment & Procurement", desc: "Material procurement & site store accommodation" },
  { step: "08", stage: "Contract Execution & Q.C. Inspection", desc: "In-house manufacturing & stage quality control inspection" },
  { step: "09", stage: "Testing & Commissioning", desc: "High voltage testing, Q.C inspection report submission & site commissioning" },
  { step: "10", stage: "Handing Over & Customer Service", desc: "User training, general maintenance instruction, fault finding support & handing over" }
];

export const teamBreakdown = {
  technical: [
    { title: "Project Incharge", count: 1, qualification: "B.Tech / Graduate Engg. With experience" },
    { title: "Electrical Power Advisor", count: 1, qualification: "Graduate in Elect. Engg. With experience" },
    { title: "Electrical Engineer", count: 2, qualification: "Diploma Engineer with experience" },
    { title: "Consultant of specialized field", count: 1, qualification: "Specialized in their field" },
    { title: "Supervisor / Foreman", count: 8, qualification: "Trained and experienced" },
    { title: "Store Incharge", count: 2, qualification: "High School with experience" },
    { title: "Electrician", count: 8, qualification: "ITI with experience" },
    { title: "Wireman", count: 7, qualification: "ITI with experience" },
    { title: "Technician", count: 4, qualification: "Trained with experience" },
    { title: "Helper", count: 6, qualification: "Experienced" },
    { title: "Watchman / Security Man", count: 3, qualification: "General" },
    { title: "Peon", count: 2, qualification: "Experienced" }
  ],
  official: [
    { title: "Project Co-Ordinator", count: 1, qualification: "Graduate, Specialization and experience" },
    { title: "Marketing Personnel", count: 2, qualification: "Electrical Engineer with experience" },
    { title: "Executive Admin", count: 1, qualification: "Graduate, Specialization and experience" },
    { title: "C. A. / Auditor", count: 1, qualification: "Graduate and FCA with experience" },
    { title: "Consultants (Commercial & Legal)", count: 1, qualification: "Specialized in their field" },
    { title: "Office Assistant", count: 2, qualification: "Higher Secondary with experience" },
    { title: "Clerk", count: 2, qualification: "High School with experience" },
    { title: "Peon", count: 1, qualification: "Middle pass with experience" }
  ]
};

export const ongoingProjects = {
  residential: [
    "1. Aims Max Gardenia Developers Pvt. Ltd. Sector 75",
    "2. La Palacia Greater Noida Extension",
    "3. ILD Sohna",
    "4. Gardenia Glory-46, Sector-46, Noida"
  ],
  commercial: [
    "1. Sparsh Global School, HS-01, Sector-20, Greater Noida, G.B Nagar",
    "2. Maruti Suzuki India Limited, Hapur",
    "3. Spectrum Metro Mall, Sector-75, Noida",
    "4. PepsiCo Channo Plant, Channo Punjab",
    "5. Modi Steels (Modi Industries), Modinagar",
    "6. Taj Sat's, Jewar Airport, Noida",
    "7. Newtech La Galaxia, Surajpur, Greater Noida"
  ]
};

export const completedProjects = {
  residential: [
    "1. HRC Engg. Estate Pvt. Ltd. Indirapuram, Ghaziabad",
    "2. Gardenia Glory-46, Sector-46, Noida",
    "3. Gardenia India Limited, Crossing Republic, Ghaziabad",
    "4. Gardenia Gateway",
    "5. Sikka Group",
    "6. White House Sector-75, Noida",
    "7. Newtech La Galaxia, Surajpur, Greater Noida",
    "8. SKG Homes Pvt. Limited, Sector-13, Vasundhara, Ghaziabad",
    "9. Swarnprastha Public School, Sector-19, Sonipat",
    "10. Futech Shelter Pvt. Ltd. Sector-75, Noida",
    "11. Kashyap Mart Mall, Patna"
  ],
  commercial: [
    "1. Autotech Development Centre Pvt. Ltd. Sector-8 Gurgaon",
    "2. Urmila Sports Academy, Hansiyawas, Rajasthan",
    "3. Tirupati Plant, Dadri To Jhajhar",
    "4. Cargo Airport",
    "5. UMA Ayurvedic Pvt. Ltd. Madhavpuri, Kasganj",
    "6. GLS Rewari Plant, Gurgaon, Haryana",
    "7. NEXG Global Trading Ltd. B-20, Sector, Noida",
    "8. Shiva Statue, Nathdwara Udaipur",
    "9. Westline Hotel, Rishikesh, Uttarakhand",
    "10. Emaar Marbella 607 Time Tower M.G Road, Sector-66, Gurgaon",
    "11. Assam Power Distribution Company Ltd, Guwahati, Assam",
    "12. Wellington & Kingston Sector-75, Noida",
    "13. Win Medicare (Modi Group)",
    "14. Spectrum Metro, Sector-75, Noida"
  ]
};

export const projectHighlights = [
  ...ongoingProjects.commercial.map((p, i) => ({ id: `p-${i}`, title: p, client: "Commercial Client", category: "commercial", location: "NCR", status: "ongoing" }))
];

export const valuableClientsList = [
  "HP (Hindustan Petroleum)", "Sapura Energy", "L&T (Larsen & Toubro)", "Newtech", "UP Power Corporation",
  "Omaxe Group", "Gardenia Group", "Mankind Pharma", "Akash Hospital", "Modi Industries",
  "Westside", "Emaar India", "Swarnprastha Public School", "PepsiCo India", "Amrapali Group",
  "Spectrum Metro", "Star Cement", "Maxblis", "Delhi International Airport (DIAL)", "NSL Techzone",
  "Taj SATS", "Prateek Group", "Sparsh Global School"
];

export const valuableClients = valuableClientsList;

export const channelPartnersList = [
  "Havells", "Schneider Electric", "Polycab Wires", "KEI Wires & Cables", "ABB", "L&T Switchgear", "PVJ Power", "LS Power Control"
];

export const channelPartners = channelPartnersList.map(name => ({ name, role: "Authorized Partner" }));

export const careerOpenings = [
  {
    id: "job-1",
    title: "Project Incharge / Manager",
    department: "Projects & EPC",
    location: "Noida / Greater Noida / Site Locations",
    experience: "5-10 Years",
    qualification: "B.Tech / Graduate Electrical Engineer",
    description: "Managing turnkey 33KV substation projects, site execution, client coordination, testing & commissioning."
  },
  {
    id: "job-2",
    title: "Electrical CAD & Design Engineer",
    department: "Engineering & Costing",
    location: "Noida Head Office",
    experience: "3-6 Years",
    qualification: "Diploma / Degree in Electrical Engineering",
    description: "Designing LT PCC/MCC panel busbar layouts, control schematics, AutoCAD drafting, and BOM generation."
  },
  {
    id: "job-3",
    title: "Quality Assurance / Testing Engineer",
    department: "Quality & Testing",
    location: "Greater Noida Factory Plant",
    experience: "2-5 Years",
    qualification: "Diploma / ITI Electrical",
    description: "Performing 5KV High Voltage insulation testing, secondary injection relay testing, Fluke clamp analysis, and QA report generation."
  },
  {
    id: "job-4",
    title: "Site Supervisor / Foreman",
    department: "Site Execution",
    location: "Pan-India Project Sites",
    experience: "3-8 Years",
    qualification: "ITI / Trained Supervisor",
    description: "Supervising cable tray laying, TPN busduct installation, panel erection, and worker safety on site."
  }
];
