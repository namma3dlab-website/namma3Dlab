export interface Product {
  id: string;
  name: string;
  category: 'gifts' | 'decor' | 'idols' | 'gadgets';
  price: number;
  material: string;
  dimensions: string;
  leadTime: string;
  description: string;
  colorGradient: string;
  iconName: string;
}

export interface MaterialSpec {
  name: string;
  code: string;
  type: string;
  density: string;
  tempResistance: string;
  tensileStrength: string;
  finish: string;
  pricePerGram: number;
  badge: string;
  badgeType: 'popular' | 'durable' | 'hightemp' | 'flexible' | 'resin' | 'cf';
  recommendedFor: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  technology: string;
  tolerance: string;
  layerHeight: string;
  description: string;
  benefits: string[];
  equipment: string;
}

export const CATALOG_PRODUCTS: Product[] = [
  {
    id: 'prod-vase',
    name: 'Geometric Spiral Fluted Vase',
    category: 'decor',
    price: 449,
    material: 'Silk PLA+',
    dimensions: '180 × 110 × 110 mm',
    leadTime: '24 Hours',
    description: 'Watertight parametric vase with spiral ribbing and metallic silk shimmer reflection.',
    colorGradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
    iconName: 'Feather'
  },
  {
    id: 'prod-idol',
    name: 'Intricate Cultural Deity Idol',
    category: 'idols',
    price: 799,
    material: 'Ultra-Fine SLA Resin',
    dimensions: '120 × 75 × 65 mm',
    leadTime: '24–48 Hours',
    description: 'Museum-grade 0.05mm layer resolution with antique bronze cured acrylic finish.',
    colorGradient: 'linear-gradient(135deg, #D97706, #FBBF24)',
    iconName: 'Sun'
  },
  {
    id: 'prod-lamp',
    name: 'Voronoi Ambient Desk Lamp',
    category: 'decor',
    price: 1299,
    material: 'Tough PLA / Wood Composite',
    dimensions: '210 × 130 × 130 mm',
    leadTime: '48 Hours',
    description: 'Biomorphic Voronoi cell geometry creating dramatic light refraction. Includes warm USB LED puck.',
    colorGradient: 'linear-gradient(135deg, #16A34A, #4ADE80)',
    iconName: 'Lamp'
  },
  {
    id: 'prod-keychain',
    name: 'Bespoke Dual-Tone Keychains',
    category: 'gifts',
    price: 199,
    material: 'PETG Impact Resistant',
    dimensions: '70 × 24 × 5 mm',
    leadTime: 'Same Day',
    description: 'Industrial dual-color fused typography. Impervious to pocket wear, keys, and water.',
    colorGradient: 'linear-gradient(135deg, #DB2777, #F472B6)',
    iconName: 'Key'
  },
  {
    id: 'prod-stand',
    name: 'Modular Headphone & Phone Stand',
    category: 'gadgets',
    price: 649,
    material: 'Matte PETG + Weighted Base',
    dimensions: '240 × 120 × 140 mm',
    leadTime: '24 Hours',
    description: 'Ergonomic acoustic headphone cradle with concealed cable routing and anti-slip rubber pads.',
    colorGradient: 'linear-gradient(135deg, #4F46E5, #818CF8)',
    iconName: 'Headphones'
  },
  {
    id: 'prod-litho',
    name: 'Custom Lithophane Photo Box',
    category: 'gifts',
    price: 1499,
    material: 'Optical Translucent PLA',
    dimensions: '150 × 150 × 40 mm',
    leadTime: '48 Hours',
    description: 'Transforms your favorite portrait into a 3D relief that reveals high-definition imagery when backlit.',
    colorGradient: 'linear-gradient(135deg, #D97706, #FDE68A)',
    iconName: 'Moon'
  },
  {
    id: 'prod-organizer',
    name: 'Hexagonal Desktop Cable Organizer',
    category: 'gadgets',
    price: 349,
    material: 'PLA+ Matte Obsidian',
    dimensions: '110 × 95 × 30 mm',
    leadTime: '24 Hours',
    description: 'Magnetic snap modular organizing cells for USB-C, lightning cables, and SD cards.',
    colorGradient: 'linear-gradient(135deg, #059669, #34D399)',
    iconName: 'Grid'
  },
  {
    id: 'prod-sign',
    name: 'Executive Nameplate & Desk Wedge',
    category: 'gifts',
    price: 599,
    material: 'Dual Extrusion Obsidian / Lime',
    dimensions: '220 × 55 × 35 mm',
    leadTime: '24 Hours',
    description: 'Personalized embossed desk title with dual-color lettering and integrated slant wedge.',
    colorGradient: 'linear-gradient(135deg, #84CC16, #BEF264)',
    iconName: 'Sparkles'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'cap-fdm',
    title: 'High-Speed FDM Additive Manufacturing',
    subtitle: 'CoreXY Fleet • Rapid Functional Prototyping',
    technology: 'Fused Deposition Modeling (FDM / FFF)',
    tolerance: '±0.10 mm calibrated',
    layerHeight: '0.08 mm – 0.28 mm',
    description: 'Multi-head fleet of high-speed Bambu Lab and Voron motion systems capable of 500mm/s print velocity without compromising layer adhesion.',
    benefits: [
      'Zero tooling setup fee or MOQ',
      'Wide material breadth: PLA, PETG, ABS, ASA, TPU, PC',
      'Large build volume up to 300 × 300 × 300 mm',
      'Dual-color and multi-material co-extrusion'
    ],
    equipment: 'Bambu Lab X1-Carbon, P1S Fleet, Voron 2.4'
  },
  {
    id: 'cap-sla',
    title: 'Ultra-High Detail SLA Resin Printing',
    subtitle: 'Micron Precision • Mirror Surface Finish',
    technology: 'Stereolithography (MSLA / LCD)',
    tolerance: '±0.03 mm optical precision',
    layerHeight: '0.02 mm – 0.05 mm',
    description: 'Photopolymer liquid resin cured by 8K monochrome UV light engines for injection-mold quality parts with invisible layer lines.',
    benefits: [
      'Glass-smooth surface finish ready for master molds',
      'Intricate geometries, microscopic threads, and jewelry filigree',
      'High-impact engineering resin formulations',
      'Post-cured with thermal UV chambers'
    ],
    equipment: 'Elegoo Saturn 8K, Anycubic M5s Industrial'
  },
  {
    id: 'cap-cad',
    title: 'Parametric CAD & Reverse Engineering',
    subtitle: 'From Concept / Broken Part to Production',
    technology: 'Parametric Solid Modeling & Mesh Topology',
    tolerance: 'Digital Precision 0.001 mm',
    layerHeight: 'N/A (3D CAD Deliverable)',
    description: 'Have a broken machine component, hand sketch, or idea? Our mechanical design engineers measure, model, and optimize parts for additive manufacturing (DfAM).',
    benefits: [
      'Caliper & optical scanning verification',
      'Internal weight-reducing lattice structures',
      'Export in STEP, IGES, STL, and native CAD formats',
      'Finite Element Analysis (FEA) stress validation'
    ],
    equipment: 'Autodesk Fusion 360, SolidWorks, MeshMixer'
  },
  {
    id: 'cap-batch',
    title: 'Low-Volume Production & B2B Runs',
    subtitle: 'Bridge Manufacturing • 10 to 1,000 Units',
    technology: 'Automated Farm Continuous Slicing',
    tolerance: '±0.10 mm batch repeatability',
    layerHeight: '0.16 mm – 0.24 mm',
    description: 'Bypass costly injection molds. Produce 10 to 1,000 production units within days with tiered commercial pricing and GST invoicing.',
    benefits: [
      'Cost-effective bridge to mass injection molding',
      'Design iterations can be updated mid-batch without scrapped tooling',
      'Automated batch inspection with macro photo verification',
      'Direct Bangalore courier dispatch with tracked delivery'
    ],
    equipment: '8-Unit Calibrated Farm Network'
  }
];

export const MATERIALS_MATRIX: MaterialSpec[] = [
  {
    name: 'PLA & PLA+ Pro',
    code: 'PLA',
    type: 'Biopolymer',
    density: '1.24 g/cm³',
    tempResistance: '55°C',
    tensileStrength: '50 MPa',
    finish: 'Smooth Satin / Gloss',
    pricePerGram: 4.5,
    badge: 'Most Popular',
    badgeType: 'popular',
    recommendedFor: 'Rapid concept prototypes, architectural models, decorative items, and consumer giftwares.'
  },
  {
    name: 'PETG Structural',
    code: 'PETG',
    type: 'Copolyester',
    density: '1.27 g/cm³',
    tempResistance: '75°C',
    tensileStrength: '53 MPa',
    finish: 'Glossy & Semi-Ductile',
    pricePerGram: 6.0,
    badge: 'Impact Proof',
    badgeType: 'durable',
    recommendedFor: 'Mechanical brackets, snap-fit enclosures, outdoor housings, and chemical exposure.'
  },
  {
    name: 'ABS / ASA Industrial',
    code: 'ABS/ASA',
    type: 'Thermoplastic',
    density: '1.05 g/cm³',
    tempResistance: '95°C',
    tensileStrength: '45 MPa',
    finish: 'Matte Industrial / UV Stable',
    pricePerGram: 6.5,
    badge: 'High Heat',
    badgeType: 'hightemp',
    recommendedFor: 'Automotive engine bays, electronics enclosures, outdoor fixtures subject to solar UV.'
  },
  {
    name: 'TPU 95A Flexible',
    code: 'TPU',
    type: 'Polyurethane Elastomer',
    density: '1.21 g/cm³',
    tempResistance: '80°C',
    tensileStrength: '35 MPa (450% Elongation)',
    finish: 'Rubberized Tactile',
    pricePerGram: 9.0,
    badge: 'Flexible',
    badgeType: 'flexible',
    recommendedFor: 'Shock-absorbing gaskets, protective bumpers, drone vibration dampeners, and ergonomic grips.'
  },
  {
    name: 'Tough SLA Resin',
    code: 'SLA Resin',
    type: 'Photopolymer',
    density: '1.15 g/cm³',
    tempResistance: '65°C',
    tensileStrength: '65 MPa',
    finish: 'Glass-Smooth 0.05mm',
    pricePerGram: 14.0,
    badge: 'Ultra Detail',
    badgeType: 'resin',
    recommendedFor: 'High-detail character figurines, dental study models, mold master patterns, and micro mechanics.'
  },
  {
    name: 'Carbon Fiber PETG-CF',
    code: 'PETG-CF',
    type: 'Composite Fiber',
    density: '1.29 g/cm³',
    tempResistance: '82°C',
    tensileStrength: '72 MPa',
    finish: 'Matte Textured Carbon',
    pricePerGram: 12.0,
    badge: 'Aerospace Grade',
    badgeType: 'cf',
    recommendedFor: 'Drone arms, robotics chassis, lightweight high-rigidity structural jigs and fixtures.'
  }
];
