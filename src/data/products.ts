import { Product } from '../types';

export const products: Product[] = [
  // Home Appliances
  {
    id: '1',
    name: 'Samsung Double Door Refrigerator',
    price: 45999,
    originalPrice: 52999,
    category: 'Home Appliances',
    subcategory: 'Refrigerators',
    description: 'Energy-efficient double door refrigerator with advanced cooling technology and spacious storage.',
    features: [
      'Frost-free technology',
      'Digital inverter compressor',
      'Multi-flow cooling',
      'Vegetable freshness technology'
    ],
    specifications: {
      'Capacity': '253 L',
      'Energy Rating': '3 Star',
      'Defrosting Type': 'Frost Free',
      'Compressor Type': 'Inverter',
      'Warranty': '1 Year Comprehensive + 9 Years on Compressor'
    },
    modelNumber: 'RT28T3722S8/HL',
    brand: 'Samsung',
    rating: 4.3,
    reviewCount: 1247,
    stockStatus: 'in-stock',
    stockQuantity: 15,
    images: ['https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'LG Front Load Washing Machine',
    price: 32999,
    originalPrice: 38999,
    category: 'Home Appliances',
    subcategory: 'Washing Machines',
    description: 'Fully automatic front loading washing machine with AI Direct Drive technology.',
    features: [
      'AI Direct Drive',
      'Steam wash',
      'Smart diagnosis',
      '6 Motion DD technology'
    ],
    specifications: {
      'Capacity': '7 Kg',
      'Type': 'Front Load',
      'Energy Rating': '5 Star',
      'Motor Type': 'Inverter Direct Drive',
      'Warranty': '2 Years Comprehensive + 10 Years on Motor'
    },
    modelNumber: 'FHM1207ZDL',
    brand: 'LG',
    rating: 4.5,
    reviewCount: 892,
    stockStatus: 'in-stock',
    stockQuantity: 8,
    images: ['https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Daikin Split AC 1.5 Ton',
    price: 38999,
    category: 'Home Appliances',
    subcategory: 'Air Conditioners',
    description: 'Energy-efficient split AC with copper coil and advanced filtration system.',
    features: [
      'Copper coil condenser',
      'PM 2.5 filter',
      'Dew clean technology',
      'Coanda airflow'
    ],
    specifications: {
      'Capacity': '1.5 Ton',
      'Energy Rating': '3 Star',
      'Coil Material': 'Copper',
      'Refrigerant': 'R32',
      'Warranty': '1 Year Comprehensive + 4 Years on Compressor'
    },
    modelNumber: 'FTKF50TV',
    brand: 'Daikin',
    rating: 4.4,
    reviewCount: 658,
    stockStatus: 'in-stock',
    stockQuantity: 12,
    images: ['https://images.pexels.com/photos/7746409/pexels-photo-7746409.jpeg']
  },
  {
    id: '4',
    name: 'IFB Microwave Oven Convection',
    price: 12999,
    category: 'Home Appliances',
    subcategory: 'Microwave Ovens',
    description: 'Convection microwave oven with auto-cook menus and rotisserie function.',
    features: [
      'Convection cooking',
      'Auto-cook menus',
      'Rotisserie function',
      'Child safety lock'
    ],
    specifications: {
      'Capacity': '25 L',
      'Type': 'Convection',
      'Power Output': '900W',
      'Control Type': 'Touch Panel',
      'Warranty': '1 Year Comprehensive'
    },
    modelNumber: '25SC4',
    brand: 'IFB',
    rating: 4.2,
    reviewCount: 445,
    stockStatus: 'in-stock',
    stockQuantity: 20,
    images: ['https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg']
  },
  {
    id: '5',
    name: 'Kent RO Water Purifier',
    price: 18999,
    category: 'Home Appliances',
    subcategory: 'Water Purifiers',
    description: 'RO+UV+UF water purifier with TDS controller and UV LED indicator.',
    features: [
      'RO+UV+UF purification',
      'TDS controller',
      'UV LED indicator',
      'Zero water wastage technology'
    ],
    specifications: {
      'Capacity': '8 L',
      'Purification': 'RO+UV+UF',
      'Storage Tank': 'Food Grade Plastic',
      'Electrical Rating': '24V SMPS',
      'Warranty': '1 Year Free Service'
    },
    modelNumber: 'GRAND PLUS',
    brand: 'Kent',
    rating: 4.1,
    reviewCount: 756,
    stockStatus: 'low-stock',
    stockQuantity: 3,
    images: ['https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg']
  },
  {
    id: '6',
    name: 'Eureka Forbes Vacuum Cleaner',
    price: 8999,
    category: 'Home Appliances',
    subcategory: 'Vacuum Cleaners',
    description: 'Powerful bagless vacuum cleaner with HEPA filter and multiple attachments.',
    features: [
      'Bagless technology',
      'HEPA filter',
      'Multiple attachments',
      '1400W power'
    ],
    specifications: {
      'Power': '1400W',
      'Type': 'Bagless',
      'Capacity': '1.5 L',
      'Filter Type': 'HEPA',
      'Warranty': '2 Years'
    },
    modelNumber: 'TRENDY ZIP',
    brand: 'Eureka Forbes',
    rating: 4.0,
    reviewCount: 324,
    stockStatus: 'in-stock',
    stockQuantity: 18,
    images: ['https://images.pexels.com/photos/4239030/pexels-photo-4239030.jpeg']
  },

  // Kitchen Appliances
  {
    id: '7',
    name: 'Preethi Blue Leaf Diamond Mixer Grinder',
    price: 4999,
    category: 'Kitchen Appliances',
    subcategory: 'Mixer Grinders',
    description: 'Powerful mixer grinder with stainless steel jars and overload protection.',
    features: [
      '750W powerful motor',
      '4 SS jars',
      'Overload protection',
      'Ergonomic handles'
    ],
    specifications: {
      'Power': '750W',
      'Motor Speed': '18000 RPM',
      'Jars': '4 Stainless Steel',
      'Voltage': '230V',
      'Warranty': '2 Years on Motor'
    },
    modelNumber: 'Blue Leaf Diamond',
    brand: 'Preethi',
    rating: 4.4,
    reviewCount: 2156,
    stockStatus: 'in-stock',
    stockQuantity: 25,
    images: ['https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg']
  },
  {
    id: '8',
    name: 'Prestige Induction Cooktop',
    price: 2499,
    category: 'Kitchen Appliances',
    subcategory: 'Induction Cooktops',
    description: 'Energy-efficient induction cooktop with preset cooking menus.',
    features: [
      '1900W power',
      'Preset cooking menus',
      'Touch panel control',
      'Automatic shut-off'
    ],
    specifications: {
      'Power': '1900W',
      'Voltage': '230V AC',
      'Frequency': '50Hz',
      'Temperature Control': '60°C to 240°C',
      'Warranty': '1 Year'
    },
    modelNumber: 'PIC 3.0 V3',
    brand: 'Prestige',
    rating: 4.2,
    reviewCount: 1847,
    stockStatus: 'in-stock',
    stockQuantity: 30,
    images: ['https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg']
  },
  {
    id: '9',
    name: 'Philips Electric Kettle',
    price: 1299,
    category: 'Kitchen Appliances',
    subcategory: 'Electric Kettles',
    description: 'Stainless steel electric kettle with boil-dry protection.',
    features: [
      '1.5L capacity',
      'Stainless steel body',
      'Boil-dry protection',
      'Auto shut-off'
    ],
    specifications: {
      'Capacity': '1.5 L',
      'Power': '1800W',
      'Material': 'Stainless Steel',
      'Cord Length': '75cm',
      'Warranty': '2 Years'
    },
    modelNumber: 'HD9306/06',
    brand: 'Philips',
    rating: 4.3,
    reviewCount: 956,
    stockStatus: 'in-stock',
    stockQuantity: 40,
    images: ['https://images.pexels.com/photos/6489665/pexels-photo-6489665.jpeg']
  },
  {
    id: '10',
    name: 'Morphy Richards Pop Up Toaster',
    price: 1899,
    category: 'Kitchen Appliances',
    subcategory: 'Toasters',
    description: '2-slice pop-up toaster with browning control and crumb tray.',
    features: [
      '2 slice capacity',
      '7 browning levels',
      'Cancel button',
      'Removable crumb tray'
    ],
    specifications: {
      'Slices': '2',
      'Power': '750W',
      'Browning Levels': '7',
      'Material': 'Stainless Steel',
      'Warranty': '2 Years'
    },
    modelNumber: 'AT 201',
    brand: 'Morphy Richards',
    rating: 4.1,
    reviewCount: 623,
    stockStatus: 'in-stock',
    stockQuantity: 22,
    images: ['https://images.pexels.com/photos/4686824/pexels-photo-4686824.jpeg']
  },
  {
    id: '11',
    name: 'Nespresso Coffee Maker',
    price: 8999,
    category: 'Kitchen Appliances',
    subcategory: 'Coffee Makers',
    description: 'Premium espresso machine with milk frother and programmable settings.',
    features: [
      'Espresso & lungo',
      '19-bar pressure',
      'Milk frother',
      'Energy saving mode'
    ],
    specifications: {
      'Type': 'Capsule',
      'Pressure': '19 bar',
      'Water Tank': '1L',
      'Cup Sizes': '2 (Espresso & Lungo)',
      'Warranty': '2 Years'
    },
    modelNumber: 'Essenza Mini',
    brand: 'Nespresso',
    rating: 4.6,
    reviewCount: 445,
    stockStatus: 'in-stock',
    stockQuantity: 15,
    images: ['https://images.pexels.com/photos/6489664/pexels-photo-6489664.jpeg']
  },

  // Audio & Video
  {
    id: '12',
    name: 'Sony 55" 4K Smart TV',
    price: 52999,
    originalPrice: 64999,
    category: 'Audio & Video',
    subcategory: 'Televisions',
    description: '55-inch 4K HDR Smart TV with Android TV and Dolby Vision.',
    features: [
      '4K HDR display',
      'Android TV',
      'Dolby Vision & Atmos',
      'Google Assistant built-in'
    ],
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD (3840x2160)',
      'Display Type': 'LED',
      'Smart TV': 'Android TV',
      'Warranty': '1 Year + 1 Year Extended'
    },
    modelNumber: 'KD-55X74L',
    brand: 'Sony',
    rating: 4.5,
    reviewCount: 892,
    stockStatus: 'in-stock',
    stockQuantity: 8,
    images: ['https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg'],
    isFeatured: true
  },
  {
    id: '13',
    name: 'JBL Home Theatre System',
    price: 19999,
    category: 'Audio & Video',
    subcategory: 'Home Theatre Systems',
    description: '5.1 channel home theatre system with wireless subwoofer.',
    features: [
      '5.1 channel surround',
      'Wireless subwoofer',
      'Multiple connectivity',
      'Remote control'
    ],
    specifications: {
      'Channels': '5.1',
      'Power Output': '1000W PMPO',
      'Connectivity': 'Bluetooth, USB, AUX',
      'Frequency Response': '20Hz - 20kHz',
      'Warranty': '1 Year'
    },
    modelNumber: 'Cinema SB271',
    brand: 'JBL',
    rating: 4.3,
    reviewCount: 567,
    stockStatus: 'in-stock',
    stockQuantity: 12,
    images: ['https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg']
  },
  {
    id: '14',
    name: 'Marshall Bluetooth Speaker',
    price: 12999,
    category: 'Audio & Video',
    subcategory: 'Bluetooth Speakers',
    description: 'Portable Bluetooth speaker with classic Marshall design and powerful sound.',
    features: [
      'Bluetooth 5.0',
      '20+ hours battery',
      'Waterproof IPX7',
      'Multi-host functionality'
    ],
    specifications: {
      'Bluetooth': 'Version 5.0',
      'Battery Life': '20+ hours',
      'Water Resistance': 'IPX7',
      'Frequency Range': '60Hz - 20kHz',
      'Warranty': '1 Year'
    },
    modelNumber: 'Emberton II',
    brand: 'Marshall',
    rating: 4.7,
    reviewCount: 723,
    stockStatus: 'in-stock',
    stockQuantity: 18,
    images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg']
  },
  {
    id: '15',
    name: 'Samsung Soundbar',
    price: 15999,
    category: 'Audio & Video',
    subcategory: 'Soundbars',
    description: '2.1 channel soundbar with wireless subwoofer and Dolby Digital.',
    features: [
      '2.1 channel sound',
      'Wireless subwoofer',
      'Dolby Digital',
      'Bluetooth connectivity'
    ],
    specifications: {
      'Channels': '2.1',
      'Power Output': '200W',
      'Connectivity': 'Bluetooth, HDMI, Optical',
      'Subwoofer': 'Wireless',
      'Warranty': '1 Year'
    },
    modelNumber: 'HW-T450',
    brand: 'Samsung',
    rating: 4.4,
    reviewCount: 445,
    stockStatus: 'in-stock',
    stockQuantity: 15,
    images: ['https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg']
  },
  {
    id: '16',
    name: 'Sony WH-1000XM4 Headphones',
    price: 24999,
    originalPrice: 29999,
    category: 'Audio & Video',
    subcategory: 'Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery',
      'Quick charge (10min = 5hrs)',
      'Touch sensor controls'
    ],
    specifications: {
      'Type': 'Over-ear',
      'Battery Life': '30 hours',
      'Charging': 'USB-C',
      'Bluetooth': 'Version 5.0',
      'Warranty': '1 Year'
    },
    modelNumber: 'WH-1000XM4',
    brand: 'Sony',
    rating: 4.8,
    reviewCount: 1567,
    stockStatus: 'in-stock',
    stockQuantity: 20,
    images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'],
    isFeatured: true
  },

  // Miscellaneous Electronics
  {
    id: '17',
    name: 'Hikvision Security Camera',
    price: 3999,
    category: 'Miscellaneous Electronics',
    subcategory: 'Surveillance Cameras',
    description: '1080p HD wireless security camera with night vision and motion detection.',
    features: [
      '1080p HD video',
      'Night vision',
      'Motion detection',
      'Mobile app control'
    ],
    specifications: {
      'Resolution': '1080p Full HD',
      'Connectivity': 'Wi-Fi',
      'Storage': 'Cloud + SD card',
      'Field of View': '110°',
      'Warranty': '2 Years'
    },
    modelNumber: 'DS-2CV2Q01FD-IW',
    brand: 'Hikvision',
    rating: 4.2,
    reviewCount: 892,
    stockStatus: 'in-stock',
    stockQuantity: 35,
    images: ['https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg']
  },
  {
    id: '18',
    name: 'V-Guard Voltage Stabilizer',
    price: 2499,
    category: 'Miscellaneous Electronics',
    subcategory: 'Voltage Stabilizers',
    description: 'Automatic voltage stabilizer for home appliances with surge protection.',
    features: [
      'Wide voltage range',
      'Surge protection',
      'LED indicators',
      'Overload protection'
    ],
    specifications: {
      'Capacity': '4 kVA',
      'Input Voltage': '140-300V',
      'Output Voltage': '230V ± 5%',
      'Type': 'Servo Controlled',
      'Warranty': '3 Years'
    },
    modelNumber: 'VWI 4000',
    brand: 'V-Guard',
    rating: 4.1,
    reviewCount: 456,
    stockStatus: 'in-stock',
    stockQuantity: 28,
    images: ['https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg']
  },
  {
    id: '19',
    name: 'Universal USB-C Adapter',
    price: 799,
    category: 'Miscellaneous Electronics',
    subcategory: 'Adapters',
    description: 'Multi-port USB-C adapter with HDMI, USB 3.0, and card reader.',
    features: [
      'USB-C to multiple ports',
      '4K HDMI output',
      'Fast charging',
      'Compact design'
    ],
    specifications: {
      'Ports': 'HDMI, USB 3.0 x2, SD/TF',
      'HDMI Output': '4K@30Hz',
      'Power Delivery': '100W',
      'Material': 'Aluminum alloy',
      'Warranty': '1 Year'
    },
    modelNumber: 'UC-HUB7',
    brand: 'Generic',
    rating: 4.0,
    reviewCount: 234,
    stockStatus: 'in-stock',
    stockQuantity: 50,
    images: ['https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg']
  },
  {
    id: '20',
    name: 'Duracell AA Batteries',
    price: 299,
    category: 'Miscellaneous Electronics',
    subcategory: 'Batteries',
    description: 'Long-lasting alkaline batteries pack of 8 for everyday devices.',
    features: [
      'Pack of 8 batteries',
      '10-year shelf life',
      'Leak-proof design',
      'Superior performance'
    ],
    specifications: {
      'Type': 'Alkaline AA',
      'Voltage': '1.5V',
      'Quantity': '8 pieces',
      'Shelf Life': '10 years',
      'Warranty': '1 Year'
    },
    modelNumber: 'MN1500-8',
    brand: 'Duracell',
    rating: 4.5,
    reviewCount: 1234,
    stockStatus: 'in-stock',
    stockQuantity: 100,
    images: ['https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg']
  },
  {
    id: '21',
    name: 'Anker Fast Charger',
    price: 1299,
    category: 'Miscellaneous Electronics',
    subcategory: 'Chargers',
    description: '20W USB-C fast charger with PowerIQ 3.0 technology.',
    features: [
      '20W fast charging',
      'PowerIQ 3.0',
      'Compact design',
      'Universal compatibility'
    ],
    specifications: {
      'Power Output': '20W',
      'Input': '100-240V~50/60Hz',
      'Output': '5V⎓3A / 9V⎓2.22A / 12V⎓1.67A',
      'Technology': 'PowerIQ 3.0',
      'Warranty': '18 Months'
    },
    modelNumber: 'PowerPort III Nano',
    brand: 'Anker',
    rating: 4.6,
    reviewCount: 789,
    stockStatus: 'in-stock',
    stockQuantity: 45,
    images: ['https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg']
  }
];

export const categories = [
  {
    name: 'Home Appliances',
    subcategories: ['Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwave Ovens', 'Water Purifiers', 'Vacuum Cleaners']
  },
  {
    name: 'Kitchen Appliances',
    subcategories: ['Mixer Grinders', 'Induction Cooktops', 'Electric Kettles', 'Toasters', 'Coffee Makers']
  },
  {
    name: 'Audio & Video',
    subcategories: ['Televisions', 'Home Theatre Systems', 'Bluetooth Speakers', 'Soundbars', 'Headphones']
  },
  {
    name: 'Miscellaneous Electronics',
    subcategories: ['Surveillance Cameras', 'Voltage Stabilizers', 'Adapters', 'Batteries', 'Chargers']
  }
];