'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { countries, accommodations, meals, transportation, type Accommodation, type Meal, type Transportation } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { 
  ArrowLeft, 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  Euro, 
  MapPin,
  Train,
  Bus,
  Building,
  Home,
  Crown
} from 'lucide-react'
import Link from 'next/link'

interface SelectedItem {
  id: string
  type: 'accommodation' | 'meal' | 'transportation'
  name: string
  price: number
  quantity: number
}

export default function CalculatorPage() {
  const [budget, setBudget] = useState<number>(1000)
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [originCountry, setOriginCountry] = useState<string>('')

  const totalSpent = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const remainingBudget = budget - totalSpent

  const addItem = (item: Accommodation | Meal | Transportation, type: 'accommodation' | 'meal' | 'transportation') => {
    const existingItem = selectedItems.find(selected => selected.id === item.id)
    
    // Generate appropriate name based on item type
    let itemName: string
    if (type === 'transportation') {
      const transport = item as Transportation
      itemName = `${transport.company} - ${transport.type} (${transport.from} → ${transport.to})`
    } else {
      const namedItem = item as Accommodation | Meal
      itemName = namedItem.name
    }
    
    if (existingItem) {
      setSelectedItems(prev => 
        prev.map(selected => 
          selected.id === item.id 
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        )
      )
    } else {
      setSelectedItems(prev => [...prev, {
        id: item.id,
        type,
        name: itemName,
        price: item.price,
        quantity: 1
      }])
    }
  }

  const removeItem = (id: string) => {
    setSelectedItems(prev => prev.filter(item => item.id !== id))
  }

  const getItemQuantity = (itemId: string) => {
    const item = selectedItems.find(selected => selected.id === itemId)
    return item ? item.quantity : 0
  }

  const getIconForAccommodationType = (type: string) => {
    switch (type) {
      case 'hostel': return <Home className="h-5 w-5" />
      case 'hotel-medium': return <Building className="h-5 w-5" />
      case 'hotel-luxury': return <Crown className="h-5 w-5" />
      default: return <Hotel className="h-5 w-5" />
    }
  }

  const getIconForTransportationType = (type: string) => {
    switch (type) {
      case 'flight': return <Plane className="h-5 w-5" />
      case 'train': return <Train className="h-5 w-5" />
      case 'bus': return <Bus className="h-5 w-5" />
      default: return <Plane className="h-5 w-5" />
    }
  }

  const getColorForMealLevel = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-50 border-green-200'
      case 'medium': return 'bg-yellow-50 border-yellow-200'
      case 'high': return 'bg-red-50 border-red-200'
      default: return 'bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Volver</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">EuroTravel</span>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Budget Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-2 border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-blue-600" />
                    <span>Tu Presupuesto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Presupuesto inicial
                    </label>
                    <Input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      placeholder="1000"
                      className="text-lg"
                    />
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Presupuesto:</span>
                      <span className="font-medium">{formatCurrency(budget)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Gastado:</span>
                      <span className="font-medium text-red-600">-{formatCurrency(totalSpent)}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Restante:</span>
                        <span className={`font-bold text-lg ${remainingBudget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(remainingBudget)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Items Summary */}
                  {selectedItems.length > 0 && (
                    <div className="pt-4 border-t">
                      <h4 className="font-medium text-gray-900 mb-2">Elementos seleccionados:</h4>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {selectedItems.map(item => (
                          <div key={item.id} className="flex items-center justify-between text-sm bg-white rounded-lg p-2">
                            <div>
                              <span className="font-medium">{item.name}</span>
                              <span className="text-gray-500 ml-1">x{item.quantity}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 text-xs hover:cursor-pointer"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Country Selection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>Selecciona tu destino</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">País de origen</label>
                  <select
                    value={originCountry}
                    onChange={(e) => setOriginCountry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecciona origen</option>
                    {countries.map(country => (
                      <option key={country.id} value={country.id}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">País de destino</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecciona destino</option>
                    {countries.map(country => (
                      <option key={country.id} value={country.id}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.section>

            {/* Transportation */}
            {originCountry && selectedCountry && originCountry !== selectedCountry && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-blue-600" />
                  <span>Transporte</span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {transportation
                    .filter(t => t.from === originCountry && t.to === selectedCountry)
                    .map(transport => {
                      const quantity = getItemQuantity(transport.id)
                      return (
                        <Card key={transport.id} className="cursor-pointer hover:shadow-lg transition-all relative">
                          {quantity > 0 && (
                            <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-10">
                              {quantity}
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {getIconForTransportationType(transport.type)}
                                <span className="capitalize">{transport.type}</span>
                              </div>
                              <span className="text-blue-600 font-bold">{formatCurrency(transport.price)}</span>
                            </CardTitle>
                            <CardDescription>
                              {transport.company} • {transport.duration}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">Horarios: {transport.schedule}</p>
                            <Button 
                              onClick={() => addItem(transport, 'transportation')}
                              variant="primary" 
                              className="w-full"
                            >
                              {quantity > 0 ? `Añadir otra (${quantity})` : 'Seleccionar'}
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </motion.section>
            )}

            {/* Accommodation */}
            {selectedCountry && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <Hotel className="h-6 w-6 text-blue-600" />
                  <span>Alojamiento</span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {accommodations
                    .filter(acc => acc.country === selectedCountry)
                    .map(accommodation => {
                      const quantity = getItemQuantity(accommodation.id)
                      return (
                        <Card key={accommodation.id} className="cursor-pointer hover:shadow-lg transition-all relative">
                          {quantity > 0 && (
                            <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-10">
                              {quantity}
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {getIconForAccommodationType(accommodation.type)}
                                <span className="text-sm">{accommodation.name}</span>
                              </div>
                              <span className="text-blue-600 font-bold">{formatCurrency(accommodation.price)}/noche</span>
                            </CardTitle>
                            <CardDescription>
                              {accommodation.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button 
                              onClick={() => addItem(accommodation, 'accommodation')}
                              variant="primary" 
                              className="w-full"
                            >
                              {quantity > 0 ? `Añadir noches (${quantity})` : 'Seleccionar'}
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </motion.section>
            )}

            {/* Meals */}
            {selectedCountry && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <UtensilsCrossed className="h-6 w-6 text-blue-600" />
                  <span>Comidas</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {meals
                    .filter(meal => meal.country === selectedCountry)
                    .map(meal => {
                      const quantity = getItemQuantity(meal.id)
                      return (
                        <Card key={meal.id} className={`cursor-pointer hover:shadow-lg transition-all relative ${getColorForMealLevel(meal.level)}`}>
                          {quantity > 0 && (
                            <div className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-10">
                              {quantity}
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span className="capitalize">{meal.level}</span>
                              <span className="text-blue-600 font-bold">{formatCurrency(meal.price)}/día</span>
                            </CardTitle>
                            <CardDescription>
                              {meal.name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">{meal.description}</p>
                            <Button 
                              onClick={() => addItem(meal, 'meal')}
                              variant="primary" 
                              className="w-full"
                            >
                              {quantity > 0 ? `Añadir días (${quantity})` : 'Seleccionar'}
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 