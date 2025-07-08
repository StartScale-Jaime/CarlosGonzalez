export interface Country {
  id: string
  name: string
  flag: string
}

export interface Accommodation {
  id: string
  country: string
  type: 'hostel' | 'hotel-medium' | 'hotel-luxury'
  name: string
  price: number
  image: string
  description: string
}

export interface Meal {
  id: string
  country: string
  level: 'low' | 'medium' | 'high'
  name: string
  price: number
  description: string
}

export interface Transportation {
  id: string
  from: string
  to: string
  type: 'flight' | 'train' | 'bus'
  price: number
  duration: string
  schedule: string
  company: string
}

export const countries: Country[] = [
  { id: 'es', name: 'España', flag: '🇪🇸' },
  { id: 'fr', name: 'Francia', flag: '🇫🇷' },
  { id: 'ad', name: 'Andorra', flag: '🇦🇩' }
]

export const accommodations: Accommodation[] = [
  // España
  {
    id: 'es-hostel',
    country: 'es',
    type: 'hostel',
    name: 'Hostel Madrid Central',
    price: 25,
    image: '/images/hostel-madrid.jpg',
    description: 'Hostel moderno en el centro de Madrid'
  },
  {
    id: 'es-hotel-medium',
    country: 'es',
    type: 'hotel-medium',
    name: 'Hotel Barcelona Plaza',
    price: 85,
    image: '/images/hotel-barcelona.jpg',
    description: 'Hotel de calidad media con buena ubicación'
  },
  {
    id: 'es-hotel-luxury',
    country: 'es',
    type: 'hotel-luxury',
    name: 'Hotel Sevilla Luxury',
    price: 180,
    image: '/images/hotel-sevilla.jpg',
    description: 'Hotel de lujo con spa y vistas panorámicas'
  },
  // Francia
  {
    id: 'fr-hostel',
    country: 'fr',
    type: 'hostel',
    name: 'Hostel Paris Marais',
    price: 35,
    image: '/images/hostel-paris.jpg',
    description: 'Hostel boutique en el barrio histórico del Marais'
  },
  {
    id: 'fr-hotel-medium',
    country: 'fr',
    type: 'hotel-medium',
    name: 'Hotel Lyon Centre',
    price: 95,
    image: '/images/hotel-lyon.jpg',
    description: 'Hotel confortable cerca de la estación'
  },
  {
    id: 'fr-hotel-luxury',
    country: 'fr',
    type: 'hotel-luxury',
    name: 'Hotel Nice Riviera',
    price: 220,
    image: '/images/hotel-nice.jpg',
    description: 'Hotel de lujo con vista al mar Mediterráneo'
  },
  // Andorra
  {
    id: 'ad-hostel',
    country: 'ad',
    type: 'hostel',
    name: 'Mountain Hostel Andorra',
    price: 30,
    image: '/images/hostel-andorra.jpg',
    description: 'Hostel acogedor en las montañas'
  },
  {
    id: 'ad-hotel-medium',
    country: 'ad',
    type: 'hotel-medium',
    name: 'Hotel Andorra Center',
    price: 75,
    image: '/images/hotel-andorra-center.jpg',
    description: 'Hotel céntrico con vistas a las montañas'
  },
  {
    id: 'ad-hotel-luxury',
    country: 'ad',
    type: 'hotel-luxury',
    name: 'Spa Resort Andorra',
    price: 160,
    image: '/images/spa-andorra.jpg',
    description: 'Resort de lujo con spa y actividades de montaña'
  }
]

export const meals: Meal[] = [
  // España
  { id: 'es-low', country: 'es', level: 'low', name: 'Comida económica', price: 12, description: 'Menú del día, tapas y comida casera' },
  { id: 'es-medium', country: 'es', level: 'medium', name: 'Restaurante medio', price: 25, description: 'Restaurantes locales con buena calidad' },
  { id: 'es-high', country: 'es', level: 'high', name: 'Alta gastronomía', price: 45, description: 'Restaurantes gourmet y cocina de autor' },
  // Francia
  { id: 'fr-low', country: 'fr', level: 'low', name: 'Bistrot económico', price: 15, description: 'Cafés, brasseries y comida rápida' },
  { id: 'fr-medium', country: 'fr', level: 'medium', name: 'Restaurante francés', price: 30, description: 'Cocina francesa tradicional' },
  { id: 'fr-high', country: 'fr', level: 'high', name: 'Fine dining', price: 55, description: 'Restaurantes michelin y haute cuisine' },
  // Andorra
  { id: 'ad-low', country: 'ad', level: 'low', name: 'Comida sencilla', price: 10, description: 'Restaurantes locales y comida de montaña' },
  { id: 'ad-medium', country: 'ad', level: 'medium', name: 'Restaurante turístico', price: 22, description: 'Cocina internacional para turistas' },
  { id: 'ad-high', country: 'ad', level: 'high', name: 'Gastronomía alpina', price: 40, description: 'Restaurantes especializados en cocina de montaña' }
]

export const transportation: Transportation[] = [
  // España - Francia
  { id: 'es-fr-flight', from: 'es', to: 'fr', type: 'flight', price: 120, duration: '1h 30min', schedule: '08:00, 14:00, 18:00', company: 'Vueling' },
  { id: 'es-fr-train', from: 'es', to: 'fr', type: 'train', price: 85, duration: '6h 30min', schedule: '09:15, 16:45', company: 'SNCF' },
  { id: 'es-fr-bus', from: 'es', to: 'fr', type: 'bus', price: 45, duration: '8h 15min', schedule: '22:00', company: 'FlixBus' },
  // Francia - España
  { id: 'fr-es-flight', from: 'fr', to: 'es', type: 'flight', price: 110, duration: '1h 25min', schedule: '07:30, 13:30, 19:30', company: 'Air France' },
  { id: 'fr-es-train', from: 'fr', to: 'es', type: 'train', price: 85, duration: '6h 45min', schedule: '08:30, 15:30', company: 'SNCF' },
  { id: 'fr-es-bus', from: 'fr', to: 'es', type: 'bus', price: 40, duration: '8h 30min', schedule: '21:30', company: 'FlixBus' },
  // España - Andorra
  { id: 'es-ad-bus', from: 'es', to: 'ad', type: 'bus', price: 25, duration: '3h 00min', schedule: '09:00, 15:00, 19:00', company: 'Andbus' },
  // Andorra - España
  { id: 'ad-es-bus', from: 'ad', to: 'es', type: 'bus', price: 25, duration: '3h 00min', schedule: '08:00, 14:00, 18:00', company: 'Andbus' },
  // Francia - Andorra
  { id: 'fr-ad-bus', from: 'fr', to: 'ad', type: 'bus', price: 30, duration: '3h 30min', schedule: '10:00, 16:00', company: 'Eurolines' },
  // Andorra - Francia
  { id: 'ad-fr-bus', from: 'ad', to: 'fr', type: 'bus', price: 30, duration: '3h 30min', schedule: '09:30, 15:30', company: 'Eurolines' }
] 